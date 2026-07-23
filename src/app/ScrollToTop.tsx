import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 주소(pathname)가 바뀔 때마다 스크롤을 맨 위(0, 0)로 올림
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 화면에 보여줄 UI는 없으므로 null 반환
}