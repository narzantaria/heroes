/**
 * @flow
 * @relayHash edec3aca804808b34d5d0371c735b85c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveHeroInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type RemoveHeroMutationVariables = {|
  input: RemoveHeroInput
|};
export type RemoveHeroMutationResponse = {|
  +removeHero: ?{|
    +deletedId: ?string
  |}
|};
export type RemoveHeroMutation = {|
  variables: RemoveHeroMutationVariables,
  response: RemoveHeroMutationResponse,
|};
*/


/*
mutation RemoveHeroMutation(
  $input: RemoveHeroInput!
) {
  removeHero(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveHeroInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeHero",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RemoveHeroPayload",
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
    "name": "RemoveHeroMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveHeroMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveHeroMutation",
    "id": null,
    "text": "mutation RemoveHeroMutation(\n  $input: RemoveHeroInput!\n) {\n  removeHero(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e06624179d2eed7838f6c50c947df577';

module.exports = node;
