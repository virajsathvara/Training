/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user.
"​ abc...@example.com​ " */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Enter email address: `, (mail) => {
  // TODO: Log the answer in a database
  hide_mail(mail);

  rl.close();
});

let hide_mail = (mail) => {
    let part_01 = mail.slice(0, mail.indexOf('@'));
    let part_02 = mail.slice(mail.indexOf('@')+1, mail.indexOf('.com'));
    let new_mail = part_01.slice(0,3)+'...@'+part_02+'.com';
    console.log(' Your email is:', new_mail);
}