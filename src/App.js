import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';
import './style/App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
