import React, { useState, useRef } from 'react';

// MusicPlayerButtonコンポーネント
const MusicPlayerButton = ({ songSrc }) => {
    // 音楽が再生中かどうかの状態を管理
    const [isPlaying, setIsPlaying] = useState(false);
    // audio要素のrefを作成
    const audioRef = useRef(null);

    const togglePlayback = () => {
        if (isPlaying) {
            audioRef.current.pause();  // 再生中なら停止
        } else {
            audioRef.current.play();   // 再生中でないなら再生
        }
        setIsPlaying(!isPlaying);    // 再生状態を切り替える
    };

    return (
        <div>
            <button onClick={togglePlayback}>
                {isPlaying ? '停止' : '再生'}
            </button>
            <audio ref={audioRef} src={songSrc} />
        </div>
    );
};

export default MusicPlayerButton;
