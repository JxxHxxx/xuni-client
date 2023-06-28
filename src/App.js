import './App.css';
import { Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import StudyProductList from './components/StudyProductList';
import Login from './components/Login';
import Home from './components/Home';
import MyGroup from './components/MyGroup';
import StudyProduct from './components/StudyProduct';
import TopNavigation from './components/TopNavigation';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <TopNavigation />
          <Home />
          <StudyProductList />
          <GroupList />
        </>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/my-group' element={<MyGroup />} />
      <Route path='/study-products/:studyProductId' element={<StudyProduct />} />
    </Routes>
  );
}

export default App;
