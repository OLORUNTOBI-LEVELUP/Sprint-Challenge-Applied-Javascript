class Carousel {
  constructor(element) {
    this.element = element;

    // DOM References
    this.rightButton = document.querySelector(".right-button");
    this.leftButton = document.querySelector(".left-button");
    this.images = document.querySelectorAll(".carousel img"); // this.images returns a nodeList

    this.rightButton.addEventListener("click", () => this.rightClick());
    this.leftButton.addEventListener("click", () => this.leftClick());

    this.images[0].style.display = "block";
    this.currentIndex = 0;

    this.images.forEach((image, index) =>
      image.setAttribute("data-index", index)
    );

    this.length = this.images.length - 1;
  }

  // Methods
  rightClick() {
    if (this.currentIndex < this.length) {
      this.currentIndex += 1;

      let newImage = document.querySelector(
        `.carousel img[data-index="${this.currentIndex}"]`
      );
      let previousImage = document.querySelector(
        `.carousel img[data-index="${this.currentIndex - 1}"]`
      );

      newImage.style.display = "block";
      previousImage.style.display = "none";
    }
  }

  leftClick() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;

      let newImage = document.querySelector(
        `.carousel img[data-index="${this.currentIndex}"]`
      );
      let previousImage = document.querySelector(
        `.carousel img[data-index="${this.currentIndex + 1}"]`
      );

      newImage.style.display = "block";
      previousImage.style.display = "none";
    }
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
