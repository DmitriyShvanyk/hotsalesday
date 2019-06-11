$('document').ready(function() {
    $('#form_order').validate({

        rules: {
            name_order: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			
			tel_order: {
                required: true,
                //number: true,
                minlength: 6,
                maxlength: 20
            },
			
			email_order: {
                required: true,							
				email: true
            }
			
			
        },

        messages: {

           "name_order": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"tel_order": {
				required: "Заполните это поле",
                //number: "Только цифры",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"email_order": {
				required: "Заполните это поле",
				email: "Введите корректный адрес электронной почты"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-order',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);
					
					

                    $("#form_order").clearForm();
                }
            });
        }

    });
});

$('document').ready(function() {
    $('#form_order1').validate({

        rules: {
            name_order1: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			
			tel_order1: {
                required: true,
                //number: true,
                minlength: 6,
                maxlength: 20
            },
			
			email_order1: {
                required: true,							
				email: true
            },
			
			company_order1: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			
			position_order1: {
                required: true,
                minlength: 2,
                maxlength: 50
            }
			
        },

        messages: {

           "name_order1": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"tel_order1": {
				required: "Заполните это поле",
                //number: "Только цифры",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"email_order1": {
				required: "Заполните это поле",
				email: "Введите корректный адрес электронной почты"
            },
			
			"company_order1": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"position_order1": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-order1',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);
					
					

                    $("#form_order1").clearForm();
                }
            });
        }

    });
});

$('document').ready(function() {
    $('#form_pay').validate({

        rules: {
            name_pay: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
			
			tel_pay: {
                required: true,
                //number: true,
                minlength: 6,
                maxlength: 20
            },
			
			email_pay: {
                required: true,							
				email: true
            }			
			
        },

        messages: {

           "name_pay": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"tel_pay": {
				required: "Заполните это поле",
                //number: "Только цифры",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },
			
			"email_pay": {
				required: "Заполните это поле",
				email: "Введите корректный адрес электронной почты"
            }

        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-pay',

                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 6000000);					

                    $("#form_pay").clearForm();
                }
            });
        }

    });
});