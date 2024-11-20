import { useState } from 'react';
const Forum = () => {
    const [posts, setPosts] = useState([]); // 投稿内容を配列で管理

    const handleSubmit = (e) => {
        e.preventDefault(); // フォーム送信時のリロードを防止
        const formData = new FormData(e.target);
        const post = Object.fromEntries(formData);
        const date = new Date().toLocaleString(); // 現在の日時を取得

        if (post.penName.trim() && post.content.trim()) {
            setPosts([...posts, { ...post, date }]); // 投稿内容に日時を追加
            e.target.reset(); // フォームをリセット
        } else {
            alert("ペンネームと投稿内容を入力してください！");
        }
    };

    return (
        <div className="bulletin-board">
            <h1>オフライン掲示板</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-left">
                    <input
                        type="text"
                        name="penName"
                        placeholder="ペンネーム"
                        className="pen-name"
                        required
                    />
                    <textarea
                        name="content"
                        placeholder="投稿内容"
                        className="content"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">投稿する</button>
            </form>
            <div className="post-list">
                <h2>投稿されたポスト</h2>
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <div className="post-header">
                            <p><strong>{post.penName}</strong></p>
                            <p className="post-date">{post.date}</p> {/* 投稿日時の表示 */}
                        </div>
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;