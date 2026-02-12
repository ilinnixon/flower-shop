type Flower = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

type Note = {
  favoriteFlowers: string;
};

export function generateBouquet(
  note: Note,
  inventory: Flower[]
) {
  const preferred = note.favoriteFlowers
    .split(",")
    .map((f) => f.trim().toLowerCase());

  const matchedFlowers = inventory.filter(
    (flower) =>
      preferred.includes(flower.name.toLowerCase()) &&
      flower.stock > 0
  );

  if (matchedFlowers.length === 0) {
    return {
      message:
        "None of the preferred flowers are currently in stock.",
      flowers: [],
      total: 0,
    };
  }

  const bouquet = matchedFlowers.map((flower) => ({
    name: flower.name,
    price: flower.price,
  }));

  const total = bouquet.reduce(
    (sum, flower) => sum + flower.price,
    0
  );

  return {
    message: "Smart bouquet generated successfully!",
    flowers: bouquet,
    total,
  };
}
