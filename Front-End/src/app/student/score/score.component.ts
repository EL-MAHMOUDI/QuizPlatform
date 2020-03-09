import { Component, OnInit } from '@angular/core';
import { StudentService } from 'app/shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score:number;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    if(this.studentService.answerWithScore){
      this.score = this.studentService.getScore();
    }else{
      this.router.navigateByUrl("/student/profile");
    }
    
  }

}
