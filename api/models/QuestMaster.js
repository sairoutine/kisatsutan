'use strict';


// クエストとセリフマスタ

module.exports = {
	connection: 'mysql1',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		// サロゲートキー
		id: {
			type: 'integer',
			size: 64,
			primaryKey: true,
		},
		// 章
		chapter: { // PK1
			type: 'integer',
			size: 32,
		},
		// 節
		paragragh: { // PK2
			type: 'integer',
			size: 32
		},
		// キャラ1 名前
		chara1: {
			type: 'string',
			size: 10,
		},
		// キャラ1 表情
		mien1: {
			type: 'string',
			size: 10,
		},
		// キャラ1 セリフ
		serif1: {
			type: 'string',
			size: 255,
		},
		// キャラ2 名前
		chara2: {
			type: 'string',
			size: 10,
		},
		// キャラ2 表情
		mien2: {
			type: 'string',
			size: 10,
		},
		// キャラ2 セリフ
		serif2: {
			type: 'string',
			size: 255,
		},
	}
};

