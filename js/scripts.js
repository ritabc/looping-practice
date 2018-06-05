function disableSubmit() {
  $("#submit").prop("disabled", "true");
};

function enableSubmit() {
  $("#submit").removeAttr("disabled");
};

function areFieldsBlank() {
  // if either isn't a number,
  var countTo = parseInt($("#count-to").val());
  var countBy = parseInt($("#count-by").val());
  if (countTo === null || countTo === "", countBy === null || countBy === "") {
    alert("Please enter data into fields")
    return false;
  } else {
    return true;
  };
};

function outputFunc(countTo, countBy) {
  outputArr = [];
  for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy) {
    output.push(currentNumber);
    return outputArr;
  };
};

function validateInput(countTo, countBy) {
  // make sure values are submitted and test for 2 rules:
  /// 1, If countTo is (-), countBy must also be (-)
  /// 2. Absolute value of countTo >= countBy

  // If either are 0, disableSubmit
  if ((countBy === 0) || (countTo === 0)) {
    alert("Please enter non-zero numbers");
  } else {

    // Is abs. value of countTo >= countBy?
    if ((Math.abs(countTo)) > (Math.abs(countBy))) {
      // then we want to check if both are positive OR both are (-)
      if ((countTo < 0) && (countBy < 0)) {
        enableSubmit();
      } else if ((countTo > 0) && (countBy > 0)) {
        enableSubmit();
      } else {
        alert("Both numbers must be negative OR both must be positive")
      }
    } else {
      alert("The absolute value of the Count To value must be greater than the Count By value")
    };
  };
};

$(document).ready(function() {
  disableSubmit();

  $("#submit").click(function() {
    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());
    if ((countTo == "") && (countBy === "")) {
      
    }
    // dataInFields = areFieldsBlank();
    // return dataInFields;
  });

  $("#submit").click(function(e) {
    e.preventDefault();
    // get values of count-to and count-by
    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());
    twoNumbers = areFieldsBlank();
    if (twoNumbers) {
      output = outputFunc(countTo, countBy);
      $("p#output").text(output)
    };

  });
});
