export interface PageConfig {
    location_abbreviation: string | null;
    lists: string | null;
    search: string | '';
  }

export function getLists(pageConfig: PageConfig) {
    return fetch(`/wp-json/state-made/v1/product/lists?lists=${pageConfig.lists}&location_abbreviation=${pageConfig?.location_abbreviation}&search=${pageConfig?.search}`)
    .then(data => data.json())
}