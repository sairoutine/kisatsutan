/* global UserQuest, QuestMaster, sails */
'use strict';
module.exports = {
	// クエストTOP
	index: function (req, res) {
		var chapter = req.query.chapter;
		var paragraph;

		var user_id = 1;

		/* TODO: エラー処理
			if (err) {
				return res.negotiate(err);
			}
		*/

		// TODO: 既に chapter があれば実行しない
		// ユーザーが chapter をどこまで進めたか
		UserQuest.find({ user_id: user_id})
		.max('chapter')
		.then(function(results) {
			var record = results[0];
			// TODO: userquestがなければ新規レコード作成

			chapter = record.chapter;

			// 該当 chapter の paragraph を取得
			return UserQuest.findOne({
				user_id: user_id,
				chapter: chapter
			});
		})
		.then(function(record) {
			if(!record) {
				/*
				// 初期値
				var rec = new UserQuest._model({
					user_id: user_id,
					chapter:   1,
					paragraph: 1,
				});
			   */
				paragraph = 1; // 初期値
			}
			else {
				paragraph = record.paragraph;
			}

			// 該当 chapter, paragraph のマスタ取得
			return QuestMaster.findOne({
				chapter:   chapter,
				paragraph: paragraph
			});
		})
		.then(function(record) {
			var chara1 = record.chara1 ? {
				name:  record.chara1,
				mien:  record.mien1,
				serif: record.serif1
			} : null;
			var chara2 = record.chara2 ? {
				name:  record.chara2,
				mien:  record.mien2,
				serif: record.serif2
			} : null;

			return res.view({
				chapter: chapter,
				paragraph: paragraph,
				chara1: chara1,
				chara2: chara2
			});
		});
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

