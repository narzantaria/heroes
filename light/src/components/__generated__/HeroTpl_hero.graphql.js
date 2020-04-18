/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HeroTpl_hero$ref: FragmentReference;
declare export opaque type HeroTpl_hero$fragmentType: HeroTpl_hero$ref;
export type HeroTpl_hero = {|
  +id: string,
  +name: ?string,
  +skills: ?$ReadOnlyArray<?string>,
  +date: ?string,
  +$refType: HeroTpl_hero$ref,
|};
export type HeroTpl_hero$data = HeroTpl_hero;
export type HeroTpl_hero$key = {
  +$data?: HeroTpl_hero$data,
  +$fragmentRefs: HeroTpl_hero$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HeroTpl_hero",
  "type": "Hero",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '5222254687cda3d984154d19f012c3c0';

module.exports = node;
