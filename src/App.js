import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './composants/Menu';
import { Outlet } from 'react-router-dom';
import { PanierProvider } from './context/panierContext';
import { ProfilProvider } from './context/profilContext';


function App() {
  return (
    <div className='container'>
      <header className='row'>
        <Menu />
      </header> 
      <main className='row'>
        <PanierProvider>
          <ProfilProvider>
            <Outlet></Outlet>
            </ProfilProvider>
        </PanierProvider>
      </main> 
    </div>
  );
}

export default App;
