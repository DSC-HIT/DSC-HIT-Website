// add admin cloud function
// const adminFore = document.querySelector('.admin-actions');
// adminFore.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const adminEmail = document.querySelector('#admin-email').value;
//     const addAdminRole = functions.httpsCallable('addAdminRole');
//     addAdminRole({email: adminEmail}).then(result=>{
//         console.log(result);
//     })
// })

//listen for auth state change

auth.onAuthStateChanged(user=>{
    if (user){
        user.getIdTokenResult().then(idTokenResult=>{
            user.admin =idTokenResult.claims.admin;
            setupUI(); 
            console.log(idTokenResult.claims);
        })
        // get data
    db.collection('guides').onSnapshot(snapshot=>{
        setupGuides(snapshot.docs);
        setupUI(user);
}, err=>{
    console.log(err.message);
})

    console.log('user logged in: ',user);
    }else{
        setupUI();
        setupGuides([])
        console.log('user logged out');
    }
});

//create new guide

// const createForm = document.querySelector('#create-form');
// createForm.addEventListener('submit', e=>{
//     e.preventDefault();

//     db.collection('guides').add({
//         title: createForm['title'].value,
//         content: createForm['content'].value,

//     }).then(() =>{
//         const modal = document.querySelector('#modal-create');
//         M.Modal.getInstance(modal).close();
//         createForm.reset();

//     }).catch(err=>{
//         console.log(err.message);
//     })
// })







//signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', e=>{
    e.preventDefault();



    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);


    // signup with username;

    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        return db.collection('users').doc(cred.user.uid).set({
        bio: signupForm['signup-bio'].value,
    }).then(()=>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = '';
        }).catch(err=>{
            signupForm.querySelector('.error').innerHTML = err.message;
        })
    });
});


// logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', e=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        // console.log('user signed out')
    });
});


// login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then((cred)=>{
        // console.log(cred.user);


        //close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        loginForm.querySelector('.error').innerHTML = '';
    }).catch(err=>{
        loginForm.querySelector('.error').innerHTML = err.message;
    })
})