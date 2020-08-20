exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Litter").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Litter").insert([{
          id: 1,
          ownerName: "Steve Bell",
          breedDate: "2020-08-21",
          litterDate: "2020-09-28",
          dam: "Athena",
          sire: "Cowboy",
        },
        {
          id: 2,
          ownerName: "Steve Bell",
          breedDate: "2020-10-17",
          litterDate: "2020-11-28",
          dam: "Rose",
          sire: "Rosco",
        },
      ])
    })
};
