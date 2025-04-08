const getViewPortHeight = (): number => {
  const nav = document.querySelector("nav");
  const windowHeight = window.innerHeight; // 화면 전체 높이
  const navHeight = nav ? nav.offsetHeight : 0;
  return windowHeight - navHeight; // nav 높이를 뺀 값 리턴
};

export default getViewPortHeight;
