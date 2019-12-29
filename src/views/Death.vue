<template>
    <div class="main_screen2">
      <h2 class="main_text2">Death Stranding</h2>
      <div class="text_block2">
      	<span>Death Stranding - новая игра  Хидео Кодзимы... Повествует
        ся тут о том, как после катастрофы организация Bridges пытается связать всю страну через
        терминалы херальной сети, для этого у них есть сотрудник - Сэм, который будет выполнять работу курьера... 
        Ему предстоит воссоединить всю Америку...</span>
      </div>
      <hr class="linia2" />
      <div class="c2"></div>
  </div>
</template>

<script>
	export default {}
</script>

<style>
	 @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Solway&display=swap');

    .main_screen2 {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 880px;
    	width: 1590px;

    	background: url('../assets/img/Death_stranding_background.jpg') #C4C4C4;
    	background-size: cover;
    	background-position: center;

    }

    .main_text2 {
        position: absolute;
        margin-top: 60px;
        left: 300px;
        font-family: "Solway", serif;
        font-size: 60px;
        line-height: 67px;
        display: flex;
        font-weight: normal;
        font-style: normal;
        color: white;
    }

    .text_block2 {
    	position: absolute;
    	width: 679px;
    	height: 458px;
    	left: 240px;
    	margin-top: 200px;
    }

    .text_block2 span {
    	position: absolute;
    	top: 0;
    	left: 0;
    	display: inline;
    	font-family: "Fira Sans Condensed", sans-serif;
    	font-size: 40px;
    	color: white;
    } 

    .linia2 {
    	position: relative;
    	width: 926px;
    	height: 0;
    	border: 1px solid #000000;
    	transform: rotate(108.24deg);
    	top: 430px;
    	left: 358px;
    }

    .c2 {
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
    	background: url("../assets/img2/Sam_Bridges.png") rgba(29, 42, 54, 0.85);
    	background-size: cover;
    	background-position: center;
    }
</style>