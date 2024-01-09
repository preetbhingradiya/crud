import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './from/from.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'crud';
}
