import './App.css';
import { Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';
import StudyProductList from './components/StudyProductList';
import Login from './components/Login';
import Home from './components/Home';
import MyGroup from './components/MyGroup';
import StudyProduct from './components/StudyProduct';
import BasicHeader from './components/BasicHeader';
import GroupForm from './components/GroupForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <BasicHeader />
          <Home />
          <StudyProductList />
          <GroupList />
        </>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/my-group' element={<MyGroup />} />
      <Route path='/study-products/:studyProductId' element={<StudyProduct />} />
      <Route path='/create-group' element={<GroupForm />} />
    </Routes>
  );
}

export default App;
