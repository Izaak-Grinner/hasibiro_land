import { useState, useEffect } from 'react';

const Omikuji = () => {
    const [result, omikujiIsStarted] = useState("");

    useEffect(() => {
    }, [result]);

    const omikuji = [
        "大吉：運だけはよい",
        "中吉：一番になれない半端者",
        "吉：凡庸は必ずしも正解ではない",
        "小吉：向上心のない奴は馬鹿だ",
        "凶：前世の報い",
        "大凶：前前前世からの天罰滞納者",
    ];

    const handleOnClick = () => {
        var index = Math.trunc(Math.random() * omikuji.length);
        omikujiIsStarted(omikuji[index]);
    }


    return (

        <div className='omikuji'>
            <button onClick={handleOnClick}>おみくじ</button>
            <p id="result">{result}</p>
        </div>

    );
};

export default Omikuji;