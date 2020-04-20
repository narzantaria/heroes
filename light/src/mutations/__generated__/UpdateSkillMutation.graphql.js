/**
 * @flow
 * @relayHash a5388bfa61f9ca772406533e8aced29e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateSkillInput = {|
  id: string,
  name: string,
  description: string,
  date: string,
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateSkillInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateSkill",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateSkillPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSkillMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSkillMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateSkillMutation",
    "id": null,
    "text": "mutation UpdateSkillMutation(\n  $input: UpdateSkillInput!\n) {\n  updateSkill(input: $input) {\n    updatedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e357febd987149f1b85fed1ebccd2a8';

module.exports = node;
