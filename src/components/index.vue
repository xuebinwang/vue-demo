<template>
  <div>
    <h1>springBoot+mysql+vue</h1>
    <router-link to="/insert">新增</router-link>
    <table>
      <tr>
        <th>userId</th>
        <th>userName</th>
        <th>userAge</th>
        <th>编辑</th>
        <th>删除</th>
      </tr>
      <tr v-for="item in userData" :key="item.userId">
        <td>{{item.userId}}</td>
        <td>{{item.userName}}</td>
        <td>{{item.userAge}}</td>
        <td>
          <router-link :to="{ path: '/edit', query: {userId: item.userId} }">编辑</router-link>
        </td>
        <td @click="deleted(item.userId)">删除</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            userData: " "
        };
    },
    methods: {
        getData() {
            axios
                .get("http://localhost:8080/user/selectUserAll")
                .then(response => {
                    this.userData = response.data;
                    console.log(response);
                })
                .catch(error => {
                    console.log(errror);
                });
        },
        deleted(userId) {
            var deleteConfirm = confirm("是否删除");
            if (deleteConfirm) {
                axios({
                    method: "post",
                    url: "http://localhost:8080/user/deleteUser",
                    data: "&userId=" + userId
                })
                    .then(response => {
                        console.log(response);
                        this.getData();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    },
    created() {
        this.getData();
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    border-collapse: collapse;
}
td,
th {
    border: 1px solid #000;
}
</style>
