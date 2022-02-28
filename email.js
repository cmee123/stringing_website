function sendMailHelp(content) {
    /*
    emailjs.send("service_4ifttdl", "template_brve9ea", content)
    .then(function(res){
        console.log("success", res.status);
    })*/
}

function sendMailMystery(content) {
    emailjs.send("service_4ifttdl", "template_b3rp6xq", content)
    .then(function(res){
        console.log("success", res.status);
    })
}
