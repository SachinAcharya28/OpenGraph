export const calculateSimilarity = (repoA, repoB) => {
  let score = 0;

  // Same programming language
  if (
    repoA.language &&
    repoB.language &&
    repoA.language === repoB.language
  ) {
    score += 1;
  }

  // Shared topics
  const topicsA = repoA.topics || [];
  const topicsB = repoB.topics || [];

  const sharedTopics = topicsA.filter((topic) =>
    topicsB.includes(topic)
  );

  score += sharedTopics.length*2;

  return score;
};

export const areRelated = (repoA, repoB) => {
  return calculateSimilarity(repoA, repoB) >= 5;
};