const buttons = document.querySelectorAll(".button-portfolio");
const photos = document.querySelectorAll(".photo-wrap");

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        photos.forEach(photo => {
            if (filter === "all" || photo.dataset.category === filter) {
                photo.style.display ="block";

            } else {
                photo.style.display = "none";
            }
        });
    });
});
