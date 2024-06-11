import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { FC } from "react";

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />

    </Routes>
  )
}

