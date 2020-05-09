/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateHeroInput = {|
  name: string,
  date: string,
  clientMutationId?: ?string,
|};
export type CreateHeroMutationVariables = {|
  input: CreateHeroInput
|};
export type CreateHeroMutationResponse = {|
  +createHero: ?{|
    +hero: ?{|
      +id: string
    |}
  |}
|};
export type CreateHeroMutation = {|
  variables: CreateHeroMutationVariables,
  response: CreateHeroMutationResponse,
|};
*/


/*
mutation CreateHeroMutation(
  $input: CreateHeroInput!
) {
  createHero(input: $input) {
    hero {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateHeroInput!"
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
    "concreteType": "CreateHeroPayload",
    "kind": "LinkedField",
    "name": "createHero",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Hero",
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
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
    "name": "CreateHeroMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateHeroMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateHeroMutation",
    "operationKind": "mutation",
    "text": "mutation CreateHeroMutation(\n  $input: CreateHeroInput!\n) {\n  createHero(input: $input) {\n    hero {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '21f44f82fb3e1d6a42c4895ba3054235';

module.exports = node;
