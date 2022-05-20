function userName() {
  let defaultName = "User";
  let userInput = prompt("Lütfen adınız giriniz :");

  if (userInput === "") {
    document.getElementById("user-name").innerHTML = defaultName + "!";
    //Eğer ki kullanıcı prompt'u boş bırakırsa
  } else if (userInput) {
    document.getElementById("user-name").innerHTML = userInput + "!";
    // Eğer ki kullanıcı prompt'a birşeyler yazarsa
  } else {
    document.getElementById("user-name").innerHTML = defaultName + "!";
    //Eğerki kullanıcı iptal tuşuna basarsa
  }
}

function time() {
  let clokcSide = document.getElementById("clockSide");

  let timer = new Date();
  let h = timer.getHours();
  let m = timer.getMinutes();
  let s = timer.getSeconds();
  let d = timer.getDay();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  d = days[d];

  function checkDigit(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  h = checkDigit(h);
  m = checkDigit(m);
  s = checkDigit(s);

  clokcSide.innerHTML = `${h} : ${m} : ${s} ${d}`;
}

setInterval(time, 1000);
