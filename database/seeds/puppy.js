exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Puppy").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Puppy").insert([{
          litter_id: 1,
          name: "Red",
          microchip: 123456,
          sex: "M",
          markings: "cream, chocolate",
          akc_registered: false,
          listed: true,
        },
        {
          litter_id: 1,
          name: "Orange",
          microchip: 1234321,
          sex: "M",
          markings: "dapple, chocolate",
          akc_registered: true,
          listed: false,
        },
        {
          litter_id: 1,
          name: "Yellow",
          microchip: 123866,
          sex: "F",
          markings: "cream, chocolate, dapple",
          price: 200,
          fees: 20,
          commission: 20,
          akc_registered: true,
          listed: true,
        },
        {
          litter_id: 2,
          name: "Blue",
          microchip: 5432,
          sex: "M",
          markings: "cream, chocolate",
          price: 100,
          fees: 20,
          commission: 10,
          akc_registered: false,
          listed: true,
        },
        {
          litter_id: 2,
          name: "Purple",
          microchip: 3456765,
          sex: "F",
          markings: "cream, chocolate",
          price: 100,
          fees: 20,
          commission: 10,
          akc_registered: true,
          listed: true,
        },
      ])
    });
};
