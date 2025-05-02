export function calculateCartTotals(items, discountPercent = 0) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal + tax - discount;

  return {
    subtotal,
    tax,
    discount,
    total,
  };
}
