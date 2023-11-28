import { mdiViewDashboard, mdiBookOpenPageVariant, mdiFormatListChecks, mdiEmail, mdiBullhorn, mdiCalendarClock, mdiCalendarMultiple, mdiImage, mdiCloud, mdiFood, mdiApplication, mdiContacts, mdiFileDocumentCheck, mdiHelpCircle } from '@mdi/js';

export const menuItems = [
  {
    title: 'Dashboard',
    icon: mdiViewDashboard,
  },
  {
    title: 'Diary',
    icon: mdiBookOpenPageVariant,
    children: [
      { title: 'Add entry' },
      { title: 'Read entries' },
    ],
  },
  {
    title: 'Plans',
    icon: mdiFormatListChecks,
    children: [
      { title: 'Plan A' },
      { title: 'Plan B' },
    ],
  },
  {
    title: 'Messages',
    icon: mdiEmail,
  },
  {
    title: 'Announcements',
    icon: mdiBullhorn,
  },
  {
    title: 'Work Schedule',
    icon: mdiCalendarClock,
    children: [
      { title: 'Tasks' },
      { title: 'Add task' },
    ],
  },
  {
    title: 'Events',
    icon: mdiCalendarMultiple,
    children: [
      { title: 'Calendar' },
      { title: 'List view' },
    ],
  },
  {
    title: 'Gallery',
    icon: mdiImage,
  },
  {
    title: 'Documents',
    icon: mdiCloud,
  },
  {
    title: 'Food menu',
    icon: mdiFood,
    children: [
      { title: 'Hot dog' },
      { title: 'Not hot dog' },
    ],
  },
  {
    title: 'Applications',
    icon: mdiApplication,
    children: [
      { title: 'Installed apps' },
      { title: 'All apps' },
    ],
  },
  {
    title: 'Contacts',
    icon: mdiContacts,
    children: [
      { title: 'All contacts' },
      { title: 'Add contact' },
      { title: 'Delete contact' },
    ],
  },
  {
    title: 'Surveys',
    icon: mdiFileDocumentCheck,
    children: [
      { title: 'All surveys' },
      { title: 'Add survey' },
      { title: 'Results' },
    ],
  },
  {
    title: 'Help',
    icon: mdiHelpCircle,
    children: [
      { title: 'FAQ' },
      { title: 'Contact Support' },
    ],
  },
];