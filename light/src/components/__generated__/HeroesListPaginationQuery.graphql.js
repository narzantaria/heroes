/**
 * @flow
 * @relayHash c55054c96f46ee3f02169c9430aa6d50
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeroesList_viewer$ref = any;
export type HeroesListPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type HeroesListPaginationQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: HeroesList_viewer$ref
  |}
|};
export type HeroesListPaginationQuery = {|
  variables: HeroesListPaginationQueryVariables,
  response: HeroesListPaginationQueryResponse,
|};
*/


/*
query HeroesListPaginationQuery(
  $count: Int!
  $cursor: String
) {
  viewer {
    ...HeroesList_viewer_1G22uz
    id
  }
}

fragment HeroTpl_hero on Hero {
  id
  name
  date
}

fragment HeroesList_viewer_1G22uz on Viewer {
  Heroes(first: $count, after: $cursor) {
    edges {
      node {
        id
        ...HeroTpl_hero
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HeroesListPaginationQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "HeroesList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeroesListPaginationQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Heroes",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "HeroConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "HeroEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Hero",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "Heroes",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "HeroesList_Heroes",
            "filters": null
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HeroesListPaginationQuery",
    "id": null,
    "text": "query HeroesListPaginationQuery(\n  $count: Int!\n  $cursor: String\n) {\n  viewer {\n    ...HeroesList_viewer_1G22uz\n    id\n  }\n}\n\nfragment HeroTpl_hero on Hero {\n  id\n  name\n  date\n}\n\nfragment HeroesList_viewer_1G22uz on Viewer {\n  Heroes(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...HeroTpl_hero\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7953e971c73f6e0b598e95f1990c8cc5';

module.exports = node;
