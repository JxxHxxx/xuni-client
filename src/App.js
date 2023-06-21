import './App.css';
import { Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import StudyProductList from './components/StudyProductList';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Home />
          <StudyProductList />
          <GroupList />
        </>
      } />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
