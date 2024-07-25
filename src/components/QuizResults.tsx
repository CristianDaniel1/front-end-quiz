import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { Button } from './Button.tsx';
import { resultsCup } from '../data.ts';

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

  let cup: string = resultsCup.bronzeCup;

  if (correctPercentage === 100) cup = resultsCup.goldenCup;

  if (correctPercentage >= 60 && correctPercentage < 100)
    cup = resultsCup.silverCup;

  return (
    <div className="bg-primary-dark py-12 px-4 mx-auto max-w-3xl border-gradient text-center animate-slide-up">
      <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
        Quiz Completado!
      </h2>
      <img
        className="block mx-auto py-3 w-44 sm:w-[200px]"
        src={cup}
        alt="winner cup"
        width={200}
        height={250}
      />
      <p className="text-2xl font-semibold">
        Você obteve uma taxa de {correctPercentage}% de acertos
      </p>
      <Button onClick={handleSelectQuiz}>Fazer outro quiz!</Button>
    </div>
  );
};
