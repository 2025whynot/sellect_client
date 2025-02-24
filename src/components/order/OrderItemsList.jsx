import OrderItem from "./OrderItem.jsx";

function OrderItemsList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {items.map((item) => (
        <OrderItem key={item.product_id} item={item} />
      ))}
    </div>
  );
}

export default OrderItemsList;
