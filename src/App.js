// // import React from "react";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// // function Index() {
// //   return <h2>Home</h2>;
// // }

// // function About() {
// //   return <h2>About</h2>;
// // }

// // function Users() {
// //   return <h2>Users</h2>;
// // }

// // function AppRouter() {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about/">About</Link>
// //             </li>
// //             <li>
// //               <Link to="/users/">Users</Link>
// //             </li>
// //           </ul>
// //         </nav>

// //         <Route path="/" exact component={Index} />
// //         <Route path="/about/" component={About} />
// //         <Route path="/users/" component={Users} />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default AppRouter;



// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./components/index.js";
import PageNotFound from "./components/404.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;