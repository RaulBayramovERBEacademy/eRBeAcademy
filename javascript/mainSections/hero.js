const originalHero = document.querySelector(".hero").innerHTML;

function updateHero() {
  const hero = document.querySelector(".hero");
  if (window.innerWidth <= 768) {
    const heroImage = document.querySelector(".hero_image");
    const heroText = document.querySelector(".hero_text");
    hero.insertBefore(heroImage, heroText);
    // for chevrons
    const [leftChevron, rightChevron] = hero.querySelectorAll("i");
    const heroImageHeight = heroImage.offsetHeight;
    leftChevron.style.top = heroImageHeight / 2 + "px";
    rightChevron.style.top = heroImageHeight / 2 + "px";
  } else {
    hero.innerHTML = originalHero;
  }
}
updateHero();
window.addEventListener("resize", updateHero);
