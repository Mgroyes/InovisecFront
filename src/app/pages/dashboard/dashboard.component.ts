import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MapComponent, CaseMarker } from '../../components/map/map.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    MapComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  selectedCase: CaseMarker | null = null;

  onCaseSelected(caseData: CaseMarker): void {

    this.selectedCase = caseData;

  }

  closeCase(): void {

    this.selectedCase = null;

  }

}