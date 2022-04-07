import { DOCUMENTATION } from "../constants";
import * as utils from "../utils";
import { identifiers as id } from "../utils/identifiers";
import { getters } from "../utils/getters";

export default utils.createRule({
  name: utils.getRuleName(module),
  meta: {
    type: "layout",
    docs: {
      description: `\`description\` in node parameter or in option in options-type and multi-options-type param must be filled out or removed. ${DOCUMENTATION.APPLICABLE_BY_EXTENSION_TO_DESCRIPTION_IN_OPTION}`,
      recommended: "error",
    },
    schema: [],
    fixable: "code",
    messages: {
      fillOutOrRemoveDescription:
        "Fill out or remove description [autofixable]",
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ObjectExpression(node) {
        if (!id.isNodeParameter(node) && !id.isOption(node)) return;

        // to prevent overlap with node-param-description-wrong-for-dynamic-options
        if (getters.nodeParam.getLoadOptionsMethod(node)) return;

        const description = getters.nodeParam.getDescription(node);

        if (!description) return;

        if (description.value === "") {
          const rangeToRemove = utils.getRangeToRemove(description);

          context.report({
            messageId: "fillOutOrRemoveDescription",
            node: description.ast,
            fix: (fixer) => {
              return fixer.removeRange(rangeToRemove);
            },
          });
        }
      },
    };
  },
});
