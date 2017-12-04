/*
 * Flattens the Opensearch results into one array, where the title, description
 * and link for each article are bundled in a single object
 */
function flattenOpensearchResult([_, titles, descriptions, links]) {
  return titles.map((title, i) => ({
    title,
    description: descriptions[i],
    link: links[i],
  }));
}

export default flattenOpensearchResult;
