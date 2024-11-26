import Omikuji from './game/Omikuji';
import Memo from './game/Memo';

import { useState } from 'react';


const PlayRoom = () => {
    const [selectedGame, setGameConpnents] = useState("nothing");

    const gameComponents = {
        nothing: () => <div></div>,
        omikuji: Omikuji,
        memo: Memo
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

                <option value="memo">メモ</option>
            </select>
            <div style={{ marginTop: "20px" }}></div>
            <CurrentGameComponent />
        </div>
    );
};

export default PlayRoom;