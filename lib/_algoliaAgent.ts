import { version } from '../package.json';

export const DEFAULT_ALGOLIA_AGENTS = [
  `insights-js (${version})`,
  `insights-js-${__FLAVOR__} (${version})`,
];

export function addAlgoliaAgent(algoliaAgent) {
  if (this._ua.indexOf(algoliaAgent) === -1) {
    this._ua.push(algoliaAgent);
  }
}
