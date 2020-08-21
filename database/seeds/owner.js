exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Owner").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Owner").insert([{
          first_name: "Jack",
          last_name: "Barry",
          phone: 8019304839,
          address: "1234 address",
          city: "Jackson",
          state: "WY",
          zip: 83304,
          type: "breeder",
        },
        {
          first_name: "Jack1",
          last_name: "Barry1",
          phone: 8019304839,
          address: "1234 address",
          city: "Jackson",
          state: "WY",
          zip: 83304,
          type: "breeder",
        }, {
          first_name: "Jack2",
          last_name: "Barry2",
          phone: 8019304839,
          address: "1234 address",
          city: "Jackson",
          state: "WY",
          zip: 83304,
          type: "pet",
        },
      ])
    });
};
