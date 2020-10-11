$(document).ready(function () { 
     //sessionStorage.clear();
    if (sessionStorage.getItem("NumOfCart") != null) {
        $('#spnCartCount').empty();
        $('#spnCartCount').append(sessionStorage.getItem("NumOfCart"));
    }
    fetchDetails();
    $('.imgComdty').mouseenter(function (e) {
        //alert('enter..' + e.target.id);
       // $('#' + e.target.id).css({'width':''});
    });

    $('.imgComdty').mouseout(function (e) {
       // alert('out..' + e.target.id);
    });

    $('#login').click(function () {
        $('#loginDiv').css('display', 'block');
        $('#signupDiv').css('display', 'none');
        Clear();
        $('#hdnLogin').trigger('click');
    });

    $('#IdNewUserBtn').click(function () {
        Clear();
        $('#loginDiv').css('display', 'none');
        $('#signupDiv').css('display', 'block');
    });

    $('#btnClear').click(function () {
        Clear();       
    });

    $('#LoginBtn').click(function () {
        Validation("Login");
    });

    $('#btnSignup').click(function () {
        Validation("Signup");
    });

    $('#cartView').click(function () {
        //sessionStorage.setItem("NumOfCart", cartCount);
    });

    
});

function Validation(val) {
    var errMsg = "Y";
   
    if (val == "Login") {        
        if ($('#txtLoginUserID').val() == "" || $('#txtLoginUserID').val() == undefined) {
            $("#loginUseridErrorMsg").empty();
            errMsg = "N"
            $("#loginUseridErrorMsg").append("<p>*Enter Mobile Number!</p>");
        } else {
            $("#loginUseridErrorMsg").empty();
            errMsg = "Y"
        }

        if (($('#txtLoginPass').val() == "" || $('#txtLoginPass').val() == undefined)) {
            $("#loginPassErrorMsg").empty();
            errMsg = "N"
            $("#loginPassErrorMsg").append("<p>*Enter Password!</p>");
        } else {
            $("#loginPassErrorMsg").empty();
            errMsg = "Y"
        }      
    } else if (val == "Signup") {       
        if ($('#txtSignName').val() == "" || $('#txtSignName').val() == undefined) {
            $("#signupNameErrorMsg").empty();
            errMsg = "N"
            $("#signupNameErrorMsg").append("<p>*Enter Your Name!</p>");
        } else {
            errMsg = "Y"
            $("#signupNameErrorMsg").empty();
        }

        if (($('#txtSignUserID').val() == "" || $('#txtSignUserID').val() == undefined)) {
            $("#signupMobNumErrorMsg").empty();
            errMsg = "N"
            $("#signupMobNumErrorMsg").append("<p>*Enter Mobile Number!</p>");
        } else {
            errMsg = "Y"
            $("#signupMobNumErrorMsg").empty();
        }

        if (($('#txtSignPass').val() == "" || $('#txtSignPass').val() == undefined)) {
            $("#signupPassErrorMsg").empty();
            errMsg = "N"
            $("#signupPassErrorMsg").append("<p>*Enter Password!</p>");
        } else {
            errMsg = "Y"
            $("#signupPassErrorMsg").empty();
        }

        if (($('#txtSignRePass').val() == "" || $('#txtSignRePass').val() == undefined)) {
            $("#signupRepassErrorMsg").empty();
            errMsg = "N"
            $("#signupRepassErrorMsg").append("<p>*Enter RePassword!</p>");
        } else {
            errMsg = "Y"
            $("#signupRepassErrorMsg").empty();
        }

        if (($('#txtSignPass').val() != "") && ($('#txtSignRePass').val() != "")) {

            if ($('#txtSignPass').val() != $('#txtSignRePass').val()) {
                $("#signupRepassErrorMsg").empty();
                errMsg = "N"
                $("#signupRepassErrorMsg").append("<p>*Password and Repassword not match!</p>");
            } else {
                errMsg = "Y"
                $("#signupRepassErrorMsg").empty();
            }           
        }       
    }

    if (errMsg == "N") {

    }
}

function Clear() {
    $('#txtLoginUserID').val('');
    $('#txtLoginPass').val('');
    $('#txtSignName').val('');
    $('#txtSignUserID').val('');
    $('#txtSignPass').val('');
    $('#txtSignRePass').val('');
    $("#loginUseridErrorMsg").empty();
    $("#loginPassErrorMsg").empty();
    $("#signupNameErrorMsg").empty();
    $("#signupMobNumErrorMsg").empty();
    $("#signupPassErrorMsg").empty();
    $("#signupRepassErrorMsg").empty();    
}

function fetchDetails() {
    debugger;    
    $('#mainBody').empty();
    for (var i = 0; i < 5; i++) {
        var a = '';
        a += '<div class="w3-card-4 cardStyle"><div class="w3-card-2"><img alt="img" id="comdtyID' + i +'" class="imgComdty" src="../Images/LogoFasal.png" />';
        a += '</div><div class="comdtyText"><h6 id="textName'+i+'">Basmati Rice</h6></div><div class="w3-text divtext"><p class="ptext"><span style="font-weight:600;">Price</span> <i class="fa fa-rupee" id="price'+i+'">40</i> Per/Kg</p>';
        a += '<p class="qtext"><span style="font-weight:600;">Quantity</span> <i class="fa fa-balance-scale" id="quant'+i+'">80</i>Kg <span>Left</span></p></div><br /><div class="w3-text divtext"><p class="dtext"><span style="font-weight:600;">Quality</span> <span id="quality'+i+'">Good</span></p>';
        a += '<p class="ctext"><span style="font-weight:600;">Contact</span> <i class="fa fa-phone" id="phone'+i+'">8765435678</i></p></div><br /><div class=""><input type="button" value="Buy" class="w3-btn btnBuy" id="btnBuyId'+i+'" /> <input type="button" data-index="'+i+'" value="Add to Cart" class="w3-btn btnCart" id="btnAddCartId'+i+'" onclick="addToCart(this);" /></div></div>';
        $('#mainBody').append(a);
    }



    
    //$.ajax({
    //    cache: false,
    //    url: "https://localhost:44365/service.asmx/GetAll",
    //    type: "POST",
    //    accepts: "json",
    //    success: function (data) {
    //        alert(data);
    //    },
    //    error: function (e) {
    //        alert(e);
    //    } 
    //});
}
var cartCount = 0;
var cartView = new Array();
function addToCart(val) {
    var id = val.id;
    var index = val.dataset.index;
    var view = {};
    view.Image = $("#comdtyID" + index).attr("src");
    view.TextName = $("#textName" + index).text();
    view.Price = $("#price" + index).text();
    view.Quantity = $("#quant" + index).text();
    view.Quality = $("#quality" + index).text();
    view.Phone = $("#phone" + index).text();
    
    $('#spnCartCount').empty();
    if (sessionStorage.getItem("NumOfCart") != null) {
        cartCount = parseInt(sessionStorage.getItem("NumOfCart"));
        cartCount += 1;
    } else {
        cartCount += 1;
    }    
    cartView.push(view);
    sessionStorage.removeItem("NumOfCart");
    sessionStorage.removeItem("CartView");
    sessionStorage.setItem("NumOfCart", cartCount);
    sessionStorage.setItem("CartView", JSON.stringify(cartView));
    $('#spnCartCount').append(cartCount);
}
