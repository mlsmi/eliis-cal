import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCalendar, mdiFormatListBulleted } from '@mdi/js';

function Events() {
  const navigate = useNavigate();
  const navigateToPage = (slug) => {
    navigate(`/${slug}`);
  }

  const [hoveredItem, setHoveredItem] = useState(null);

  const eventItems = [
    { title: 'Calendar', slug: 'events/calendar', icon: mdiCalendar },
    { title: 'List view', slug: 'events/list', icon: mdiFormatListBulleted },
  ];

  return (
    <div className="flex-grow bg-white p-4">
      <h1 className="text-3xl mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {eventItems.map((item, index) => (
          <div
            key={item.title}
            className="bg-orange-500/50 hover:bg-orange-500/60 shadow hover:shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => navigateToPage(item.slug)}
            onMouseEnter={() => setHoveredItem(item.title)} // Set the hovered item when the mouse enters
            onMouseLeave={() => setHoveredItem(null)} // Clear the hovered item when the mouse leaves
          >
            <div className={`rounded-full p-2 inline-block w-12 h-12 flex items-center justify-center ${hoveredItem === item.title ? 'bg-white' : 'bg-orange-500/60'}`}>
              <Icon 
                path={item.icon} 
                size={1} 
                color={hoveredItem === item.title ? "orange" : "white"} // Change the color based on whether the item is being hovered over
                className={hoveredItem === item.title ? "transform scale-125" : "transform scale-75"}
              />
            </div>
            <span className={`text-md md:text-2xl ${hoveredItem === item.title ? 'font-bold' : 'font-semibold'} mt-1`}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;