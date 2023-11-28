import React from 'react';
import { menuItems } from '../menuItems';
import Icon from '@mdi/react';

function EventCalendar() {
  return (
    <div className="flex-grow bg-white p-4">
      <h1 className="text-3xl mb-4">Event Calendar</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menuItems.filter(item => item.title !== 'Dashboard').map((item, index) => (
          <div key={item.title} className="bg-orange-500/40 hover:bg-orange-500/60 border rounded-md p-4 flex flex-col items-center justify-center">
            <div className="bg-orange-500/60 rounded-full p-2 inline-block w-12 h-12 flex items-center justify-center">
              <Icon path={item.icon} size={1} color="white" className="transform scale-125" />
            </div>
            <span className="text-md md:text-2xl font-semibold mt-1">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;