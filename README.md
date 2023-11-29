# Event Calendar Application

This is a React application that allows you to create and delete all events on a calendar. The application uses Dexie.js for IndexedDB storage, FullCalendar for the calendar interface, and Tailwind CSS for styling.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm. If not, you can download and install it from [here](https://nodejs.org/en/download/).

## Setting Up Event Calendar Application

To set up Event Calendar Application, follow these steps:

1. Clone the repository:
```
git clone https://github.com/mlsmi/eliis-cal.git
```


2. Navigate into the project directory:
```
cd eliis-cal
```


3. Install the dependencies:
```
npm install
```

## Running Event Calendar Application

To run Event Calendar Application in development mode, follow these steps:

1. Run the following command in your terminal:

```
npm start
```


2. Open your web browser and visit [http://localhost:3000](http://localhost:3000).

The page will reload automatically when you make changes to the code.


3. To add events to the calendar, navigage to /events/calendar and click "Create new event".

4. To remove all events, click on an event in the calendar and click "Delete all events".

## Building Event Calendar Application

To build Event Calendar Application for production, follow these steps:

1. Run the following command in your terminal:

```
npm run build
```

This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

Your app is now ready to be deployed!
