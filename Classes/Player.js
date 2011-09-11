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
