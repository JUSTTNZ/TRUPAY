
//convert to a nigerian number;
const formatNumber = (phone) => {
    const phone_required_length = 11;

    phone = String(phone).trim();

    if (phone.length !== phone_required_length) throw new Error("the phone number should be 11 digits.");

    //check for the first digit.
    const regex = /^([0-9]{1})/;

    phone = phone.replace(regex, (_, $1) => "+234");

    return phone;
}

export default formatNumber