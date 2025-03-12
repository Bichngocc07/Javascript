function filterValidEmails(emails) {
    if (!Array.isArray(emails)) {
        return "Dữ liệu không hợp lệ";
    }

    return emails.filter(email => {
        return email.includes("@") && !email.includes(" ");
    });
}
console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));

console.log(filterValidEmails([])); 

console.log(filterValidEmails("abc")); 

console.log(filterValidEmails(["onlyspaces @ domain.com", "valid@domain.com"])); 

