# Live User Filter

A simple and interactive **Live User Filter** built using **HTML, CSS, and JavaScript**.

The project fetches user data from the Random User API and allows users to search and filter the displayed users by their **name or location**.

## 🚀 Features

- Fetches user data from an API
- Displays user profile pictures
- Displays user names and locations
- Live search filtering
- Filters results while typing
- Loading message while data is being fetched
- Simple and clean user interface

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and layout
- **JavaScript** – API requests, DOM manipulation, and filtering
- **Random User API** – Provides random user data

## 📁 Project Structure

```text
live-user-filter/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ How It Works

1. The application loads the page and displays a `Loading...` message.
2. JavaScript sends a request to the Random User API.
3. The API returns 50 random users.
4. User information such as name, location, and profile picture is displayed.
5. When the user types in the search box, the application filters the displayed users.
6. Users whose name or location matches the search text remain visible.
7. Users that do not match the search are hidden.

## 🔗 API Used

This project uses the **Random User API**:

```text
https://randomuser.me/api?results=50
```

The API provides information including:

- First name
- Last name
- City
- Country
- Profile picture

## 🧠 JavaScript Concepts Practiced

This project provides practice with:

- DOM manipulation
- Selecting HTML elements
- Event listeners
- Handling user input
- Fetch API
- Asynchronous JavaScript
- `async/await`
- Working with JSON data
- Arrays and objects
- `forEach()`
- Creating HTML elements dynamically
- Template literals
- String methods
- Conditional logic
- CSS class manipulation

## 🔍 Live Filtering

The search input listens for every user input.

The entered text is compared with each user's displayed information. The comparison is case-insensitive, so searches such as:

```text
john
John
JOHN
```

can match the same user.

Users that do not match are hidden from the list.

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project folder

```bash
cd live-user-filter
```

### 3. Run the project

Open `index.html` directly in your web browser.

No installation or additional dependencies are required.

> **Note:** An internet connection is required because the application fetches user data from the Random User API.

## 💡 Example

If the search box contains:

```text
London
```

the application will display users whose information contains `London`.

You can also search by name, for example:

```text
John
```

and only matching users will remain visible.

## 📌 Learning Outcome

This project helped me strengthen my understanding of **JavaScript and API integration** by building an interactive user filtering application.

Key areas practiced:

- Fetching data from an external API
- Working with asynchronous JavaScript
- Processing JSON responses
- Dynamically creating and displaying elements
- Handling real-time user input
- Filtering data
- Manipulating CSS classes through JavaScript
- Building an interactive frontend application

## 🔮 Future Improvements

Some possible improvements for this project:

- Add a "No users found" message
- Add debounce to the search input
- Add pagination or load-more functionality
- Add additional filters such as gender or age
- Add sorting options
- Improve mobile responsiveness
- Add error handling when the API request fails

## 👨‍💻 Author

**Shaik Abdul Aziz**

Built as part of my **HTML, CSS & JavaScript learning journey**.

---

⭐ If you found this project useful, feel free to check out the repository and explore the code.
