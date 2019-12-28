const MOCK_CHESTS = [
  {
    mascot: "mousey",
    cost: 2,
    type: "gold",
    rewards: [
      {
        location: 2,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  },
  {
    mascot: "bizarro",
    cost: 2,
    type: "trophy",
    rewards: [
      {
        location: 10,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  },
  {
    mascot: "wolf",
    cost: 2,
    type: "gold",
    rewards: [
      {
        location: 10,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  },
  {
    mascot: "flixy",
    cost: 2,
    type: "gold",
    rewards: [
      {
        location: 10,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  }
];

class Chest {
  constructor() {
    this.pool = [];
  }

  generate() {
    return MOCK_CHESTS.map(chest => {
      const newChestRewards = chest.rewards.map(reward => ({
        location: Math.round(Math.random() * 25),
        amount: Math.round(Math.random() * 10)
      }));
      return {
        ...chest,
        id: Math.round(Math.random() * 10000),
        cost: Math.round(Math.random() * 5),
        rewards: newChestRewards
      };
    });
  }
}

export default Chest;
