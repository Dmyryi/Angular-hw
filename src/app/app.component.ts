import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCardComponent } from './common-ui/header-card/header-card.component';
import { ReportsService } from './data/services/reports.service';
import { Reports } from './data/interface/reports.interface';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderCardComponent], // Include CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  reportsService = inject(ReportsService);
  reports: Reports[] = [];

  constructor() {
    this.reportsService.getTestAccount().subscribe((response) => {
      this.reports = response.hits.hits.map((hit: any) => ({
        storepointid: hit._source.storepointid,

        date: new Date(hit._source.date).toLocaleString('ua-UA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
      }));
    });
  }

  trackById(index: number, report: Reports): string {
    return report.storepointid;
  }
}
