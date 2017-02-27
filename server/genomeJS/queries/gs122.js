const gql = require('gql');
const isMale = require('./isMale');

module.exports = (dna) => {
  if (!isMale(dna)) { // gs145.
    return null;
  } else {
    let query = gql.and([
      gql.only('rs6625163', 'A'),
      gql.or([
        gql.only('rs1160312', 'A'),
        gql.exact('rs1160312', 'AG'),
        gql.and([
          gql.only('rs201571', 'T'),
          gql.only('rs6036025', 'G')
        ])
      ])
    ]);
    return query(dna);
  }
};
