import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:subject" element={<Question />} />
        </Routes>
    );
}

export default Router;
