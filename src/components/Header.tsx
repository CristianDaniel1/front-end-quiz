import { availableQuizzes } from '../data.ts';

export const Header = ({ tech }: { tech: string }) => {
  const quizSelected = availableQuizzes.find(quiz => quiz.quiz === tech);

  return (
    <header className="flex justify-center items-center px-4 sm:px-6 pt-12 pb-8 sm:pb-12 gap-4">
      {tech && (
        <img
          src={quizSelected?.image.icon}
          alt={`${tech} icone`}
          width={100}
          height={100}
          className="max-w-20 sm:max-w-[100px]"
        />
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
        {tech ? `${tech} Quiz` : 'Front-End Quiz!'}
      </h1>
    </header>
  );
};
