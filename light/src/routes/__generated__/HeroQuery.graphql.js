/**
 * @flow
 * @relayHash 5f32d103f4849276891384c6f4ba075c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HeroQueryVariables = {|
  id: string
|};
export type HeroQueryResponse = {|
  +viewer: {|
    +Hero: ?{|
      +id: string,
      +name: ?string,
      +skills: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string
          |}
        |}>
      |},
      +date: ?string,
    |}
  |}
|};
export type HeroQuery = {|
  variables: HeroQueryVariables,
  response: HeroQueryResponse,
|};
*/


/*
query HeroQuery(
  $id: ID!
) {
  viewer {
    Hero(id: $id) {
      id
      name
      skills {
        edges {
          node {
            id
          }
        }
      }
      date
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "Hero",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }
  ],
  "concreteType": "Hero",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "skills",
      "storageKey": null,
      "args": null,
      "concreteType": "SkillConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "SkillEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Skill",
              "plural": false,
              "selections": [
                (v1/*: any*/)
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HeroQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeroQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HeroQuery",
    "id": null,
    "text": "query HeroQuery(\n  $id: ID!\n) {\n  viewer {\n    Hero(id: $id) {\n      id\n      name\n      skills {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n      date\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b51ddadc1bf6c87f634adfe38eb31b47';

module.exports = node;
