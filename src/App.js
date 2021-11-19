
import './App.css';
import Header from "./components/Header"
import PersonList from "./components/PersonList"

var http = require("http");
setInterval(function() {
    http.get("https://tech-blog-app-brandon.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

function App() {
  return (<div>
    <Header />
    <PersonList />
    </div>
  );
}

export default App;
