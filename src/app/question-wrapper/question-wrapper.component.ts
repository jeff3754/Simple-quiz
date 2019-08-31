import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-wrapper',
  templateUrl: './question-wrapper.component.html',
  styleUrls: ['./question-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionWrapperComponent implements OnInit {
  
  public showFinalScore: boolean = false;
  public question: Question = undefined;

  constructor(private questionService: QuestionService) { }

  public ngOnInit(): void {
    this.next();
  }

  public next(): void {
    if(this.questionService.currentSequence == this.questionService.questions.length) {
      this.showFinalScore = true;
      return;
    }
    this.question = this.questionService
        .getQuestionBySequence(++this.questionService.currentSequence);
  }
  
  public retake(): void {
    this.questionService.score = 0;
    this.questionService.currentSequence = 0;
    this.showFinalScore = false;
    this.next();
  }
}
