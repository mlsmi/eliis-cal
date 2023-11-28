import React, { useState } from 'react';
import { menuItems } from '../menuItems';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronDown } from '@mdi/js';

function Sidebar() {
    const [open, setOpen] = useState({});
  
    const handleClick = (index) => {
      setOpen({ ...open, [index]: !open[index] });
    };
  
    return (
      <div className="hidden md:block md:w-72 h-screen px-4 border-r border-gray">
        {menuItems.map((item, index) => (
          <div key={item.title} className="menu-item-gradient p-1 border border-gray rounded-md my-2">
            <div className="flex justify-between items-center" onClick={() => handleClick(index)}>
              <div className="flex items-center">
                <div className="bg-orange-500/60 rounded-md p-2 inline-block mr-2">
                  <Icon path={item.icon} size={0.6} color="white" className="transform scale-125" />
                </div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
              {item.children && (
                <Icon path={open[index] ? mdiChevronDown : mdiChevronRight} size={1} />
              )}
            </div>
            {item.children && open[index] && (
              <div>
                {item.children.map((child) => (
                  <div key={child.title} className="p-2">
                    <span className="text-sm">{child.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

export default Sidebar;