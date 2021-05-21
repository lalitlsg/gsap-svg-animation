const tm = gsap.timeline({
  defaults: { duration: 1 },
});

tm.from("#p", { x: 300, opacity: 0, ease: Power4.easeIn })
  .from("#a", { x: 300, opacity: 0, ease: Power4.easeIn }, "-=0.5")
  .from("#y", { x: 300, opacity: 0, ease: Power4.easeIn }, "-=0.5")
  .from("#t", { x: 300, opacity: 0, ease: Power4.easeIn }, "-=0.5")
  .from("#m", { x: 300, opacity: 0, ease: Power4.easeIn }, "-=0.5")
  .to("#p", { x: -100, y: -100, ease: Expo.easeIn }, "eq")
  .to("#a", { x: -50, y: -100, ease: Expo.easeIn }, "eq")
  .to("#y", { x: 0, y: -100, ease: Expo.easeIn }, "eq")
  .to("#t", { x: 50, y: -100, ease: Expo.easeIn }, "eq")
  .to("#m", { x: 100, y: -100, ease: Expo.easeIn }, "eq")
  .to("#p", { x: 0, y: 0, ease: Expo.easeIn }, "eq1")
  .to("#a", { x: 0, y: 0, ease: Expo.easeIn }, "eq1")
  .to("#y", { x: 0, y: 0, ease: Expo.easeIn }, "eq1")
  .to("#t", { x: 0, y: 0, ease: Expo.easeIn }, "eq1")
  .to("#m", { x: 0, y: 0, ease: Expo.easeIn }, "eq1");
