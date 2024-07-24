// import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { useUserAnswersStore } from '../store/userAnswersStore.ts';
import { TIMER_SELECTED } from './constants/constants.ts';

import { Timer } from './Timer.tsx';

interface TimerContainerProps {
  onSkipQuestion: () => void;
}

export const TimerContainer = ({ onSkipQuestion }: TimerContainerProps) => {
  const newTimer = useUserAnswersStore(state => state.timer);
  let isAnswered: boolean = false;

  if (newTimer === TIMER_SELECTED) isAnswered = true;

  return (
    <>
      <Timer
        key={newTimer}
        onTimeout={onSkipQuestion}
        timeout={newTimer}
        className={`${isAnswered ? 'answered' : ''}`}
      />
    </>
  );
};
