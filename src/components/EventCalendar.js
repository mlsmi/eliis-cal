import React from 'react';
import { eventTypes } from '../eventTypes';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

function EventCalendar() {
  return (
    <div className="flex-grow bg-white p-4">
      <h1 className="text-2xl mb-4">Event Calendar</h1>
      <div className="hidden md:flex">
        <div className="md:w-52 h-screen border-r border-gray">
          <h3 className="text-sm font-semibold mb-1">TYPES</h3>
          <ul>
            {eventTypes.map((type, index) => (
              <li key={index} className="flex items-center text-sm py-1">
                <span className="inline-block w-5 h-5 rounded-full mr-2 flex items-center justify-center" 
                      style={{
                        backgroundColor: type.title === 'Public holidays' ? 'white' : type.color,
                        border: type.title === 'Public holidays' ? `1px solid ${type.color}` : 'none'
                      }}>
                  <Icon path={mdiCheck} size={0.5} color={type.title === 'Public holidays' ? type.color : 'white'} />
                </span>
                {type.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow ml-4">
          {/* Main Calendar content goes here */}
          <p>Calendar</p>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;