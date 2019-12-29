<template>
	<div class="main_screen5">
      <h2 class="main_text5">Spider Man</h2>
      <div class="text_block5">
        <span>Spider Man - отличный перезапуск в мире Человека Паука на PS4... Тут вам предстоит встретить уже знакомых врагов и личностей... Так же, перемещаться по городу на паутине - большое удовольствие
        </span>
      </div>
      <hr class="linia5" />
      <div class="c5"></div>
    </div>
</template>

<script>
	export default {}
</script>

<style>
	 @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Solway&display=swap');

    .main_screen5 {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 880px;
    	width: 1590px;

    	background: url('../assets/img/Spider_man_background.jpg') #C4C4C4;
    	background-size: cover;
    	background-position: center;

    }

    .main_text5 {
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

    .text_block5 {
    	position: absolute;
    	width: 679px;
    	height: 458px;
    	left: 240px;
    	margin-top: 200px;
    }

    .text_block5 span {
    	position: absolute;
    	top: 0;
    	left: 0;
    	display: inline;
    	font-family: "Fira Sans Condensed", sans-serif;
    	font-size: 40px;
    	color: white;
    } 

    .linia5 {
    	position: relative;
    	width: 926px;
    	height: 0;
    	border: 1px solid #000000;
    	transform: rotate(108.24deg);
    	top: 430px;
    	left: 358px;
    }

    .c5 {
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
    	background: url("../assets/img2/Sp.png") rgba(19, 24, 30, 0.85);
    	background-size: cover;
    	background-position: center;
    }
</style>