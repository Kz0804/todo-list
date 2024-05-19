import './App.scss';
import Header from './components/Header';
import Task from './components/Task/Task';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Task />
      </main>
    </div>
  );
}

export default App;
