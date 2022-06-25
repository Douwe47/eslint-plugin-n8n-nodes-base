import rule from "../lib/rules/node-param-default-wrong-for-multi-options";
import { ruleTester, getRuleName } from "../lib/ast";
import outdent from "outdent";

ruleTester().run(getRuleName(module), rule, {
	valid: [
		{
			code: outdent`
			const test = {
				displayName: 'Test',
				name: 'test',
				type: 'multiOptions',
				default: [],
			};`,
		},
	],
	invalid: [
		{
			code: outdent`
			const test = {
				displayName: 'Test',
				name: 'test',
				type: 'multiOptions',
				default: 'wrong',
			};`,
			errors: [
				{
					messageId: "setArrayDefault",
				},
			],
			output: outdent`
			const test = {
				displayName: 'Test',
				name: 'test',
				type: 'multiOptions',
				default: [],
			};`,
		},
	],
});
