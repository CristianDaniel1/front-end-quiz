export type QuizImage = {
  icon: string;
  alt: string;
};

export type AvailableQuizInfo = {
  quiz: string;
  description: string;
  image: QuizImage;
};

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

export type CorrectPercentage = {
  quizId: string;
  percentage: number;
};
