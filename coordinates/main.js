const horizental = document.querySelector(".horizental");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetWidth = targetRect.width / 2;
  const targetHeight = targetRect.height / 2;

  document.addEventListener("mousemove", event => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizental.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetWidth}px, ${y - targetHeight}px)`;

    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
