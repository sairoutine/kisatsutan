/* global User, sails */
'use strict';

module.exports = {
	// ゲームTOP
	index: function (req, res) {
		res.view();
	},
	// マイページ
	mypage: function (req, res) {
		// dummy
		var user_id = 1;
		User.findOne({
			id: user_id
		}).exec(function (err, finn){
			if (err) {
				return res.negotiate(err);
			}

			sails.log('Found "%s"', finn);
			return res.view(finn);
		});
	}
};

