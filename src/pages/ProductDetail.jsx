import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/api/v1/products/${productId}`);
        setProduct(response.data.result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProductDetail();
  }, [productId]);

  const addToCart = async () => {
    try {
      await axios.put(
        `${VITE_API_BASE_URL}/api/v1/cart`,
        {
          product_id: productId,
        },
        {
          withCredentials: true,
        }
      );
      setShowCartMessage(true);
      setTimeout(() => {
        setShowCartMessage(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("장바구니 추가에 실패했습니다.");
    }
  };

  const orderNow = async () => {
    try {
      const response = await axios.post(
        `${VITE_API_BASE_URL}/api/v1/order/pending`,
        {
          total_price: product.price,
          order_items: [
            {
              product_id: productId,
              quantity: 1,
              price: product.price,
            },
          ],
        },
        {
          withCredentials: true,
        }
      );

      navigate(`/order/${response.data.result.order_id}`);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("주문에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const representativeImage =
    product.images && product.images.length > 0
      ? product.images.find((img) => img.representative)?.image_url || product.images[0].image_url
      : "https://via.placeholder.com/400";

  const detailImages =
    product.images && product.images.length > 0
      ? product.images
        .filter((img) => !img.representative && img.image_url.includes("SL"))
        .map((img) => img.image_url)
      : [];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="w-full h-96">
              <img
                src={representativeImage}
                alt={product.name || "상품 이미지"}
                className="w-full h-full object-contain rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative">
              <h1 className="text-xl font-extrabold text-gray-900 mb-2">{product.name || "상품명"}</h1>

              <div className="text-sm text-gray-600 mb-4 space-y-1">
                <p>
                  <span className="font-medium text-gray-800">카테고리:</span>{" "}
                  {product["category_name"] || "미지정"}
                </p>
                <p>
                  <span className="font-medium text-gray-800">브랜드:</span>{" "}
                  {product["brand_name"] || "미지정"}
                </p>
                <p>
                  <span className="font-medium text-gray-800">판매자:</span>{" "}
                  {product["seller_name"] || "미지정"}
                </p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-500 text-xl">
                  ${product.price ? product.price.toLocaleString() : "0"}
                </p>
                <div className="flex items-center gap-2 relative">
                  <button
                    onClick={orderNow}
                    className="bg-green-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md shadow-sm transition duration-150 ease-in-out text-sm"
                  >
                    바로 주문
                  </button>
                  <button
                    onClick={addToCart}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded-md shadow-sm transition duration-150 ease-in-out flex items-center justify-center gap-1 text-sm"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    장바구니 담기
                  </button>
                  {showCartMessage && (
                    <div className="absolute bottom-full mb-2 right-0 w-64">
                      <div className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg animate-fade-in-up">
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          장바구니에 추가되었습니다
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-indigo-600 transform rotate-45 absolute right-4 -bottom-1 shadow-lg"></div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-8">{product.description || "상품 설명이 없습니다."}</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">상품 상세 정보</h2>
          <div className={`relative space-y-8 ${isExpanded ? "" : "max-h-96 overflow-hidden"}`}>
            {detailImages.length > 0 ? (
              detailImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`상품 상세 이미지 ${index + 1}`}
                  className="w-full h-auto rounded-md shadow-sm"
                />
              ))
            ) : (
              <p className="text-gray-500">상세 이미지가 없습니다.</p>
            )}
            {!isExpanded && detailImages.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleExpansion}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md text-lg font-semibold shadow-sm transition duration-150 ease-in-out"
            >
              {isExpanded ? "상품 정보 접기" : "상품 정보 더보기"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}