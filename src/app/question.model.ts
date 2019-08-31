export class Answer {
  text: string;
  isCorrect: boolean;
}

export class Question {
  text: string;
  options: Answer[];
  sequence: number;
}