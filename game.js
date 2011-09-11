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
				this.addEventListener( 'enterframe', bind( this.inputManager.onEnterFrame, this.inputManager ) );
				var player = new Player();
				this.inputManager.addReceiver( player );
			}
		});
		var InputManager = Class.create({
			initialize: function() {
				this.receivers  = new Array();
				this.currentPos = { x : undefined, y : undefined };
				this.tempPos    = { x : undefined, y : undefined };
			},

			addReceiver: function( receiver ) {
				this.receivers.push( receiver );
			},

			onTouchStart: function(e) {
				this.currentPos.x = e.localX;
				this.currentPos.y = e.localY;
				length = this.receivers.length;
				for ( var i = 0; i < length; i++ ){
					this.receivers[i].onTouchStart();
				}
			},

			onTouchMove: function(e) {
				console.log( this.tempPos );
				console.log( this.currentPos );
				//var direction = this.getDirection( e );
				//console.log( direction );
				this.command = this.getDirection( e );
				length = this.receivers.length;
				for ( var i = 0; i < length; i++ ){
					this.receivers[i][this.command]();
				}
			},

			getDirection: function ( e ) {
				this.tempPos.x = e.localX;
				this.tempPos.y = e.localY;
				//右か左
				var dX = this.tempPos.x - this.currentPos.x;
				var dY = - ( this.tempPos.y - this.currentPos.y );
				console.log( "x:" + dX + ",y:" + dY );
				this.currentPos.x = this.tempPos.x;
				this.currentPos.y = this.tempPos.y;
				var direction = dY / dX;
				var isRight = ( dX >= 0 );
				if ( direction <= this.getTangent( -67.5 ) ) {
					return "onMoveToDown";
				} else if ( direction > this.getTangent( -67.5 ) && direction <= this.getTangent( -22.5 ) ) {
					return ( isRight ) ? "onMoveToRightDown" : "onMoveToLeftTop";
				} else if ( direction > this.getTangent( -22.5 ) && direction <= this.getTangent( 22.5 ) ) {
					return ( isRight ) ? "onMoveToRight" : "onMoveToLeft";
				} else if ( direction > this.getTangent( 22.5 ) && direction <= this.getTangent( 67.5 ) ) {
					return ( isRight ) ? "onMoveToRightTop" : "onMoveToLeftDown";
				} else if ( direction > this.getTangent( 67.5 ) ) {
					return "onMoveToTop";
				}
			}, 

			getTangent: function( angle ) {
				return Math.tan( angle / 360 * 2 * 3.14 ); 
			},

			onEnterFrame: function() {
			//frameに入る旅に今の位置を保存して、その位置との差分をみる。
				//this.currentPos = this.tempPos;
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
				console.log( "onMoveToLeft" );
				
			},

			onMoveToRight: function() {
				console.log( "onMoveToRight" );
				
			},

			onMoveToTop: function() {
				console.log( "onMoveToTop" );
			},

			onMoveToDown: function() {
				console.log( "onMoveToDown" );
				
			},
			onMoveToRightDown: function() {
				console.log( "onMoveToRightDown" );
			},
			onMoveToLeftDown: function() {
				console.log( "onMoveToLeftDown" );
			},
			onMoveToRightTop: function() {
				console.log( "onMoveToRightTop" );
			},
			onMoveToLeftTop: function() {
				console.log( "onMoveToLeftTop" );
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
