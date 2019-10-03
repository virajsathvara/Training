/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​ timestamp​ ​ to​ ​ time. */

let ts = 1569827401000;
let ms_to_date = (ts) => {
    let dt = new Date(ts);
    console.log(dt);
}

ms_to_date(ts);