import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input() question: Question = undefined;
  @Output() onNextClicked: EventEmitter<void> = new EventEmitter<void>();
  public selectedOption: string;
  public buttonText: string = "Next";

  constructor(private questionService: QuestionService) { }
  
  public next(): void {
    if(this.selectedOption) {
      const answer = this.question.options.find(o => o.isCorrect);
      if(this.selectedOption == answer.text) {
        this.questionService.score = ++this.questionService.score;
      }      
    }

    if(this.question.sequence == this.questionService.questions.length - 1) {
      this.buttonText = "Submit";
    }
    this.selectedOption = undefined;
    this.onNextClicked.emit();
  }
}
