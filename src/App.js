import './App.css';
import { UserProvider } from './components/UserContext';
import UserProfileComponent from './components/UserProfileComponent';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <span>This simple app display some variable from the React context:</span>

        <UserProfileComponent />
      
      </div>
    </UserProvider>
  );
}

export default App;
