# GitStats App

GitStats is a web application that allows users to view their GitHub repositories, utilizing github-api.

## Features

- View GitHub user profile information
- Retrieve user repositories and their details
- Authenticate with GitHub to access private repositories
- Display statistics and insights about user activity on GitHub

## Technologies Used

- Django: Backend framework for API views and handling requests
- Next.js 13: Frontend framework for building interactive user interfaces
- Python 3: Programming language used for the backend
- JavaScript (React): Programming language used for the frontend

## Installation and Setup

### Backend (Django)

1. Ensure that Python 3 is installed on your system.

2. Activate your Python virtual environment.

3. Navigate to the `gitstatsBackend` directory.

4. Install the required Python packages by running the following command:
```
pip install -r requirements.txt
```

5. Start the Django development server by running the following command:
```
python manage.py runserver
```

The backend API will be accessible at `http://localhost:8000`.

### Frontend (Next.js)

1. Navigate to the `gitstatsFrontend` directory.

2. Install the required JavaScript packages using either Yarn or npm:
```
yarn or npm install
```

3. Start the Next.js development server by running the following command:
```
yarn dev or npm start
```

The frontend application will be accessible at `http://localhost:3000`.

## Usage

1. Open your web browser and access the GitStats application at `http://localhost:3000`.

2. Sign in with your GitHub account to authenticate and access your GitHub data.

3. Explore your profile information, repositories, and statistics displayed on the app.

## Contributing

We welcome contributions to the GitStats project. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
