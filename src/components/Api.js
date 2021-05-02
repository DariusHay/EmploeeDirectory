import axios from "axios"

const pull = axios.get('https://randomuser.me/api/?results=25')

export default {
    

    all: function() {
        return pull;
    },

    update: function(search) {
        if (!search) {
            return pull;
        }
        else {
            console.log(pull.data.results)
            // return pull.data.results.filter(result => result.name.first === search)
        }
    }
}
