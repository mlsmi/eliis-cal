import React from 'react';
import Icon from '@mdi/react';
import { mdiBell, mdiBullhorn, mdiMessage, mdiCalendar, mdiCloud, mdiChevronDown } from '@mdi/js';
import logo from '../logo.png';
import { userData } from '../userData';
import { notificationsData } from '../notificationsData';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 navbar border-b border-gray h-16">
      <div>
        <img src={logo} alt="logo" className="w-24 h-8" />
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="bg-orange-500/60 rounded-full p-2 relative">
            <Icon path={mdiBell} size={1} color="white" />
            <div className="nav-notification absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              <span>{notificationsData.bell}</span>
            </div>
          </div>
          <div className="bg-orange-500/60 rounded-full p-2">
            <Icon path={mdiBullhorn} size={1} color="white" />
          </div>
          <div className="bg-orange-500/60 rounded-full p-2 relative">
            <Icon path={mdiMessage} size={1} color="white" />
            <div className="nav-notification absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              <span>{notificationsData.message}</span>
            </div>
          </div>
          <div className="bg-orange-500/60 rounded-full p-2 relative">
            <Icon path={mdiCalendar} size={1} color="white" />
            <div className="nav-notification absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              <span>{notificationsData.calendar}</span>
            </div>
          </div>
          <div className="bg-orange-500/60 rounded-full p-2">
            <Icon path={mdiCloud} size={1} color="white" />
          </div>
        </div>
        <div className="flex flex-col items-start relative vertical-border pl-6">
          <span className="nav-user text-sm">{userData.firstname} {userData.lastname}</span>
          <span className="nav-kindergarten text-sm">{userData.kindergarten}</span>
        </div>
        <div className="w-12 h-12 nav-profilebubble rounded-full text-white text-lg flex items-center justify-center relative">
          <span>EÕ</span>
          <div className="absolute bottom-0 right-0 -mb-1 -mr-1 bg-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-orange-500/60">
            <Icon path={mdiChevronDown} size={1} color="rgba(237, 137, 54, 0.6)" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;