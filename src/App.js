import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;