import { create } from 'zustand';
import { TIMER } from '../constants/constants.ts';
import { type UserAnswer, type CorrectPercentage } from '../types.ts';
import { getItemStorage, setItemStorage } from '../utils/localStorage.ts';

interface UserAnswers {
  answers: UserAnswer[];
  timer: number;
  results: CorrectPercentage[];
  addAnswer: (answer: UserAnswer) => void;
  cleanPrevAnswers: (quizId: string) => void;
  changeTimer: (newTimer: number) => void;
  addQuizResult: (result: CorrectPercentage) => void;
}

const savedResults = getItemStorage('results', []);

export const useUserAnswersStore = create<UserAnswers>((set, get) => {
  return {
    answers: [],
    timer: TIMER,
    results: savedResults,
    addAnswer: ({ quizId, answer, isCorrect }) => {
      const answers = get().answers;
      const updatedAnswers = [...answers];

      updatedAnswers.push({ quizId, answer, isCorrect });
      set({ answers: updatedAnswers });
    },
    cleanPrevAnswers: quizId => {
      const answers = get().answers;

      const updatedAnswers = answers.filter(answer => answer.quizId !== quizId);
      set({ answers: updatedAnswers });
    },
    changeTimer: newTimer => set({ timer: newTimer }),
    addQuizResult: ({ quizId, percentage }) => {
      const results = get().results;
      const updatedResults = [...results];

      const quizResultIndex = updatedResults.findIndex(
        result => result.quizId === quizId
      );

      if (quizResultIndex > -1) {
        updatedResults[quizResultIndex] = { quizId, percentage };
      } else {
        updatedResults.push({ quizId, percentage });
      }

      setItemStorage('results', updatedResults);
      set({ results: updatedResults });
    },
  };
});
