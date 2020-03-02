import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/shared/services/student.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score:number;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.score = this.studentService.getScore();
  }

}
