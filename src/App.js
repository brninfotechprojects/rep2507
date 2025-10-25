import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This code is written by Manjunadh on behalf of Himaja</h1>
      <h1>This code is written by Manjunadh</h1>
      <div>
        <h2>LEARN GIT</h2>
        <h3>This is a task to learn clone, push and pull requests</h3>
        <p><b>Local Repository:</b>A local repository is a complete copy of a Git repository stored on your personal computer. It contains all the project files, the entire commit history, and all branches.</p>
        <p><b>Remote Repository:</b>A remote repository is a version of your project that is hosted on the internet or another network. It allows multiple people to collaborate on the same project by sharing their changes.</p>
        <p><b>Git Clone:</b>Creates a local copy of an existing remote repository, including all of its files and history. To start working on a project for the first time or to get a fresh copy of the latest version from the server.</p>
        <p><b>Git Push:</b>Uploads your local commits (changes) to the remote repository. After you have made and committed changes locally, and you want to share them with others by updating the remote repository.</p>
        <p><b>Git Pull:</b>Fetches changes from the remote repository and merges them into your current local branch. To update your local repository with the latest changes that others may have pushed since your last pull or clone.</p>
        <br></br>
        <img src = "https://media.geeksforgeeks.org/wp-content/uploads/20250710172654460719/What-is-Git-repository.webp" alt="git repo"></img>
      </div>
    </div>
  );
}

export default App;
