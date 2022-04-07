import * as utils from "../utils";
import { identifiers as id } from "../utils/identifiers";
import { getters } from "../utils/getters";

export default utils.createRule({
  name: utils.getRuleName(module),
  meta: {
    type: "layout",
    docs: {
      description: "`typeOptions` in Limit node parameter must be present.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      addTypeOptions: "Add 'typeOptions' [autofixable]",
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ObjectExpression(node) {
        if (!id.isNodeParameter(node)) return;

        if (!id.nodeParam.isLimit(node)) return;

        const typeOptions = getters.nodeParam.getTypeOptions(node);

        if (!typeOptions) {
          const type = getters.nodeParam.getType(node);

          if (!type) return;

          const { indentation: baseIndentation, range } =
            utils.getInsertionArgs(type);
          const extraIndentation = baseIndentation + " ".repeat(2);

          context.report({
            messageId: "addTypeOptions",
            node,
            fix: (fixer) =>
              fixer.insertTextAfterRange(
                range,
                `\n${baseIndentation}typeOptions: {\n${extraIndentation}minValue: 1,\n${baseIndentation}},`
              ),
          });
        }
      },
    };
  },
});
