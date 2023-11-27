import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <Router>
            <StudentForm />
            <p>Student list:</p>
            <StudentList />
            <AboutPage />
            </Router>
        </div>
    );
}

export default App;
