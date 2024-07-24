import { create } from 'zustand';
import { TIMER } from '../components/constants/constants.ts';
import { type UserAnswer } from '../types.ts';

interface UserAnswers {
  answers: UserAnswer[];
  timer: number;
  addAnswer: (answer: UserAnswer) => void;
  changeTimer: (newTimer: number) => void;
}

export const useUserAnswersStore = create<UserAnswers>((set, get) => {
  return {
    answers: [],
    timer: TIMER,
    addAnswer: ({ quizId, answer, isCorrect }) => {
      const answers = get().answers;
      const updatedAnswers = [...answers];

      updatedAnswers.push({ quizId, answer, isCorrect });
      set({ answers: updatedAnswers });
    },
    changeTimer: newTimer => set({ timer: newTimer }),
  };
});
