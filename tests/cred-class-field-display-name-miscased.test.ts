import rule from "../lib/rules/cred-class-field-display-name-miscased";
import { ruleTester, getRuleName } from "../lib/utils";

ruleTester().run(getRuleName(module), rule, {
  valid: [
    {
      code: `class MyTestApi implements ICredentialType {
        name = 'myTestApi';
        displayName = 'My Test API';
        documentationUrl = 'myTest';
      }`,
    },
  ],
  invalid: [
    {
      code: `class TestApi implements ICredentialType {
        name = 'myTestApi';
        displayName = 'My test API';
        documentationUrl = 'myTest';
      }`,
      errors: [{ messageId: "useTitleCase" }],
      output: `class TestApi implements ICredentialType {
        name = 'myTestApi';
        displayName = 'My Test API';
        documentationUrl = 'myTest';
      }`,
    },
  ],
});
