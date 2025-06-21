import React from "react";

const WhyDifferent = () => {
  const features = [
    {
      icon: "🤝",
      title: "Co-founders in spirit",
      description:
        "We’re co‑founders in spirit, not just vendors: we care about your product’s success.",
    },
    {
      icon: "🧰",
      title: "All under one roof",
      description:
        "Idea to launch under one roof: no juggling designers, developers, and DevOps teams.",
    },
    {
      icon: "🚀",
      title: "Built to scale",
      description:
        "Our systems handle growth, traffic surges, and complexity from day one.",
    },
  ];

  return (
    <div
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #ffffff, #e6ffe6)",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ fontSize: "5rem", marginBottom: "3rem", fontWeight: "500" }}>
        Why We’re Different
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8rem",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 250px",
              maxWidth: "300px",
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "1rem", color: "#444" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDifferent;
