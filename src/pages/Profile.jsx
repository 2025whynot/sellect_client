import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // AuthContext에서 상태 가져오기

const Profile = () => {
  const location = useLocation();
  const { isLoggedIn, role, user, logout } = useAuth();

  // 유저 정보 기본값 설정
  const displayName = user || 'Guest';
  const displayEmail = isLoggedIn || '로그인 후 이용 가능';
  const profileImage = user?.profileImage || 'https://via.placeholder.com/150';
  const tier = user?.tier || 'Bronze';

  // 버튼 스타일 정의 (결제 내역 스타일 기반)
  const buttonStyle = (isActive) =>
      `block py-2 px-4 rounded-md text-gray-700 font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200 border-l-4 ${
          isActive ? 'bg-indigo-50 text-indigo-700 border-indigo-500' : 'border-transparent'
      }`;

  return (
      <div className="min-h-screen bg-gray-100 flex">
        {/* 왼쪽 사이드바 */}
        <div className="w-64 bg-white shadow-md p-6 flex-shrink-0">
          <div className="flex flex-col items-center mb-8">
            <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900">{displayName}</h2>
            <p className="text-sm text-gray-600">{displayEmail}</p>
            {isLoggedIn && (
                <span className="mt-2 px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
              {tier} 회원
            </span>
            )}
          </div>

          <nav className="space-y-2">
            {isLoggedIn && role === 'USER' ? (
                <>
                  <Link
                      to="orders"
                      className={buttonStyle(location.pathname === '/user/profile/orders')}
                  >
                    주문 내역
                  </Link>
                  <Link
                      to="payment-history"
                      className={buttonStyle(location.pathname === '/user/profile/payment-history')}
                  >
                    결제 내역
                  </Link>
                  <Link
                      to="coupons"
                      className={buttonStyle(location.pathname === '/user/profile/coupons')}
                  >
                    쿠폰 발급 내역
                  </Link>
                  <Link
                      to="leave"
                      className={`block py-2 px-4 rounded-md text-gray-700 font-semibold hover:bg-red-100 hover:text-red-700 transition-all duration-200 border-l-4 ${
                          location.pathname === '/user/profile/leave'
                              ? 'bg-red-50 text-red-700 border-red-500'
                              : 'border-transparent'
                      }`}
                  >
                    회원탈퇴
                  </Link>
                </>
            ) : (
                <p className="text-gray-500 text-sm">로그인 후 이용 가능합니다.</p>
            )}
          </nav>
        </div>

        {/* 가운데 콘텐츠 */}
        <div className="flex-1 p-8">
          {isLoggedIn && role === 'USER' ? (
              <Outlet />
          ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h2>
                <p className="text-gray-600">프로필 기능을 사용하려면 로그인하세요.</p>
                <Link
                    to="/login"
                    className="mt-6 inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
                >
                  로그인 하러 가기
                </Link>
              </div>
          )}
        </div>
      </div>
  );
};

export default Profile;