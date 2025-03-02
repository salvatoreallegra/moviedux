import './App.css';
import './styles.css'; // Importing the styles.css file
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>
      <footer className="footer">
        <p className='footer'>Footer</p>
      </footer>
    </div>
  );
}

export default App;
