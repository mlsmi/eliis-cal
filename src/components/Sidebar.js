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
      <div className="hidden md:block md:w-64 bg-gray-200 h-full">
        {menuItems.map((item, index) => (
          <div key={item.title}>
            <div className="flex justify-between" onClick={() => handleClick(index)}>
              <div className="flex justify-between">
                <Icon path={item.icon} size={1} />
                <span>{item.title}</span>
              </div>
              {item.children && (
                <Icon path={open[index] ? mdiChevronDown : mdiChevronRight} size={1} />
              )}
            </div>
            {item.children && open[index] && (
              <div>
                {item.children.map((child) => (
                  <div key={child.title}>
                    <Icon path={child.icon} size={1} />
                    <span>{child.title}</span>
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