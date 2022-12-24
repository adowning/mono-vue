<script setup lang="ts">
// import './js/2.js'
// import './js/3.js'
// import './js/1.js'
// import './js/4.js'
import './main.css'
import short from 'short-uuid'

import { onMounted } from 'vue';
import { supabase } from '@/plugins/presence';
const files = ['./FishingWarSG/js/init.js','./FishingWarSG/js/2.js', './FishingWarSG/js/1.js','./FishingWarSG/js/3.js',
'./FishingWarSG/js/4.js','./FishingWarSG/js/app.js']
// const files = ['./js/init.js','/js/2.js', '/js/1.js','/js/3.js',
// '/js/4.js','/js/app.js']
// import './js/app.js'

// var num = 7,
// 	ang = 360 / num,
// 	rad = num * 5;

// function go() {
// 	for (var i = 0; i < num; i++) {
// 		var button = document.createElement('div');
// 		button.className = "dot" + i + " dot";
// 		button.style.top = rad * Math.cos(ang * i * Math.PI / 180) - 10 + "px";
// 		button.style.left = rad * Math.sin(ang * i * Math.PI / 180) - 10 + "px";
// 		button.style.backgroundColor = "hsla(" + ang * i + ", 50%, 50%, 1)";

// 		button.style.webkitAnimation =
// 			"osc 2s ease-in-out infinite " + i / (num / 2) + "s, rainbow 8s infinite " + i / (num / 2) + "s";
// 		button.style.animation =
// 			"osc 2s ease-in-out infinite " + i / (num / 2) + "s, rainbow 8s infinite " + i / (num / 2) +
// 			"s, spin 1s infinite";
//         //@ts-ignore
// 		document.getElementById("loaderContent").appendChild(button);
// 	}
// }
try{
	const user = JSON.parse(localStorage.getItem('user')!)
	console.log(user.user.user_metadata.php_id )
	const sessionId = short.generate()
	sessionStorage.setItem('gameSessionId', sessionId)

	supabase.from('w_subsessions').insert({ 'subsession': sessionId, active: 1, 'user_id': user.user.user_metadata.php_id })
}catch(e){

}
	

onMounted(async () => {
	// go();

	for(var file of files){
	    let thisfile = document.createElement('script')
	    thisfile.setAttribute('src', file)
	  document.head.appendChild(thisfile)
	}

	// console.log(session)
	// let io = document.createElement('script')
	// io.setAttribute('src', 'https://cdn.socket.io/4.5.4/socket.io.min.js')
	// document.head.appendChild(    io)

})
</script>
<template>
	<base href="/FishingWarSG" target="_blank" host="" ws="">

	<div class="loader-content" id="loaderContent">
		<div class="area">
			<div class="container">
				<div class="intro"></div>
				<div id="barProgress" class="bar">
					<div class="per"><span></span><i class="message"></i></div>
					<div class="bar-logo"></div>
				</div>
			</div>
			<div id="pre-load" class="hidden">
				<div class="pre-logo"></div>
				<div class="pre-percent">
					<b></b>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
@font-face {
	font-family: 'roboto-bold';
	src: url('assets/font/roboto-bold.eot'),
		url('assets/font/roboto-bold.ttf') format('truetype');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

@font-face {
	font-family: 'roboto-medium';
	src: url('assets/font/roboto-medium.eot'),
		url('assets/font/roboto-medium.ttf') format('truetype');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

@font-face {
	font-family: 'roboto';
	src: url('assets/font/roboto.eot'),
		url('assets/font/roboto.ttf') format('truetype');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

@font-face {
	font-family: 'roboto-light';
	src: url('assets/font/roboto-light.eot'),
		url('assets/font/roboto-light.ttf') format('truetype');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

@font-face {
	font-family: 'fztjlsjw';
	src: url('assets/font/fztjlsjw.eot'),
		url('assets/font/fztjlsjw.ttf') format('truetype');
}

@font-face {
	font-family: 'fyrkt';
	src: url('assets/font/fyrkt.eot'),
		url('assets/font/fyrkt.ttf') format('truetype');
}

/* .dot {
			height: 20px;
			width: 20px;
			border-radius: 100%;
			position: absolute;
			opacity: 0;
			-webkit-transform-origin: 0% 0%;
			-ms-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
		}

		#hold {
			position: absolute;
			-webkit-animation: spin 10s linear infinite;
			animation: spin 10s linear infinite;
			top: 50%;
			left: 50%;
		}

		@-webkit-keyframes spin {
			from {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}

			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}

		@keyframes spin {
			from {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}

			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}

		@-webkit-keyframes osc {
			0% {
				-webkit-transform: scale(0.5);
		 	transform: scale(0.5);
				opacity: 0;
			}

			50% {
				-webkit-transform: scale(1.5);
				transform: scale(1.5);
				opacity: 1;
		 }

			100% {
				-webkit-transform: scale(0.5);
				transform: scale(0.5);
				opacity: 0;
			}
		}

		@keyframes osc {
			0% {
				-webkit-transform: scale(0.5);
		 	transform: scale(0.5);
				opacity: 0;
			}

			50% {
				-webkit-transform: scale(1.5);
				transform: scale(1.5);
				opacity: 1;
			}

			100% {
				-webkit-transform: scale(0.5);
				transform: scale(0.5);
				opacity: 0;
			}
		}

		@-webkit-keyframes rainbow {
			0% {
				background: #df2020;
			}

			25% {
				background: #80df20;
			}

			50% {
				background: #20dfdf;
			}

		 75% {
				background: #7f20df;
			}

			100% {
				background: #df2020;
			}
		}

		@keyframes rainbow {
			0% {
				background: #df2020;
			}

			25% {
				background: #80df20;
			}

			50% {
				background: #20dfdf;
			}

			75% {
				background: #7f20df;
			}

			100% {
		 	background: #df2020;
			}
		} */
</style>