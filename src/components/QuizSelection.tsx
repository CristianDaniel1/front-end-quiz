import { availableQuizzes } from '../data.ts';
import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { QuizSelectionItem } from './QuizSelectionItem.tsx';

interface QuizSelectionProps {
  onSelect: (quiz: string) => void;
}

export const QuizSelection = ({ onSelect }: QuizSelectionProps) => {
  const results = useUserAnswersStore(state => state.results);

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {availableQuizzes.map(quiz => {
        const existingResult = results.find(
          result => result.quizId === quiz.quiz.toLowerCase()
        );

        return (
          <QuizSelectionItem
            key={quiz.quiz}
            onSelectQuiz={onSelect}
            quiz={quiz}
            result={existingResult}
          />
        );
      })}
    </ul>
  );
};
