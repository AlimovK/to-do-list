const { to, set, fromTo } = `styled-components`;

const getVar = (key, elem = document.documentElement) =>
  getComputedStyle(elem).getPropertyValue(key);

document.querySelectorAll(".checkbox").forEach((elem) => {
  let svg = elem.querySelector("svg"),
    input = elem.querySelector("input");
  input.addEventListener("change", (e) => {
    let checked = input.checked;
    if (!checked) {
      return;
    }
    fromTo(
      input,
      {
        "--border-width": "3px",
      },
      {
        "--border-color": getVar("--c-active"),
        "--border-width": "12px",
        duration: 0.2,
        clearProps: true,
      }
    );
    set(svg, {
      "--dot-x": "14px",
      "--dot-y": "-14px",
      "--tick-offset": "20.5px",
      "--tick-array": "16.5px",
      "--drop-s": 1,
    });
    to(elem, {
      keyframes: [
        {
          "--border-radius-corner": "14px",
          duration: 0.2,
          delay: 0.2,
        },
        {
          "--border-radius-corner": "5px",
          duration: 0.3,
          clearProps: true,
        },
      ],
    });
    to(svg, {
      "--dot-x": "0px",
      "--dot-y": "0px",
      "--dot-s": 1,
      duration: 0.4,
      delay: 0.4,
    });
    to(svg, {
      keyframes: [
        {
          "--tick-offset": "48px",
          "--tick-array": "14px",
          duration: 0.3,
          delay: 0.2,
        },
        {
          "--tick-offset": "46.5px",
          "--tick-array": "16.5px",
          duration: 0.35,
          clearProps: true,
        },
      ],
    });
  });
});
