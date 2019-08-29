/*
 * Good luck getting me now, spammers!
 * v1.0.4
 */

const qName = new URLSearchParams(window.location.search).get("name");
const qEmail = new URLSearchParams(window.location.search).get("email");
const qSub = new URLSearchParams(window.location.search).get("_subject");
const qMessage = new URLSearchParams(window.location.search).get("message");

const referrer = document.referrer
	
console.log(qName) // probs not needed but whatever
console.log(qEmail)
console.log(qSub)
console.log(qMessage)

if(referrer.search("formspree") != -1){
	location.replace("https://www.tdpain.net?success=1")
} else {
	document.body.innerHTML += `<form id="hackyForm" action="https://formspree.io/newdirect@tdpain.net" method="post"><input type="hidden" name="name" value="${qName}"><input type="hidden" name="email" value="${qEmail}"><input type="hidden" name="_subject" value="${qSub}"><input type="hidden" name="message" value="${qMessage}"></form>`;
	document.getElementById("hackyForm").submit();
}
