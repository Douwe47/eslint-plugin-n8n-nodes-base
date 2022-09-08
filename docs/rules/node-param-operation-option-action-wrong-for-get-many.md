[//]: # "File generated from a template. Do not edit this file directly."

# node-param-operation-option-action-wrong-for-get-many

The property `action` in a Get Many option in an Operation node parameter must start with `Get many`.

📋 This rule is part of the `plugin:n8n-nodes-base/nodes` config.

🔧 Run ESLint with `--fix` option to autofix the issue flagged by this rule.

## Examples

❌ Example of **incorrect** code:

```js
const test = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ["entity"],
		},
	},
	default: "getAll",
	options: [
		{
			name: "Get All",
			value: "getAll",
			description: "Retrieve all entities",
			action: "Get all entities",
		},
	],
};

const test = {
	displayName: "Action",
	name: "action",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ["entity"],
		},
	},
	default: "getAll",
	options: [
		{
			name: "Get All",
			value: "getAll",
			description: "Retrieve all entities",
			action: "Get all entities",
		},
	],
};
```

✅ Example of **correct** code:

```js
const test = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ["entity"],
		},
	},
	default: "getAll",
	options: [
		{
			name: "Get Many",
			value: "getAll",
			description: "Retrieve all entities",
			action: "Get many entities",
		},
	],
};

const test = {
	displayName: "Action",
	name: "action",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ["entity"],
		},
	},
	default: "getAll",
	options: [
		{
			name: "Get Many",
			value: "getAll",
			description: "Retrieve many entities",
			action: "Get many entities",
		},
	],
};
```

## Links

- [Rule source](../../lib/rules/node-param-operation-option-action-wrong-for-get-many.ts)
- [Test source](../../tests/node-param-operation-option-action-wrong-for-get-many.test.ts)