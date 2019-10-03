/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position
(default​ ​ is​ ​ 1). */

let insert_string = (str, add_str, index) => {
    let new_str = str.slice(0, index) + add_str + str.slice(index, str.length);
    console.log(new_str);
}

insert_string('may the source be with you', 'force ', 8);