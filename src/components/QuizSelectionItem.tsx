import { Button } from './ui/Button.tsx';
import { PlayIcon } from './icons/PlayIcon.tsx';
import { RestartIcon } from './icons/RestartIcon.tsx';
import { type AvailableQuizInfo, type CorrectPercentage } from '../types.ts';

interface QuizItemProps {
  onSelectQuiz: (quiz: string) => void;
  quiz: AvailableQuizInfo;
  result?: CorrectPercentage;
}

export const QuizSelectionItem = ({
  onSelectQuiz,
  quiz,
  result,
}: QuizItemProps) => {
  function handleClickQuiz() {
    onSelectQuiz(quiz.quiz);
  }

  let classes = '';
  if (result) {
    classes = 'from-amber-600 to-amber-800';

    if (result.percentage === 100) classes = 'from-amber-400 to-amber-600';

    if (result.percentage >= 60 && result.percentage < 100)
      classes = 'from-gray-400 to-gray-600';
  }

  return (
    <li
      key={quiz.quiz}
      className="bg-slate-900 border-gradient rounded-xl px-6 py-6 w-80 flex flex-col relative"
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
      <div className="mt-auto">
        <Button
          onClick={handleClickQuiz}
          className="flex items-center gap-2 uppercase"
        >
          {result ? (
            <>
              <RestartIcon />
              <span>reiniciar</span>
            </>
          ) : (
            <>
              <PlayIcon />
              <span>Iniciar</span>
            </>
          )}
        </Button>
      </div>
      {result && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-0 w-full bg-gradient-to-r ${classes} -skew-y-6 text-2xl text-slate-950 px-2 py-4 text-center font-medium animate-appear`}
        >
          COMPLETADO {result.percentage}%
        </div>
      )}
    </li>
  );
};
