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
