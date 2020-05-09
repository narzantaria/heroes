/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSkillInput = {|
  heroId: string,
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateSkillInput!"
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
    "concreteType": "CreateSkillPayload",
    "kind": "LinkedField",
    "name": "createSkill",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Skill",
        "kind": "LinkedField",
        "name": "skill",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
    "name": "CreateSkillMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSkillMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateSkillMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSkillMutation(\n  $input: CreateSkillInput!\n) {\n  createSkill(input: $input) {\n    skill {\n      id\n      name\n      description\n      date\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f565aba02e34474c670d84dc0b41a82f';

module.exports = node;
