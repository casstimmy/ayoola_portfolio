import QuickAccessCard from "./QuickAccessCard";

const items = [
  { title: "Projects", image: "/asset/portfolio1.jpg", new: true },
  { title: "Experience", image: "/asset/portfolio5.jpg", tier: 88 },
  { title: "Tech Stack", image: "/asset/portfolio3.jpg" },
];

export default function LeftPanel() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 space-y-5 z-30 animate-slide-in">
      {items.map((item, i) => (
        <QuickAccessCard key={i} {...item} />
      ))}
    </div>
  );
}
