
console.log('ready')
function sendEmail(){
    console.log('hola')
    Email.send({
        Host: "smtp.gmail.com",
        Username : "gtzjafet@gmail.com",
        Password : "jaf3t2020",
        To : 'gtzjafet97@gmailcom',
        From : "gtzjafet@gmail.com",
        Subject : "email test",
        Body : "Prueba de email",
        }).then(function(response){
            console.log(response)
        })
        
}