#!/usr/bin/perl

use strict;
use warnings;

# Classに分かれたファイルを一つにまとめる。
my $fh;
`rm game.js`;

open $fh, ">>game.js";

print $fh <<"PRE";
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
PRE
my @file_list = `ls Classes`;

for ( @file_list ) {
	print $_;
	my $in;
	open ( $in, "<Classes/$_");
	while ( <$in> ) {
		print $fh $_;
	}
	close ($in);
}

print $fh <<"SUF";
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
SUF

close $fh;
