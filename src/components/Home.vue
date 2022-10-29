<script setup>
import '@mdi/font/css/materialdesignicons.css'
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>

    <div class="hidden opacity-97 absolute h-screen w-screen bg-white z-10 border-2 border-red-100">
        <span class="mdi mdi-close "></span>
    </div>
    <header class="md:flex md:justify-between py-5 md:mx-10 mx-5">
        <!-- Logo text or image -->
        <div class="flex items-center justify-between mb-4 md:mb-0">
            <h1 class="leading-none text-2xl text-blue-700">
                <a class="no-underline font-semibold " href="#">
                    <img class="logo inline" src="../assets/images/logo.png" alt="" />
                    Clique
                </a>
            </h1>

            <a class="text-black hover:text-orange md:hidden" href="#">
                <i class="text-3xl mdi mdi-menu"></i>
            </a>
        </div>

        <!-- END Logo text or image -->

        <!-- menu -->
        <nav class="hidden md:block">
            <ul class="list-reset md:flex md:items-center">
                <li class="md:p-2">
                    <a class="block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                        href="#">
                        Solution
                    </a>
                </li>
                <li class="md:p-2">
                    <a class="block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                        href="#">
                        Pricing
                    </a>
                </li>
                <li class="md:p-2">
                    <a class="block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                        href="#">
                        Features
                    </a>
                </li>
                <li class="md:p-2">
                    <a class="block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                        href="#">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>


        <div class="hidden md:block md:flex mb-4 md:mb-0">
            <button
                class="text-blue-700 active:bg-purple-600 font-semibold text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Log in
            </button>

            <button
                class=" bg-blue-700 text-white active:bg-purple-600 font-bold text-sm px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Sign up
            </button>
        </div>


    </header>

    <section class="md:mb-32 mt-10 md:mt-1 mb-0 h-144 md:h-screen">

        <div class="flex justify-between items-center md:h-screen md:mx-10 mx-5 md:-mt-20">
            <div class="md:w-2/3 w-full h-80">
                <h1 class="leading-none text-5xl text-left font-semibold">
                    Manage projects across
                    <span class="text-purple-600">teams</span>
                    and <span class="text-gray-700">boards</span> .
                </h1>
                <p class="mt-5 text-gray-500">
                    With this platform, you can find out the priority of your tasks
                    so that your activities become efficient.
                </p>

                <p class="text-gray-500 mt-5">Give it a shot!</p>
                <form class="mt-10 flex-wrap items-stretch">
                    <div class="w-full h-20 shadow-lg rounded-lg p-3">
                        <span
                            class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                            <i class="fas fa-lock"></i>
                        </span>
                        <input class="focus:outline-none text-gray-700 md:w-4/6 p-2 rounded-lg"
                            placeholder="Enter e-mail address" type="text" />
                        <button
                            class="md:w-2/6 ml-4 md:ml-0 bg-purple-500 text-white shadow-md rounded-lg 
                            active:bg-purple-600 font-bold px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">
                            <i class="mdi mdi-diamond-stone"></i> Start Trial
                        </button>
                    </div>
                </form>
            </div>
            <img class="hidden md:block floating w-2/3 h-3/6 -mt-20" src="../assets/images/scrum.svg" alt="" />
        </div>
    </section>

    <section class="bg-gray-200 ">
        <div class="md:flex md:justify-between items-center h-auto md:mx-10 pt-20 md:pt-0 mx-5 -mt-20">
            <div class="md:w-3/6 w-full z-9 h-auto">
                <h2 class="leading-none md:text-6xl text-5xl text-left font-medium">
                    Why use a task management tool?
                </h2>
                <p class="mt-5 text-gray-700 w-full md:w-4/6">
                    You can be productive with this tool and distinguish your work
                    priorities.
                </p>

                <div class="hidden md:block flex flex-row-reverse md:flex-row">
                    <button
                        class="w-40  md:w-60  bg-purple-700 mt-6 text-white shadow-lg rounded-lg active:bg-purple-500 font-normal px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button">
                        Get Started
                    </button>
                </div>
            </div>

            <div class="md:w-3/6 w-full mt-16">
                <div data-aos="flip-up" class="grid grid-cols-2 gap-8">
                    <div>
                        <img src="../assets/images/Vector.svg" alt="">

                        <h2 class="font-bold text-2xl mt-5">Manage tasks</h2>
                        <p class="text-gray-700 mt-1">Managing your tasks and projects more efficiently will increase
                            your
                            productivity</p>

                    </div>
                    <div>
                        <img src="../assets/images/academic-cap.svg" alt="">

                        <h2 class="font-bold text-2xl  mt-5">Knowledge</h2>
                        <p class="text-gray-700 mt-1">You can see insights more easily and stay up to date</p>
                    </div>
                    <div>
                        <img src="../assets/images/chart-bar.svg" alt="">


                        <h2 class="font-bold text-2xl  mt-5">Productivity</h2>
                        <p class="text-gray-700 mt-1">With this tool you can be more productive</p>
                    </div>
                    <div>
                        <img src="../assets/images/Frame.svg" alt="">


                        <h2 class="font-bold text-2xl  mt-5">Collaboration</h2>
                        <p class="text-gray-700 mt-1">Collaborating with your team is very helpful for daily activities
                        </p>
                    </div>
                </div>
                <div class="block md:hidden flex flex-row-reverse md:flex-row pb-16">
                    <button
                        class="w-screen  md:w-60  bg-purple-700 mt-6 text-white shadow-lg rounded-lg active:bg-purple-500 font-normal px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button">
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    </section>


    <section class="w-full">
        <h3 class="text-center text-4xl pt-16 font-semibold">
            Trusted by over a lot of companies
        </h3>
        <div data-aos="fade-right"
            class="mx-5 grid md:grid-cols-5 grid-cols-3 md:w-3/4 w-auto content-center gap-4 md:m-auto md:my-5 md:h-20 mt-11">
            <img src="../assets/images/partner/1.png" alt="" />
            <img src="../assets/images/partner/3.png" alt="" />
            <img src="../assets/images/partner/4.png" alt="" />
            <img class="ml-12" src="../assets/images/partner/5.png" alt="" />
            <img class="ml-12" src="../assets/images/partner/2.png" alt="" />
        </div>

        <div class="items-center justify-between flex flex-row xs:flex-row mt-14 mx-5 md:mx-10 gap-36">
            <div class="w-3/6 my-7 ">
                <div class="w-4/6 progress-img rounded-xl shadow-xl"></div>
                <div class="w-72 ml-80 -mt-44 h-80 absolute bg-white rounded-lg shadow-2xl">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-sm text-gray-700 leading-none py-2 px-4 mt-5 font-semibold">
                                Daily Progress
                            </p>
                            <p class="text-xs text-gray-500 leading-none py-2 px-4">
                                Start from Oct 20-25, 2021
                            </p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500 py-2 px-4 mt-5 font-bold">
                                ...
                            </p>
                        </div>
                    </div>



                    <div class="w-36 h-36 flex items-center progress-rating m-auto mt-8 rounded-full">
                        <span class="text-center m-auto">
                            <b class="text-4xl text-blue-600">80%</b>
                            <p class="text-xs">Tasks Completed</p>
                        </span>
                    </div>
                </div>
            </div>

            <div class="w-3/6 h-auto ml-20">
                <h1 class="leading-none text-6xl text-left font-semibold text-gray-800 mt-10">
                    Helps you be productive with activities
                </h1>

                <p class="mt-7 font-normal  leading-snug">
                    The next step in managing an effective work team is to get
                    to know the members of the work team individually. Getting
                    to know here is not only on a professional level, but on a
                    more personal level so that work relations will be better
                    directed.
                </p>

                <button
                    class="md:w-2/6 bg-purple-700 mt-6 text-white shadow-2xl rounded-lg active:bg-purple-600 font-medium px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button">
                    Learn more
                </button>
            </div>
        </div>
    </section>

    <section class="w-full sections">
        <div class="items-center flex flex-row xs:flex-column mx-11 justify-between mt-40 xs:flex-wrap">
            <div data-aos="fade-down-right" class="w-3/6 h-96 my-7 -mt-40 flex-auto">
                <h1 class="text-gray-800 text-6xl text-left font-semibold mt-14 w-5/6">
                    Our features that help you be more efficient
                </h1>
                <p class="mt-7 font-light leading-snug w-4/6">
                    Can delegate tasks to the right people according to their
                    abilites to ensure the team is working productively .
                </p>
                <button
                    class="md:w-2/6 bg-purple-700 mt-6 text-white shadow-2xl rounded-lg active:bg-purple-600 font-medium px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button">
                    Get Started
                </button>
            </div>
            <div class="w-3/6 flex items-center my-7">
                <img class="w-6/6 h-auto flex-end" src="../assets/images/11.svg" alt="" />
                <!-- <div class="w-3/6 card-img rounded-xl shadow-xl "></div> -->
            </div>
        </div>
    </section>

    <section class="w-full bg-gray-200">
        <h2 class="text-center text-5xl pt-16 font-semibold text-gray-800">
            We have affordable <br /><span class="text-blue-600">price</span>
            options
        </h2>

        <div class="flex justify-between items-center mt-20 gap-3 mx-10 pb-12">
            <div class="border-2 border-indigo-600 rounded-2xl p-6">
                <h1 class="text-2xl my-5 font-semibold text-gray-800">Basic</h1>

                <span class="text-2xl"><span class="text-5xl font-bold text-purple-400">$12
                    </span>
                    /month</span>

                <ul class="mt-16 font-medium">

                    <li class="my-2"><span class="text-lg text-purple-600 mdi mdi-check-circle"
                            aria-hidden="true"></span>
                        Unlimited Drafts
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span> 3 Project
                        files
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span> For 3
                        people per team
                    </li>
                </ul>

                <button
                    class="md:w-80 bg-purple-600 mt-6 text-white shadow-lg rounded-lg active:bg-purple-600 font-medium mt-28 py-3 rounded shadow hover:shadow-md"
                    type="button">
                    Get Started
                </button>
            </div>
            <div class="w-96 border-2 bg-purple-600 border-indigo-600 rounded-2xl p-6 text-white">
                <h1 class="text-2xl my-5 font-semibold">Medium</h1>

                <span class="text-2xl"><span class="text-5xl font-bold">$16 </span> /month</span>

                <ul class="mt-16 font-medium">
                    <li class="my-2">
                        <span class="text-lg text-white mdi mdi-check-circle" aria-hidden="true"></span>
                        Unlimited Drafts
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-white mdi mdi-check-circle" aria-hidden="true"></span> 10
                        Project files
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-white mdi mdi-check-circle" aria-hidden="true"></span>
                        For 5 people per team
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-white mdi mdi-check-circle" aria-hidden="true"></span>
                        Get the latest updates
                    </li>
                </ul>

                <button
                    class="md:w-80 bg-white text-indigo-600 shadow-lg rounded-lg active:bg-purple-600 font-medium mt-20 py-3 rounded shadow hover:shadow-md"
                    type="button">
                    Get Started
                </button>
            </div>
            <div class="w-96 border-2 border-indigo-600 rounded-2xl p-6">
                <h1 class="text-2xl my-5 font-semibold text-gray-800">
                    Professional
                </h1>

                <span class="text-2xl"><span class="text-5xl font-bold text-purple-400">$20
                    </span>
                    /month</span>

                <ul class="mt-16 font-medium">
                    <li class="my-2">
                        <span class="text-lg text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span>
                        Unlimited Drafts
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-purple-600 mdi mdi-check-circle" aria-hidden="true">
                        </span>
                        Unlimited Project files
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span>
                        For 10 people per team
                    </li>
                    <li class="my-2">
                        <span class="text-lg text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span> Get the
                        latest updates
                    </li>
                </ul>

                <button
                    class="md:w-80 bg-purple-600 text-white shadow-lg rounded-lg active:bg-purple-600 font-medium mt-20 py-3 rounded shadow hover:shadow-md"
                    type="button">
                    Get Started
                </button>
            </div>
        </div>
    </section>

    <section class="w-full h-screen sections">
        <div class="mx-10 mt-28">
            <h1 class="text-5xl font-medium">
                What do they say <br> about us
            </h1>

            <div data-aos="zoom-out" class="flex justify-space-between gap-10 align-center mt-20 gap-3">
                <div class="w-2/3 h-80 shadow-xl  rounded-lg">
                    <div class="mx-5 my-10">
                        <span class="text-purple-600 text-5xl mdi mdi-format-quote-open"></span>

                        <p class="text-base mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga
                            quisquam asperioreboriosam a, upiditate algnam.
                        </p>

                        <div class="flex w-48 gap-2 mt-10">
                            <img class="w-11 h-11 rounded-full" src="../assets/images/k.jpg" alt="">
                            <div>
                                <p class="font-medium">Emelly Putri</p>
                                <p class="text-gray-500 text-sm">CEO at company</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="w-2/3 h-80 shadow-xl  rounded-lg">
                    <div class="mx-5 my-10">
                        <span class="text-purple-600 text-5xl mdi mdi-format-quote-open"></span>

                        <p class="text-base mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga
                            quisquam asperioreboriosam a, upiditate algnam.
                        </p>

                        <div class="flex w-48 gap-2 mt-10">
                            <img class="w-11 h-11 rounded-full" src="../assets/images/j.jpg" alt="">
                            <div>
                                <p class="font-medium">Aldi Taher</p>
                                <p class="text-gray-500 text-sm">Founder at Agency</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="w-2/3 h-80 shadow-xl  rounded-lg">
                    <div class="mx-5 my-10">
                        <span class="text-purple-600 text-5xl mdi mdi-format-quote-open"></span>

                        <p class="text-base mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga
                            quisquam asperioreboriosam a, upiditate algnam.
                        </p>

                        <div class="flex w-48 gap-2 mt-10">
                            <img class="w-11 h-11 rounded-full" src="../assets/images/prog.jpeg" alt="">
                            <div>
                                <p class="font-medium">Ayu Tenan</p>
                                <p class="text-gray-500 text-sm">Founder at Studio</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="bg-purple-600 text-white h-96 w-3/3 mx-10 mb-10">
        <div class="mx-auto w-2/3 h-72">
            <h1 class="text-5xl font-medium text-center pt-16">Try it for free, Join now</h1>
            <p class="text-center font-normal mt-8">Let's join now and get 1 file for free, with this you are <br> more
                productive
            </p>
            <form class="mt-10 flex items-center justify-center">
                <div class="w-2/3 h-20 bg-white shadow-lg rounded-lg p-3">

                    <input class="focus:outline-none text-gray-700 md:w-4/6 p-2 rounded-lg"
                        placeholder="Enter e-mail address" type="text" />
                    <button
                        class="md:w-2/6 bg-purple-600 text-white shadow-md rounded-lg active:bg-purple-600 font-bold px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button">
                        <i class="fas fa-gem"></i> Start Trial Free
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="h-16 w-3/3 mx-10 mt-20">
        <div class="md:flex md:justify-between py-5">
            <div class="flex items-center justify-between mb-4 md:mb-0">
                <h1 class="leading-none text-xl text-blue-700">
                    <a class="no-underline font-semibold " href="#">
                        <img class="logo inline" src="../assets/images/logo.png" alt="" />
                        Clique
                    </a>
                </h1>

                <a class="text-black hover:text-orange md:hidden" href="#">
                    <i class="fa fa-2x fa-bars"></i>
                </a>
            </div>
            <!-- END Logo text or image -->

            <!-- menu -->
            <nav>
                <ul class="list-reset md:flex md:items-center">
                    <li class="md:px-6">
                        <a class="block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                            href="#">
                            Solution
                            <span class="mdi mdi-chevron-down"></span>
                        </a>
                    </li>
                    <li class="md:px-5">
                        <a class="border-t block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                            href="#">
                            Pricing
                        </a>
                    </li>
                    <li class="md:px-5">
                        <a class="border-t block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                            href="#">
                            Features
                        </a>
                    </li>
                    <li class="md:px-5">
                        <a class="border-t block no-underline hover:underline font-medium text-black hover:text-black md:border-none"
                            href="#">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>


            <div class="md:flex justify-between mb-4 md:mb-0">
                <span class="text-2xl px-2 mdi mdi-twitter"></span>
                <span class="text-2xl px-2 mdi mdi-facebook"></span>
                <span class="text-2xl px-2 mdi mdi-instagram"></span>
            </div>
        </div>

    </div>
</template>

<style scoped>
* {
    margin: 0;


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
