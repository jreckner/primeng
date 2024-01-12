import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PrintJobsService {
  data = {
    "content": [
      {
        "id": "189bb57a-49b8-4bdf-b4f3-c7fdd11eb748",
        "name": "readme.txt",
        "title": "readme.txt",
        "description": "",
        "documentStatus": "READY",
        "automaticRelease": true,
        "enablePrintKeep": false,
        "enableAllowLateBindCopies": true,
        "isPrintPolicyEnforced": true,
        "client": {
          "version": "45e27758f0ff50fa87f3656294b904617cfcdfd4",
          "id": null,
          "users": null,
          "mode": "cloud",
          "type": "web"
        },
        "metadata": {
          "pageCount": 1,
          "mimeType": "application/postscript",
          "initialMimeType": "text/plain",
          "initialJobSize": 2338,
          "jobSize": 149154,
          "options": [
            {
              "value": "custom",
              "modification": "disabled",
              "name": "mediaSize"
            },
            {
              "value": "auto",
              "modification": "simple",
              "name": "nUpOrientation"
            },
            {
              "value": "on",
              "modification": "simple",
              "name": "collation"
            },
            {
              "value": "2-hole",
              "modification": "simple",
              "name": "holePunch"
            },
            {
              "value": "false",
              "modification": "simple",
              "name": "color"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "nUp"
            },
            {
              "value": "shortedge",
              "modification": "disabled",
              "name": "duplex"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "copies"
            }
          ]
        },
        "requestedOptions": [],
        "submittedTime": 1705084618746
      },
      {
        "id": "551f968e-b3a4-488e-b680-c1bb7c205102",
        "name": "AnalyticsArchitecture.png",
        "title": "AnalyticsArchitecture.png",
        "description": "",
        "documentStatus": "READY",
        "automaticRelease": true,
        "enablePrintKeep": false,
        "enableAllowLateBindCopies": true,
        "isPrintPolicyEnforced": true,
        "client": {
          "version": "45e27758f0ff50fa87f3656294b904617cfcdfd4",
          "id": null,
          "users": null,
          "mode": "cloud",
          "type": "web"
        },
        "metadata": {
          "pageCount": 1,
          "mimeType": "image/png",
          "initialMimeType": "image/png",
          "initialPageCount": 1,
          "initialJobSize": 128964,
          "jobSize": 129431,
          "options": [
            {
              "value": "1",
              "modification": "simple",
              "name": "copies"
            },
            {
              "value": "shortedge",
              "modification": "disabled",
              "name": "duplex"
            },
            {
              "value": "false",
              "modification": "simple",
              "name": "color"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "nUp"
            },
            {
              "value": "2-hole",
              "modification": "simple",
              "name": "holePunch"
            },
            {
              "value": "auto",
              "modification": "simple",
              "name": "nUpOrientation"
            },
            {
              "value": "on",
              "modification": "simple",
              "name": "collation"
            }
          ]
        },
        "requestedOptions": [],
        "submittedTime": 1705084618746
      },
      {
        "id": "8ca326c0-1cbb-44c2-b209-73680cd7b249",
        "name": "ingress5users.csv",
        "title": "ingress5users.csv",
        "description": "",
        "documentStatus": "READY",
        "automaticRelease": true,
        "enablePrintKeep": false,
        "enableAllowLateBindCopies": true,
        "isPrintPolicyEnforced": true,
        "client": {
          "version": "45e27758f0ff50fa87f3656294b904617cfcdfd4",
          "id": null,
          "users": null,
          "mode": "cloud",
          "type": "web"
        },
        "metadata": {
          "pageCount": 106,
          "mimeType": "application/postscript",
          "initialMimeType": "text/plain",
          "initialJobSize": 340593,
          "jobSize": 9688451,
          "options": [
            {
              "value": "custom",
              "modification": "disabled",
              "name": "mediaSize"
            },
            {
              "value": "on",
              "modification": "simple",
              "name": "collation"
            },
            {
              "value": "2-hole",
              "modification": "simple",
              "name": "holePunch"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "copies"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "nUp"
            },
            {
              "value": "auto",
              "modification": "simple",
              "name": "nUpOrientation"
            },
            {
              "value": "shortedge",
              "modification": "disabled",
              "name": "duplex"
            },
            {
              "value": "false",
              "modification": "simple",
              "name": "color"
            }
          ]
        },
        "requestedOptions": [],
        "submittedTime": 1705084618747
      },
      {
        "id": "539c3b7c-6695-4dd8-869a-cebf33a4dd5a",
        "name": "InspectAndAdaptNotes.pdf",
        "title": "InspectAndAdaptNotes.pdf",
        "description": "",
        "documentStatus": "PROCESSING",
        "automaticRelease": true,
        "enablePrintKeep": false,
        "enableAllowLateBindCopies": true,
        "isPrintPolicyEnforced": true,
        "client": {
          "version": "45e27758f0ff50fa87f3656294b904617cfcdfd4",
          "id": null,
          "users": null,
          "mode": "cloud",
          "type": "web"
        },
        "metadata": {
          "pageCount": 2,
          "mimeType": "application/postscript",
          "initialMimeType": "application/pdf",
          "initialPageCount": 2,
          "initialJobSize": 24340,
          "jobSize": 166825,
          "options": [
            {
              "value": "auto",
              "modification": "simple",
              "name": "nUpOrientation"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "copies"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "nUp"
            },
            {
              "value": "2-hole",
              "modification": "simple",
              "name": "holePunch"
            },
            {
              "value": "false",
              "modification": "simple",
              "name": "color"
            },
            {
              "value": "custom",
              "modification": "disabled",
              "name": "mediaSize"
            },
            {
              "value": "on",
              "modification": "simple",
              "name": "collation"
            },
            {
              "value": "shortedge",
              "modification": "disabled",
              "name": "duplex"
            }
          ]
        },
        "requestedOptions": [],
        "submittedTime": 1705084618747
      },
      {
        "id": "3724f931-108f-4890-8890-18a97e1f874f",
        "name": "BD_iss-reporting-jasper-server-DEV_2023-11-28.xlsx",
        "title": "BD_iss-reporting-jasper-server-DEV_2023-11-28.xlsx",
        "description": "",
        "documentStatus": "READY",
        "automaticRelease": true,
        "enablePrintKeep": false,
        "enableAllowLateBindCopies": true,
        "isPrintPolicyEnforced": true,
        "client": {
          "version": "45e27758f0ff50fa87f3656294b904617cfcdfd4",
          "id": null,
          "users": null,
          "mode": "cloud",
          "type": "web"
        },
        "metadata": {
          "pageCount": 7,
          "mimeType": "application/postscript",
          "initialMimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "initialJobSize": 11337,
          "jobSize": 187660,
          "options": [
            {
              "value": "auto",
              "modification": "simple",
              "name": "nUpOrientation"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "copies"
            },
            {
              "value": "1",
              "modification": "simple",
              "name": "nUp"
            },
            {
              "value": "custom",
              "modification": "disabled",
              "name": "mediaSize"
            },
            {
              "value": "false",
              "modification": "simple",
              "name": "color"
            },
            {
              "value": "2-hole",
              "modification": "simple",
              "name": "holePunch"
            },
            {
              "value": "on",
              "modification": "simple",
              "name": "collation"
            },
            {
              "value": "shortedge",
              "modification": "disabled",
              "name": "duplex"
            }
          ]
        },
        "requestedOptions": [],
        "submittedTime": 1705084618748
      }
    ]
  }

  constructor (private http: HttpClient) {}

  getPrintJobs (): Observable<any> {
    return of(this.data.content)
  }
}
