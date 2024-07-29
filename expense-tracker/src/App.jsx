import "./App.css";

// Imported Router, Route, Routes components from 'react-router-dom'
//BrowserRouter is a type of router that uses the HTML5 history API to keep the UI in sync with the URL in the browser address bar.
//Route is a crucial building block of React Router. It renders some UI if the current location matches the route’s path.
/* Routes is a container for multiple Route components. 
It's typically used to define the routing configuration of your application by providing a collection of routes. */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* When the current location matches the specified path, the component associated with our route will be rendered. */}
          {/* This is a boolean prop of the <Route> component. When set to true, it ensures that the route matches the URL exactly. 
              In other words, the route will only be active if the URL matches the path exactly, without any additional segments. */}
          {/* If the route matches, <Auth /> component will be re-rendered*/}
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;