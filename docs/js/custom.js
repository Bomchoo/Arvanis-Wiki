document.addEventListener('DOMContentLoaded', function () {
    const spoilers = document.querySelectorAll('.spoiler-toggle');
    spoilers.forEach(spoiler => {
      spoiler.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('hidden');
      });
    });
  });