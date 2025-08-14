export default function GridLines() {
  return (
    <div
      className="absolute inset-0 opacity-60 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }}
    />
  );
}
