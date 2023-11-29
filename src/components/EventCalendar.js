import React from 'react';
import { eventTypes } from '../eventTypes';
import Icon from '@mdi/react';
import { mdiCheck, mdiChevronLeft, mdiChevronRight } from '@mdi/js';

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
                  <Icon path={mdiCheck} size={0.5} color={type.title === 'Public holidays' ? 'black' : 'white'} />
                </span>
                {type.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow ml-4">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-gradient-to-t from-orange-500/70 to-orange-500/50 text-sm text-white rounded px-4 py-2">Create new event</button>
            <h2 className="text-2xl">October 2023</h2>
            <div className="flex">
              <button className="bg-gradient-to-t from-white via-gray-500/20 to-white border border-gray-200 rounded-md p-2 mr-2">
                <Icon path={mdiChevronLeft} size={1} color="orange" />
              </button>
              <button className="bg-gradient-to-t from-white via-gray-500/20 to-white border border-gray-200 rounded-md p-2 mr-2">
                <Icon path={mdiChevronRight} size={1} color="orange" />
              </button>
            </div>
          </div>
          <p>Calendar</p>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;