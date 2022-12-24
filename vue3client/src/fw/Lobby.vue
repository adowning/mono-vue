<script setup lang="ts">
import './main.css'
// import short from 'short-uuid'
import { onMounted } from 'vue';
// import { supabase } from '@/plugins/presence';
onMounted(async ()=>{
})
</script>
<template>
    <div class="lobby-content" id="lobbyContent">
        <div class="gameroom">
            <div class="container">
                <!-- <div class="intro"></div> -->
                <!-- <div id = "barProgress" class="bar">
                    <div class="per"><span></span><i class="message"></i></div>
                    <div class="bar-logo"></div>
                </div> -->

            </div>
            <!-- <div id="pre-load" class="hidden">
                <div class="pre-logo"></div>
                <div class="pre-percent">
                    <b></b>
                </div>
            </div> -->
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
.gameroom {
    background-image: ;
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