import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EventCalendar from './components/EventCalendar';
import EventsListView from './components/EventsListView';
import Events from './components/Events';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/calendar" element={<EventCalendar />} />
            <Route path="/events/list" element={<EventsListView />} />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;