/* Write​ ​ a ​ ​ pattern​ ​ that​ ​ matches​ ​ e-mail​ ​ addresses. */

/* let validEmail = (mail) => {
    //let pattern​ = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let result = mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    console.log(match);
} */
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

console.log(ValidateEmail('viraj-sdjasdf@yopmail.hjm.in'));
