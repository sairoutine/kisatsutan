'use strict';

/**
 * Promise キャンセル時に使用する例外オブジェクト。
 */
var CancellationError = function(reason) {
	this.name = "cancellation_error";
	this.reason = reason;
};

// Erro クラスを継承
CancellationError.prototype = new Error();
CancellationError.prototype.constructor = CancellationError;

module.exports = CancellationError;
