// JavaScript Document
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
$("#form").validetta();

$('#form').validetta({
  showErrorMessages : true, // If you dont want to display error messages set this option false
  /** You can display errors as inline or bubble */
  display : 'bubble', // bubble or inline
  /**
   * Error template class
   * This is the class which will be added to the error message window template.
   * If you want special style, you can change class name as you like with this option.
   * Error message window template : <span class="errorTemplateClass">Error messages will be here !</span>
   */
  errorTemplateClass : 'validetta-bubble',
  /** Class that would be added on every failing validation field */
  errorClass : 'validetta-error',
  /** Same for valid validation */
  validClass : 'validetta-valid', // Same for valid validation
  bubblePosition: 'right', // Bubble position // right / bottom
  bubbleGapLeft: 15, // Right gap of bubble (px unit)
  bubbleGapTop: 0, // Top gap of bubble (px unit)
  /* To enable real-time form control, set this option true. */
  realTime : false,
  validators: {} // Custom validators stored in this variable
  /** Callback functions */
  onValid : function(){},
  onError : function(){}
});

$('#form').validetta({
  onValid : function( event ) {
    event.preventDefault(); // Will prevent the submission of the form
    alert( 'Nice, Form is valid.' );
  },
  onError : function( event ){
    alert( 'Stop bro !! There are some errors.');
  }
});

$('#form').validetta({
  onError : function( event ){
    // this -> form object
    var invalidFields = this.getInvalidFields();
  }
});
$('#form').validetta({
  remote : {
    validator_name : {
      // Here, you must use ajax setting determined by jQuery
      // More info : http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings
      type : 'POST',
      url : 'remote.php',
      datatype : 'json'
    }
  }
});
