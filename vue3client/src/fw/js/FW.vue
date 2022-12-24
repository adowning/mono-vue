<script lang="ts">
import './js/init.js'
import './js/2.js'
import './js/3.js'
import './js/1.js'
import './js/4.js'
import './app.js'
</script>
<template>
    <div class="loader-content" id="loaderContent">
        <div class="area">
            <div class="container">
                <div class="intro"></div>
                <div id = "barProgress" class="bar">
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