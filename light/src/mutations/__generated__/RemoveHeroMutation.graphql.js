/**
 * @flow
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
    +deletedId: ?string,
    +deleted: ?boolean,
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
    "type": "RemoveHeroInput!"
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
    "concreteType": "RemoveHeroPayload",
    "kind": "LinkedField",
    "name": "removeHero",
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
    "name": "RemoveHeroMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveHeroMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "RemoveHeroMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveHeroMutation(\n  $input: RemoveHeroInput!\n) {\n  removeHero(input: $input) {\n    deletedId\n    deleted\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ade30e1e069b70be57f1e8c5c350978a';

module.exports = node;
