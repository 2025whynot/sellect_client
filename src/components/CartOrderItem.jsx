function CartOrderItem({ item }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center flex-1">
        <img
          src={item.imageUrl}
          alt={item.product_name}
          className="w-16 h-16 object-cover rounded-md mr-6"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.brand}</p>
          <p className="text-sm text-gray-700">{item.product_name}</p>
          <p className="text-sm text-gray-400">{item.quantity}개</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-sm text-gray-900">
          {(item.product_price * item.quantity).toLocaleString()}원
        </span>
      </div>
    </div>
  );
}

export default CartOrderItem;
