<template>
    <div>
        <h1>编辑</h1>
        <hr>
        <label>
            <span>userName:</span>
            <input type="text" v-model="userName">
        </label>
        <br>
        <label>
            <span>userAge:</span>
            <input type="number" v-model="userAge">
        </label>
        <br>
        <button @click="editData">确定</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            userName: "",
            userAge: ""
        };
    },
    methods: {
        getData() {
            axios
                .get("http://localhost:8080/user/selectUserByUserId", {
                    params: {
                      userId: this.$route.query.userId
                    }
                })
                .then(response => {
                    this.userName = response.data.userName;
                    this.userAge = response.data.userAge;
                    console.log(response);
                })
                .catch(error => {
                    console.log(errror);
                });
        },
        editData(){
            axios({
                method:'post',
                url: 'http://localhost:8080/user/updateUser',
                data: "&userId=" + this.$route.query.userId + "&userName=" + this.userName + "&userAge=" + this.userAge
            })
            .then(response => {
                console.log(response)
                this.$router.push({path : "/index"})
            }).catch(error => {
                console.log(error)
            })
        }
    },
    created() {
        this.getData();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
