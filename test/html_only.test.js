import { setupTest } from './test-helpers.js';
import { closePage } from 'pentf/browser_utils';
import expect from 'expect';

export const description = 'should load html';

/**
 * @param {import('pentf/runner').TaskConfig} config
 */
export async function run(config) {
	const { page } = await setupTest(config, 'htmlonly');

	expect(await page.content()).toMatch('<h1>Hello wmr</h1>');
	await closePage(page);
}