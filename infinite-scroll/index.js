let options = {
  root: document.querySelector("#scroll"),
  rootMargin: "0px",
  threshold: 1.0,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect  관찰 대상의 사각형 정보 #scrollArea의 전체 정보
    //   entry.intersectionRect 관찰 대상의 교차한 영역 정보 #scrollArea이 #scroll에 보이는 정보
    //   entry.intersectionRatio  관찰 대상의 사각형 정보 #scrollArea의 전체 정보
    //   entry.isIntersecting 관찰 대상의 교차한 영역 백분율 #scroll에 #scrollArea의 영역 비율
    //   entry.rootBounds 지정한 루트 요소의 사각형 정보 #scroll의 정보
    //   entry.target 관찰 대상 요소 #scrollArea의 정보
    //   entry.time 변경이 발생한 시간 정보
    console.log(entry.isIntersecting); // true 일때 api 통신
    console.log(entry.target);
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector("#scrollArea");
observer.observe(target);
