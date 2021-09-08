import axios from 'axios';
const amountOfUsers = 100;
const url = "https://randomuser.me/api/?seed=foobar&results="+amountOfUsers+"&inc=picture,name,phone,email,dob&nat=us";

export default {
    search:function() {
        return axios.get(url);
    }
};