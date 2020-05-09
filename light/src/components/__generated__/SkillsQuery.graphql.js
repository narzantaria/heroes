/**
 * @flow
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
    +date?: ?string,
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
      date
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
    "type": "[ID!]!"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "Skill"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SkillsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SkillsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SkillsQuery",
    "operationKind": "query",
    "text": "query SkillsQuery(\n  $input: [ID!]!\n) {\n  nodes(ids: $input) {\n    __typename\n    id\n    ... on Skill {\n      id\n      name\n      description\n      date\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a487827c2e452ab392381ee33515f12';

module.exports = node;
