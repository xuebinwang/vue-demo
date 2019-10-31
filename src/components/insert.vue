<template>
    <div>
        <h1>新增</h1>
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
        <button @click="addData">确定</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            userName: '',
            userAge: ''
        };
    },
    methods: {
        addData() {
            axios({
                method:'post',
                url: 'http://localhost:8080/user/insertUser',
                data: "&userName=" + this.userName + "&userAge=" + this.userAge
            })
            .then(response => {
                console.log(response)
                this.$router.push({path : "/index"})
            }).catch(error => {
                console.log(error)
            })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
    border: 1px solid #000;
}
</style>
