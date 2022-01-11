import { createInsightsClientForUMD as createInsightsClient } from './_createInsightsClient';
import { getFunctionalInterface } from './_getFunctionalInterface';
import { processQueue } from './_processQueue';
import AlgoliaAnalytics from './insights';
import { getRequesterForBrowser } from './utils/getRequesterForBrowser';

export {
  createInsightsClient,
  getRequesterForBrowser,
  AlgoliaAnalytics,
  getFunctionalInterface,
  processQueue,
};
export * from './types';

export default createInsightsClient(getRequesterForBrowser());
