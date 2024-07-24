import { useCallback, useState } from 'react';

import { Question } from './Question.tsx';
import { allQuizzes } from '../data.ts';
import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { type Quiz as QuizType, type UserAnswer } from '../types.ts';
import { QuizResults } from './QuizResults.tsx';

interface QuizProps {
  selectQuiz: string;
  onSelectQuiz: (quiz: string) => void;
}

export const Quiz = ({ selectQuiz, onSelectQuiz }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addAnswer = useUserAnswersStore(state => state.addAnswer);

  const newQuiz: QuizType = allQuizzes.find(
    quiz => quiz.quizId === selectQuiz.toLowerCase()
  )!;

  const handleNextQuestion = useCallback(
    function handleNextQuestion({ quizId, answer, isCorrect }: UserAnswer) {
      addAnswer({ quizId, answer, isCorrect });

      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    },
    [addAnswer]
  );

  const quizLength = newQuiz.questions.length;

  if (currentQuestion === quizLength) {
    return <QuizResults quizId={newQuiz.quizId} onSelect={onSelectQuiz} />;
  }

  return (
    <Question
      newQuiz={newQuiz}
      currentQuestion={currentQuestion}
      onNextQuestion={handleNextQuestion}
      quizCompleted={quizLength}
    />
  );
};
