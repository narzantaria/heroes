/**
 * @flow
 * @relayHash 2825e3176ad5b4a83dc22eadb2041f9f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveSkillsMutationInput = {|
  ids?: ?$ReadOnlyArray<?string>,
  clientMutationId?: ?string,
|};
export type RemoveSkillsMutationVariables = {|
  input: RemoveSkillsMutationInput
|};
export type RemoveSkillsMutationResponse = {|
  +removeSkills: ?{|
    +deletedIDs: ?$ReadOnlyArray<?string>
  |}
|};
export type RemoveSkillsMutation = {|
  variables: RemoveSkillsMutationVariables,
  response: RemoveSkillsMutationResponse,
|};
*/


/*
mutation RemoveSkillsMutation(
  $input: RemoveSkillsMutationInput!
) {
  removeSkills(input: $input) {
    deletedIDs
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveSkillsMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeSkills",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RemoveSkillsMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedIDs",
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
    "name": "RemoveSkillsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveSkillsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveSkillsMutation",
    "id": null,
    "text": "mutation RemoveSkillsMutation(\n  $input: RemoveSkillsMutationInput!\n) {\n  removeSkills(input: $input) {\n    deletedIDs\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd8066543c151d0b516a509d12dc8894c';

module.exports = node;
