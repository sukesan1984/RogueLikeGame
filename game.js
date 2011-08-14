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

		window.onload = function(){
			game.onload = function() {
				var GameScene = new Scene();
				game.pushScene(GameScene);
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
				GameScene.addChild( map );
			}
			game.start();
		}
	}

	window.addEventListener( 'DOMContentLoaded', initialize, false );
})();

