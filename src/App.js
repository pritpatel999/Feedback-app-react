import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./components/pages/About"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App(){
    return (
        <FeedbackProvider>
            <Router>
                <Header text="FeedBack UI" />
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats />
                            <FeedbackList />
                            <AboutIconLink/>
                        </>
                    }>
                        </Route>
                    <Route path="/about" element={<>
                            <About/>
                        </>}>
                    </Route>
                </Routes>
            </Router>
        </FeedbackProvider>
    )
}
export default App