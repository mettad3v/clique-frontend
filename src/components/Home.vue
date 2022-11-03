<script setup>
import '@mdi/font/css/materialdesignicons.css'
import { ref, onMounted } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
const hidden = ref(true)
const toggleNav = () => {
    hidden.value = !hidden.value

}

const scrollToAnchorPoint = (point, m) => {
    m ? hidden.value = !hidden.value : ''
    let el = document.querySelector(`#${point}`);
    el.scrollIntoView({ behavior: "smooth" })
}


</script>

<template>


    <header class="md:flex md:justify-between h-20 py-5 md:mx-10 mx-5">
        <!-- Logo text or image -->
        <div class="flex items-center justify-between mb-4 md:mb-0">
            <h1 class="leading-none text-2xl text-blue-700">
                <a class="no-underline font-semibold " href="#">
                    <img class="logo inline" src="../assets/images/logo.png" alt="" />
                    Clique
                </a>
            </h1>

            <a class="text-black hover:text-orange md:hidden" href="#">
                <i @click="toggleNav" :class="{'mdi-menu': hidden}" class="text-3xl mdi mdi-close"></i>
            </a>
        </div>

        <!-- END Logo text or image -->

        <!-- menu -->
        <nav class="hidden md:block">
            <ul class="list-reset md:flex md:items-center">
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('solution')"
                        class="block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                        href="#">
                        Solution
                    </a>
                </li>
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('feature')" class="block no-underline hover:underline
                        font-medium text-black hover:text-black md:border-none" href="#">
                        Features
                    </a>
                </li>
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('price')" class=" block no-underline hover:underline
                        font-medium text-black hover:text-black md:border-none" href="#">
                        Pricing
                    </a>
                </li>
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('testimony')" class=" block no-underline hover:underline
                        font-medium text-black hover:text-black md:border-none" href="#">
                        Testimonial
                    </a>
                </li>
            </ul>
        </nav>


        <div class="hidden md:block md:flex mb-4 md:mb-0">
            <button
                class="text-blue-700 active:bg-purple-600 font-semibold text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                <router-link to="/login">
                    Log in
                </router-link>
            </button>

            <button
                class=" bg-blue-700 text-white active:bg-purple-600 font-bold text-sm px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Sign up
            </button>
        </div>


    </header>
    <div :class="{ '-ml-128': hidden }"
        class="transition-all ease-in duration-400 block md:hidden bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 h-144 z-40 text-white absolute w-screen ">
        <nav class=" flex justify-center items-center h-full text-center ">
            <ul class="list-reset space-y-6 text-xl">
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('solution', 'm')"
                        class="block no-underline hover:underline font-bold drop-shadow-xl" href="#">
                        Solution
                    </a>
                </li>
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('feature', 'm')"
                        class="block no-underline hover:underline font-bold drop-shadow-xl" href="#">
                        Features
                    </a>
                </li>
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('price', 'm')"
                        class="block no-underline hover:underline font-bold drop-shadow-xl " href="#">
                        Pricing
                    </a>
                </li>
                <li class="md:p-2">
                    <a @click.prevent="scrollToAnchorPoint('testimony', 'm')"
                        class="block no-underline hover:underline font-bold drop-shadow-xl" href="#">
                        Testimonial
                    </a>
                </li>
                <li class="md:p-2">
                    <button
                        class=" bg-purple-700 text-white shadow-lg rounded-lg active:bg-purple-500 font-bold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button">
                        <router-link to="/login">
                            Get Started
                        </router-link>

                    </button>
                </li>
            </ul>
        </nav>
    </div>

    <section class="md:mb-32 mt-7 md:mt-1 mb-0 h-144 md:h-screen md:mx-10 mx-5">

        <div class="flex justify-between items-center md:h-screen  md:-mt-20">
            <div class="md:w-2/3 w-full h-80">
                <h1 class="leading-none text-5xl text-left font-semibold">
                    Manage projects across
                    <span class="text-purple-600">teams</span>
                    and <span class="text-gray-700">boards</span>.
                </h1>
                <p class="mt-5 text-gray-500">
                    With this platform, you can find out the priority of your tasks
                    so that your activities become efficient.
                </p>

                <p class="text-gray-500 mt-5">Give it a shot!</p>
                <div class="w-full border-2 border-red-200 h-16 md:h-20 shadow-lg rounded-lg p-3">
                    <form>

                        <input class="focus:outline-none text-gray-700 w-full md:w-4/6 p-2 "
                            placeholder="Enter e-mail address" type="text" />
                        <button
                            class="md:w-2/6 w-full mt-5 md:mt-0 md:ml-0 bg-purple-500 text-white shadow-md rounded-lg 
                            active:bg-purple-600 font-bold px-4 py-3 text-base rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">
                            <i class="mdi mdi-diamond-stone"></i> Start Trial
                        </button>
                    </form>
                </div>
            </div>
            <img class="hidden md:block floating w-2/3 h-3/6 -mt-20" src="../assets/images/scrum.svg" alt="" />
        </div>
    </section>


</template>

<style scoped>
* {
    margin: 0;
    border: 1px solid red;
}

.floating {

    animation-name: floating;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    0% {
        transform: translate(0, 0px);
    }

    50% {
        transform: translate(0, 15px);
    }

    100% {
        transform: translate(0, -0px);
    }
}

.bg {
    background-image: url('../assets/images/bg.svg');
    height: 100vh;
}

.logo {
    width: 30px;
    height: 30px;
}

.sections {
    min-height: 600px;
}

.progress-img {
    height: 450px;
    background-image: url('../assets/images/7.jpg');
    background-size: cover;
}

.progress-rating {
    border: 8px solid rgb(37 99 235);
    border-right-color: lightgray;

}

.card-img {
    height: 450px;
    background-image: url('../assets/images/prog.jpeg');
    background-size: cover;
}
</style>
