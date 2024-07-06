import React, { useState } from 'react';
import Page from './Components/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import PageNotFound from './Components/PageNotFound';

const App = () => {

    const [progress, setProgress] = useState(20)
    const [color, setColor] = useState("white")

    const colortheme = () => {
        if (color != "white") {
            setColor("white")
            document.body.style.backgroundColor = "white"

        } else {
            setColor("black")
            document.body.style.backgroundColor = "#121212"
        }
    }

    const NavRoutes = [
        'business',
        'technology',
        'science',
        'sports',
        'entertainment',
        'health'
    ]

    return (
        <Router>
            <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} height={2} />
            <Navbar color={color} colortheme={colortheme} />
            <Routes>
                <Route exact path="/" element={<Page setProgress={setProgress} category="general" color={color} />} />

                {
                    NavRoutes.map((category)=>{
                        return(
                            <Route exact path={`/${category}`} element={<Page setProgress={setProgress} category={category} color={color} key={category} />} />
                        )
                    })
                }
                <Route path='*' element={<PageNotFound  setProgress={setProgress} color={color}/>}/>
            </Routes>
        </Router>
    );
};

export default App;
