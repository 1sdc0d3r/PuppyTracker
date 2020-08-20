exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Litter").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Litter").insert([{
          id: 1,
          owner_name: "Steve Bell",
          breed_date: "2020-08-21",
          litter_date: "2020-09-28",
          dam: "Athena",
          sire: "Cowboy",
        },
        {
          id: 2,
          owner_name: "Steve Bell",
          breed_date: "2020-10-17",
          litter_date: "2020-11-28",
          dam: "Rose",
          sire: "Rosco",
        },
      ])
    })
};
