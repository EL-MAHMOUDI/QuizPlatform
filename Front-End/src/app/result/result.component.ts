import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from 'app/shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.quizService.score=0;
  }
}
