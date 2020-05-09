/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateSkillInput = {|
  id: string,
  name?: ?string,
  description?: ?string,
  date?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateSkillMutationVariables = {|
  input: UpdateSkillInput
|};
export type UpdateSkillMutationResponse = {|
  +updateSkill: ?{|
    +updatedId: ?string
  |}
|};
export type UpdateSkillMutation = {|
  variables: UpdateSkillMutationVariables,
  response: UpdateSkillMutationResponse,
|};
*/


/*
mutation UpdateSkillMutation(
  $input: UpdateSkillInput!
) {
  updateSkill(input: $input) {
    updatedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateSkillInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateSkillPayload",
    "kind": "LinkedField",
    "name": "updateSkill",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateSkillMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateSkillMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateSkillMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateSkillMutation(\n  $input: UpdateSkillInput!\n) {\n  updateSkill(input: $input) {\n    updatedId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e357febd987149f1b85fed1ebccd2a8';

module.exports = node;
