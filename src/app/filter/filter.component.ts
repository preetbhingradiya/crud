import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { stuentData } from './model/studentdata';
import { studetServiceService } from './service/student-service.service';
import { FilterPipe } from './filter.pipe';
import { EducationfilterPipe } from './educationfilter.pipe';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe,EducationfilterPipe],
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  studentFilter:string='all';

  studentEducationFilter:string='education';

  students:stuentData[];
  constructor(private student:studetServiceService){}

  ngOnInit(): void {
      this.students=this.student.users
  }
}
