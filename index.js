$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "../Data.json",
        dataType: "json",
        success: getjson
    });
});
function getjson(json) {
    json.forEach(element => {
        $("#services").append(
            `
            <div class="ser-card-1 ${element.class}">
            <div class="card-1">
               <div class="card-img-con">
                   <img src="${element.img}" class="card-img" width="100%" alt="">
               </div> 
                <div class="card-body">
                    <h2 class="card-title">${element.title}</h2>
                    <p class="card-content">${element.content}</p>
                    <p class="card-price">${element.price}</p>
                </div>
                    <button class="card-btn"><a href="${element.href}">Read More <span class="arr">&rarr;</span></a></button>
            </div>
        </div>
            `
        );
    });
}

function validateform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone_no = document.getElementById("phone_no").value;
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert("Name Contains Only Letters And Space😁");
      return false;
    }
    if (!/^\d{10}$/.test(phone_no)) {
      alert("Phone No Can Contains Number Only 10 Digit Numbers✔️");
      return false;
    }
  }
$(document).ready(function () {
    $(".top-btn").click(function () {
        window.scrollTo(0, 0);
        console.log("hii");
    })
    $(".top-btn-container").hide();
    $(window).scroll(function () {
        var x = $(document).scrollTop();
        if (x > 200) {
            $(".top-btn-container").show("slow");
        }
        else {
            $(".top-btn-container").hide("slow");
        }
    })
    //log in
    $("#log").click(function () {
        $(".log-in-cont").toggleClass("top");
    });
    $("#Home").click(function () {
        $(".log-in-cont").removeClass("top");
    })
    $(".dontacc").click(function () {
        $("#sign-up").toggleClass("dis-none");
        $("#log-in").toggleClass("dis-none");
    })
});

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "../Data.xml",
        dataType: "xml",
        success: getxml
    });
});
function getxml(xml) {
    $(xml).find("row").each(function () {
        let title = $(this).find("title").text();
        let p = $(this).find("p").text();
        let p2 = $(this).find("p2").text();
        let p3 = $(this).find("p3").text();
        let price = $(this).find("price").text();
        let img = $(this).find("img").text();
        $("#services-page").append(
            `
        <div class="ser-row row-1">
            <h1>${title}</h1>
            <div class="ser-left">
            <p>${p}</p>
            <p>${p2}</p>
            <p>${p3}</p>
                <div class="price"><strong>Price: </strong>${price}</div>
                <button class="ser-btn"><a href="">Book Now<span class="arr">&rarr;</span></a></button>
            </div>
            <div class="sr-img-con">
                <img src="${img}" alt="" srcset="">
            </div>
        </div>
        `
        )
    }
    )
}
