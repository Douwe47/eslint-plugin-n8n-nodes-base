import rule from "../lib/rules/community-package-json-name-missing";
import { ruleTester, getRuleName } from "../lib/ast";
import outdent from "outdent";
import { COMMUNITY_PACKAGE_JSON } from "../lib/constants";

ruleTester().run(getRuleName(module), rule, {
  valid: [
    {
      code: outdent`
			const packageJson = {
				"name": "n8n-nodes-service",
				"version": "0.1.1",
				"description": "Consumes Service API",
				"license": "MIT",
				"author": {
						"name": "John Smith",
						"email": "john.smith@mail.com"
				},
				"repository": {
						"type": "git",
						"url": "git+https://github.com/johnsmith/n8n-nodes-service.git"
				},
				"keywords": [
						"n8n-community-node-package"
				],
				"main": "index.js",
				"scripts": {
						"dev": "npm run watch",
						"build": "tsc && gulp",
						"lint": "tslint -p tsconfig.json -c tslint.json",
						"lintfix": "tslint --fix -p tsconfig.json -c tslint.json",
						"nodelinter": "nodelinter",
						"watch": "tsc --watch",
						"test": "jest"
				},
				"files": [
						"dist"
				],
				"n8n": {
						"credentials": [
								"dist/credentials/ServiceApi.credentials.js"
						],
						"nodes": [
								"dist/nodes/Service/Service.node.js"
						]
				},
				"devDependencies": ${COMMUNITY_PACKAGE_JSON.DEV_DEPENDENCIES},
				"dependencies": {
						"n8n-core": "~0.101.0"
				}
			}`,
    },
  ],
  invalid: [
    {
      code: outdent`
			const packageJson = {
				"_name": "n8n-nodes-service",
				"version": "0.1.1",
				"description": "Consumes Service API",
				"license": "MIT",
				"author": {
						"name": "John Smith",
						"email": "john.smith@mail.com"
				},
				"repository": {
						"type": "git",
						"url": "git+https://github.com/johnsmith/n8n-nodes-service.git"
				},
				"keywords": [
						"n8n-community-node-package"
				],
				"main": "index.js",
				"scripts": {
						"dev": "npm run watch",
						"build": "tsc && gulp",
						"lint": "tslint -p tsconfig.json -c tslint.json",
						"lintfix": "tslint --fix -p tsconfig.json -c tslint.json",
						"nodelinter": "nodelinter",
						"watch": "tsc --watch",
						"test": "jest"
				},
				"files": [
						"dist"
				],
				"n8n": {
						"credentials": [
								"dist/credentials/ServiceApi.credentials.js"
						],
						"nodes": [
								"dist/nodes/Service/Service.node.js"
						]
				},
				"devDependencies": ${COMMUNITY_PACKAGE_JSON.DEV_DEPENDENCIES},
				"dependencies": {
						"n8n-core": "~0.101.0"
				}
			}`,
      errors: [{ messageId: "addName" }],
    },
  ],
});
