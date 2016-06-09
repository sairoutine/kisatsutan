'use strict';

// ユーザーのクエスト進捗管理テーブル

module.exports = {
	connection: 'mysql1',
	attributes: {
		// サロゲートキー
		id: {
			type: 'integer',
			size: 64,
			primaryKey: true,
		},
		user_id: { // PK1
			type: 'integer',
			size: 64,
		},
		// 章
		chapter: { // PK2
			type: 'integer',
			size: 32,
		},
		// 節
		paragraph: {
			type: 'integer',
			size: 32
		},
	}
};

