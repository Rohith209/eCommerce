$(document).ready(function () {
  $("header .navbar .navbar-nav li a").click(function (e) {
    $(this).addClass("active");
    //e.preventDefault();
  });

  $.ajax({
    url: "https://fakestoreapi.com/products",
    type: "GET",
    datatype: JSON,
    success: function (products) {
      var productsLength = products.length;
      var htmlUpdate = "";
      for (let i = 0; i < products.length; i++) {
        htmlUpdate += `
                <div class="pro">
                    <img src="${products[i].image}" alt="">
                    <div class="desc">
                        <span>${products[i].category}</span>
                        <h5>${products[i].title}</h5>
                        <p>${products[i].description}</p>
                        <div class="star">
                            <span>${products[i].rating.rate}</span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>&#36; ${products[i].price}</h4>
                    </div>
                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart!"><i class="fa fa-bag-shopping"></i></a>
                </div>
                
                `;
      }
      //console.log('The Updated HTML is: ' + htmlUpdate);
      $(".pro-container").append(htmlUpdate);
    },
  });

  $("#loadmore").click(function () {
    $("#products-sec .pro-container .pro:hidden").slice(0, 4).show();
    if ($("#products-sec .pro-container .pro:hidden").length == 0) {
      $("#loadmore").fadeOut();
    }
  });
});
