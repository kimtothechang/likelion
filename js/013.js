// 문제 : 1차 접종자의 퍼센트를 가지고 오세요!

fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
)
  .then(function (response) {
    console.log(1);
    return response.json();
  })
  .then(function (json) {
    console.log(2);
    console.log(json);
    return json;
  })
  .then(function (json) {
    console.log(3);
    console.log(json.filter((s) => s["시·도별(1)"] === "전국"));
    return;
  });
