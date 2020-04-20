/**
 * @flow
 * @relayHash 9229058971e092db5e556127fb6b9745
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveSkillInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type RemoveSkillMutationVariables = {|
  input: RemoveSkillInput
|};
export type RemoveSkillMutationResponse = {|
  +removeSkill: ?{|
    +deletedId: ?string
  |}
|};
export type RemoveSkillMutation = {|
  variables: RemoveSkillMutationVariables,
  response: RemoveSkillMutationResponse,
|};
*/


/*
mutation RemoveSkillMutation(
  $input: RemoveSkillInput!
) {
  removeSkill(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveSkillInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeSkill",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RemoveSkillPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
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
    "name": "RemoveSkillMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveSkillMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveSkillMutation",
    "id": null,
    "text": "mutation RemoveSkillMutation(\n  $input: RemoveSkillInput!\n) {\n  removeSkill(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9425c000b3ee96729eabea90226758de';

module.exports = node;
