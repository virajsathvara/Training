/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.
'<p><strong><em>Javascript​ ​ Exercises</em></strong></p>
“Javascript​ ​ Exercises” */


let removeTags = (str) => {
    let new_str = str.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '');
    console.log(new_str);
}

removeTags('<ul><strong><em>Javascript​ ​ Exercises</em></strong></ul>');




