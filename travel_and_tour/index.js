const observerOne = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("puff-in-center");
    } else {
      entry.target.classList.remove("puff-in-center");
    }
  });
});

const puffInCenter = document.querySelectorAll("#puff-in-center");

puffInCenter.forEach((element) => observerOne.observe(element));
