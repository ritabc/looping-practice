function disableSubmit() {
  $("#submit").prop("disabled", "true");
}

function validateInput() {
  // make sure values are submitted and test for 2 rules:
  /// 1, If countTo is (-), countBy must also be (-)
  /// 2. Absolute value of countTo >= countBy

  // If either are 0, disableSubmit
  if ((countBy === 0) || (countTo === 0)) {
    disableSubmit();
    return "Please enter non-zero numbers";
  }; else {

    // Is abs. value of countTo >= countBy?
    if ((Math.abs(countTo)) > (Math.abs(countBy))) {
      // then we want to check if both are positive OR both are (-)
      if ((countTo < 0) && (countBy < 0)) {
        enableSubmit();
      };
      else if ((countTo > 0) && (countBy > 0)) {
        enableSubmit();
      };
      else {
        return "Both numbers must be negative OR both must be positive"
      };
    };
    else {
      return "The absolute value of the Count To value must be greater than the Count By value"
    };
  };
}

$(document).ready(function() {
  disableSubmit();
  $("#submit").click(function(e) {
    e.preventDefault();
    validateInput();

    // get values of count-to and count-by
    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());


  });
});
