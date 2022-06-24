# eslint-plugin-n8n-nodes-base

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-n8n-nodes-base.svg?style=flat)](https://npmjs.org/package/eslint-plugin-n8n-nodes-base)
[![Tests](https://github.com/ivov/eslint-plugin-n8n-nodes-base/actions/workflows/checks.yml/badge.svg)](https://github.com/ivov/eslint-plugin-n8n-nodes-base/actions)

ESLint plugin for linting n8n nodes.

## Usage

Install this plugin:

```sh
npm i -D eslint-plugin-n8n-nodes-base
```

Create an ESLint configuration file and decide how to enable rules:

### Enable rules individually

All rules are off by default and must be individually enabled:

```js
{
  plugins: [ "eslint-plugin-n8n-nodes-base" ],
  rules: {
    "n8n-nodes-base/node-param-array-type-assertion": "error",
    "n8n-nodes-base/node-param-default-wrong-for-collection": "error"
  }
}
```

### Enable a set of rules

Config rules are enabled by default and must be individually disabled:

```js
{
  plugins: [ "eslint-plugin-n8n-nodes-base" ],
  extends: [ "plugin:n8n-nodes-base/autofixable-safe" ],
  rules: {
    "n8n-nodes-base/node-param-array-type-assertion": "off",
    "n8n-nodes-base/node-param-default-wrong-for-collection": "off"
  }
}
```

Available configs:

- `all` → all rules
- `autofixable-safe` → rules whose autofix cannot cause breaking changes
- `autofixable-unsafe` → rules whose autofix can cause breaking changes
- `non-autofixable` → rules to be manually fixed

## Ruleset

<!-- RULES_TABLE -->
| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description | Autofixable |
| :-- | :-- | :-- |
| [community-package-json-author-email-still-default](docs/rules/community-package-json-author-email-still-default.md) | The `author.email` value in the `package.json` of a community package must be different from the default value `jan@n8n.io`. | No |
| [community-package-json-author-missing](docs/rules/community-package-json-author-missing.md) | The `author` key must be present in the `package.json` of a community package. | No |
| [community-package-json-author-name-missing](docs/rules/community-package-json-author-name-missing.md) | The `author.name` key must be present in the `package.json` of a community package. | No |
| [community-package-json-author-name-still-default](docs/rules/community-package-json-author-name-still-default.md) | The `author.name` value in the `package.json` of a community package must be different from the default value `Jan Oberhauser`. | No |
| [community-package-json-description-missing](docs/rules/community-package-json-description-missing.md) | The `description` key must be present in the `package.json` of a community package. | No |
| [community-package-json-description-still-default](docs/rules/community-package-json-description-still-default.md) | The `description` value in the `package.json` of a community package must be different from the default value `Example starter module for custom n8n nodes.`. | No |
| [community-package-json-keywords-missing](docs/rules/community-package-json-keywords-missing.md) | The `keywords` key must be present in the `package.json` of a community package. | No |
| [community-package-json-keywords-without-official-tag](docs/rules/community-package-json-keywords-without-official-tag.md) | The `keywords` value in the `package.json` of a community package must be an array containing the value `'n8n-community-node-package'`. | No |
| [community-package-json-license-missing](docs/rules/community-package-json-license-missing.md) | The `description` key must be present in the `package.json` of a community package. | No |
| [community-package-json-license-not-default](docs/rules/community-package-json-license-not-default.md) | The `license` key in the `package.json` of a community package must be different from the default value `MIT`. | No |
| [community-package-json-n8n-missing](docs/rules/community-package-json-n8n-missing.md) | The `description` key must be present in the `package.json` of a community package. | No |
| [community-package-json-n8n-nodes-empty](docs/rules/community-package-json-n8n-nodes-empty.md) | The `n8n.nodes` value in the `package.json` of a community package must contain at least one filepath. | No |
| [community-package-json-n8n-nodes-missing](docs/rules/community-package-json-n8n-nodes-missing.md) | The `n8n.nodes` key must be present in the `package.json` of a community package. | No |
| [community-package-json-name-missing](docs/rules/community-package-json-name-missing.md) | The `name` key must be present in the `package.json` of a community package. | No |
| [community-package-json-name-still-default](docs/rules/community-package-json-name-still-default.md) | The `name` key in the `package.json` of a community package must be different from the default value `n8n-nodes-starter`. | No |
| [community-package-json-repository-url-still-default](docs/rules/community-package-json-repository-url-still-default.md) | The `repository.url` key in the `package.json` of a community package must be different from the default value `git+https://github.com/n8n-io/n8n-nodes-starter.git`. | No |
| [community-package-json-version-missing](docs/rules/community-package-json-version-missing.md) | The `version` key must be present in the `package.json` of a community package. | No |
| [cred-class-field-display-name-miscased](docs/rules/cred-class-field-display-name-miscased.md) | `displayName` field in credential class must be title cased. | Yes, safe |
| [cred-class-field-display-name-missing-api](docs/rules/cred-class-field-display-name-missing-api.md) | `displayName` field in credential class must be end with `API`. | Yes, safe |
| [cred-class-field-display-name-missing-oauth2](docs/rules/cred-class-field-display-name-missing-oauth2.md) | `displayName` field in credential class must mention `OAuth2` if applicable. | No |
| [cred-class-field-documentation-url-miscased](docs/rules/cred-class-field-documentation-url-miscased.md) | `documentationUrl` field in credential class must be camel cased. | Yes, safe |
| [cred-class-field-documentation-url-missing](docs/rules/cred-class-field-documentation-url-missing.md) | `documentationUrl` field in credential class must be present. | Yes, safe |
| [cred-class-field-name-missing-oauth2](docs/rules/cred-class-field-name-missing-oauth2.md) | `name` field in credential class must mention `OAuth2` if applicable. | No |
| [cred-class-field-name-unsuffixed](docs/rules/cred-class-field-name-unsuffixed.md) | `name` field in credential class must be suffixed with `-Api`. | Yes, unsafe |
| [cred-class-field-name-uppercase-first-char](docs/rules/cred-class-field-name-uppercase-first-char.md) | First char in `name` in credential class must be lowercase. | Yes, unsafe |
| [cred-class-field-placeholder-url-missing-eg](docs/rules/cred-class-field-placeholder-url-missing-eg.md) | `placeholder` for a URL in credential class must be prepended with `e.g.`. | Yes, safe |
| [cred-class-field-properties-assertion](docs/rules/cred-class-field-properties-assertion.md) | In a credential class, the field `properties` must be typed 'INodeProperties' and individual properties must have no assertions. | Yes, safe |
| [cred-class-name-missing-oauth2-suffix](docs/rules/cred-class-name-missing-oauth2-suffix.md) | Credential class name must mention `OAuth2` if applicable. | No |
| [cred-class-name-unsuffixed](docs/rules/cred-class-name-unsuffixed.md) | Credential class name must be suffixed with `-Api`. | Yes, unsafe |
| [filesystem-wrong-cred-filename](docs/rules/filesystem-wrong-cred-filename.md) | Credentials filename must match credentials class name, excluding the filename suffix. Example: `TestApi.credentials.ts` matches `TestApi` in `class TestApi implements ICredentialType`. | No |
| [filesystem-wrong-node-dirname](docs/rules/filesystem-wrong-node-dirname.md) | Node dirname must match node filename, excluding the filename suffix. Example: `Test` node dirname matches `Test.node.ts` node filename. | No |
| [filesystem-wrong-node-filename](docs/rules/filesystem-wrong-node-filename.md) | Node filename must match `name` in node class description, excluding the filename suffix. Example: `Test.node.ts` matches `Test` in `Test.description.name`. | No |
| [filesystem-wrong-resource-description-filename](docs/rules/filesystem-wrong-resource-description-filename.md) | Resource description file must use singular form. Example: `UserDescription.ts`, not `UsersDescription.ts`. | No |
| [node-class-description-credentials-name-unsuffixed](docs/rules/node-class-description-credentials-name-unsuffixed.md) | `name` under `credentials` in node class description must be suffixed with `-Api`. | Yes, unsafe |
| [node-class-description-display-name-unsuffixed-trigger-node](docs/rules/node-class-description-display-name-unsuffixed-trigger-node.md) | `displayName` in node class description for trigger node must be suffixed with `-Trigger`. | Yes, unsafe |
| [node-class-description-empty-string](docs/rules/node-class-description-empty-string.md) | `description` in node class description must be filled out. | No |
| [node-class-description-icon-not-svg](docs/rules/node-class-description-icon-not-svg.md) | `icon` in node class description should be an SVG icon. | No |
| [node-class-description-inputs-wrong-regular-node](docs/rules/node-class-description-inputs-wrong-regular-node.md) | The number of `inputs` in node class description for regular node should be one, or two for Merge node. | Yes, safe |
| [node-class-description-inputs-wrong-trigger-node](docs/rules/node-class-description-inputs-wrong-trigger-node.md) | The number of `inputs` in node class description for trigger node should be zero. | Yes, safe |
| [node-class-description-missing-subtitle](docs/rules/node-class-description-missing-subtitle.md) | `subtitle` in node class description must be present. | Yes, safe |
| [node-class-description-name-unsuffixed-trigger-node](docs/rules/node-class-description-name-unsuffixed-trigger-node.md) | `name` in node class description for trigger node must be suffixed with `-Trigger`. | Yes, unsafe |
| [node-class-description-outputs-wrong](docs/rules/node-class-description-outputs-wrong.md) | The number of `outputs` in node class description for any node must be one, or two for If node, or four for Switch node. | Yes, safe |
| [node-execute-block-double-assertion-for-items](docs/rules/node-execute-block-double-assertion-for-items.md) | In the `execute()` method there is no need to double assert the type of `items.length`. | Yes, safe |
| [node-execute-block-missing-continue-on-fail](docs/rules/node-execute-block-missing-continue-on-fail.md) | The `execute()` method in a node must implement `continueOnFail` in a try-catch block. | No |
| [node-execute-block-wrong-error-thrown](docs/rules/node-execute-block-wrong-error-thrown.md) | The `execute()` method in a node may only throw `NodeApiError` for failed network requests and `NodeOperationError` for internal errors, not the built-in `Error`. | No |
| [node-param-array-type-assertion](docs/rules/node-param-array-type-assertion.md) | Array of node parameters must be typed, not type-asserted. | Yes, unsafe |
| [node-param-collection-type-unsorted-items](docs/rules/node-param-collection-type-unsorted-items.md) | Items in collection-type node parameter must be alphabetized by `name` if five or more than five. | Yes, safe |
| [node-param-color-type-unused](docs/rules/node-param-color-type-unused.md) | `color`-type must be used for color-related node parameter. | Yes, unsafe |
| [node-param-default-missing](docs/rules/node-param-default-missing.md) | `default` must be present in a node parameter. | Yes, safe |
| [node-param-default-wrong-for-boolean](docs/rules/node-param-default-wrong-for-boolean.md) | `default` for boolean-type node parameter must be a boolean. | Yes, safe |
| [node-param-default-wrong-for-collection](docs/rules/node-param-default-wrong-for-collection.md) | `default` for collection-type node parameter must be an object. | Yes, safe |
| [node-param-default-wrong-for-fixed-collection](docs/rules/node-param-default-wrong-for-fixed-collection.md) | `default` for fixed-collection-type node parameter must be an object. | Yes, safe |
| [node-param-default-wrong-for-limit](docs/rules/node-param-default-wrong-for-limit.md) | `default` for a Limit node parameter must be `50`. | Yes, safe |
| [node-param-default-wrong-for-multi-options](docs/rules/node-param-default-wrong-for-multi-options.md) | `default` for a multi-options-type node parameter must be an array. | Yes, safe |
| [node-param-default-wrong-for-number](docs/rules/node-param-default-wrong-for-number.md) | `default` for a number-type node parameter must be a number, except for a number-type ID parameter. | Yes, safe |
| [node-param-default-wrong-for-options](docs/rules/node-param-default-wrong-for-options.md) | `default` for an options-type node parameter must be one of the options. | Yes, safe |
| [node-param-default-wrong-for-simplify](docs/rules/node-param-default-wrong-for-simplify.md) | `default` for a Simplify node parameter must be `true`. | Yes, safe |
| [node-param-default-wrong-for-string](docs/rules/node-param-default-wrong-for-string.md) | `default` for a string-type node parameter must be a string, unless `typeOptions.multipleValues` is set to `true`. | Yes, safe |
| [node-param-description-boolean-without-whether](docs/rules/node-param-description-boolean-without-whether.md) | `description` in a boolean node parameter must start with `Whether`. | No |
| [node-param-description-comma-separated-hyphen](docs/rules/node-param-description-comma-separated-hyphen.md) | The string `comma-separated` in `description` must be hyphenated. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-empty-string](docs/rules/node-param-description-empty-string.md) | `description` in node parameter or in option in options-type and multi-options-type param must be filled out or removed. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-excess-final-period](docs/rules/node-param-description-excess-final-period.md) | `description` in node parameter must end without a final period if a single-sentence description. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-excess-inner-whitespace](docs/rules/node-param-description-excess-inner-whitespace.md) | `description` in node parameter must not contain excess inner whitespace. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-identical-to-display-name](docs/rules/node-param-description-identical-to-display-name.md) | `description` in node parameter must not be identical to `displayName`. | Yes, safe |
| [node-param-description-line-break-html-tag](docs/rules/node-param-description-line-break-html-tag.md) | `description` in node parameter must not contain an HTML line break. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-lowercase-first-char](docs/rules/node-param-description-lowercase-first-char.md) | First char in `description` in node parameter must be uppercase. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-miscased-id](docs/rules/node-param-description-miscased-id.md) | `ID` in `description` in node parameter must be fully uppercased. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-miscased-json](docs/rules/node-param-description-miscased-json.md) | `JSON` in `description` in node parameter must be fully uppercased. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-miscased-url](docs/rules/node-param-description-miscased-url.md) | `URL` in `description` in node parameter must be fully uppercased. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-missing-final-period](docs/rules/node-param-description-missing-final-period.md) | `description` in node parameter must end with a final period if a multiple-sentence description, unless ending with `</code>`. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-missing-for-ignore-ssl-issues](docs/rules/node-param-description-missing-for-ignore-ssl-issues.md) | `description` for Ignore SSL node parameter must be present. | Yes, safe |
| [node-param-description-missing-for-return-all](docs/rules/node-param-description-missing-for-return-all.md) | `description` for Return All node parameter must be present. | Yes, safe |
| [node-param-description-missing-for-simplify](docs/rules/node-param-description-missing-for-simplify.md) | `description` for Simplify node parameter must be present. | Yes, safe |
| [node-param-description-missing-from-dynamic-multi-options](docs/rules/node-param-description-missing-from-dynamic-multi-options.md) | `description` in dynamic-multi-options-type node parameter must be present. | Yes, safe |
| [node-param-description-missing-from-dynamic-options](docs/rules/node-param-description-missing-from-dynamic-options.md) | `description` in dynamic-options-type node parameter must be present. | Yes, safe |
| [node-param-description-missing-from-limit](docs/rules/node-param-description-missing-from-limit.md) | `description` in Limit node parameter must be present. | Yes, safe |
| [node-param-description-unencoded-angle-brackets](docs/rules/node-param-description-unencoded-angle-brackets.md) | `description` in node parameter must encode angle brackets for them to render. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-unneeded-backticks](docs/rules/node-param-description-unneeded-backticks.md) | `description` in node parameter must not use unneeded backticks. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-untrimmed](docs/rules/node-param-description-untrimmed.md) | `description` in node parameter must be trimmed. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-url-missing-protocol](docs/rules/node-param-description-url-missing-protocol.md) | `description` in node parameter must include protocol when containing a URL. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-weak](docs/rules/node-param-description-weak.md) | `description` in node parameter must be either useful or omitted. Applicable by extension to `description` in option in options-type and multi-options-type node parameter. | Yes, safe |
| [node-param-description-wrong-for-dynamic-multi-options](docs/rules/node-param-description-wrong-for-dynamic-multi-options.md) | `description` in dynamic-multi-options-type node parameter must be `Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/nodes/expressions.html#expressions">expression</a>` | Yes, safe |
| [node-param-description-wrong-for-dynamic-options](docs/rules/node-param-description-wrong-for-dynamic-options.md) | `description` in dynamic-options-type node parameter must be `Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/nodes/expressions.html#expressions">expression</a>` | Yes, safe |
| [node-param-description-wrong-for-ignore-ssl-issues](docs/rules/node-param-description-wrong-for-ignore-ssl-issues.md) | `description` for Ignore SSL node parameter must be `Whether to connect even if SSL certificate validation is not possible` | Yes, safe |
| [node-param-description-wrong-for-limit](docs/rules/node-param-description-wrong-for-limit.md) | `description` for Limit node parameter must be `Max number of results to return` | Yes, safe |
| [node-param-description-wrong-for-return-all](docs/rules/node-param-description-wrong-for-return-all.md) | `description` for Return All node parameter must be `Whether to return all results or only up to a given limit` | Yes, safe |
| [node-param-description-wrong-for-simplify](docs/rules/node-param-description-wrong-for-simplify.md) | `description` for Simplify node parameter must be `Whether to return a simplified version of the response instead of the raw data` | Yes, safe |
| [node-param-description-wrong-for-upsert](docs/rules/node-param-description-wrong-for-upsert.md) | `description` for Upsert node parameter must be `Create a new record, or update the current one if it already exists (upsert)`. The resource name e.g. `'contact'` is also allowed instead of `'record'`. | Yes, safe |
| [node-param-display-name-excess-inner-whitespace](docs/rules/node-param-display-name-excess-inner-whitespace.md) | `displayName` in node parameter or in fixed collection section must not contain excess inner whitespace. Applicable by extension to `name` in options-type or multi-options-type node parameter. | Yes, safe |
| [node-param-display-name-miscased-id](docs/rules/node-param-display-name-miscased-id.md) | `ID` in `displayName` in node parameter must be fully uppercased. Applicable by extension to `name` in options-type or multi-options-type node parameter. | Yes, safe |
| [node-param-display-name-miscased](docs/rules/node-param-display-name-miscased.md) | `displayName` in node parameter or in fixed collection section must title cased. Applicable by extension to `name` in options-type or multi-options-type node parameter. | Yes, safe |
| [node-param-display-name-untrimmed](docs/rules/node-param-display-name-untrimmed.md) | `displayName` in node parameter or in fixed collection section must be trimmed. Applicable by extension to `name` in options-type or multi-options-type node parameter. | Yes, safe |
| [node-param-display-name-wrong-for-dynamic-multi-options](docs/rules/node-param-display-name-wrong-for-dynamic-multi-options.md) | `displayName` for dynamic-multi-options-type node parameter must end with `Names or IDs` | Yes, safe |
| [node-param-display-name-wrong-for-dynamic-options](docs/rules/node-param-display-name-wrong-for-dynamic-options.md) | `displayName` for dynamic-options-type node parameter must end with `Name or ID` | Yes, safe |
| [node-param-display-name-wrong-for-simplify](docs/rules/node-param-display-name-wrong-for-simplify.md) | `displayName` for Simplify node parameter must be Simplify | Yes, safe |
| [node-param-display-name-wrong-for-update-fields](docs/rules/node-param-display-name-wrong-for-update-fields.md) | `displayName` for Update operation node parameter must be `Update Fields` | Yes, safe |
| [node-param-fixed-collection-type-unsorted-items](docs/rules/node-param-fixed-collection-type-unsorted-items.md) | Items in a fixed-collection-type node parameter section must be alphabetized by `displayName` if five or more than five, unless the items are address fields. | Yes, safe |
| [node-param-min-value-wrong-for-limit](docs/rules/node-param-min-value-wrong-for-limit.md) | `minValue` for Limit node parameter must be a positive integer. | Yes, safe |
| [node-param-multi-options-type-unsorted-items](docs/rules/node-param-multi-options-type-unsorted-items.md) | Items in a multi-options-type node parameter must be alphabetized by `name` if five or more than five. | Yes, safe |
| [node-param-operation-without-no-data-expression](docs/rules/node-param-operation-without-no-data-expression.md) | `noDataExpression` in an Operation node parameter must be present and enabled. | Yes, safe |
| [node-param-option-description-identical-to-name](docs/rules/node-param-option-description-identical-to-name.md) | `description` in option in options-type node parameter must not be identical to `name`. | Yes, safe |
| [node-param-option-name-containing-star](docs/rules/node-param-option-name-containing-star.md) | Option `name` in options-type node parameter must not contain `*`. Use `[All]` instead. | Yes, safe |
| [node-param-option-name-duplicate](docs/rules/node-param-option-name-duplicate.md) | Option `name` in options-type node parameter must not be a duplicate. | Yes, safe |
| [node-param-option-name-wrong-for-get-all](docs/rules/node-param-option-name-wrong-for-get-all.md) | Option `name` for Get All node parameter must be `Get All` | Yes, safe |
| [node-param-option-name-wrong-for-upsert](docs/rules/node-param-option-name-wrong-for-upsert.md) | Option `name` for Upsert node parameter must be `Create or Update`. | Yes, safe |
| [node-param-option-value-duplicate](docs/rules/node-param-option-value-duplicate.md) | Option `value` in options-type node parameter must not be a duplicate. | Yes, safe |
| [node-param-options-type-unsorted-items](docs/rules/node-param-options-type-unsorted-items.md) | Items in options-type node parameter must be alphabetized by `name` if five or more than five. | Yes, safe |
| [node-param-placeholder-miscased-id](docs/rules/node-param-placeholder-miscased-id.md) | `ID` in `placeholder` in node parameter must be fully uppercased. | Yes, safe |
| [node-param-placeholder-missing-email](docs/rules/node-param-placeholder-missing-email.md) | `placeholder` for Email node parameter must exist. | Yes, safe |
| [node-param-required-false](docs/rules/node-param-required-false.md) | `required: false` in node parameter must be removed because it is implied. | Yes, safe |
| [node-param-resource-with-plural-option](docs/rules/node-param-resource-with-plural-option.md) | Option `name` for a Resource node parameter must be singular. | Yes, safe |
| [node-param-resource-without-no-data-expression](docs/rules/node-param-resource-without-no-data-expression.md) | `noDataExpression` in a Resource node parameter must be present and enabled. | Yes, safe |
| [node-param-type-options-missing-from-limit](docs/rules/node-param-type-options-missing-from-limit.md) | `typeOptions` in Limit node parameter must be present. | Yes, safe |
<!-- /RULES_TABLE -->

## Author

© 2022 [Iván Ovejero](https://github.com/ivov)

## License

Distributed under the [MIT License](LICENSE.md).
