// 等待DOM加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    const controller = new Controller(game);
}); 