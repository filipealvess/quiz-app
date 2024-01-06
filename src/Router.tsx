import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:subject" element={<Question />} />
            <Route path="/resultado/:subject" element={<Result />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default Router;
