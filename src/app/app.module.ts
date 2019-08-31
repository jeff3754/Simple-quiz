import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FinalScoreComponent } from './final-score/final-score.component';
import { QuestionComponent } from './question/question.component';
import { QuestionWrapperComponent } from './question-wrapper/question-wrapper.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    FinalScoreComponent,
    QuestionComponent,
    QuestionWrapperComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
