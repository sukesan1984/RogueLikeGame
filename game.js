(function(){
	function bind(func, scope){
		return function(){
			return func.apply(scope, arguments);
		}
	}
	function initialize(){
		enchant();
		var game = new Game( 150, 150 );
		game.preload('enchant.js/images/map0.gif');
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
		var InputManager = Class.create({
			initialize: function() {
				this.receivers = new Array();
			},

			addReceiver: function( receiver ) {
				this.receivers.push( receiver );
			},

			onTouchStart: function(e) {
				length = this.receivers.length;
				for ( var i = 0; i < length; i++ ){
					this.receivers[i].onTouchStart();
				}
			},

			onTouchMove: function(e) {
			},

			onTouchEnd: function(e) {
				length = this.receivers.length;
				for ( var i = 0; i < length; i++ ){
					this.receivers[i].onTouchEnd();
				}
			}
		});
		var Player = Class.create( Group, {
			initialize: function() {
				Group.apply( this, arguments );
			},

			onTouchEnd: function() {
				console.log( "player touch end" );
			},

			onTouchStart: function() {
				console.log( "player touch start" );
			},

			onMoveToLeft: function() {
				
			},

			onMoveToRight: function() {
				
			},

			onMoveToTop: function() {
				
			},

			onMoveToDown: function() {
				
			}
		});
		window.onload = function(){
			game.onload = function() {
				var gameScene = new GameScene();
				game.pushScene(gameScene);
			}
			game.start();
		}
	}

	window.addEventListener( 'DOMContentLoaded', initialize, false );
})();
