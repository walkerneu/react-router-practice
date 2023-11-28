import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage.jsx';
import Nav from '../Nav/Nav.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <Router>
            <Nav />
            <Route exact path="/">
            <StudentForm />
            </Route>
            <Route exact path="/allStudents">
            <p>Student list:</p>
            <StudentList />
            </Route>
            <Route exact path="/about">
            <AboutPage />
            </Route>
            </Router>
        </div>
    );
}

export default App;
