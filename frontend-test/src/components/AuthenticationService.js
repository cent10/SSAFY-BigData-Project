import axios from 'axios'

class AuthenticationService {

    // send id, password to the SERVER
    executeJwtAuthenticationService(id, password) {
        return axios.post('http://j3a501.p.ssafy.io:8888/pts/users/login', {
            id,
            password
        })
    }

    duplicateCheck(id){
        console.log(id)
        return axios.get('http://j3a501.p.ssafy.io:8888/pts/users/'+id)
    }

    executeRegisterService(id, password, name) {
        localStorage.setItem('registeringId', id);
        localStorage.setItem('password', password);
        localStorage.setItem('nickname', name);
    }

    executeRegisterService2(height, weight, birthYear, gender) {
        return axios.post(`http://j3a501.p.ssafy.io:8888/pts/users/`,{
            id : localStorage.getItem('registeringId'),
            password : localStorage.getItem('password'),
            nickname : localStorage.getItem('nickname'),
            height : height,
            weight : weight,
            birthYear : birthYear,
            gender : gender
        })
    }
    
    executeServeyService(like, goal, dislike, is_solo, is_active){
        console.log(like)
        console.log(goal)
        console.log(dislike)
        console.log(is_solo)
        console.log(is_active)
        console.log(localStorage.getItem('registeringId'))
        return axios.post(`http://j3a501.p.ssafy.io:8888/pts/favorites`,{
            uid : localStorage.getItem('registeringId'),
            like : like,
            goal : goal,
            dislike : dislike,
            solo : is_solo,
            active : is_active
        })
    }

    executeMesureService(sitUp, pushUp, squat, runningJump, standingJump, twistSitUp){
        console.log(localStorage.getItem('registeringId'))
        console.log(sitUp)
        console.log(pushUp)
        console.log(squat)
        console.log(runningJump)
        console.log(standingJump)
        console.log(twistSitUp)
        return axios.post(`http://j3a501.p.ssafy.io:8888/pts/measures`,{
            uid : localStorage.getItem('registeringId'),
            sitUp : sitUp,
            pushUp : pushUp,
            squat : squat,
            runningJump : runningJump,
            standingJump : standingJump,
            twistSitUp : twistSitUp
        })
    }

    registerSuccessfulLoginForJwt(id, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedId', id);
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) {
        return token
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['jwt-token'] = token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        localStorage.removeItem("authenticatedId");
        localStorage.removeItem("token");
    }

    SuccessRegister() {
        localStorage.removeItem("registeringId");
        localStorage.removeItem("password");
        localStorage.removeItem("nickname");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');

        if (token) {
            return true;
        }
        return false;
    }

    isRegistering() {
        const registeringId = localStorage.getItem('registeringId');
        if (registeringId) {
            return true;
        }
        return false;
    }

    getLoggedInid() {
        let user = localStorage.getItem('authenticatedId');
        if(user===null) return '';
        return user;
    }
}

export default new AuthenticationService()