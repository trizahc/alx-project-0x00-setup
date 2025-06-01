// pages/landing.tsx
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Landing() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <Card />

      {/* Cards (previous task) */}
      <Card title="Frontend Stack" />
      <Card title="Backend Stack" />
      <Card title="DevOps Stack" />

      <h2 className="text-2xl font-semibold mt-8">Buttons</h2>

      {/* Buttons with different sizes and shapes */}
      <div className="space-x-4">
        <Button title="Small Round" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Full" styles="text-lg rounded-full" />
      </div>
    </div>
  );
}

