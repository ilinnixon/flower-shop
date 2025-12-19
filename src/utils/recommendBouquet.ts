type Recommendation = {
  title: string;
  description: string;
};

export function recommendBouquet(
  preferences: string,
  occasion: string
): Recommendation {
  const pref = preferences.toLowerCase();

  // RULE 1: Explicit flower preferences
  if (pref.includes("rose")) {
    return {
      title: "Rose Elegance Bouquet 🌹",
      description:
        "A classic bouquet of fresh roses with soft fillers — perfect for expressing love.",
    };
  }

  if (pref.includes("sunflower")) {
    return {
      title: "Sunshine Sunflower Bouquet 🌻",
      description:
        "Bright sunflowers paired with seasonal greens for a cheerful surprise.",
    };
  }

  if (pref.includes("lily")) {
    return {
      title: "White Lily Grace Bouquet 🤍",
      description:
        "Elegant white lilies with minimal accents for a calm, graceful feel.",
    };
  }

  // RULE 2: Occasion-based defaults
  if (occasion === "Anniversary") {
    return {
      title: "Romantic Red & Pink Bouquet ❤️",
      description:
        "A romantic mix of red and pink flowers curated for anniversaries.",
    };
  }

  if (occasion === "Birthday") {
    return {
      title: "Vibrant Celebration Bouquet 🎉",
      description:
        "Colorful seasonal flowers designed to celebrate special birthdays.",
    };
  }

  // RULE 3: Safe fallback
  return {
    title: "Seasonal Fresh Picks 🌸",
    description:
      "A handpicked mix of the freshest seasonal flowers, beautifully arranged.",
  };
}
