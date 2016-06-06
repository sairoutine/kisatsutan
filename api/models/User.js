'use strict';

// ユーザーテーブル

module.exports = {
	connection: 'mysql1',
	attributes: {
		id: {
			type: 'integer',
			size: 64,
			primaryKey: true,
		},
		name: {
			type: 'string'
		},
	}
};

