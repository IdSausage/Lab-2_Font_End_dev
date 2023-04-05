import React from 'react';
import './App.css'
import TodoPages from "./Pages/TodoPages";
import TodayPage from "./Pages/TodayPage";
import HomePage from "./Pages/HomePage";
import Calendar from "./Pages/Calendar";
import { Route , Routes } from 'react-router-dom';

export default function App() {
  return(
    <Routes>
      <Route exect path='/' element={<HomePage />} />
      <Route path='/todo' element={<TodoPages />} />
      <Route path='/today' element={<TodayPage />} />
      <Route path='/calendar' element={<Calendar />} />
    </Routes>
  )
}

