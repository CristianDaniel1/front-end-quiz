export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  quizId: string;
  questions: Question[];
};

export type Answer = {
  answer: string;
  isCorrect: boolean;
};

export type UserAnswer = {
  quizId: string;
} & Answer;
