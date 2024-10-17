import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import Login from "./pages/Login";
import Uipage from "./pages/Uipage";
import Register from "./pages/Register";
import Search2 from "./components/Search2";
import NextPage from "./pages/NextPage";

function App (){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Routing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/uiimg" element={<Uipage/>}/>
            <Route path="/Search2" element={<Search2/>}/>
            <Route path="/nextpage" element={<NextPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;
