import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'components-update-user',
  standalone: true,
  imports: [CommonModule],
  template:`
  <div >
    <input type="text" placeholder="User">
    <input type="text" placeholder="Email">
  </div>
  `,
})
export class UpdateUSerComponent {



  constructor(){}

}

