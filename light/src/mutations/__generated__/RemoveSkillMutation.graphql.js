/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveSkillInput!"
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
    "concreteType": "RemoveSkillPayload",
    "kind": "LinkedField",
    "name": "removeSkill",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deleted",
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
    "name": "RemoveSkillMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveSkillMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "RemoveSkillMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveSkillMutation(\n  $input: RemoveSkillInput!\n) {\n  removeSkill(input: $input) {\n    deletedId\n    deleted\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0aa9e2a0748ae007b41967bf4488b73';

module.exports = node;
