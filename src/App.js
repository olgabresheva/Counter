import React, {useState} from 'react';
import './App.css';

function App() {

    const [counterByOne, setCounterByOne] = useState(0);
    const [counterByTen, setCounterByTen] = useState(0);
    const [counterByN, setCounterByN] = useState(0);

    const increaseByOne = () => {
        return setCounterByOne(counterByOne + 1);
    }

    const descreaseByOne = () => {
        return setCounterByOne(counterByOne - 1);
    }

    const increaseByTen = () => {
        return setCounterByTen(counterByTen + 10);
    }

    const descreaseByTen = () => {
        return setCounterByTen(counterByTen - 10);
    }

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const increaseByN = () => {
        return setCounterByN(counterByN + getRandomInt(11));
    }

    const descreaseByN = () => {
        return setCounterByN(counterByN - getRandomInt(11));
    }

    const clearAll = () => {
        setCounterByOne(0);
        setCounterByTen(0);
        setCounterByN(0);
    }

    return (
        <div className="App">

            <p/>
            <button onClick={descreaseByOne}>Minus One</button>
            <span>{counterByOne}</span>
            <button onClick={increaseByOne}>Plus One</button>
            <hr/>
            <button onClick={descreaseByTen}>Minus Ten</button>
            <span>{counterByTen}</span>
            <button onClick={increaseByTen}>Plus Ten</button>
            <hr/>
            <button onClick={descreaseByN}>Minus N</button>
            <span>{counterByN}</span>
            <button onClick={increaseByN}>Plus N</button>
            <hr/>
            <button onClick={clearAll}>Reset</button>
        </div>
    );
}

export default App;
