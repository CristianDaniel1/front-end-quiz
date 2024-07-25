import { availableQuizzes } from '../data.ts';
import { Button } from './Button.tsx';

interface QuizSelectionProps {
  onSelect: (quiz: string) => void;
}

export const QuizSelection = ({ onSelect }: QuizSelectionProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {availableQuizzes.map(quiz => (
        <li
          key={quiz.quiz}
          className="bg-slate-900 border-gradient rounded-xl px-6 py-6 w-80"
        >
          <img
            src={quiz.image.icon}
            alt={quiz.image.alt}
            width={100}
            height={100}
            className="mx-auto max-w-20 sm:max-w-[100px]"
          />
          <h2 className="text-2xl font-medium text-center text-sky-400 p-4">
            {quiz.quiz}
          </h2>
          <p className="text-center">{quiz.description}</p>
          <Button onClick={() => onSelect(quiz.quiz)}>Iniciar</Button>
        </li>
      ))}
    </ul>
  );
};
