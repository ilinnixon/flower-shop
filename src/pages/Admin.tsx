import { useState } from "react";

type Flower = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export default function Admin() {
  const [flowers, setFlowers] = useState<Flower[]>(() => {
    const saved = localStorage.getItem("flowers");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const saveFlowers = (updated: Flower[]) => {
    setFlowers(updated);
    localStorage.setItem("flowers", JSON.stringify(updated));
  };

  const addFlower = () => {
    if (!name || !price || !stock) return;

    const newFlower: Flower = {
      id: Date.now().toString(),
      name,
      price: Number(price),
      stock: Number(stock),
    };

    saveFlowers([...flowers, newFlower]);

    setName("");
    setPrice("");
    setStock("");
  };

  const deleteFlower = (id: string) => {
    const updated = flowers.filter(
      (flower) => flower.id !== id
    );
    saveFlowers(updated);
  };

  return (
    <div className="px-10 py-16 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-12 text-rose-500 tracking-wide text-center">
        Admin – Flower Inventory 🌸
      </h1>

      {/* Add Flower Form */}
      <div className="bg-white/90 backdrop-blur-md rounded-[32px] shadow-lg p-10 mb-14 border border-pink-100">

        <h2 className="text-2xl font-semibold mb-8 text-gray-700">
          Add New Flower
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Whimsical Inputs */}
          <input
            className="
              w-full
              bg-gradient-to-br from-pink-50 to-rose-50
              border border-pink-200
              rounded-full
              px-6 py-4
              shadow-inner
              focus:outline-none
              focus:ring-4
              focus:ring-pink-200/60
              focus:scale-[1.02]
              transition
              duration-300
              placeholder:text-pink-300
            "
            placeholder="Flower name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            className="
              w-full
              bg-gradient-to-br from-pink-50 to-rose-50
              border border-pink-200
              rounded-full
              px-6 py-4
              shadow-inner
              focus:outline-none
              focus:ring-4
              focus:ring-pink-200/60
              focus:scale-[1.02]
              transition
              duration-300
              placeholder:text-pink-300
            "
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            className="
              w-full
              bg-gradient-to-br from-pink-50 to-rose-50
              border border-pink-200
              rounded-full
              px-6 py-4
              shadow-inner
              focus:outline-none
              focus:ring-4
              focus:ring-pink-200/60
              focus:scale-[1.02]
              transition
              duration-300
              placeholder:text-pink-300
            "
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <button
          onClick={addFlower}
          className="
            mt-10
            bg-gradient-to-r
            from-pink-300
            via-rose-300
            to-pink-400
            text-white
            px-8 py-4
            rounded-full
            shadow-lg
            hover:shadow-xl
            hover:scale-105
            transition
            duration-300
          "
        >
          Add Flower ✨
        </button>
      </div>

      {/* Flower List */}
      <div className="grid gap-8">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="
              bg-white/90
              backdrop-blur-md
              rounded-[28px]
              shadow-md
              p-8
              border border-pink-100
              flex justify-between items-center
              hover:shadow-xl
              hover:-translate-y-1
              transition
              duration-300
            "
          >
            <div>
              <h3 className="text-xl font-semibold text-rose-500">
                {flower.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                ₹{flower.price} | Stock: {flower.stock}
              </p>
            </div>

            <button
              onClick={() => deleteFlower(flower.id)}
              className="
                text-red-400
                hover:text-red-600
                transition
                text-sm
                font-medium
              "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
