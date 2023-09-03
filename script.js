document.addEventListener("DOMContentLoaded", () => {
  const modalButton = document.querySelector(".open-button");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  modalButton.addEventListener("click", () => {
    if (modal.classList.contains("active")) { hideModal() } 
    else {
      showModal();

      // Listener click outside modal
      overlay.addEventListener("click", () => hideModal());
    }
  });

  // Listener click on X
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", () => hideModal());

  function showModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
    modal.classList.remove("no-active");
    overlay.classList.remove("no-active");
  }

  function hideModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    modal.classList.add("no-active");
    overlay.classList.add("no-active");
  }

  const submitButton = document.querySelector('#submit');
  submit.addEventListener('click', submitForm);

  function submitForm() {
    modal.innerHTML = 'Форма успешно отправлена!'
    setTimeout(hideModal, 3000)
  }

  // Mask on phone input
  document.getElementById("phone").addEventListener("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});