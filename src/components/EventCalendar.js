import React, { useEffect, useState } from 'react';
import { eventTypes } from '../eventTypes';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Dexie from 'dexie';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';

// Initialize the database
const db = new Dexie('EventsDatabase');

// Define the schema
db.version(1).stores({
  events: '++id,title,date,time,eventType'
});

// Open the database
db.open().catch((err) => {
  console.error('Failed to open db: ' + (err.stack || err));
});

function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: new Date(),
    time: '12:00',
    eventType: eventTypes[0].title
  });

  useEffect(() => {
    // Fetch events from the database
    db.events.toArray().then((fetchedEvents) => {
      setEvents(fetchedEvents);
    });
  }, []);

  const handleCreateEvent = () => {
    // Add a new event to the database
    db.events.add({
      ...newEvent,
      extendedProps: {
        eventType: newEvent.eventType
      }
    }).then(() => {
      // Fetch events again after adding
      db.events.toArray().then((newEvents) => {
        setEvents(newEvents);
      });
    });
    setModalIsOpen(false);
    setNewEvent({
      title: '',
      date: new Date(),
      time: '12:00',
      eventType: eventTypes[0].title
    });
  };

  const handleClearEvents = () => {
    // Delete all events from the database
    db.events.clear().then(() => {
      // Fetch events again after deleting
      db.events.toArray().then((newEvents) => {
        setEvents(newEvents);
      });
    });
  };

  function renderEventContent(eventInfo) {
    const eventType = eventTypes.find(type => type.title === eventInfo.event.extendedProps.eventType);
    const backgroundColor = eventType.title === 'Public holidays' ? 'white' : eventType.color;
    const border = eventType.title === 'Public holidays' ? `1px solid ${eventType.color}` : 'none';
    const color = eventType.title === 'Public holidays' ? 'black' : 'white';
  
    return (
      <>
        <div style={{ 
          backgroundColor, 
          border,
          color, 
          width: 'calc(100% - 2px)', 
          height: '100%', 
          marginLeft: '1px', 
          marginRight: '1px', 
          paddingLeft: '4px' 
        }}>
          {eventInfo.event.title}
        </div>
      </>
    );
  }

  return (
    <div className="flex-grow bg-white p-4">
      <h1 className="text-2xl mb-4">Event Calendar</h1>
      <div className="flex md:flex">
        <div className="hidden md:block md:w-52 h-screen border-r border-gray">
          <h3 className="text-sm font-semibold mb-1">TYPES</h3>
          <ul>
            {eventTypes.map((type, index) => (
              <li key={index} className="flex items-center text-sm py-1">
                <span className="inline-block w-5 h-5 rounded-full mr-2 flex items-center justify-center" 
                      style={{
                        backgroundColor: type.title === 'Public holidays' ? 'white' : type.color,
                        border: type.title === 'Public holidays' ? `1px solid ${type.color}` : 'none'
                      }}>
                  <Icon path={mdiCheck} size={0.5} color={type.title === 'Public holidays' ? 'black' : 'white'} />
                </span>
                {type.title}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClearEvents}>Clear Events</button>
        <div className="flex-grow md:ml-4">
        {!modalIsOpen && (
          <FullCalendar 
            plugins={[dayGridPlugin]} 
            initialView="dayGridMonth"
            firstDay={1}
            events={events}
            eventContent={renderEventContent} // Add this line
            customButtons={{
              createEventButton: {
                text: 'Create new event',
                click: () => setModalIsOpen(true)
              }
            }} 
            headerToolbar={{
              left: 'createEventButton',
              center: 'title',
              right: 'prev,next today'
            }} 
          />
        )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modalbg flex items-center justify-center h-screen"
      >
        <form className="relative bg-orange-500/60 p-6 rounded shadow-md w-full md:w-1/2">
          <button 
            onClick={() => setModalIsOpen(false)}
            className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            X
          </button>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Event Title:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="title" type="text" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Event Date:
            </label>
            <DatePicker className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="date" selected={newEvent.date} onChange={date => setNewEvent({...newEvent, date})} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Event Time:
            </label>
            <TimePicker 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="time" 
              value={newEvent.time} 
              onChange={time => {
                const [hours, minutes] = time.split(':');
                const date = new Date(newEvent.date);
                date.setHours(parseInt(hours));
                date.setMinutes(parseInt(minutes));
                setNewEvent({...newEvent, date});
              }}
              clockIcon={null}
              clearIcon={null}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventType">
              Event Type:
            </label>
            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="eventType" value={newEvent.eventType} onChange={e => setNewEvent({...newEvent, eventType: e.target.value})}>
              {eventTypes.map((type, index) => (
                <option key={index} value={type.title}>{type.title}</option>
              ))}
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="button" onClick={handleCreateEvent}>
            Create Event
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default EventCalendar;