document.addEventListener("DOMContentLoaded", function () {
    const collectionItemBtns = document.querySelectorAll(".collection__item-btn");
    const galleryModal = document.getElementById("galleryModal");
    const close = document.querySelector(".close");
    const modalImage = document.getElementById("modalImage");
    const galleryThumbnails = document.getElementById("galleryThumbnails");

    collectionItemBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const collectionItem = this.closest(".collection__item");
            const galleryId = collectionItem.getAttribute("data-gallery-id");
            const hiddenGallery = document.querySelector(`.hidden-gallery[data-gallery-id="${galleryId}"]`);
            const images = hiddenGallery.querySelectorAll("img");

            galleryThumbnails.innerHTML = "";

            images.forEach((img) => {
                const thumbnail = document.createElement("img");
                thumbnail.src = img.src;
                thumbnail.alt = img.alt;
                thumbnail.addEventListener("click", function () {
                    modalImage.src = this.src;
                    modalImage.alt = this.alt;
                });

                galleryThumbnails.appendChild(thumbnail);
            });

            modalImage.src = images[0].src;
            modalImage.alt = images[0].alt;
            galleryModal.style.display = "block";
        });
    });

    close.addEventListener("click", function () {
        galleryModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === galleryModal) {
            galleryModal.style.display = "none";
        }
    });
});
