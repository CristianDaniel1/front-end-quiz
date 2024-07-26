import { create } from 'zustand';
import { TIMER } from '../constants/constants.ts';
import { type UserAnswer, CorrectPercentage } from '../types.ts';

interface UserAnswers {
  answers: UserAnswer[];
  timer: number;
  results: CorrectPercentage[];
  addAnswer: (answer: UserAnswer) => void;
  changeTimer: (newTimer: number) => void;
  addQuizResult: (result: CorrectPercentage) => void;
}

export const useUserAnswersStore = create<UserAnswers>((set, get) => {
  return {
    answers: [],
    timer: TIMER,
    results: [],
    addAnswer: ({ quizId, answer, isCorrect }) => {
      const answers = get().answers;
      const updatedAnswers = [...answers];

      updatedAnswers.push({ quizId, answer, isCorrect });
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

        console.log(
          updatedResults[quizResultIndex].quizId,
          updatedResults[quizResultIndex].percentage
        );
      } else {
        updatedResults.push({ quizId, percentage });
      }

      updatedResults.push({ quizId, percentage });
      set({ results: updatedResults });
    },
  };
});
