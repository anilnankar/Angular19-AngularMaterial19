import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-section',
  imports: [ContentComponent, MatToolbarModule, MatSidenavModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

}
