import { useState } from 'react';
import { type UserAnswer, type Question } from '../types.ts';
import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { TIMER, TIMER_SELECTED } from './constants/constants.ts';

interface AnswersProps {
  quizId: string;
  allAnswers: Question;
  onNextQuestion: (obj: UserAnswer) => void;
}

interface AnswerState {
  isAnswered: boolean;
  selectedAnswer: string;
  isCorrect: boolean;
}

export const Answers = ({
  quizId,
  allAnswers,
  onNextQuestion,
}: AnswersProps) => {
  const [answer, setAnswer] = useState<AnswerState>({
    isAnswered: false,
    selectedAnswer: '',
    isCorrect: false,
  });
  const changeTimer = useUserAnswersStore(state => state.changeTimer);

  let classes: string;

  function handleSelect(opt: string) {
    const isCorrect = opt === allAnswers.answer;

    setAnswer({
      isAnswered: true,
      selectedAnswer: opt,
      isCorrect,
    });

    changeTimer(TIMER_SELECTED);
    setTimeout(() => {
      onNextQuestion({ quizId, answer: opt, isCorrect });
      changeTimer(TIMER);
    }, TIMER_SELECTED);
  }

  return (
    <ul className="flex flex-col gap-4">
      {allAnswers.options.map(opt => {
        if (answer.isAnswered) {
          classes =
            opt === allAnswers.answer ? 'bg-emerald-600' : 'bg-slate-800';

          if (answer.selectedAnswer === opt) {
            classes = answer.isCorrect ? 'bg-emerald-600' : 'bg-red-800';
          }
        } else {
          classes = 'bg-primary hover:bg-slate-800 hover:border-primary';
        }

        return (
          <li key={opt}>
            <button
              className={`${classes} rounded-full block w-full py-3 px-4 border-2 border-transparent  duration-300 hover:translate-x-3 lg:text-xl`}
              onClick={() => handleSelect(opt)}
              disabled={answer.isAnswered}
            >
              {opt}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
