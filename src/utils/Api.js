import axios from 'axios';
const amountOfUsers = 20;
const url = "https://randomuser.me/api/?seed=foobar&results="+amountOfUsers+"&inc=picture,name,phone,email,dob&nat=us";

export default {
    search:function() {
        return axios.get(url);
    }
};