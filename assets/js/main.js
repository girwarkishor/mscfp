$(document).ready(function () {
  $(".video-container").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".article-container").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".article-container-a").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(function () {
    var $el, $ps, $up, totalHeight;

    $(".checkbox-arrow img").click(function () {
      // IE 7 doesn't even get this far. I didn't feel like dicking with it.

      totalHeight = 0;

      $el = $(this);
      $p = $el.parent();
      $up = $p.parent();
      $ps = $up.find("label:not('.read-more-down')");

      // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
      $ps.each(function () {
        totalHeight += $(this).outerHeight();
        // FAIL totalHeight += $(this).css("margin-bottom");
      });

      $up
        .css({
          // Set height to prevent instant jumpdown when max height is removed
          height: $up.height(),
          "max-height": 9999,
        })
        .animate({
          height: totalHeight + 15,
        });

      // fade out read-more
      $p.fadeOut();

      // prevent jump-down
      return false;
    });
  });

  function getQueryStringParam(param) {
    var url = window.location.toString();
    url.match(/\?(.+)$/);
    var params = RegExp.$1;
    params = params.split("&");
    var queryStringList = {};
    for (var i = 0; i < params.length; i++) {
      var tmp = params[i].split("=");
      queryStringList[tmp[0]] = unescape(tmp[1]);
    }
    return queryStringList[param];
  }

  function setWindowWH() {
    var windowWidth = $(window).width();
    if (windowWidth < 768) {
      if (getQueryStringParam("p_p_lifecycle")) {
        var cmMmc = getQueryStringParam("p_p_lifecycle");
        var paramsValue = "087559e11abeac0647469d0fe16b00d6b48e7b9d";
        if (cmMmc === paramsValue) {
          var formCollapse = document.getElementsByClassName("form-tab1")[0];
          formCollapse.classList.add("card--accordion-content");
          formCollapse.childNodes[1].childNodes[1].childNodes[3].className =
            "d-none";
          formCollapse.childNodes[1].childNodes[1].childNodes[5].className =
            "d-none";
          console.dir(formCollapse.childNodes[1].childNodes[1].childNodes[1]);
          formCollapse.childNodes[1].childNodes[1].childNodes[1].addEventListener(
            "click",
            function () {
              $(".form-tab1 .card").slideDown("slow");
              formCollapse.classList.remove("card--accordion-content");
              formCollapse.classList.add("card--accordion-content-opened");
              formCollapse.childNodes[1].childNodes[1].childNodes[1].childNodes[1].classList =
                "d-none";
              formCollapse.childNodes[1].childNodes[1].childNodes[3].className =
                "card-text";
              formCollapse.childNodes[1].childNodes[1].childNodes[5].className =
                "";
              setTimeout(function () {
                formCollapse.classList.remove("card--accordion-content-opened");
              }, 3000);
            }
          );
        } else {
        }
      } else {
        console.log("could not found");
      }
    }
  }
  $(window).on("load resize", function () {
    setWindowWH();
  });
});

window.onload = function () {
  var mobileNumber = document.getElementById("mobileNumber");
  var fullName = document.getElementById("fullName");
  var email = document.getElementById("email");
  var checkbox = document.getElementById("customCheck1");
  var mobileNumber1 = document.getElementById("mobileNumber1");
  var fullName1 = document.getElementById("fullName1");
  var email1 = document.getElementById("email1");
  var checkbox1 = document.getElementById("customCheck2");
  var btnTab1 = document.getElementsByClassName("tab1");
  var btnTab2 = document.getElementsByClassName("tab2");
  var btnTab3 = document.getElementsByClassName("tab3");
  var formTab1 = document.getElementsByClassName("form-tab1");
  var formTab2 = document.getElementsByClassName("form-tab2");
  var formTab3 = document.getElementsByClassName("form-tab3");
  var checkSidebar = document.getElementsByClassName("sidebar");
  var formActiveDsk = document.querySelectorAll(".dsk .form-active");
  var formActiveMob = document.querySelectorAll(".mob .form-active");
  var deskFormWidth = $(window).width();

  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    min: 0,
    max: 20,
    grid: true,
    max_postfix: "+",
    prefix: "Age: ",
    postfix: " years",
  });

  function winWidth() {
    return deskFormWidth;
  }

  if (checkSidebar.length > 0) {
    var sidebar = new StickySidebar(".sidebar", {
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: ".main-content",
      innerWrapperSelector: ".sidebar__inner",
    });
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validateFormTab1() {
    // This function deals with validation of the form fields
    var valid = true;
    if (winWidth() > 767) {
      if (mobileNumber.value == "") {
        alert("Enter your mobile number");
        mobileNumber.focus();
        valid = false;
        return valid;
      }

      if (mobileNumber.value.length < 10) {
        alert("Please enter valid mobile number");
        mobileNumber.focus();
        valid = false;
        return valid;
      }

      if (isNaN(mobileNumber.value)) {
        alert("Mobile Number Should Be Numeric only..!!!");
        mobileNumber.focus();
        valid = false;
        return valid;
      }

      if (!checkbox.checked) {
        alert("Checkbox is required");
        checkbox.focus();
        valid = false;
        return valid;
      }
      return valid;
    } else {
      if (mobileNumber1.value == "") {
        alert("Enter your mobile number");
        mobileNumber.focus();
        valid = false;
        return valid;
      }

      if (mobileNumber1.value.length < 10) {
        alert("Please enter valid mobile number");
        mobileNumber.focus();
        valid = false;
        return valid;
      }

      if (isNaN(mobileNumber1.value)) {
        alert("Mobile Number Should Be Numeric only..!!!");
        mobileNumber.focus();
        valid = false;
        return valid;
      }

      if (!checkbox1.checked) {
        alert("Checkbox is required");
        checkbox.focus();
        valid = false;
        return valid;
      }
      return valid;
    }
  }

  function validateFormTab2() {
    // This function deals with validation of the form fields
    var valid = true;
    if (winWidth() > 767) {
      if (fullName.value == "") {
        alert("Enter your name");
        fullName.focus();
        valid = false;
        return valid;
      }

      if (email.value == "") {
        alert("Enter your email");
        email.focus();
        valid = false;
        return valid;
      }

      if (!validateEmail(email.value)) {
        alert("Please enter valid email");
        email.focus();
        valid = false;
        return valid;
      }

      return valid;
    } else {
      if (fullName1.value == "") {
        alert("Enter your name");
        fullName.focus();
        valid = false;
        return valid;
      }

      if (email1.value == "") {
        alert("Enter your email");
        email.focus();
        valid = false;
        return valid;
      }

      if (!validateEmail(email1.value)) {
        alert("Please enter valid email");
        email.focus();
        valid = false;
        return valid;
      }

      return valid;
    }
  }

  function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 5);
  }

  function unfade(element) {
    var op = 0.1; // initial opacity
    element.style.display = "block";
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
      element.classList.remove("d-none");
    }, 10);
  }

  var tabOne = function (i) {
    fixStepIndicator(0);
    unfade(formTab1[i]);
    // formTab1[i].classList.remove("d-none");
    formTab2[i].classList.add("d-none");
    formTab3[i].classList.add("d-none");
  };

  var tabTwo = function (i) {
    fixStepIndicator(3);
    fade(formTab1[i]);
    // formTab1[i].classList.add("d-none");
    unfade(formTab2[i]);
    // formTab2[i].classList.remove("d-none");
    formTab3[i].classList.add("d-none");
  };

  var tabThree = function (i) {
    fixStepIndicator(4);
    formTab1[i].classList.add("d-none");
    // formTab2[i].classList.add("d-none");
    fade(formTab2[i]);
    unfade(formTab3[i]);
    // formTab3[i].classList.remove("d-none");
  };

  function fixStepIndicator(n) {
    if (winWidth() > 767) {
      var i,
        x = formActiveDsk;
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" show", "");
      }
      //... and adds the "active" class to the current step:
      x[n].className += " show";
    } else {
      var i,
        x = formActiveMob;
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" show", "");
      }
      //... and adds the "active" class to the current step:
      x[n].className += " show";
    }
  }

  if (btnTab1.length > 0) {
    formActiveDsk[0].addEventListener("click", function (e) {
      tabOne(1);
    });

    formActiveDsk[1].addEventListener("click", function (e) {
      var valid = validateFormTab1();
      if (valid == true) {
        tabTwo(1);
      }
    });

    formActiveDsk[2].addEventListener("click", function (e) {
      tabOne(1);
    });

    formActiveDsk[3].addEventListener("click", function (e) {
      tabTwo(1);
    });

    formActiveDsk[4].addEventListener("click", function (e) {
      tabOne(1);
    });

    formActiveMob[0].addEventListener("click", function (e) {
      tabOne(0);
    });

    formActiveMob[1].addEventListener("click", function (e) {
      var valid = validateFormTab1();
      if (valid == true) {
        tabTwo(0);
      }
    });

    formActiveMob[2].addEventListener("click", function (e) {
      tabOne(0);
    });

    formActiveMob[3].addEventListener("click", function (e) {
      tabTwo(0);
    });

    formActiveMob[4].addEventListener("click", function (e) {
      tabOne(0);
    });

    btnTab1[0].addEventListener("click", function (e) {
      var valid = validateFormTab1();
      if (valid == true) {
        tabTwo(0);
      }
    });

    btnTab2[0].addEventListener("click", function (e) {
      var valid = validateFormTab2();
      if (valid == true) {
        tabThree(0);
      }
    });

    btnTab3[0].addEventListener("click", function (e) {
      tabOne(0);
    });
  }

  if (btnTab1.length == 2) {
    btnTab1[1].addEventListener("click", function (e) {
      var valid = validateFormTab1();
      if (valid == true) {
        tabTwo(1);
      }
    });

    btnTab2[1].addEventListener("click", function (e) {
      var valid = validateFormTab2();
      if (valid == true) {
        tabThree(1);
      }
    });

    btnTab3[1].addEventListener("click", function (e) {
      tabOne(1);
    });
  }

  // tab1.addEventListener("click", tabTwo);
  // tab2.addEventListener("click", tabThree);
  // tab3.addEventListener("click", tabOne);
  $(window).on("load resize", function () {
    winWidth();
  });

  /* Window Reload | Start */
  var timeOutFunctionId;

  function workAfterResizeIsDone() {
    window.location.reload();
  }

  window.addEventListener("resize", function () {
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(workAfterResizeIsDone, 500);
  });
  /* Window Reload | End */

  /* Read More | Starts */
  if (document.getElementById("moreBtn")) {
    document.getElementById("moreBtn").addEventListener("click", function (e) {
      if (document.getElementById("more").classList.contains("read-more-acc")) {
        document.getElementById("more").classList.remove("read-more-acc");
        document.getElementById("more").classList.add("read-more-acc-opened");
        e.target.innerHTML = "Read Less";
      } else {
        document
          .getElementById("more")
          .classList.remove("read-more-acc-opened");
        document.getElementById("more").classList.add("read-more-acc");
        e.target.innerHTML = "Read More";
      }
    });
  }

  /* Read More | End */

  // Nav Pill
  $("#msc-tabs a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  /* Message Sending Through API | Start */
  var getSmsID = document.getElementById("getSmsID");
  var getFacebookID = document.getElementById("getFacebookID");
  var getTwitterID = document.getElementById("getTwitterID");
  var getWhatsappID = document.getElementById("getWhatsappID");
  var getEmailID = document.getElementById("getEmailID");
  var getFacebookID_Mobile = document.getElementById("getFacebookID_Mob");
  var getTwitterID_Mobile = document.getElementById("getTwitterID_Mob");
  var getWhatsappID_Mobile = document.getElementById("getWhatsappID_Mob");
  var smsText = "This is text message";
  var facebookText = "This is facebookText";
  var twitterText = "This is twitterText";
  var whatsappText = "This is whatsappText";
  var emailSubject = "This is emailSubject";
  var emailText = "This is emailText";
  var referralUrl = "www.google.com";

  if (/MacIntel|iPhone|iPad|iPod/i.test(navigator.platform)) {
    getSmsID.setAttribute(
      "href",
      "sms:&body=" + smsText + encodeURI(referralUrl)
    );
  } else {
    getSmsID.setAttribute(
      "href",
      "sms:?body=" + smsText + encodeURI(referralUrl)
    );
  }

  var facebookLink =
    "https://www.facebook.com/sharer.php?u=" +
    encodeURI(referralUrl) +
    "&quote=" +
    encodeURI(facebookText) +
    "%0a%0a" +
    encodeURI(referralUrl);
  getFacebookID.setAttribute("href", facebookLink);
  getFacebookID_Mobile.setAttribute("href", facebookLink);

  var twitterLink =
    "http://twitter.com/intent/tweet?text=" +
    twitterText +
    encodeURI(referralUrl);
  getTwitterID.setAttribute("href", twitterLink);
  getTwitterID_Mobile.setAttribute("href", twitterLink);

  var whatsappLink =
    "https://api.whatsapp.com/send?text=" +
    encodeURI(whatsappText) +
    "%0a%0a" +
    encodeURI(referralUrl);
  getWhatsappID.setAttribute("href", whatsappLink);
  getWhatsappID_Mobile.setAttribute("href", whatsappLink);

  var emailLink =
    "mailto:?subject=" +
    emailSubject +
    "&body=" +
    emailText +
    encodeURI(referralUrl);
  getEmailID.setAttribute("href", emailLink);
  /* Message Sending Through API | End */

  // Calculator | Start
  // current cost of education for your child
  var currentCostOfEducation = {
    Accountant: 100000,
    ArmedForces: 200000,
    Artist: 1200000,
    Chef: 800000,
    Doctor: 3000000,
    Engineer: 400000,
    FashionDesigner: 600000,
    ITProfessional: 1500000,
    Lawyer: 800000,
    Linguist: 200000,
    Manager: 1500000,
    MediaProfessional: 500000,
    Pilot: 3000000,
    Scientist: 200000,
    SocialScientist: 200000,
    SportsPerson: 1500000,
    Teacher: 200000,
  };

  // current cost of marriage for your child
  var currentCostOfMarriage = {
    Son: 1000000,
    Daughter: 1000000,
  };

  // form inputs
  var userInputs = {
    amountSaved: 0,
    yearsAt: 1,
    monthlySavings: 0,
    inflation: 0.1,
    ror: 0.05,
  };
  var childAge = 0;

  // reflecting the value of the slider in the paragraph
  function range(element) {
    element.nextElementSibling.innerText = "Age: " + element.value;
  }

  // computing age from date of birth
  function dob() {
    return (
      (Date.now() -
        Date.parse(userInputs["dob"].split("/").reverse().join("-"))) /
      (1000 * 60 * 60 * 24 * 365)
    );
  }

  // the actual calculator math
  function compute() {
    var adjustedReturn =
      (parseFloat(userInputs.ror) - parseFloat(userInputs.inflation)) /
      (1 + parseFloat(userInputs.inflation));
    var annualisedReturn =
      parseFloat(userInputs.ror) / (1 + parseFloat(userInputs.ror));
    var compounding = 12 * (1 - Math.pow(1 - annualisedReturn, 1 / 12));

    //var yearsLeft = userInputs.yearsAt - childAge;

    var yearsLeft = parseInt(userInputs.yearsAt);
    var amountSaved = parseInt(userInputs.amountSaved);

    var timeWeightedROR =
      (Math.pow(1 + parseFloat(userInputs.ror), yearsLeft) - 1) / compounding;
    var annualisedMonthlySavings = parseInt(userInputs.monthlySavings) * 12;
    var totalSavings =
      amountSaved * Math.pow(1 + userInputs.ror, yearsLeft) +
      annualisedMonthlySavings * timeWeightedROR;
    var amtRequiredToFund =
      userInputs.scenario *
      Math.pow(1 + parseFloat(userInputs.inflation), yearsLeft);
    var totalAmtRequired = Math.round(amtRequiredToFund, 2);
    var amountNeeded = amtRequiredToFund - totalSavings;
    var monthlySavingNeeded = amountNeeded / timeWeightedROR / 12;
    var howMuchToSave =
      monthlySavingNeeded > 0 ? Math.round(monthlySavingNeeded, 4) : 0;

    document.getElementById("fundRequired").innerText = isNaN(totalAmtRequired)
      ? 0
      : totalAmtRequired;
    document.getElementById("monthlySavingsRequired").innerText = howMuchToSave;
  }

  document.querySelectorAll(".form").forEach(function (each) {
    each.addEventListener("change", function (e) {
      userInputs[e.target.id] = e.target.value;

      if (e.target.type == "range") {
        range(e.target);
      }

      if (e.target.id == "goal") {
        if (e.target.value == "Education") {
          document.getElementById("education").classList.contains("d-none")
            ? document.getElementById("education").classList.remove("d-none")
            : "";
          document.getElementById("scenario").value = "";
        } else if (e.target.value == "Marriage") {
          document.getElementById("education").classList.contains("d-none")
            ? ""
            : document.getElementById("education").classList.add("d-none");
          document.getElementById("scenario").value = currentCostOfMarriage.Son;
          userInputs.scenario = currentCostOfMarriage.Son;
        }
      }

      if (e.target.id == "profession") {
        document.getElementById("scenario").value =
          currentCostOfEducation[e.target.value];
        userInputs.scenario = currentCostOfEducation[e.target.value];
      }

      compute();

      //if (e.target.id == "dob") {
      //    childAge = Math.floor(dob());
      //    document.getElementById("yearsAt").setAttribute("min", childAge);
      //    document.getElementById("yearsAt").value = childAge;
      //    range(document.getElementById("yearsAt"));
      //}
    });
  });
};
