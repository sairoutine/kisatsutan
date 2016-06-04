'use strict';
module.exports = {
	// クエストTOP
	index: function (req, res) {
		var chapter = req.query.chapter;
		return res.view();
	},

	// クエスト実行
	go: function (req, res) {
		return res.json({
			todo: 'go() is not implemented yet!'
		});
	},

	// クエスト一覧
	list: function (req, res) {
		return res.json({
			todo: 'list() is not implemented yet!'
		});
	},
};

