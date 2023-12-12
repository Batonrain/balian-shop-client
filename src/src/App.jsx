import './App.scss';
import { useEffect } from 'react';
import { useTelegram } from '@hooks/useTelegram';
import MainPage from '@components/MainPage';

function App() {

  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
