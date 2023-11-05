import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListPage from "../pages/ListPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listpage" element={<ListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;