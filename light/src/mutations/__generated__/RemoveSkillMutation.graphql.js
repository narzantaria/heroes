/**
 * @flow
 * @relayHash 343a9f4172702e0372ed358dd268804d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveSkillInput = {|
  heroId: string,
  id: string,
  clientMutationId?: ?string,
|};
export type RemoveSkillMutationVariables = {|
  input: RemoveSkillInput
|};
export type RemoveSkillMutationResponse = {|
  +removeSkill: ?{|
    +deletedId: ?string,
    +deleted: ?boolean,
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
    deleted
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deleted",
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
    "text": "mutation RemoveSkillMutation(\n  $input: RemoveSkillInput!\n) {\n  removeSkill(input: $input) {\n    deletedId\n    deleted\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0aa9e2a0748ae007b41967bf4488b73';

module.exports = node;
