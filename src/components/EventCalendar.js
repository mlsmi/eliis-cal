import React from 'react';
import { eventTypes } from '../eventTypes';
import Icon from '@mdi/react';
import { mdiCheck, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function EventCalendar() {
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
        <div className="flex-grow md:ml-4">
          <FullCalendar 
            plugins={[dayGridPlugin]} 
            initialView="dayGridMonth" 
            customButtons={{
              createEventButton: {
                text: 'Create new event',
                click: function() {
                  alert('Clicked the custom button!');
                }
              }
            }} 
            headerToolbar={{
              left: 'createEventButton',
              center: 'title',
              right: 'prev,next today'
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;