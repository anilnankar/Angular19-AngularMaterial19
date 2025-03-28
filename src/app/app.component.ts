import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SectionComponent } from './shared/components/section/section.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shoopingcart-app';
}
