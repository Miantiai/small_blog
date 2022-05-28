import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';
import './style/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="wrapNavbar">
        <Navbar />
      </div>
      <AppRouter />
    </div>
  );
}
