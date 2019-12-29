<template>
	<div class="main_screen3">
      <h2 class="main_text3">Days Gone</h2>
      <div class="text_block3">
        <span>Days Gone - игра про постапокалипсис.... Но тут особенность заключается втом, какие разнообразные
        виды зараженных тут существуют.. Вообще, тут зараженные нападают толпой, что не много заставляет содрагнуться
        </span>
      </div>
      <hr class="linia3" />
      <div class="c3"></div>
  </div>
</template>

<script>
	export default { }
</script>

<style>
	 @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Solway&display=swap');

    .main_screen3 {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 880px;
    	width: 1590px;

    	background: url('../assets/img/Days_gone_background.jpg') #C4C4C4;
    	background-size: cover;
    	background-position: center;

    }

    .main_text3 {
        position: absolute;
        margin-top: 60px;
        left: 400px;
        font-family: "Solway", serif;
        font-size: 60px;
        line-height: 67px;
        display: flex;
        font-weight: normal;
        font-style: normal;
        color: white;
    }

    .text_block3 {
    	position: absolute;
    	width: 679px;
    	height: 458px;
    	left: 240px;
    	margin-top: 200px;
    }

    .text_block3 span {
    	position: absolute;
    	top: 0;
    	left: 0;
    	display: inline;
    	font-family: "Fira Sans Condensed", sans-serif;
    	font-size: 40px;
    	color: white;
    } 

    .linia3 {
    	position: relative;
    	width: 926px;
    	height: 0;
    	border: 1px solid #000000;
    	transform: rotate(108.24deg);
    	top: 430px;
    	left: 358px;
    }

    .c3 {
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
    	background: url("../assets/img2/Deacon.png") rgba(37, 53, 40, 0.85);
    	background-size: cover;
    	background-position: center;
    }
</style>
