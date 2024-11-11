// src/contents/Recommend.jsx
import React from 'react';

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
                        <li>心臓 : TOBOE</li>
                        <li>エビ揉め</li>
                    </ul>
                </li>
                {/* 追加のおすすめをリストに並べる */}
            </ul>
        </div>
    );
}

export default Recommend;
