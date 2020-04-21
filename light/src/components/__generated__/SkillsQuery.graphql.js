/**
 * @flow
 * @relayHash 98ca374a24818dd9b944cf46896188d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SkillsQueryVariables = {|
  input: $ReadOnlyArray<string>
|};
export type SkillsQueryResponse = {|
  +nodes: $ReadOnlyArray<?{|
    +id: string,
    +name?: ?string,
    +description?: ?string,
  |}>
|};
export type SkillsQuery = {|
  variables: SkillsQueryVariables,
  response: SkillsQueryResponse,
|};
*/


/*
query SkillsQuery(
  $input: [ID!]!
) {
  nodes(ids: $input) {
    __typename
    id
    ... on Skill {
      id
      name
      description
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "[ID!]!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "type": "Skill",
  "selections": [
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
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SkillsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nodes",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SkillsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nodes",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SkillsQuery",
    "id": null,
    "text": "query SkillsQuery(\n  $input: [ID!]!\n) {\n  nodes(ids: $input) {\n    __typename\n    id\n    ... on Skill {\n      id\n      name\n      description\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d3796e6901b37636799884379b8d785';

module.exports = node;
