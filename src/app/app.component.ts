import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormComponent,FilterComponent,RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'crud';
}
