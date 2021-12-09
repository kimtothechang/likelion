let inputId;
let inputPw;
let loginUserData;

$(".dataLoadButton").click(function () {
  let inputId = $(".id").val();
  let inputPw = $(".pw").val();
  $.ajax({
    url: "https://raw.githubusercontent.com/kimtothechang/ajaxlogintest/main/userdata.json",
    async: true,
    success: function (result) {
      loginUserData = JSON.parse(result).find(
        (user) => user["id"] === inputId && user["pw"] === inputPw
      );

      if (loginUserData) {
        success();
      } else {
        fail();
      }
    },
  });
  function success() {
    $(".dataLoadButton").css("display", "none");
    $(".id").css("display", "none");
    $(".pw").css("display", "none");
    $(".inputUserData").text("Welcome, " + inputId);
    $(".dataField").text(`You have ${loginUserData["phone"].slice(-4)} coins`);
  }

  function fail() {
    $(".dataLoadButton").css("display", "none");
    $(".id").css("display", "none");
    $(".pw").css("display", "none");
    $(".inputUserData").text("Login failed");
  }
});
