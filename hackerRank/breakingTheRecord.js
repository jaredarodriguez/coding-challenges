/*

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array scores = [12,24,10,24]. Scores are in the same order as the games played. She would tabulate her results as follows:

Given the scores for a season, find and print the number of times Maria breaks her records for most and least points scored during the season.
*/

function breakingRecords(scores) {
  let minCount = 1
  let maxCount = 0
  let min
  let max = scores[0]
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      maxCount += 1
      min = max
      max = scores[i]
    } else if (scores[i] < min) {
      minCount += 1
      min = scores[i]
    }
  }
  return [maxCount, minCount]
}
