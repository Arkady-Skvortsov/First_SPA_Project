<template>
	<footer>
		<div class="tlou_button">
			<router-link 
			      to="/"
			      exact
			      active-class="active"
			><p>The Last of Us</p></router-link>
		</div>
		<div class="death_button">
			<router-link
                 to="/death"
                 active-class="active"
			><p>Death Stranding</p></router-link>
		</div>
		<div class="days_button">
			<router-link
                 to="/days"
                 active-class="active"
			><p>Days Gone</p></router-link>
		</div>
		<div class="god_button">
			<router-link
			     to="/god"
			     active-class="active"
			><p>God of War</p></router-link>
		</div>
		<div class="spider_button">
			<router-link
                to="/spider"
                active-class="active"
			><p>Spider Man</p></router-link>
		</div>
	</footer>
</template>
<script>
	export default {}
</script>
<style>
	footer {
		position: absolute;
		width: 1580px;
		height: 145px;
		left: 0;
	    top: 879px; /* 879px */
	}

	footer > div {
		display: inline-block;
		z-index: 2;
		border: 1px solid white;
		margin-top: 30px;
		margin-left: 100px;
		cursor: pointer;
		transition: .6s;
		-o-transition: .6s;
		-mozila-transition: .6s;
		-webkit-transition: .6s;
	}

	footer > div:hover {
		transform: scale(.9);
	}

	.tlou_button {
		position: relative;
		width: 191px;
		height: 81px;

	    background: url("../assets/img/TLOU2_button.jpg"); 
	    background-size: cover;
		background-position: center;
	}

	.death_button {
		position: relative;
		width: 191px;
		height: 81px;

		background: url("../assets/img/Death_stranding_button.jpg"); 
		background-size: cover;
		background-position: center;
	}

	.days_button {
		position: relative;
		width: 191px;
		height: 81px;

		background: url("../assets/img/Days_gone_button.jpg"); 
		background-size: cover;
		background-position: center;
	}

	.god_button {
		position: relative;
		width: 191px;
		height: 81px;

		background: url("../assets/img/God_of_war_4_button.jpg"); 
		background-size: cover;
		background-position: center;
	}

	.spider_button {
		position: relative;
		width: 191px;
		height: 81px;

		background: url("../assets/img/Spider_man_button.jpg");
		background-size: cover;
		background-position: center;
	}

	.tlou_button p {
		position: absolute;
		width: 178px;
		height: 27px;
		left: 15px;
		top: 5px;

		font-family: "Comfortaa";
		font-weight: bold;
		font-size: 25px;
		line-height: 27px;
		display: flex;
		align-items: center;
		letter-spacing: -0.015em;

		color: white;
	}

	.death_button p {
		position: absolute;
		width: 185px;
		height: 25px;
		left: 10px;
		top: 5px;

		font-family: "Comfortaa";
		font-weight: bold;
		font-size: 25px;
		line-height: 25px;
		display: flex;
		align-items: center;
		letter-spacing: -0.015em;

		color: white;
	}

	.days_button p {
		position: absolute;
		width: 130px;
		height: 27px;
		left: 35px;
		top: 5px;

		font-family: "Comfortaa";
		font-weight: bold;
		font-size: 25px;
		line-height: 27px;
		display: flex;
		align-items: center;
		letter-spacing: -0.015em;

		color: white;
	}

	.god_button p {
		position: absolute;
		width: 134px;
		height: 27px;
		left: 32.5px;
		top: 5px;

		font-family: "Comfortaa";
		font-weight: bold;
		font-size: 25px;
		line-height: 27px;
		display: flex;
		align-items: center;
		letter-spacing: -0.015em;

		color: white;
	}

	.spider_button p {
        position: absolute;
		width: 143px;
		height: 27px;
		left: 32.5px;
		top: 5px;

		font-family: "Comfortaa";
		font-weight: bold;
		font-size: 25px;
		display: flex;
		line-height: 27px;
		align-items: center;
		letter-spacing: -0.015em;

		color: white;
	}
</style>