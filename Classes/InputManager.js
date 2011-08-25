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
