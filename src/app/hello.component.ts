import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <button *ngIf="!startQuiz" class="color-btn solid blue" (click)="startQuiz = true">Start the Quiz</button>
    <app-question-wrapper *ngIf="startQuiz">
    </app-question-wrapper>
    <footer>By Jefferin Joseph</footer>
  `,
  styles: [`
    h1 { font-family: Lato; }
    footer { font-family: Lato; margin-top: 2rem;}
    .color-btn{
      display: inline-block;
      text-decoration: none;
      margin: 0.2rem 0.1rem;
      padding: 0.6rem 1.1rem;
      background-color: transparent;
      transition: all ease .3s;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }.color-btn *{
      transition: all ease .3s;
    }.color-btn:hover, .color-btn:hover *{
      color: white; 
    }.solid:hover{
      opacity: 0.9;
    }

    .blue{
      border: 1px solid #3498db;
      color: #3498db;
    }.blue:hover{
      background-color: #3498db; 
    }.blue *{
      color: #3498db;
    }
    .solid.blue{
      background-color: #3498db; 
      color: white;
    }
  `]
})
export class HelloComponent  {
  @Input() name: string;
  public startQuiz: boolean = false;
}
