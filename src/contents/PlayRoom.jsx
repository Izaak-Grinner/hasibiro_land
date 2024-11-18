import Omikuji from './game/Omikuji';
import Camera from './game/Camera';
import { useState, useEffect } from 'react';


const PlayRoom = () => {
    const [selectedGame, setGameConpnents] = useState("nothing");

    const gameComponents = {
        nothing: () => <div></div>,
        omikuji: Omikuji,
        camara: Camera
    };

    const handleChange = (event) => {
        setGameConpnents(event.target.value);
    }

    const CurrentGameComponent = gameComponents[selectedGame];


    return (
        <div>
            <h2>遊ぼう</h2>
            <select className='gameSelet' value={selectedGame} onChange={handleChange}>
                <option value="nothing">ゲーム選択</option>
                <option value="omikuji">おみくじ</option>
                <option value="camara">カメラ</option>
            </select>
            <div style={{ marginTop: "20px" }}></div>
            <CurrentGameComponent />
        </div>
    );
};

export default PlayRoom;