import { get } from './index';

export const api = {
  searchData: (keyword, headers) =>
    get(`search?location=${keyword}&term={term}`, headers),
  getDetail: (id, headers) => get(id, headers)
};
