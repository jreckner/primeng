import { Component, ViewChild } from '@angular/core';
import { PrintJobsService } from '../services/print-jobs.service';
import { Table } from 'primeng/table';

interface PrintJob {
  id?: string;
  name?: string;
  description?: string;
  documentStatus?: string;
}

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css']
})
export class PrimengTableComponent {
  @ViewChild('printjobs') printjobs: Table | undefined;
  tableData: PrintJob[] = [];
  lockedTableData: PrintJob[] = [];

  constructor(private printJobsService: PrintJobsService) {
  }

  ngOnInit() {
    this.printJobsService.getPrintJobs().subscribe((data) => this.tableData = data)
  }

  toggleLock(data: PrintJob, frozen: boolean, index: number) {
    if (frozen) {
      this.tableData = this.lockedTableData.filter((c, i) => i !== index);
      this.tableData.push(data);
    } else {
      this.tableData = this.tableData.filter((c, i) => i !== index);
      this.lockedTableData.push(data);
    }

  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.printjobs!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  clear(table: Table) {
    table.clear();
  }
}
