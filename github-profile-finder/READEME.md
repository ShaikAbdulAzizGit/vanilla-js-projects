# GitHub Profile Finder

A simple and interactive **GitHub Profile Finder** built using **HTML, CSS, and JavaScript**.

The project allows users to search for a GitHub username and view basic profile information such as their profile picture, followers, following, and public repositories.

## 🚀 Features

- Search for a GitHub username
- Fetches profile data from the GitHub API
- Displays the user's profile picture
- Displays the user's name or username
- Displays followers count
- Displays following count
- Displays public repository count
- Loading indicator while fetching data
- Simple and clean user interface

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and layout
- **JavaScript** – API requests, DOM manipulation, and displaying results
- **GitHub REST API** – Provides GitHub user profile data

## 📁 Project Structure

```text
github-profile-finder/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ How It Works

1. Enter a GitHub username in the search field.
2. Click the **Search** button.
3. JavaScript prevents the default form submission.
4. A loading message is displayed while the request is being processed.
5. The application sends a request to the GitHub API using the entered username.
6. The API returns the user's profile information.
7. The application displays the user's name, profile picture, followers, following, and public repositories.

## 🔗 API Used

This project uses the **GitHub REST API** to retrieve user information.

The API endpoint used is:

```text
https://api.github.com/users/{username}
```

For example:

```text
https://api.github.com/users/octocat
```

## 🧠 JavaScript Concepts Practiced

This project provides practice with:

- DOM manipulation
- Selecting HTML elements
- Form events
- Event listeners
- `preventDefault()`
- Handling user input
- Fetch API
- Asynchronous JavaScript
- `async/await`
- Working with JSON data
- Template literals
- Conditional expressions
- Creating HTML elements dynamically
- Updating the DOM
- CSS class manipulation

## ⏳ Loading State

When the user submits a search, a loading message is displayed while the GitHub API request is being processed.

After the API response is received, the loading message is hidden and the profile information is displayed.

## 💡 Example

If you search for:

```text
octocat
```

the application fetches the GitHub profile information and displays:

- Profile name
- Profile picture
- Followers
- Following
- Public repositories

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project folder

```bash
cd github-profile-finder
```

### 3. Run the project

Open `index.html` directly in your web browser.

No installation or additional dependencies are required.

> **Note:** An internet connection is required because the application fetches data from the GitHub API.

## 📌 Learning Outcome

This project helped me strengthen my understanding of **JavaScript API integration** by building a real-world application that retrieves and displays data from an external API.

Key areas practiced:

- Working with APIs
- Fetching external data
- Handling asynchronous operations
- Processing JSON responses
- Working with user input
- Dynamically generating HTML
- Updating the DOM
- Managing loading states
- Creating interactive frontend applications

## 🔮 Future Improvements

Some possible improvements for this project:

- Add error handling for invalid usernames
- Display the user's GitHub bio
- Display location and company
- Add a link to the user's GitHub profile
- Display recent repositories
- Display repository languages
- Add follower/following links
- Improve responsive design
- Add a search history feature

## 👨‍💻 Author

**Shaik Abdul Aziz**

Built as part of my **HTML, CSS & JavaScript learning journey**.

---

⭐ If you found this project useful, feel free to check out the repository and explore the code.
