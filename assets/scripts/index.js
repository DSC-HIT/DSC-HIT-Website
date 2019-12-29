firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
function login(){
var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;


}   

// const guideList = document.querySelector('.guides');
// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');
// const accountDetails = document.querySelector('.account-details');
// const adminItems = document.querySelectorAll('.admin');


// const setupUI = (user) =>{
//   if(user){
//       if(user.admin){
//         adminItems.forEach(item =>item.style.display = 'block');
//       }
//     db.collection('users').doc(user.uid).get().then(doc=>{
//       const html = `
//         <div>Logged in as ${user.email}</div>
//         <div>${doc.data().bio}</div>
//         <div class="pink-test">${user.admin ? 'Admin': ''}</div>
//       `;
//       accountDetails.innerHTML = html;

//     })
    
//     loggedInLinks.forEach(item => item.style.display = 'block');
//     loggedOutLinks.forEach(item => item.style.display = 'none');

//   }else{
//     adminItems.forEach(item =>item.style.display = 'none');

//     loggedInLinks.forEach(item => item.style.display = 'none');
//     loggedOutLinks.forEach(item => item.style.display = 'block');

//   }
// }


// const setupGuides = (data) =>{
// if(data.length){




//     let html = '';
//     data.forEach(doc => {
//       const guide = doc.data();
//       // console.log(guide.content);
//       const li = `
//       <li>
//             <div class="collapsible-header grey lighten-4">${guide.title}</div>
//             <div class="collapsible-body white">${guide.content}</div>
//         </li>
//       `;
//       html += li;
//     });
//     guideList.innerHTML = html;
// }
// else{
//     guideList.innerHTML = '<h4 class="center-align">Login to see some stuff</h4>'
// }
// }

// document.addEventListener('DOMContentLoaded', function() {

//     var modals = document.querySelectorAll('.modal');
//     M.Modal.init(modals);
  
//     var items = document.querySelectorAll('.collapsible');
//     M.Collapsible.init(items);
  
//   });


