<template>
  <div class="main_screen">
      <h2 class="main_text">The Last of Us Part II</h2>
      <div class="text_block">
      	<span>The last of us part II - это одна из ожидаемых игр 2020 года... 
      	Она будет отличаться от первой части в том плане, что тут мы не сможем поиграть за 
        Джоеля, мы будем играть за Элли... Так же 24 сентября показали геймплейную демку 
        игры.. И можно сказать, что это великолепно </span>
      </div>
      <hr class="linia" />
      <div class="circle"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    
  }
};
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Solway&display=swap');

    .main_screen {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 880px;
    	width: 1590px;

    	background: url('../assets/img/TLOU2_background.jpg') #C4C4C4;
    	background-size: cover;
    	background-position: center;

    }

    .main_text {
        position: absolute;
        margin-top: 60px;
        left: 250px;
        font-family: "Solway", serif;
        font-size: 60px;
        line-height: 67px;
        display: flex;
        font-weight: normal;
        font-style: normal;
        color: white;
    }

    .text_block {
    	position: absolute;
    	width: 679px;
    	height: 458px;
    	left: 240px;
    	margin-top: 200px;
    }

    .text_block span {
    	position: absolute;
    	top: 0;
    	left: 0;
    	display: inline;
    	font-family: "Fira Sans Condensed", sans-serif;
    	font-size: 40px;
    	color: white;
    } 

    .linia {
    	position: relative;
    	width: 926px;
    	height: 0;
    	border: 1px solid #000000;
    	transform: rotate(108.24deg);
    	top: 430px;
    	left: 358px;
    }

    .circle {
    	position: relative;
    	height: 400px;
    	width: 400px;
    	box-sizing: border-box;
    	border: 1px solid black;
    	border-radius: 200px;
    	float: right;
    	border: 1px solid white;
    	top: 435px;
    	right: 45px;
    	float: right;
    	background: url("../assets/img2/Ellie.png") rgba(26, 48, 21, 0.85);
    	background-size: cover;
    	background-position: center;
    }
</style>

