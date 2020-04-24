import http from '../../utils/Http.js';

// machine api
export default {
    setMachines: function(body) {
        var url = "/machines";
        return http.post(url, body).then(function(res) {
            return res;
        })
    },
    getMachines: function(machine_id) {
        var url = id ? "/machines/" + machine_id : "/machines"
        return http.get(url).then(function(res) {
            return res;
        })
    },
    updateMachine: function(machine_id, body) {
        var url = "/machines/" + machine_id;
        return http.put(url, body).then(function(res) {
            return res;
        })
    },
    deleteMachine: function(machine_id) {
        var url = "/machines/" + machine_id;
        return http.delete(url).then(function(res) {
            return res;
        })
    }
}