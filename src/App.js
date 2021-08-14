import logo from './logo.svg';
import './App.css';
import CustTile from './components/CustTile';
import Settings from './view/Settings';
import LeadStatusGroupView from './view/lead-status-group/LeadStatusGroupView';
import FormModal from './components/form-modal/FormModal';

function App() {
  
  return (
    <div className="App">
     <Settings/>
    {/* <LeadStatusGroupView/> */}
    {/* <FormModal/> */}
    </div>
  );
}

export default App;
