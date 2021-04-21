document.querySelector(".popup").addEventListener("click", function () {
  swal({
    title: "ЗАКАЗ КАЛЬЯНА",
    html:
      '<h2 class="popup__text">Введите имя и телефон и мы перезвоним вам в ближайшее время. <br /> <br />Мы работаем 24/7</h2>' +
      '<input id="swal-input1" class="swal2-input" type="text" name="name" placeholder="ИМЯ">' +
      '<input id="swal-input2" class="swal2-input" type="text" name="phone" placeholder="ТЕЛЕФОН">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
      ];
    },
  });
});
