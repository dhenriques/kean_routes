// import "react-bulma-components/full";
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import OD_Form from "./OD_Form";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// export default function App() {
//   return (
//     <div class="level" className="App">
//       <div class="container">
//         <div class="content">
//           <h1 class="title">Kean Routes</h1>
//         </div>
//       </div>
//       <Router>
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//       </Router>
//     </div>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }




// class Header extends Component {
//   render() {
//     return (
//       <div class="is-fluid has-background-grey-lighter">
//         <section class="hero">
//           <div class="hero-body">
//             <div class="container has-text-centered">
//               <h1 class="title is-spaced">Kean Routes</h1>
//               <h2 class="subtitle">
//                 Compare routes between multiple map applications below.{" "}
//                 <br></br>
//                 Future feature to save records of your routes in development.
//                 Many more features coming soon!
//               </h2>
//               <Router>
//                 <div class="buttons is-centered is-grouped">
//                   <Link to="" class="control button is-primary">
//                     Sign up coming soon
//                   </Link>
//                   <Link to="/about" class="control button is-light">
//                     Find out more
//                   </Link>
//                 </div>
//               </Router>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// class FAQ extends Component {
//   render() {
//     return (
//       <section class="section">
//         <div class="container">
//           <h2 class="title has-text-centered">Frequently Asked Questions</h2>
//           <div class="list is-hoverable">
//             <a class="list-item" href="#">
//               <div class="media">
//                 <div class="media-content">
//                   How is a decentralized network different from the traditional
//                   web?
//                 </div>
//                 <div class="media-right">
//                   <img src="placeholder/icons/chevron-circle-down.svg" alt="" />
//                 </div>
//               </div>
//             </a>
//             <a class="list-item" href="#">
//               <div class="media">
//                 <div class="media-content">
//                   Why shouldn't I just store my data on a Hooli Box?
//                 </div>
//                 <div class="media-right">
//                   <img src="placeholder/icons/chevron-circle-down.svg" alt="" />
//                 </div>
//               </div>
//             </a>
//             <a class="list-item" href="#">
//               <div class="media">
//                 <div class="media-content">What makes PiperNet so safe?</div>
//                 <div class="media-right">
//                   <img src="placeholder/icons/chevron-circle-down.svg" alt="" />
//                 </div>
//               </div>
//             </a>
//             <a class="list-item" href="#">
//               <div class="media">
//                 <div class="media-content">
//                   How long does it take to get a company up and running on
//                   PiperNet?
//                 </div>
//                 <div class="media-right">
//                   <img src="placeholder/icons/chevron-circle-down.svg" alt="" />
//                 </div>
//               </div>
//             </a>
//             <a class="list-item" href="#">
//               <div class="media">
//                 <div class="media-content">
//                   How is a decentralized network different from the traditional
//                   web?
//                 </div>
//                 <div class="media-right">
//                   <img src="placeholder/icons/chevron-circle-down.svg" alt="" />
//                 </div>
//               </div>
//             </a>
//             <a class="list-item" href="#">
//               <div class="media">
//                 <div class="media-content">
//                   Why shouldn't I just store my data on a Hooli Box?
//                 </div>
//                 <div class="media-right">
//                   <img src="placeholder/icons/chevron-circle-down.svg" alt="" />
//                 </div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// class Footer extends Component {
//   render() {
//     return (
//       <footer class="footer has-background-white">
//         <div class="container">
//           <hr />
//           <div class="columns">
//             <div class="level-left">
//               <p class="level-item">
//                 <b>Kean Routes</b>
//               </p>
//               <a
//                 class="level-item"
//                 href="https://github.com/dhenriques/kean_routes"
//               >
//                 GitHub
//               </a>
//               <a
//                 class="level-item"
//                 href="https://www.linkedin.com/in/danielmhenriques/"
//               >
//                 LinkedIn
//               </a>
//               <a class="level-item" href="https://www.kean.edu">
//                 Kean University
//               </a>
//             </div>
//             <div class="column has-text-centered has-text-right-tablet">
//               <p class="subtitle is-6">
//                 &copy; 2019 Kean University - Daniel Henriques. All right
//                 reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// }

// // ReactDOM.render(
// //   <html lang="en">
// //     <head>
// //       <title>Kean Routes</title>
// //       <meta charset="utf-8" />
// //       <meta
// //         name="viewport"
// //         content="width=device-width, initial-scale=1, shrink-to-fit=no"
// //       />
// //       <meta name="description" content="" />
// //       <meta name="author" content="" />
// //       <link rel="stylesheet" href="css/bulma/bulma.min.css" />
// //       <link rel="icon" href="favicon.ico" />
// //     </head>
// //     <Header />
// //     <OD_Form />
// //     <Footer />
// //   </html>,
// //   document.getElementById("root")
// // );




import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

