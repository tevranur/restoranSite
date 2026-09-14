// HTML içerisindeki ".search-form" sınıfına sahip elementi seçiyoruz.
// Arama kutusunu açıp kapatmak için kullanacağız.
const searchForm = document.querySelector(".search-form");

// HTML içerisindeki ".cart-items-container" sınıfına sahip elementi seçiyoruz.
// Sepet bölümünü açıp kapatmak için kullanacağız.
const cartItem = document.querySelector(".cart-items-container");

// HTML içerisindeki ".navbar" sınıfına sahip elementi seçiyoruz.
// Menü bölümünü açıp kapatmak için kullanacağız.
const navbar = document.querySelector(".navbar");

//! buttons

// Arama butonunu ID'si üzerinden seçiyoruz.
const searchBtn = document.querySelector("#search-btn");

// Sepet butonunu ID'si üzerinden seçiyoruz.
const cartBtn = document.querySelector("#cart-btn");

// Menü butonunu ID'si üzerinden seçiyoruz.
const menuBtn = document.querySelector("#menu-btn");


// Arama butonuna tıklanıldığında çalışacak kod.
searchBtn.addEventListener("click", function () {

  // ".active" class'ını ekleyip kaldırıyoruz.
  // active varsa kaldırır, yoksa ekler.
  // Böylece arama kutusu açılıp kapanmış olur.
  searchForm.classList.toggle("active");

  // Sayfanın herhangi bir yerine tıklanıldığında çalışacak olay oluşturuyoruz.
  document.addEventListener("click", function (e) {

    // Tıklanan yer searchBtn veya searchForm'un içerisinde değilse
    // arama kutusundaki ".active" class'ını kaldırıyoruz.
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {

      // Arama kutusunu kapatıyoruz.
      searchForm.classList.remove("active");
    }
  });
});


// Sepet butonuna tıklanıldığında çalışacak kod.
cartBtn.addEventListener("click", function () {

  // Sepet bölümüne ".active" class'ını ekleyip kaldırıyoruz.
  // Böylece sepet açılıp kapanıyor.
  cartItem.classList.toggle("active");

  // Sayfanın herhangi bir yerine tıklanıldığında çalışacak olay oluşturuyoruz.
  document.addEventListener("click", function (e) {

    // Tıklanan yer cartBtn veya cartItem içerisinde değilse
    // sepeti kapatıyoruz.
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {

      // Sepetteki ".active" class'ını kaldırıyoruz.
      cartItem.classList.remove("active");
    }
  });
});


// Menü butonuna tıklanıldığında çalışacak kod.
menuBtn.addEventListener("click", function () {

  // Menüye ".active" class'ını ekleyip kaldırıyoruz.
  // Böylece mobil menü açılıp kapanıyor.
  navbar.classList.toggle("active");

  // Sayfanın herhangi bir yerine tıklanıldığında çalışacak olay oluşturuyoruz.
  document.addEventListener("click", function (e) {

    // Tıklanan yer menuBtn veya navbar içerisinde değilse
    // menüyü kapatıyoruz.
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {

      // Menüdeki ".active" class'ını kaldırıyoruz.
      navbar.classList.remove("active");
    }
  });
});


//! composedPath
// Tıklama olayında tıklanan elementten başlayarak
// onun bağlı olduğu elementleri bir yol şeklinde bulmamızı sağlar.
//
// Örneğin butonun üzerine tıklarsak composedPath() içerisinde
// buton, bulunduğu elementler ve en sonunda document gibi
// elementler bulunur.
//
// includes() ile bu yolun içerisinde belirli bir elementin
// olup olmadığını kontrol ediyoruz.
//
// Böylece kullanıcının butonun veya açılan bölümün dışında
// bir yere tıklayıp tıklamadığını anlayabiliyoruz.