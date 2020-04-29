/**
 * @flow
 * @relayHash d9422293309202081675b8182db45dc4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateHeroInput = {|
  id: string,
  name?: ?string,
  date?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateHeroMutationVariables = {|
  input: UpdateHeroInput
|};
export type UpdateHeroMutationResponse = {|
  +updateHero: ?{|
    +updatedId: ?string
  |}
|};
export type UpdateHeroMutation = {|
  variables: UpdateHeroMutationVariables,
  response: UpdateHeroMutationResponse,
|};
*/


/*
mutation UpdateHeroMutation(
  $input: UpdateHeroInput!
) {
  updateHero(input: $input) {
    updatedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateHeroInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateHero",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateHeroPayload",
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
    "name": "UpdateHeroMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateHeroMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateHeroMutation",
    "id": null,
    "text": "mutation UpdateHeroMutation(\n  $input: UpdateHeroInput!\n) {\n  updateHero(input: $input) {\n    updatedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6954a03fe8258cda96f00fba149f454';

module.exports = node;
