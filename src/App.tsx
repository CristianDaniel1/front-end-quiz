import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { QuizSelection } from './components/QuizSelection.tsx';
import { Quiz } from './components/Quiz.tsx';
import { Footer } from './components/Footer.tsx';
import { useUserAnswersStore } from './store/userAnswersStore.ts';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const cleanPrevAnswers = useUserAnswersStore(state => state.cleanPrevAnswers);

  function handleSelectQuiz(quiz: string) {
    setSelectedQuiz(quiz);
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (quiz) cleanPrevAnswers(quiz.toLowerCase());
  }

  return (
    <>
      <Header tech={selectedQuiz} />
      <main className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 py-6 mb-10">
        {!selectedQuiz && <QuizSelection onSelect={handleSelectQuiz} />}
        {selectedQuiz && (
          <Quiz selectQuiz={selectedQuiz} onSelectQuiz={handleSelectQuiz} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
