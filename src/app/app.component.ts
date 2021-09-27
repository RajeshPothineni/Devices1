import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import xml2js from 'xml2js';
export interface devices {
  intervalChannelID: string
  deviceId: string;
  channel: string;
  startTime: Date;
  endTime: Date;
  xml: String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['select', 'deviceId', 'channel', 'startTime', 'endTime'];
  devices: MatTableDataSource<devices>;
  selection = new SelectionModel<devices>(true, []);
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  deviceForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.devices = new MatTableDataSource([]);
    this.devices.filterPredicate = this.customFilterPredicate();
    this.deviceForm = new FormGroup({
      fileName: new FormControl('Choose XML File')
    });
  }
  uploadFileEvt(e: any) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    this.deviceForm.get('fileName').setValue(file.name);
    const reader = new FileReader();
    reader.onload = (evt) => {
      const xmlData: string = (evt as any).target.result;
      //  console.log(xmlData);
      this.parseXML(xmlData)
        .then((data: devices[]) => {
          this.devices = new MatTableDataSource(data);
          this.devices.filterPredicate = this.customFilterPredicate();
        });
    };
    reader.readAsText(file);
  }

  parseXML(xmlData) {
    return new Promise(resolve => {
      let channelsData: devices[] = [];
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(xmlData, "text/xml");
      let channels = xmlDoc.getElementsByTagName("Channel");
      //console.log(channels);
      if (channels) {
        for (let i = 0; i < channels.length; i++) {
          try {
            let intervalChannelID = channels[i].children[0]['attributes'][0].nodeValue;
            let deviceId = intervalChannelID.split(':')[0];
            let channel = intervalChannelID.split(':')[1];
            let startTime = channels[i].children[1].childNodes[1].childNodes[1]['attributes'][0].nodeValue;
            let endTime = channels[i].children[1].childNodes[1].childNodes[1]['attributes'][1].nodeValue;
            channelsData.push({
              intervalChannelID: intervalChannelID,
              deviceId: deviceId,
              channel: channel,
              startTime: startTime,
              endTime: endTime,
              xml: channels[i].outerHTML
            });
          } catch { }
        }
      }
      resolve(channelsData);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.devices.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.devices.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: devices): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.intervalChannelID}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.devices.filter = filterValue.trim().toLowerCase();
    this.selection.clear();
  }

  customFilterPredicate() {
    const deviceFilterPredicate = function (data: devices, filter: string): boolean {
      return data.deviceId.toString().trim().indexOf(filter) !== -1;
    }

    return deviceFilterPredicate;
  }

  exportXML() {
    console.log(this.selection.selected);
    let xmlTitle = '';
    let xmlDoc = '<?xml version="1.0" encoding="UTF-8"?>\n\t<MeterReadingDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\t<ImportExportParameters CreateReadingGroupForRegisterReads="false" CreateResubmitFile="false">\n\t<DataFormat DSTTransitionType="ITRON_Compliant" ReadingTimestampType="Utc"/>\n\t</ImportExportParameters>\n\t<Channels>';
    this.selection.selected.forEach(d => {
      if (xmlTitle.indexOf(d.deviceId) < 0) {
        if (xmlTitle !== '') {
          xmlTitle += '_';
        }
        xmlTitle += d.deviceId;
      }
      xmlDoc += ('\n\t' + d.xml);
    })
    xmlDoc += '\n\t</Channels>\n\t</MeterReadingDocument>';
    // blob text should be in an array
    let fileToExport = new Blob([xmlDoc], { type: "text/xml" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(fileToExport);
    a.target = "_blank";
    a.download = "Channel_" + xmlTitle + ".xml";
    a.click();
  }

}
