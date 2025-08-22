import React from "react";

const Recent = () => {
  return (
    <>
      <table className="w-full text-xs h-26">
        <TableHead />
        <tbody>
          <TableRow CusId="#48149" sku="Pro 1 Month" date="Aug 21" price="$9.50" order={1} />
          <TableRow CusId="#48150" sku="Pro 3 Month" date="Aug 21" price="$21.25"order={2} />
          <TableRow CusId="#48151" sku="Pro 1 year" date="Aug 21" price="$75" order={3} />
            <TableRow CusId="#48152" sku="Pro 2 Month" date="Aug 21" price="$10.50" order={4}  />
        </tbody>
      </table>
    </>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1">Customer ID</th>
        <th className="text-start p-1">SKU</th>
        <th className="text-start p-1">Date</th>
        <th className="text-start p-1">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ CusId, sku, date, price, order }) => {
      const rowBg = order === 1 || order === 3 ? "bg-purple-50" : "";
  return (
  <tr className={`border-b text-sm ${rowBg}`}>
      <td className="p-1">{CusId}</td>
      <td className="p-1">{sku}</td>
      <td className="p-1">{date}</td>
      <td className="p-1">{price}</td>
      <td className="p-1">{order}</td>
    </tr>
  );
};

export default Recent;
