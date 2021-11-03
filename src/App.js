import './App.css';
import DaddybitCoin from './Components/daddybitcoin/DaddybitCoin';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
       <Navbar/>
       <Homepage/>
       <DaddybitCoin/>
    </div>
  );
}

export default App;
