
export const validateComment = (data) => {

    const errors = {};

    if (!data.userName) {
        errors.userName = 'نام کاربری خود را وارد کنید.'
    } else if (/[<>\"'%;()&]/.test(data.userName)) {
        errors.userName = 'از کاراکتر های غیر مجاز استفاده نکنید !'
    } else {
        delete errors.userName
    }

    if (!data.email) {
        errors.email = "ایمیل را وارد کنید.";
    } else if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email) ) {
        errors.email = "ایمیل نامعتبر"
    } else {
        delete errors.email
    }

    if (!data.text) {
        errors.text = 'فیلد اجباری می باشد.'
    } else {
        delete errors.text
    }

    return errors;
}