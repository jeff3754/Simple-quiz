import { Injectable } from "@angular/core";
import { Question } from './question.model';

@Injectable({
    providedIn: "root"
})
export class QuestionService {

  public currentSequence: number = 0;
  public score: number = 0;
  public readonly questions: Question[] = [
    {
      text: "Which is the largest country in the world by population?",
      options: [
        { text: "India" , isCorrect: false },
        { text: "USA" , isCorrect: false },
        { text: "China" , isCorrect: true },
        { text: "Russia" , isCorrect: false }
      ],
      sequence: 1
    },
    {
      text: "When did the second world war end?",
      options: [
        { text: "1945" , isCorrect: true },
        { text: "1939" , isCorrect: false },
        { text: "1944" , isCorrect: false },
        { text: "1942" , isCorrect: false }
      ],
      sequence: 2
    },
    {
      text: "Which was the first country to issue paper currency?",
      options: [
        { text: "USA" , isCorrect: false },
        { text: "France" , isCorrect: false },
        { text: "Italy" , isCorrect: false },
        { text: "China" , isCorrect: true }
      ],
      sequence: 3
    },
    {
      text: "Which city hosted the 1996 Summer Olympics?",
      options: [
        { text: "Atlanta" , isCorrect: true },
        { text: "Sydney" , isCorrect: false },
        { text: "Athens" , isCorrect: false },
        { text: "Beijing" , isCorrect: false }
      ],
      sequence: 4
    },
    {
      text: "Who invented telephone?",
      options: [
        { text: "Albert Einstein" , isCorrect: false },
        { text: "Alexander Graham Bell" , isCorrect: true },
        { text: "Isaac Newton" , isCorrect: false },
        { text: "Marie Curie" , isCorrect: false }
      ],
      sequence: 5
    }
  ];

  public getQuestionBySequence(sequence: number): Question {
    return this.questions.find(q => q.sequence == sequence);
  }
}