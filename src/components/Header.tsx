import { availableQuizzes } from '../data.ts';

export const Header = ({ tech }: { tech: string }) => {
  const quizSelected = availableQuizzes.find(quiz => quiz.quiz === tech);

  return (
    <header className="flex justify-center items-center px-6 py-12 gap-4">
      {tech && (
        <img
          src={quizSelected?.image.icon}
          alt={`${tech} icone`}
          width={100}
          height={100}
        />
      )}
      <h1 className="text-6xl font-semibold">
        {tech ? `${tech} Quiz` : 'Front-End Quiz!'}
      </h1>
    </header>
  );
};
