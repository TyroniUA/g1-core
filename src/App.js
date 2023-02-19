import logo from './logo.svg';
import './app.scss';
import Navbar from './components/navbar';
import Routes from './routes/routes';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
