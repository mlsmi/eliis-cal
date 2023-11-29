import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../menuItems';
import Icon from '@mdi/react';
import { userData } from '../userData';

function Dashboard() {
  const navigate = useNavigate();
  const navigateToPage = (slug) => {
    navigate(`/${slug}`);
  }

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="flex-grow bg-white p-4">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <p className="text-md mb-8">Welcome {userData.firstname} 👋<br/>Find everything you need to run {userData.kindergarten} here.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {menuItems.filter(item => item.title !== 'Dashboard').map((item, index) => (
          <div 
            key={item.title} 
            className="bg-orange-500/50 hover:bg-orange-500/60 shadow rounded-md p-4 flex flex-col items-center justify-center cursor-pointer" 
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

export default Dashboard;