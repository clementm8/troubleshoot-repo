import { ref, get } from "firebase/database";
import { getToDoData } from "./lib/firebase/api";
import { db } from "./lib/firebase/config/firebase/firebaseInit.js";

/* 
           
			  
*/

async function appInit() {
	const appData= await getToDoData();
	console.log('app init');
}

appInit();
