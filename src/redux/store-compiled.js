'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

function counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DESC':
			return state - 1;
		default:
			return state;
	}
}
var store = (0, _redux.createStore)(counter);
store.subscribe(function () {
	return console.log(store.getState());
});
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DESC' });
exports.default = store;

//# sourceMappingURL=store-compiled.js.map
