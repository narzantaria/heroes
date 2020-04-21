/**
 * @flow
 * @relayHash 9b3bb194864c8d40bbd82966851d25a7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateHeroSkillsInput = {|
  id: string,
  operation: string,
  skill: string,
  clientMutationId?: ?string,
|};
export type UpdateHeroSkillsMutationVariables = {|
  input: UpdateHeroSkillsInput
|};
export type UpdateHeroSkillsMutationResponse = {|
  +updateSkills: ?{|
    +updatedId: ?string
  |}
|};
export type UpdateHeroSkillsMutation = {|
  variables: UpdateHeroSkillsMutationVariables,
  response: UpdateHeroSkillsMutationResponse,
|};
*/


/*
mutation UpdateHeroSkillsMutation(
  $input: UpdateHeroSkillsInput!
) {
  updateSkills(input: $input) {
    updatedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateHeroSkillsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateSkills",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateHeroSkillsPayload",
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
    "name": "UpdateHeroSkillsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateHeroSkillsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateHeroSkillsMutation",
    "id": null,
    "text": "mutation UpdateHeroSkillsMutation(\n  $input: UpdateHeroSkillsInput!\n) {\n  updateSkills(input: $input) {\n    updatedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '82fafd3931b64afb118419f335d4139d';

module.exports = node;
