import axios from 'axios';

// http 통신 모듈(향후 세션 체크 및 통신에 대한 관리를 위해 모듈로 이용)
export default  {
    post : function(url, body) {
        return axios.post(url, body).then(function(response) {
            return response.data
        }).catch(function(err) {
            throw err;
        })
    },
    get : function(url) {
        return axios.get(url).then(function(response) {
            return response.data
        }).catch(function(err) {
            throw err;
        })
    },
    put : function(url, body) {
        return axios.put(url, body).then(function(response) {
            return response.data
        }).catch(function(err) {
            throw err;
        })
    },
    delete : function(url, body) {
        return axios.delete(url, body).then(function(response) {
            return response.data
        }).catch(function(err) {
            throw err;
        })
    }
}