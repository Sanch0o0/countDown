import './App.scss';
import { SuccsessBox } from './components/SuccessBox/SuccessBox';
import { useApi } from './hooks/use-api';
import { CounterPage } from './components/CounterPage/CounterPage';
import { EventsPage } from './components/EventsPage/EventsPage';

function App() {  
  const {
    sending,
    success,
    setSuccess,
    handleEmailData
  } = useApi();

  return (
    <div className='App'>

      {success && <SuccsessBox setSuccess={setSuccess} />}

      <CounterPage sending={sending}  handleEmailData={handleEmailData}/>

      <EventsPage/>

    </div>
  );
}

export default App;
