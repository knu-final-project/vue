<template>
  <div id ="app">
    <router-link to = "/main">main</router-link>
    <router-link to = "/info">info</router-link>
  </div>
  <div class = "black-bg" v-if="모달창열렸니 == true">
    <div class = "white-bg">
      <h4>상세페이지 내용</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니 = false">확인</button>

    </div>
  </div>

  <div class = "menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>


  </div>
  <div>
    <img src="./assets/TEAM-LOGO.png" class = "room-img">
    <h1 class = "red" :style = "스타일" >원룸샵</h1>
    <h4>{{products[0]}}</h4>
    <p>{{price[0]}}</p>
    <button @click="신고수[0]++">허위매물신고버튼</button> <span>신고수 : {{신고수[0]}}</span>
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p>{{price[1]}}</p>
        <button @click="신고수[1]++">허위매물신고버튼</button> <span>신고수 : {{신고수[1]}}</span>

  </div>

  <div>
    <h4>{{products[2]}}</h4>
    <p>{{price[2]}}</p>
        <button @click="신고수[2]++">허위매물신고버튼</button> <span>신고수 : {{신고수[2]}}</span>

  </div>
  
</template>

<script>

import apple from './assets/oneroom.js';

apple;


export default {
  name: 'App',
  data(){
    return {
      모달창열렸니 : true,
      신고수 : [0,0,0],
      메뉴들 : ['Home','Shop','About'],
      price : ['50만원','가격은아무거나','가격은아무거나'],
      스타일 : 'color : red',
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },

  methods :{
    increase()
    {
      this.신고수 += 1;
    }
  },
  components: {

  }
}
</script>

<style>
body{
  margin : 0
}

div{
  box-sizing: border-box;
}

.black-bg{
  width:100%; height:100%;
  background: rgba(red, green, blue, alpha);
  position:fixed; padding:20px;

}

.white-bg{
  width:100%; background:white;
  border-radius:8px;
  padding : 20px;

}
.room-img{
  width:100%;
  margin-top:40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.menu{
  background : darkslateblue;
  padding:15px;
  border-radius: 5px;

}

.menu a {
  color: white;
  padding : 10px;

}
</style>
