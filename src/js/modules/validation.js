var $ = require('jquery');
var axios = require('axios');
const Popup = require('../utils/Popup');

const urlApi = 'http://localhost:3001/api/v1'

module.exports = () => {
    $(document).ready(function () {
        if ($('.popup').length) {
            Popup.init();
        }

        $('#feedback-submit').on('click', function (e) {
            e.preventDefault();

            var $this = $(this).closest('#feedback-form')


            if (validateThis($this, feedbackFormLabel)) {
                postFormData($this, function (data) {
                    if (data.status == 5) {
                        Popup.open('success', 'Успешно');
                        // появление попапа success
                    } else {
                        Popup.open('error', 'Ошибка 404');
                    }
                });
            }

            $this.find('#feedback-clean').on('click', function(e) {
                e.preventDefault();
                var items = $this.find('.feedback__input');
                items.each(() => {
                    items.val('');
                })
            })

            $(document).on('click', function (e) {
                Popup.close();
                removeErrorClasses(feedbackFormLabel);
            });
        });

        
    });

    function postFormData(form, host) {
        var reqFields = form.find('[name]');
        var dataObject = {};

        reqFields.each(function () {
            var $this = $(this);
            var value = $this.val();
            var name = $this.attr('name');

            dataObject[name] = value;
        });

        return axios.post(host, dataObject);
    }

    function validateThis(form, className) {
        var textType = form.find("[data-validation='text']");
        var mailType = form.find("[data-validation='mail']");
        var passwordType = form.find("[data-validation='password']");
        var humanType = form.find("[data-validation='human']");
        var robotType = form.find("[data-validation='robot']");

        var isValid = false;

        function robotTest() {
            if (robotType.length) {
                var value = false;
                robotType.each(function () {
                    var $this = $(this);
                    var notEmptyField = $this.is(":checked")
                    if (notEmptyField) {
                        value = !!Number($this.val());
                    }
                });
                if (value) {
                    isValid = true;
                } else {
                    Popup.open('error', 'Подтвердите что вы не робот');
                    isValid = false;
                }
            }
        }

        robotTest();

        humanType.each(function () {
            var $this = $(this);
            var notEmptyField = $this.prop('checked')

            if (notEmptyField) {
                isValid = true;
            } else {
                Popup.open('error', 'Подтвердите что вы человек');
                isValid = false;
            }
        });

        passwordType.each(function () {
            var $this = $(this);
            var notEmptyField = !!$this.val();

            if (notEmptyField) {
                isValid = true;
            } else {
                Popup.open('error', 'Вы не ввели пароль');
                isValid = false;
            }
        });

        textType.each(function () {
            var $this = $(this);
            var notEmptyField = !!$this.val();

            if (notEmptyField) {
                isValid = true;
            } else {
                Popup.open('error', 'Введите данные');
                isValid = false;
            }
        });

        mailType.each(function () {
            var $this = $(this);
            var notEmptyField = !!$this.val();
            var regExp = /@{1}/;
            var isMail = regExp.test($this.val());

            if (notEmptyField) {
                if (isMail) {
                    isValid = true;
                } else {
                    Popup.open('error', 'Неверный email');
                    isValid = false;
                }
            } else {
                Popup.open('error', 'Вы не ввели логин');
                isValid = false;
            }


        });

        return isValid;
    }
}