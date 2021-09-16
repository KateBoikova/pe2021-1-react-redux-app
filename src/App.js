import './App.css';
import ToDoPage from './pages/ToDoPage';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import HomePage from './pages/HomePage';

const App = () => <ToDoPage />;

// const UserSagaPage = lazy(() => import('./pages/UserSagaPage'));
// const CounterH = lazy(() => import('./components/CounterH'));

// function App () {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/user saga page'>User saga page</Link>
//           </li>
//           <li>
//             <Link to='/counterH'>Counter</Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route exact path='/' component={HomePage}></Route>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path='/user saga page' component={UserSagaPage}></Route>
//           <Route path='/counterH' component={CounterH}></Route>
//         </Suspense>
//       </Switch>
//     </Router>
//   );
// }

export default App;
