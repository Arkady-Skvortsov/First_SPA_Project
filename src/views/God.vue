<template>
	<div class="main_screen4">
      <h2 class="main_text4">God of War</h2>
      <div class="text_block4">
        <span>God of War - это уже четвертая часть серии игр God of War, тут Кратос уже постарел и обзавелся сыном - Атреем... Атрей может помогать Кратосу в бою: обездвиживать противника, добивать... Так же вам предстоит узнать судьбу матери Атрея, взяться за клинки Хауса и тд..
        </span>
      </div>
      <hr class="linia4" />
      <div class="c4"></div>
  </div>
</template>

<script>
	export default {}
</script>

<style>
	 @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed|Solway&display=swap');

    .main_screen4 {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 880px;
    	width: 1590px;

    	background: url('../assets/img/God_of_war_4_background.jpg') #C4C4C4;
    	background-size: cover;
    	background-position: center;

    }

    .main_text4 {
        position: absolute;
        margin-top: 60px;
        left: 375px;
        font-family: "Solway", serif;
        font-size: 60px;
        line-height: 67px;
        display: flex;
        font-weight: normal;
        font-style: normal;
        color: white;
    }

    .text_block4 {
    	position: absolute;
    	width: 679px;
    	height: 458px;
    	left: 240px;
    	margin-top: 200px;
    }

    .text_block4 span {
    	position: absolute;
    	top: 0;
    	left: 0;
    	display: inline;
    	font-family: "Fira Sans Condensed", sans-serif;
    	font-size: 40px;
    	color: white;
    } 

    .linia4 {
    	position: relative;
    	width: 926px;
    	height: 0;
    	border: 1px solid #000000;
    	transform: rotate(108.24deg);
    	top: 430px;
    	left: 358px;
    }

    .c4 {
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
    	background: url("../assets/img2/Cratos.png") rgba(29, 49, 68, 0.85);
    	background-size: cover;
    	background-position: center;
    }
</style>