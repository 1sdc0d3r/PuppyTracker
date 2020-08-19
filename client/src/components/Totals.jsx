import React from "react";

export default function Totals(props) {
  const totalSales = [900, 1200, 600];
  const puppiesListed = 2;
  const salesCommission = [204, 450, 302];
  const totalFees = [20, 30, 10];

  return (
    <div className="totals">
      <p>Breed Fee: $100?</p>
      <p>Total Sales: {totalSales.reduce()}</p>
      <p>Puppies Listed: {`$${puppiesListed * 25}`}</p>
      <p>Sales Commission: {salesCommission.reduce()}</p>
      <p>Total Fees: {totalFees.reduce()}</p>
      <p>Total: $$</p>
      <p>Total Balance Due: $</p>
      <p>Gross Income: $</p>
      <p>Net Income: $</p>
    </div>
  );
}
