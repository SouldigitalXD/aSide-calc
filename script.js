const container = document.querySelectorAll(".Bars__container--slider");

for (let i = 0; i < container.length; i++) {

    const bar = container[i].querySelector(".Bar_slider ");
    const thumb = container[i].querySelector(".Bar-thumb");
    const tooltip = container[i].querySelector(".tooltip");
    const progress = container[i].querySelector(".progress");
    

function customSlider() {

    const maxVal = bar.getAttribute("max");
    const val = (bar.value / maxVal) * 100 + "%";

    tooltip.innerHTML = bar.value;

    progress.style.width = val;
    thumb.style.left = val;
        
    }

    customSlider();

    bar.addEventListener("input" , () => {
        customSlider();
    });
}