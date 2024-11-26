// src/contents/Recommend.jsx
import React from 'react';
import MusicPlayerButton from './privateConponents/MusicPlayerButton';
import songNewsPaper from '../music/newspaper.mp3'

function Recommend() {
    return (
        <div>
            <h2>好きなものを勝手に広告する欄</h2>
            <ul>
                <li>ゲーム
                    <ul>
                        <li>reverse1999</li>
                        <li>レゾナンス 無限号列車</li>
                    </ul>
                </li>
                <li>本
                    <ul>
                        <li>サピエンス全史</li>
                        <li>大規模言語モデル入門</li>
                    </ul>
                </li>
                <li>曲
                    <ul>
                        <li>心臓 : TOOBOE<a href='https://www.youtube.com/watch?v=pjkOB8rXs6E'>youtubeリンク</a></li>
                        <li>エビ揉め</li>
                        <li>news paper　 <a href='https://www.music-note.jp'>提供:Music-Note.jp</a><div></div>
                            <MusicPlayerButton songSrc={songNewsPaper} />
                        </li>
                    </ul>
                </li>
                {/* 追加のおすすめをリストに並べる */}
            </ul>
        </div>
    );
}

export default Recommend;
