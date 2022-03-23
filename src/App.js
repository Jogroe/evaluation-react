import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './composants/Menu';
import { Outlet } from 'react-router-dom';
import { PanierProvider } from './context/panierContext';

function App() {
  return (
    <div className='container'>
      <header className='row'>
        <Menu />
      </header> 
      <main className='row'>
        <PanierProvider>
          <Outlet></Outlet>
        </PanierProvider>
      </main> 
    </div>
  );
}

export default App;
