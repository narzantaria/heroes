/**
 * @flow
 * @relayHash ce37b5d700b9719dfd21224182e9b794
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSkillInput = {|
  name: string,
  description: string,
  date: string,
  clientMutationId?: ?string,
|};
export type CreateSkillMutationVariables = {|
  input: CreateSkillInput
|};
export type CreateSkillMutationResponse = {|
  +createSkill: ?{|
    +skill: ?{|
      +id: string,
      +name: ?string,
      +description: ?string,
      +date: ?string,
    |}
  |}
|};
export type CreateSkillMutation = {|
  variables: CreateSkillMutationVariables,
  response: CreateSkillMutationResponse,
|};
*/


/*
mutation CreateSkillMutation(
  $input: CreateSkillInput!
) {
  createSkill(input: $input) {
    skill {
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSkillInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createSkill",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateSkillPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "skill",
        "storageKey": null,
        "args": null,
        "concreteType": "Skill",
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
            "name": "description",
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
    "name": "CreateSkillMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSkillMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateSkillMutation",
    "id": null,
    "text": "mutation CreateSkillMutation(\n  $input: CreateSkillInput!\n) {\n  createSkill(input: $input) {\n    skill {\n      id\n      name\n      description\n      date\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f565aba02e34474c670d84dc0b41a82f';

module.exports = node;
