import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { Button } from './Button.tsx';

interface QuizResultsProps {
  quizId: string;
  onSelect: (quiz: string) => void;
}

export const QuizResults = ({ quizId, onSelect }: QuizResultsProps) => {
  const answers = useUserAnswersStore(state => state.answers);

  const currentQuizAnswers = answers.filter(answer => answer.quizId === quizId);

  const correctAnswers = currentQuizAnswers.filter(
    answer => answer.isCorrect === true
  );

  const correctPercentage =
    (correctAnswers.length / currentQuizAnswers.length) * 100;

  function handleSelectQuiz() {
    onSelect('');
  }

  return (
    <div className="bg-primary-dark py-12 px-4 mx-auto my-10 max-w-3xl border-gradient text-center">
      <h2 className="text-3xl md:text-4xl mb-4">Quiz Completado!</h2>
      <div>Você obteve uma taxa de {correctPercentage}% de acertos</div>

      <Button onClick={handleSelectQuiz}>Fazer outro quiz!</Button>
    </div>
  );
};
