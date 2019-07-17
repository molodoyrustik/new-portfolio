var $ = require('jquery');
var axios = require('axios');

const urlApi = 'http://localhost:3001/api/v1'
module.exports = () => {
    $(document).ready(function () {
        if ($('.popup').length) {
            Popups.init();
        }

        const inputLabel = '.login__label';
        const feedbackFormLabel = '.feedback__form'

        $('#form').on('submit', function (e) {
            e.preventDefault();

            var $this = $(this);

            if (validateThis($this, inputLabel)) {
                postFormData($this, `${urlApi}/auth/signin`)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        Popups.open('success', 'Успешно');
                        setTimeout(() => {
                            Popups.close();
                            // window.location.href = "admin.html"
                        }, 1000)
                    } 
                })
                .catch((err) => {
                    Popups.open('error', 'Ошибка 404');
                })
            }

            $(document).on('click', function (e) {
                Popups.close();
                removeErrorClasses(inputLabel);
            });
        });

        $('#feedback-submit').on('click', function (e) {
            e.preventDefault();

            var $this = $(this).closest('#feedback-form')


            if (validateThis($this, feedbackFormLabel)) {
                postFormData($this, function (data) {
                    if (data.status == 5) {
                        Popups.open('success', 'Успешно');
                        // появление попапа success
                    } else {
                        Popups.open('error', 'Ошибка 404');
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
                Popups.close();
                removeErrorClasses(feedbackFormLabel);
            });
        });

        
    });

    var Popups = (function () {
        var popup = $('.popup');

        return {
            close: function () {
                popup.hide();
            },

            init: function () {
                $('.popup__close, .popup__overlay').on('click', (e) => {
                    e.preventDefault();
                    this.close();
                })
            },

            open: function (className, text) {
                this.close();
                popup.addClass(className);
                popup.find('.popup__content-inner').text(text);
                popup.fadeIn(200);
            }
        }
    })();

    function postFormData(form, host, successCallback) {
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

    function addErrorClass(className) {
        $(className).addClass('error');
    }

    function removeErrorClasses(className) {
        $(className).removeClass('error');
    }

    function validateThis(form, className) {
        window.$ = $;
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
                    Popups.open('error', 'Подтвердите что вы не робот');
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
                Popups.open('error', 'Подтвердите что вы человек');
                isValid = false;
            }
        });

        passwordType.each(function () {
            var $this = $(this);
            var notEmptyField = !!$this.val();

            if (notEmptyField) {
                isValid = true;
            } else {
                Popups.open('error', 'Вы не ввели пароль');
                addErrorClass(className);
                isValid = false;
            }
        });

        textType.each(function () {
            var $this = $(this);
            var notEmptyField = !!$this.val();

            if (notEmptyField) {
                isValid = true;
            } else {
                addErrorClass(className);
                Popups.open('error', 'Введите данные');
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
                    addErrorClass(className);
                    Popups.open('error', 'Неверный email');
                    isValid = false;
                }
            } else {
                addErrorClass(className);
                Popups.open('error', 'Вы не ввели логин');
                isValid = false;
            }


        });

        return isValid;
    }
}