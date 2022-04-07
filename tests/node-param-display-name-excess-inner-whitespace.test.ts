import rule from "../lib/rules/node-param-display-name-excess-inner-whitespace";
import { ruleTester, getRuleName } from "../lib/utils";

ruleTester().run(getRuleName(module), rule, {
  valid: [
    {
      code: `const test = {
        displayName: 'Test Test',
        name: 'test',
        type: 'string',
        default: '',
        description: 'This a sentence',
      };`,
    },
    {
      code: `const test = {
        name: 'Test Test',
        value: 'test',
        description: 'This is a sentence',
      };`,
    },
  ],
  invalid: [
    {
      code: `const test = {
        displayName: 'Test   Test',
        name: 'test',
        type: 'string',
        default: '',
        description: 'This a sentence',
      };`,
      errors: [{ messageId: "removeInnerWhitespace" }],
      output: `const test = {
        displayName: 'Test Test',
        name: 'test',
        type: 'string',
        default: '',
        description: 'This a sentence',
      };`,
    },
    {
      code: `const test = {
        name: 'Test    Test',
        value: 'test',
        description: 'This is a sentence',
      };`,
      errors: [{ messageId: "removeInnerWhitespace" }],
      output: `const test = {
        name: 'Test Test',
        value: 'test',
        description: 'This is a sentence',
      };`,
    },

    {
      code: `const test = {
        displayName: 'Test',
        name: 'test',
        type: 'fixedCollection',
        default: 'a',
        options: [
          {
            displayName: 'Details   Test',
            name: 'detailsTest',
            values: [
              {
                displayName: 'A',
                name: 'a',
                type: 'string',
                default: '',
              },
            ],
          },
        ],
      };`,
      errors: [{ messageId: "removeInnerWhitespace" }],
      output: `const test = {
        displayName: 'Test',
        name: 'test',
        type: 'fixedCollection',
        default: 'a',
        options: [
          {
            displayName: 'Details Test',
            name: 'detailsTest',
            values: [
              {
                displayName: 'A',
                name: 'a',
                type: 'string',
                default: '',
              },
            ],
          },
        ],
      };`,
    },
  ],
});
