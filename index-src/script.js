/*
/
    index-src/script.js
/
*/

/* Imports */
import * as jsFunc
    from "./scripts/func.js";
import * as get_MD
    from "./scripts/get-md.js";


/* Get MD */
//.


/* Setup */
const content_MD = ((jsFunc).js_GetId("check-md"));
//
//?


/* Input Dynamic - Get MD */
//?
const md_Name = ((get_MD).thisGet_MD("README"));
//?
const md_Linker = (``);


/* Execute */
function check_Address_MD () {
    console.log(
        (`Linking MD:\n`),
        (md_Name)
    );
}
//
function check_File_MD () {
    fetch(md_Name).then(
        res => ((res).text())
    ).then(md => {
        (content_MD).innerHTML = ((marked).parse(md));
    });
}


/* Uji Coba */
//check_Address_MD ();
//
check_File_MD ();


//-//
