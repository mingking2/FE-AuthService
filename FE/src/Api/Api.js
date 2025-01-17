import axios from 'axios'

const RegisterPost = (user) => {
    const email = user.emailCheck;
    const password =user.passwordCheck;

    const data = {
        email: email,
        password: password
    };
    
    axios.post('https:/hi', data,{
        headers: {
            'Content-Type': 'application/json'
        }
    }
    .then(response => {
        console.log('등록 성공:', response);
    })
    .catch(error => {
        console.error('등록 실패:', error);
    })
)}

const LoginPost = (user) => {
    axios.post('https:/hi', user,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('등록 성공:', response);
    })
    .catch(error => {
        console.error('등록 실패:', error);
    });
}


export {LoginPost};
export {RegisterPost};