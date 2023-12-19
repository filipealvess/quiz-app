import {useParams} from 'react-router-dom';

function Question() {
    const {subject} = useParams();

    return (
        <>
            <h1>Question</h1>

            <p>{subject}</p>
        </>
    );
}

export default Question;
