export const miXinForm = {
    data() {
        return {
            errors: {
                name: "",
                phone: "",
                description: "",
                email: "",
            },
            student: {
                name: "",
                phone: "",
                description: "",
                email: "",
            },
        };
    },
    methods: {
        validate() {
            let isValid = true;
            this.errors = {
                name: "",
                phone: "",
                description: "",
                email: "",
            };
            // validate name
            if (!this.student.name) {
                this.errors.name = " Không được bỏ trống trường này!";
                isValid = false;
            }
            // validate  email
            if (!this.student.email) {
                this.errors.email = " Không được bỏ trống trường này!";
                isValid = false;
            } else if (!this.isEmail(this.student.email)) {
                this.errors.email = "Trường này phải là email";
                isValid = false;
            }
            // validate phone
            if (!this.student.phone) {
                this.errors.phone = " Không được bỏ trống trường này!";
                isValid = false;
            } else if (!this.isNumber(this.student.phone)) {
                this.errors.phone = "Phone phải là số";
                isValid = false;
            } else if (this.student.phone.charAt(0) != '0') {
                this.errors.phone = "Số điện thoại phải bắt đầu bằng số 0";
                isValid = false;
            } else if (this.student.phone.length != 10) {
                this.errors.phone = "Số điện thoại không đúng. Phải là 10 số ";
                isValid = false;
            }
            // validate student desc
            if (!this.student.description) {
                this.errors.description = " Không được bỏ trống trường này!";
                isValid = false;
            } else if (this.student.description.length < 10) {
                this.errors.description =
                    " Mô tả quá ngắn vui lòng nhập trên 10 ký tự ";
                isValid = false;
            }
            return isValid;
        },
        isEmail(value) {
            return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        },
        isNumber(value) {
            return /^\d*$/.test(value);
        },
    },
};