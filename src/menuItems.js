import { mdiViewDashboard, mdiBookOpenPageVariant, mdiFormatListChecks, mdiEmail, mdiBullhorn, mdiCalendarClock, mdiCalendarMultiple, mdiImage, mdiCloud, mdiFood, mdiApplication, mdiContacts, mdiFileDocumentCheck, mdiHelpCircle } from '@mdi/js';

export const menuItems = [
  {
    title: 'Dashboard',
    slug: '',
    icon: mdiViewDashboard,
  },
  {
    title: 'Diary',
    slug: 'diary',
    icon: mdiBookOpenPageVariant,
    children: [
      { title: 'Add entry', slug: 'add' },
      { title: 'Read entries', slug: 'read'  },
    ],
  },
  {
    title: 'Plans',
    slug: 'plans',
    icon: mdiFormatListChecks,
    children: [
      { title: 'Plan A', slug: 'a' },
      { title: 'Plan B', slug: 'b' },
    ],
  },
  {
    title: 'Messages',
    slug: 'messages',
    icon: mdiEmail,
  },
  {
    title: 'Announcements',
    slug: 'announcements',
    icon: mdiBullhorn,
  },
  {
    title: 'Work Schedule',
    slug: 'work-schedule',
    icon: mdiCalendarClock,
    children: [
      { title: 'Tasks', slug: 'tasks' },
      { title: 'Add task', slug: 'add-task' },
    ],
  },
  {
    title: 'Events',
    slug: 'events',
    icon: mdiCalendarMultiple,
    children: [
      { title: 'Calendar', slug: 'calendar' },
      { title: 'List view', slug: 'list' },
    ],
  },
  {
    title: 'Gallery',
    slug: 'gallery',
    icon: mdiImage,
  },
  {
    title: 'Documents',
    slug: 'documents',
    icon: mdiCloud,
  },
  {
    title: 'Food menu',
    slug: 'food-menu',
    icon: mdiFood,
    children: [
      { title: 'Hot dog', slug: 'hot-dog' },
      { title: 'Not hot dog', slug: 'not-hot-dog' },
    ],
  },
  {
    title: 'Applications',
    slug: 'applications',
    icon: mdiApplication,
    children: [
      { title: 'Installed apps', slug: 'installed' },
      { title: 'All apps', slug: 'all' },
    ],
  },
  {
    title: 'Contacts',
    slug: 'contacts',
    icon: mdiContacts,
    children: [
      { title: 'All contacts', slug: 'all' },
      { title: 'Add contact', slug: 'add' },
      { title: 'Delete contact', slug: 'delete' },
    ],
  },
  {
    title: 'Surveys',
    slug: 'surveys',
    icon: mdiFileDocumentCheck,
    children: [
      { title: 'All surveys', slug: 'all' },
      { title: 'Add survey', slug: 'add' },
      { title: 'Results', slug: 'results' },
    ],
  },
  {
    title: 'Help',
    slug: 'help',
    icon: mdiHelpCircle,
    children: [
      { title: 'FAQ', slug: 'faq' },
      { title: 'Contact Support', slug: 'contact' },
    ],
  },
];