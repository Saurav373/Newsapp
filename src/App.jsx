import React, { useState } from 'react';
import Page from './Components/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'

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


    return (
        <Router>
            
            <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} height={2} />
            <Navbar color={color} colortheme={colortheme} />
            <Routes>
                <Route exact path="/" element={<Page setProgress={setProgress} key="general" category="general" color={color} />} />

                <Route exact path="/business" element={<Page setProgress={setProgress} key="business" category="business" color={color} />} />

                <Route exact path="/technology" element={<Page setProgress={setProgress} key="technology" category="technology" />} />

                <Route exact path="/science" element={<Page setProgress={setProgress} key="science" category="science" color={color} />} />

                <Route exact path="/sports" element={<Page setProgress={setProgress} key="sports" category="sports" color={color} />} />

                <Route exact path="/entertainment" element={<Page setProgress={setProgress} key="entertainment" category="entertainment" color={color} />} />

                <Route exact path="/health" element={<Page setProgress={setProgress} key="health" category="health" color={color} />} />
            </Routes>
        </Router>
    );
};

export default App;
