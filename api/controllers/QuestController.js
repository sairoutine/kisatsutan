/* global UserQuest, QuestMaster, sails */
'use strict';
module.exports = {
	// クエストTOP
	index: function (req, res) {
		var chapter = req.query.chapter;
		var paragraph;

		// TODO:
		var user_id = 1;

		// TODO: ユーザーステータス表示
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
		var chapter   = req.query.chapter;
		var paragraph = req.query.paragraph;

		// TODO: ユーザーステータス表示
		// TODO:
		var user_id = 1;

		var current_chapter, current_paragraph;

		// 実行できる chapter と paragraph かチェック
		UserQuest.find({ user_id: user_id})
		.max('chapter')
		.then(function(results) {
			var record = results[0];
			// TODO: userquestがなければ新規レコード作成

			current_chapter = record.chapter;

			// 該当 chapter の paragraph を取得
			return UserQuest.findOne({
				user_id: user_id,
				chapter: chapter
			});
		})
		.then(function(record) {
			if(!record) {
				current_paragraph = 1; // 初期値
			}
			else {
				current_paragraph = record.paragraph;
			}

			var next_paragraph = current_paragraph + 1;

			if(chapter > current_chapter || (chapter === current_chapter && paragraph > next_paragraph)) {
				// TODO: 不正な chapter, paragraph
			}
			else if(chapter === current_chapter && paragraph === next_paragraph) {
				// 最新のchapter, paragraph を実行したら次のparagraphに更新
				record.paragraph = next_paragraph;

				return record.save();
			}
		}).then(function() {
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

			return res.view('quest/index', {
				chapter: chapter,
				paragraph: paragraph,
				chara1: chara1,
				chara2: chara2
			});
		});


		// TODO:
		// paragraph が終了したかどうかをマスタ見て
		// 終了したら次のchapter のレコードを作る
		// スタミナを消費する
		// スタミナが足りなかったらスタミナ足りないページへ
	},

	// クエスト一覧
	list: function (req, res) {
		return res.json({
			todo: 'list() is not implemented yet!'
		});
	},
};

