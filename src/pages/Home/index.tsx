import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/question">
                Question
            </Link>
        </>
    );
}

export default Home;
