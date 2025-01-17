import { useCallback } from 'react';
import { Answers } from './Answers.tsx';
import { TimerContainer } from './timer/TimerContainer.tsx';
import { type UserAnswer, type Quiz } from '../types.ts';

interface QuizProps {
  newQuiz: Quiz;
  currentQuestion: number;
  quizCompleted: number;
  onNextQuestion: (obj: UserAnswer) => void;
}

export const Question = ({
  newQuiz,
  currentQuestion,
  onNextQuestion,
  quizCompleted,
}: QuizProps) => {
  const handleSkipQuestion = useCallback(() => {
    onNextQuestion({
      quizId: newQuiz.quizId,
      answer: 'Não respondida',
      isCorrect: false,
    });
  }, [newQuiz, onNextQuestion]);

  return (
    <div className="bg-primary-dark p-6 sm:p-8 md:p-12 mx-auto max-w-3xl border-gradient">
      <div className="flex gap-4 justify-between items-center">
        <div className="text-sm sm:text-base font-medium">
          Questão {currentQuestion + 1}/{quizCompleted}
        </div>
        <TimerContainer
          key={currentQuestion}
          onSkipQuestion={handleSkipQuestion}
        />
      </div>
      <p className="text-center px-2 sm:px-4 py-4 my-4 text-lg sm:text-xl font-semibold">
        {newQuiz.questions[currentQuestion].question}
      </p>
      <Answers
        key={currentQuestion}
        quizId={newQuiz.quizId}
        allAnswers={newQuiz.questions[currentQuestion]}
        onNextQuestion={onNextQuestion}
      />
    </div>
  );
};
