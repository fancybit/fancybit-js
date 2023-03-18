const date_ext = require("./date_ext");
const array_ext = require("./array_ext");

module.exports = {
    install_all(){
        date_ext();
        array_ext();
    },
    install_date() { date_ext(); },
    install_array() { array_ext(); }
}
