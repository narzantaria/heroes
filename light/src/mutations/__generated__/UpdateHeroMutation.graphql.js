/**
 * @flow
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateHeroInput!"
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
    "concreteType": "UpdateHeroPayload",
    "kind": "LinkedField",
    "name": "updateHero",
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
    "name": "UpdateHeroMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateHeroMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateHeroMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateHeroMutation(\n  $input: UpdateHeroInput!\n) {\n  updateHero(input: $input) {\n    updatedId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6954a03fe8258cda96f00fba149f454';

module.exports = node;
