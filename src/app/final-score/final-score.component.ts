import { Component, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.css']
})
export class FinalScoreComponent {
  
  @Output() onRetakeClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(public questionService: QuestionService) { }

  public retake(): void {
    this.onRetakeClicked.emit();
  }
}
