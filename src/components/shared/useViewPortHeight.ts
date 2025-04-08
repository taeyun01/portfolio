import getViewPortHeight from "@src/utils/viewPort";
import { useEffect, useState } from "react";

const useViewPortHeight = () => {
  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    // 뷰포트 높이 실시간 업데이트(창 높이가 변경될 때마다)
    const updateViewPortHeight = () => {
      const viewPort = getViewPortHeight();
      setViewPortHeight(viewPort);
    };

    updateViewPortHeight(); // 초기 높이 설정

    window.addEventListener("resize", updateViewPortHeight);

    return () => {
      window.removeEventListener("resize", updateViewPortHeight);
    };
  }, []);

  return viewPortHeight;
};

export default useViewPortHeight;
