# Task Management Application

This project is a simple task management application built with Angular with the standalone approach. For the module approach, [see the module_version branch](https://github.com/pirichar/AngularTraining/tree/module_version). It allows users to view a list of users, select a user, and see the tasks assigned to that user. All task data is persisted in the browser's `localStorage`.

## Core Features

*   **User List:** Displays a list of mock users.
*   **User Tasks:** Displays the tasks for a selected user, tasks can be added to each users.
*   **Task Management:** Allows adding and removing tasks.
*   **Data Persistence:** Tasks are saved in `localStorage`, so they will be available on subsequent visits.

## Technologies Used

*   [Angular](https://angular.io/)
*   [TypeScript](https://www.typescriptlang.org/)
*   HTML
*   CSS

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm) must be installed on your system.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```

### Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
