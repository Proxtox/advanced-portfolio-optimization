"use client";

export default function RebalancePage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">Rebalancing</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Execute automated portfolio rebalancing.</p>
        <button className="w-full bg-green-600 text-white py-3 rounded-2xl">Rebalance Now</button>
      </div>
    </div>
  );
}