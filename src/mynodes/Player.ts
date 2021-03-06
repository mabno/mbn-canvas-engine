import AssetsManager from '../core/AssetsManager';
import Rectangle from '../core/nodes/Rectangle';
import AnimatedSprite from '../core/nodes/AnimatedSprite';
import { Clip } from '../core/interfaces';
import SpriteSheet from '../core/SpriteSheet';
import { isSomeColliding } from '../helpers';


const playerSpriteSheet = new SpriteSheet(require('../anim/player.json'));


class Player extends Rectangle{
	sprite: AnimatedSprite;
	vel:number = 180;
	lastPressed: number = null;
	colliders: Rectangle[] = [];

	public enter() : void {
		console.log('Player enter');
		this.sprite = new AnimatedSprite(
			{x: 0, y: 0},
			{x: 0, y: 0},
			playerSpriteSheet.get([0]),
			AssetsManager.instance.getImage('player'),
			{
				'bottom-walk': playerSpriteSheet.get([1, 0, 2, 0]),
				'left-walk': playerSpriteSheet.get([4, 3, 5, 3]),
				'right-walk': playerSpriteSheet.get([7, 6, 8, 6]),
				'top-walk': playerSpriteSheet.get([10, 9, 11, 9])
			}
		);

		this.addNode(this.sprite);

		this.input.on(this.id, 'keydown', (e) => {
			this.lastPressed = e.which
		});
		this.input.on(this.id, 'keyup', (e) => {
			if(e.which === this.lastPressed){
				this.lastPressed = null;
			}
		});
	}

	public update() : void {
		const { deltaTime } = this.globalState;
		switch(this.lastPressed){
			case 87:
				this.y -= this.vel * deltaTime;
				if(!this.sprite.isActive('top-walk')){
					this.sprite.defaultClip = playerSpriteSheet.get([9]);
					this.sprite.play('top-walk');
				}
				isSomeColliding.call(this, this.colliders, (collider) => {
					this.y = collider.bottom;
					if(!this.sprite.isActive(null)){
						this.sprite.stop();
					}
				});
				break;
			case 83:
				this.y += this.vel * deltaTime;
				if(!this.sprite.isActive('bottom-walk')){
					this.sprite.defaultClip = playerSpriteSheet.get([0]);
					this.sprite.play('bottom-walk');
				}
				isSomeColliding.call(this, this.colliders, (collider) => {
					this.bottom = collider.y;
					if(!this.sprite.isActive(null)){
						this.sprite.stop();
					}
				});
				break;
			case 65:
				this.x -= this.vel * deltaTime;
				if(!this.sprite.isActive('left-walk')){
					this.sprite.defaultClip = playerSpriteSheet.get([3]);
					this.sprite.play('left-walk');
				}
				isSomeColliding.call(this, this.colliders, (collider) => {
					this.x = collider.right;
					if(!this.sprite.isActive(null)){
						this.sprite.stop();
					}
				});
				break;
			case 68:
				this.x += this.vel * deltaTime;
				if(!this.sprite.isActive('right-walk')){
					this.sprite.defaultClip = playerSpriteSheet.get([6]);
					this.sprite.play('right-walk');
				}
				isSomeColliding.call(this, this.colliders, (collider) => {
					this.right = collider.x;
					if(!this.sprite.isActive(null)){
						this.sprite.stop();
					}
				});
				break;

			default:
				if(!this.sprite.isActive(null)){
					this.sprite.stop();
				}
				break;
		}

		this.sprite.centerX = this.centerX;
		this.sprite.bottom = this.bottom;
	}

	public render() : void {
		super.render();
		this.ctx.strokeStyle = 'red';
		this.ctx.lineWidth = 1;
		this.ctx.strokeRect(~~((this.x - this.camera.x)/4)*4, ~~((this.y - this.camera.y)/4)*4, this.width, this.height);
	}

}

export default Player;