import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import StoreProvider from './contexts/Store';

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
