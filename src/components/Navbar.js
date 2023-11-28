import React from 'react';
import Icon from '@mdi/react';
import { mdiBell, mdiBullhorn, mdiMessage, mdiCalendar, mdiCloud, mdiChevronDown } from '@mdi/js';
import logo from '../logo.png';
import { userData } from '../userData';
import { notificationsData } from '../notificationsData';

function getInitials(firstname, lastname) {
  return firstname[0] + lastname[0];
}

const navIcons = [
  { icon: mdiBell, notification: notificationsData.bell },
  { icon: mdiBullhorn },
  { icon: mdiMessage, notification: notificationsData.message },
  { icon: mdiCalendar, notification: notificationsData.calendar },
  { icon: mdiCloud },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 navbar border-b border-gray h-16">
      <div>
        <img src={logo} alt="logo" className="w-24 h-8" />
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <div className="flex space-x-1">
          {navIcons.map((navIcon, index) => (
            <div key={index} className="bg-orange-500/60 rounded-full p-2 relative">
              <Icon path={navIcon.icon} size={0.8} color="white" />
              {navIcon.notification && (
                <div className="greenbg absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  <span>{navIcon.notification}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start relative vertical-border pl-4">
          <span className="nav-user text-sm font-bold">{userData.firstname} {userData.lastname}</span>
          <span className="nav-kindergarten text-sm">{userData.kindergarten}</span>
        </div>
        <div className="w-12 h-12 greenbg rounded-full text-white text-lg flex items-center justify-center relative">
          <span>{getInitials(userData.firstname, userData.lastname)}</span>
          <div className="absolute bottom-0 right-0 -mb-1 -mr-1 bg-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-orange-500/60">
            <Icon path={mdiChevronDown} size={1} color="rgba(237, 137, 54, 0.6)" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;