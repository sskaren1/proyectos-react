import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import Flags from "../pages/Flags"

const Router = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/pokemon" element={<Home/>} />
                <Route path="/flags" element={<Flags/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;