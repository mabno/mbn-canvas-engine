import './template/styles.css';
import Game from './core/Game';
import AssetsManager from './core/AssetsManager';
import RootNode from './RootNode';

const config = { width: 1080, height: 600 };
const game : Game = new Game(document.querySelector('#canvas'), new RootNode(), config)

game.init = function(){
	AssetsManager.instance.addImage('cursor', require('./assets/cursor.png').default);
	AssetsManager.instance.addImage('player', require('./assets/spritesheet.png').default);
	AssetsManager.instance.addImage('play-button', require('./assets/play.png').default);
	AssetsManager.instance.addImage('floor', require('./assets/floor.png').default);
	AssetsManager.instance.addImage('wall', require('./assets/wall.png').default);
	AssetsManager.instance.addImage('light', require('./assets/light3.png').default);
	AssetsManager.instance.addImage('fire', require('./assets/fire.png').default);
	AssetsManager.instance.addImage('world1', require('./assets/world1.png').default);
	AssetsManager.instance.addImage('worldtest', require('./assets/worldtest.png').default);
	AssetsManager.instance.load();
}
window.addEventListener('DOMContentLoaded', () => {
	game.run()
});