		var GameScene = Class.create( Scene, {
			initialize: function() {
				Scene.apply( this, arguments );
				var map = new Map( 16, 16 );
				map.image = game.assets['enchant.js/images/map0.gif'];
				map.loadData([
					[3, 3, 3, 3, 3, 3, 3],
					[3, 0, 0, 0, 0, 0, 3],
					[3, 0, 0, 0, 0, 0, 3],
					[3, 0, 0, 0, 0, 0, 3],
					[3, 0, 0, 0, 0, 0, 3],
					[3, 0, 0, 0, 0, 0, 3],
					[3, 3, 3, 3, 3, 3, 3]
					]);
				this.addChild( map );
				this.inputManager = new InputManager();
				this.addEventListener( 'touchmove', bind( this.inputManager.onTouchMove, this.inputManager ) );
				this.addEventListener( 'touchstart', bind( this.inputManager.onTouchStart, this.inputManager ) );
				this.addEventListener( 'touchend', bind( this.inputManager.onTouchEnd, this.inputManager ) );
				var player = new Player();
				this.inputManager.addReceiver( player );
			}
		});
