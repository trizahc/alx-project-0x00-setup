// pages/landing.tsx
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Landing() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <Card />

      <Button
        title="Continue"
        styles="text-sm rounded-sm bg-green-400 hover:bg-green-400/50 "
      />
      <Button
        title="Accept"
        styles="text-sm rounded-md bg-yellow-500 hover:bg-yellow-500/50"
      />
      <Button
        title="Buy"
        styles="text-sm rounded-full bg-green-500 hover:bg-green-500/50"
      />
      <Button
        title="Buy"
        styles="text-sm rounded-lg bg-green-500 hover:bg-green-500/50"
      />
    

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

