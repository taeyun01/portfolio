const scrollIntoView = (id: string) => {
  const element = document.querySelector(`#${id}`);
  const navbar = document.querySelector("nav"); // navbar 요소 선택
  const offset = navbar ? navbar.offsetHeight : 0; // navbar 높이 계산

  console.log(element);

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = id === "my-profile" ? 0 : elementPosition - offset; // my-profile일 때는 최상단으로 이동, 아닌 경우 오프셋 적용하여 navbar에 맞게 이동

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default scrollIntoView;
