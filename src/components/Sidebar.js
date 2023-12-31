import React, { useState } from 'react';
import { menuItems } from '../menuItems';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronDown } from '@mdi/js';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const [open, setOpen] = useState({});
    const location = useLocation();
  
    const handleClick = (index) => {
      setOpen({ ...open, [index]: !open[index] });
    };
  
    return (
      <div className="hidden md:block md:w-72 h-screen px-4 border-r border-gray">
        {menuItems.map((item, index) => (
          <div key={item.title} className="my-2 bg-gray-500/10 rounded-md">
            {!item.children ? (
              <Link to={`/${item.slug}`}>
                <div className="menu-item-gradient p-1 border border-gray rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-orange-500/60 rounded-md p-2 inline-block mr-2">
                        <Icon path={item.icon} size={0.6} color="white" className="transform scale-125" />
                      </div>
                      <span className={`text-sm font-semibold ${(item.slug === '' && location.pathname === '/') || (item.slug !== '' && location.pathname.includes(`/${item.slug}`)) ? 'text-orange-500' : ''}`}>{item.title}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div>
                <div className="menu-item-gradient p-1 border border-gray rounded-md" onClick={() => handleClick(index)}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-orange-500/60 rounded-md p-2 inline-block mr-2">
                        <Icon path={item.icon} size={0.6} color="white" className="transform scale-125" />
                      </div>
                      <span className={`text-sm font-semibold ${location.pathname.includes(`/${item.slug}`) ? 'text-orange-500' : ''}`}>{item.title}</span>
                    </div>
                    <Icon path={open[index] ? mdiChevronDown : mdiChevronRight} size={1} color={item.children.some(child => location.pathname === `/${item.slug}/${child.slug}`) ? 'orange' : 'black'} />
                  </div>
                </div>
                {item.children && open[index] && (
                  <div className="py-1">
                    {item.children.map((child) => (
                      <div key={child.title} className="py-1 ml-3">
                        <Link to={`/${item.slug}/${child.slug}`} className={`text-sm ${location.pathname === `/${item.slug}/${child.slug}` ? 'text-orange-500' : ''}`}>{child.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

export default Sidebar;