import { id } from "../ast/identifiers";
import { getters } from "../ast/getters";
import * as utils from "../ast";

export default utils.createRule({
  name: utils.getRuleName(module),
  meta: {
    type: "layout",
    docs: {
      description:
        "The `name` key must be present in the `package.json` of a community package.",
      recommended: "error",
    },
    schema: [],
    messages: {
      addName: "Add a `name` key to package.json",
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ObjectExpression(node) {
        const isTestRun = process.env.NODE_ENV === "test";
        const isProdRun = !isTestRun;
        const filename = context.getFilename();

        if (isProdRun && !filename.includes("package.json")) return;
        if (isProdRun && !id.prod.isTopLevelObjectExpression(node)) return;
        if (isTestRun && !id.test.isTopLevelObjectExpression(node)) return;

        if (!getters.communityPackageJson.getName(node)) {
          context.report({
            messageId: "addName",
            node,
          });
        }
      },
    };
  },
});
