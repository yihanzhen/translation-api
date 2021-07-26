const assert = require('assert');
const {translateText} = require('@gcp-integ-nodejs/translation-app');

describe('integration test', () => {
	it('translates', async function() {
		let resp = await translateText('en-us', 'es-us', 'good');
		assert.equal(resp, 'bien');
	})

	it('handles error', async function() {
		let resp = await translateText('not-lang', 'es-us', 'good');
		assert.equal(resp, '3 INVALID_ARGUMENT: Source language is invalid.' );
	})
})