/**
 * Created by Kevin on 2015-05-08.
 */
"use strict";
function formMailVerification(){
	var information = location.search;
    information = information.substring(1, information.length);
    information = information.replace(/\+/g, " ");
    information = decodeURIComponent(information);
	
	
	
	var key = information.substring(0,1)
	var value = information.substring(2,3)
	if (key=="s"){
		if (value=="1"){
			document.getElementById('result').innerHTML = "<div class='center'><p class='success'>Congratulations!<br>Your email was sent successfully. Please allow up to 24 hours for our support service to reply. Thank you!</p></div>"
			$(".stamp").attr("src", "Images/Completed_stamp.png")
			$(".stamp").css("width", "23%")
		}
		if (value=="2"){
			document.getElementById('result').innerHTML = "<div class='center'><p class='failed'>Sorry! Email failed. Please try again later.</p></div>"
			$(".stamp").attr("src", "Images/denied.jpg")
			$(".stamp").css("width", "30%")
		}
		var top = document.getElementById("pageName").offsetTop;
		window.scrollTo(0, top);  
	}
}
$(document).ready(function(){
	formMailVerification();
    FormValidation.init();
});
var FormValidation =
{
    init: function()
    {
        $('.form').submit(FormValidation.submitListener)
        $('.form').change(FormValidation.changeListener);
    },

    rules:  // Rules as regular expressions
    {
        required: /\S/,
        email: /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/,
        telephone: /^(\+\d+)?( |\-)?(\(?\d+\)?)?( |\-)?(\d+( |\-)?)*\d+$/,
        phone_can: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        startWithCap: /^[A-ZÉÇÈÀË]/,
        onlyLetters: /^[A-Za-zéÉÇçèÈàÀëË]*$/,
        firstName:  /^([A-ZÉÇÈÀË])([a-z]{1,19})?$/,
        lastName: /^([A-ZÉÇÈÀË])(\D{1,29})?$/,
        postalCode: /^(\D)\d(\D) ?\d(\D)\d$/,
    },

    errors:  // corresponding error messages
    {
        required: "Please fill in this required field.",
        email: "Please enter a valid email address into this field.",
        telephone: "Please enter a valid telephone number into this field.",
        phone_can: "Please enter a valid telephone number. eg. (123) 456-7890",
        startWithCap: "This field must start with a capital letter",
        onlyLetters: "This field must have only letters",
        firstName:  "This field has a maximum of 20 letters.",
        lastName: "This field has a maximum of 30 letters.",
        postalCode: "Please enter a valid postal code. eg. A1A 1A1. Captilization is not required",
    },

    formats:  // Reformatting using groups from the regular expressions
    {
        phone_can: "($1) $2-$3"
    },

    changeListener: function(evt)
    {
        console.log("change listener");
        FormValidation.checkField(evt.target); // note that evt is a jQuery event
    },

    submitListener: function(evt)
    {
        console.log("submit listener");
        var fields = this.elements; //  "this" represents the form where the submit occurred.
        var first_invalid; // used to set focus to first invalid field
        // validation of each field
        for (var i = 0, ii = fields.length; i < ii; i++) {
            if (!FormValidation.checkField(fields[i])) {
                first_invalid = first_invalid || fields[i];
            }
        }
        if (first_invalid){ // we have at least one invalid field

            first_invalid.focus(); // set focus to first invalid field
            return false;
        }
    },

    checkField: function(aField){
        console.log("checking field");
        var classString = aField.className;
        var classes = classString.split(/\s+/); // an array of class names for the field
        for (var j = 0, jj = classes.length; j < jj; j++){
            var aClass = classes[j];
            var rule = FormValidation.rules[aClass];
            if (rule){ // for each class for which there is a rule,
                if (!rule.test(aField.value)){ //  we check that the field matches it
                    FormValidation.displayError(aField, FormValidation.errors[aClass]);
                    return false;
                }
                $(aField).css("border", "");
                // we reformat the field if possible
                var format = FormValidation.formats[aClass];
                if (format) {
                    aField.value = aField.value.replace(rule,format);
                }
            }
        }
        // field value is valid!
        // remove the error message for this field if any
        $(aField).next(".invalid").remove();
		//$(aField).css("background", "rgba(0,0,0, 0.2)");
		
        return true;
    },

    displayError: function(field, msg) {
        if (field.nextElementSibling) {
            if ($(field).next(".invalid").length) {
                $(field).next(".invalid").remove();
            }
            $(field).after('<p class="invalid">' + msg + '</p>');
            $(field).css("border", "2px solid #FF610D");
			//$(field).css("background", "rgba(0,0,0, 0.5)");
        }
    }
};

