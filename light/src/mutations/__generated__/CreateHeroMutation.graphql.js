/**
 * @flow
 * @relayHash c925032962e4a2c7f11a079a979de761
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateHeroInput = {|
  name: string,
  skills?: ?$ReadOnlyArray<?string>,
  date: string,
  clientMutationId?: ?string,
|};
export type CreateHeroMutationVariables = {|
  input: CreateHeroInput
|};
export type CreateHeroMutationResponse = {|
  +createHero: ?{|
    +hero: ?{|
      +id: string,
      +name: ?string,
      +skills: ?$ReadOnlyArray<?string>,
      +date: ?string,
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
      name
      skills
      date
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateHeroInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createHero",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateHeroPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hero",
        "storageKey": null,
        "args": null,
        "concreteType": "Hero",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "skills",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateHeroMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateHeroMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateHeroMutation",
    "id": null,
    "text": "mutation CreateHeroMutation(\n  $input: CreateHeroInput!\n) {\n  createHero(input: $input) {\n    hero {\n      id\n      name\n      skills\n      date\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb00b88e1f92bbb73121aba498afce5e';

module.exports = node;
