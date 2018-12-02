(function ($) {
	$.fn.validettaLanguage = {};
	$.validettaLanguage = {
		init: function () {
			$.validettaLanguage.messages = {
				required: 'Это поле обязательно к заполнению. Пожалуйста, проверьте правильно ли заполнено поле.',
				email: 'Ваш адрес электронной почты является недопустимым. Пожалуйста, проверьте правильно ли заполнено поле.',
				number: 'Можно ввести только цифры в это поле.',
				maxLength: '{count} - максимально допустимое число символов.',
				minLength: '{count} - минимальное допустимое число символов.',
				maxChecked: 'Максимально допустимое количество опций - {count}. Пожалуйста, проверьте правильно ли заполнено поле.',
				minChecked: 'Пожалуйста выберите минимум {count} опций.',
				maxSelected: 'Максимум можно выделить {count}. Пожалуйста, проверьте правильно ли заполнено поле.',
				minSelected: 'Минимум можно выделить {count}. Пожалуйста, проверьте правильно ли заполнено поле.',
				notEqual: 'Поля не совпадают. Пожалуйста, проверьте правильно ли заполнено поле.',
				different: 'Содержимое полей не может совпадать.',
				creditCard: 'Неверный номер кредитной карты. Пожалуйста, проверьте правильно ли заполнено поле.'
			};
		}
	};
	$.validettaLanguage.init();
})(jQuery);
