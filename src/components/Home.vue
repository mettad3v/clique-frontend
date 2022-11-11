<script setup>
import '@mdi/font/css/materialdesignicons.css'
import { ref, onMounted, inject } from 'vue'


defineProps({
    msg: String,
})

const jsonApi = inject('jsonApi')

const hidden = ref(true)
const toggleNav = () => {
    hidden.value = !hidden.value

}

const scrollToAnchorPoint = (point, m) => {
    m ? hidden.value = !hidden.value : ''
    let el = document.querySelector(`#${point}`);
    el.scrollIntoView({ behavior: "smooth" })
}

onMounted(
    async () => {
        const resp = await jsonApi.findAll('projects')
        console.table(resp.data);

        // console.log(axios);
    })


</script>

<template>

    <header class="md:tw-flex md:tw-justify-between tw-h-20 tw-py-5 md:tw-mx-10 tw-mx-5">
        <!-- Logo text or image -->
        <div class="tw-flex tw-items-center tw-justify-between tw-mb-4 md:tw-mb-0">
            <h1 class="tw-leading-none tw-text-2xl tw-text-blue-700">
                <a class="tw-no-underline tw-font-semibold " href="#">
                    <img class="logo tw-inline" src="../assets/images/logo.png" alt="" />
                    Clique
                </a>
            </h1>

            <a class="tw-text-black md:tw-hidden" href="#">
                <i @click="toggleNav" :class="{'mdi-menu': hidden}" class="tw-text-3xl mdi mdi-close"></i>
            </a>
        </div>

        <!-- END Logo text or image -->

        <!-- menu -->
        <nav class="tw-hidden md:tw-block">
            <ul class="tw-list-reset md:tw-flex md:tw-items-center">
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('solution')"
                        class="tw-block tw-no-underline hover:tw-underline tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none"
                        href="#">
                        Solution
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('feature')" class="tw-block tw-no-underline hover:tw-underline
                    tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none" href="#">
                        Features
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('price')" class=" tw-block tw-no-underline hover:tw-underline
                    tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none" href="#">
                        Pricing
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('testimony')" class=" tw-block tw-no-underline hover:tw-underline
                    tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none" href="#">
                        Testimonial
                    </a>
                </li>
            </ul>
        </nav>


        <div class="tw-hidden md:tw-block md:tw-flex tw-mb-4 md:tw-mb-0">
            <router-link to="/login">
                <button
                    class="tw-text-blue-600 active:tw-bg-purple-600 active:tw-text-white tw-font-semibold tw-text-sm tw-px-4 tw-py-2 tw-rounded tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button">
                    Log in
                </button>
            </router-link>

            <router-link to="/register">
                <button
                    class=" tw-bg-blue-600 tw-text-white active:tw-bg-white active:tw-text-purple-600 tw-font-bold tw-text-sm tw-px-4 tw-py-2 tw-rounded tw-shadow tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                    type="button">
                    Signup
                </button>
            </router-link>
        </div>


    </header>
    <div :class="{ 'tw--ml-128': hidden }"
        class="tw-transition-all tw-ease-in tw-duration-400 tw-block md:tw-hidden tw-bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] tw-from-yellow-500 tw-via-purple-500 tw-to-blue-500 tw-h-144 tw-z-40 tw-text-white tw-absolute tw-w-screen ">
        <nav class=" tw-flex tw-justify-center tw-items-center tw-h-full tw-text-center ">
            <ul class="tw-list-reset tw-space-y-6 tw-text-xl">
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('solution', 'm')"
                        class="tw-block tw-no-underline hover:tw-underline tw-font-bold tw-drop-shadow-xl" href="#">
                        Solution
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('feature', 'm')"
                        class="tw-block tw-no-underline hover:tw-underline tw-font-bold tw-drop-shadow-xl" href="#">
                        Features
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('price', 'm')"
                        class="tw-block tw-no-underline hover:tw-underline tw-font-bold tw-drop-shadow-xl " href="#">
                        Pricing
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <a @click.prevent="scrollToAnchorPoint('testimony', 'm')"
                        class="tw-block tw-no-underline hover:tw-underline tw-font-bold tw-drop-shadow-xl" href="#">
                        Testimonial
                    </a>
                </li>
                <li class="md:tw-p-2">
                    <button
                        class="tw-bg-purple-700 tw-text-white tw-shadow-lg tw-rounded-lg active:tw-bg-purple-500 tw-font-bold tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                        type="button">
                        <router-link to="/login">
                            Get Started
                        </router-link>

                    </button>
                </li>
            </ul>
        </nav>
    </div>

    <section class="md:tw-mb-32 tw-mt-7 md:tw-mt-1 tw-mb-0 tw-h-144 md:tw-h-screen md:tw-mx-10 tw-mx-5">

        <div class="tw-flex tw-justify-between tw-items-center md:tw-h-screen  md:tw--mt-20">
            <div class="md:tw-w-2/3 tw-w-full tw-h-80">
                <h1 class="tw-leading-none tw-text-5xl tw-text-left tw-font-semibold">
                    Manage projects across
                    <span class="tw-text-purple-600 ">teams</span>
                    and <span class="tw-text-gray-700 ">boards</span>.
                </h1>
                <p class="tw-mt-5 tw-text-gray-500">
                    With this platform, you can find out the priority of your tasks
                    so that your activities become efficient.
                </p>

                <p class="tw-text-gray-500 tw-mt-5">Give it a shot!</p>
                <div class="tw-w-full tw-mt-10 tw-h-14 md:tw-h-20 tw-shadow-lg tw-rounded-lg md:tw-p-3">
                    <form>

                        <input class="focus:tw-outline-none tw-text-gray-700 tw-w-full md:tw-w-4/6 tw-p-2 "
                            placeholder="Enter e-mail address" type="text" />
                        <button
                            class="md:tw-w-2/6 tw-w-full tw-mt-6 md:tw-mt-0 md:tw-ml-0 tw-bg-purple-500 tw-text-white tw-shadow-md tw-rounded-lg 
                            active:tw-bg-purple-600 tw-font-bold tw-px-4 tw-py-3 tw-text-base tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                            type="button">
                            <i class="mdi mdi-diamond-stone"></i> Start Trial
                        </button>
                    </form>
                </div>
            </div>
            <img class="tw-hidden md:tw-block floating tw-w-2/3 tw-h-3/6 tw--mt-20" src="../assets/images/scrum.svg"
                alt="" />
        </div>
    </section>

    <section id="solution" class="tw-bg-gray-200 ">
        <div
            class="md:tw-flex md:tw-justify-between tw-items-center md:tw-h-screen tw-h-auto tw-mx-5 md:tw-mx-10  tw-pt-20 md:tw-pt-0 tw--mt-20">
            <div class="md:tw-w-3/6 tw-w-full tw-z-9 tw-h-auto">
                <h2 class="tw-leading-none md:tw-text-6xl tw-text-5xl tw-text-left tw-font-medium">
                    Why use a task management tool?
                </h2>
                <p class="tw-mt-5 tw-text-gray-700 tw-w-full md:tw-w-4/6">
                    You can be productive with this tool and distinguish your work
                    priorities.
                </p>

                <div class="tw-hidden md:tw-block tw-flex tw-flex-row-reverse md:tw-flex-row">
                    <button
                        class="tw-w-40  md:tw-w-60  tw-bg-purple-700 tw-mt-6 tw-text-white tw-shadow-lg tw-rounded-lg active:tw-bg-purple-500 tw-font-normal tw-px-4 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                        type="button">
                        <router-link to="/login">
                            Get Started
                        </router-link>
                    </button>
                </div>
            </div>

            <div class="md:tw-w-3/6 tw-w-full tw-mt-16">
                <div data-aos="flip-up" class="tw-grid tw-grid-cols-2 tw-gap-8">
                    <div>
                        <img class="tw-mx-auto md:tw-mx-0" src="../assets/images/Vector.svg" alt="">

                        <h2 class="tw-font-bold tw-text-2xl tw-mt-5">Manage tasks</h2>
                        <p class="tw-text-gray-700 tw-text-sm md:tw-text-base tw-mt-1">Managing your tasks and projects
                            more
                            efficiently will
                            increase
                            your
                            productivity</p>

                    </div>
                    <div>
                        <img class="tw-mx-auto md:tw-mx-0" src="../assets/images/academic-cap.svg" alt="">

                        <h2 class="tw-font-bold tw-text-2xl tw-mt-5">Knowledge</h2>
                        <p class="tw-text-gray-700 tw-text-sm md:tw-text-base tw-mt-1">You can see insights more easily
                            and stay up
                            to date</p>
                    </div>
                    <div>
                        <img class="tw-mx-auto md:tw-mx-0" src="../assets/images/chart-bar.svg" alt="">


                        <h2 class="tw-font-bold tw-text-2xl tw-mt-5">Productivity</h2>
                        <p class="tw-text-gray-700 tw-text-sm md:tw-text-base tw-mt-1">With this tool you can be more
                            productive</p>
                    </div>
                    <div>
                        <img class="tw-mx-auto md:tw-mx-0" src="../assets/images/Frame.svg" alt="">


                        <h2 class="tw-font-bold tw-text-2xl  tw-mt-5">Collaboration</h2>
                        <p class="tw-text-gray-700 tw-text-sm md:tw-text-base tw-mt-1">Collaborating with your team is
                            very helpful
                            for daily activities
                        </p>
                    </div>
                </div>
                <div class="tw-block md:tw-hidden tw-flex ftw-lex-row-reverse md:tw-flex-row tw-pb-16">
                    <button
                        class="tw-w-screen  md:tw-w-60  tw-bg-purple-700 tw-mt-6 tw-text-white tw-shadow-lg tw-rounded-lg active:tw-bg-purple-500 tw-font-normal tw-px-4 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                        type="button">
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    </section>


    <section id="feature" class="tw-w-full">
        <h3 class="tw-text-center tw-leading-tight tw-text-4xl tw-pt-16 tw-font-semibold">
            Trusted by over a lot of companies
        </h3>
        <div data-aos="fade-right"
            class="tw-mx-5 tw-grid md:tw-grid-cols-5 tw-grid-cols-3 md:tw-w-3/4 tw-w-auto tw-content-center tw-gap-4 md:tw-m-auto md:tw-my-5 md:tw-h-20 tw-mt-11">
            <img src="../assets/images/partner/1.png" alt="" />
            <img src="../assets/images/partner/3.png" alt="" />
            <img src="../assets/images/partner/4.png" alt="" />
            <img class="tw-ml-12 md:tw-ml-0" src="../assets/images/partner/5.png" alt="" />
            <img class="tw-ml-12 md:tw-ml-0" src="../assets/images/partner/2.png" alt="" />
        </div>

        <div class="tw-items-center md:tw-justify-between md:tw-flex tw-mt-14 tw-mx-5 md:tw-mx-10 md:tw-gap-36">
            <div class="md:tw-w-3/6 tw-w-full tw-flex-1 tw-order-last md:tw-order-first tw-my-7 ">
                <div
                    class="tw-hidden md:tw-block md:tw-w-72 md:tw-ml-72 md:tw-mt-72 tw-ml-40 tw-mt-44 md:tw-h-80 tw-absolute tw-bg-white tw-rounded-lg tw-shadow-2xl">
                    <div class="tw-flex tw-justify-between">
                        <div>
                            <p
                                class="tw-text-sm tw-text-gray-700 tw-leading-none tw-py-2 tw-px-4 tw-mt-5 tw-font-semibold">
                                Daily Progress
                            </p>
                            <p class="tw-text-xs tw-text-gray-500 tw-leading-none tw-py-2 tw-px-4">
                                Start from Oct 20-25, 2021
                            </p>
                        </div>
                        <div>
                            <p class="tw-text-sm tw-text-gray-500 tw-py-2 tw-px-4 tw-mt-5 tw-font-bold">
                                ...
                            </p>
                        </div>
                    </div>


                    <div
                        class="tw-w-36 tw-h-36 tw-flex tw-items-center progress-rating tw-m-auto tw-mt-8 tw-rounded-full">
                        <span class="tw-text-center tw-m-auto">
                            <b class="tw-text-4xl tw-text-blue-600">80%</b>
                            <p class="tw-text-xs">Tasks Completed</p>
                        </span>
                    </div>
                </div>
                <div
                    class="md:tw-w-5/6 tw-w-full tw-bg-cover tw-bg-[url('./assets/images/7.jpg')] tw-h-72 md:tw-h-128 tw-rounded-xl tw-shadow-xl">
                </div>

            </div>

            <div class="tw-w-full tw-flex-1 md:tw-w-3/6 tw-h-auto md:tw-ml-20">
                <h1
                    class="tw-leading-tight tw-text-3xl md:tw-text-6xl tw-text-center md:tw-text-left tw-font-semibold tw-text-gray-800 tw-mt-10">
                    Helps you be productive with activities
                </h1>

                <p class="tw-mt-7 tw-font-normal  tw-leading-snug">
                    The next step in managing an effective work team is to get
                    to know the members of the work team individually. Getting
                    to know here is not only on a professional level, but on a
                    more personal level so that work relations will be better
                    directed.
                </p>

                <button
                    class="md:tw-w-2/6 tw-w-full tw-bg-purple-700 tw-mt-6 tw-text-white tw-shadow-2xl tw-rounded-lg active:tw-bg-purple-600 tw-font-medium tw-px-4 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                    type="button">
                    Learn more
                </button>
            </div>
        </div>
    </section>

    <section class="tw-w-full tw-h-auto md:tw-mt-0 tw-mt-20">
        <div class="tw-items-center md:tw-flex md:tw-mx-10 tw-mx-5 tw-justify-between ">
            <img class="tw-order-first md:tw-order-last md:tw-w-6/6 tw-h-auto" src="../assets/images/11.svg" alt="" />
            <div data-aos="fade-down-right" class="tw-flex-1 md:tw-w-3/6 tw-w-full tw-h-auto tw-my-7 ">
                <h1
                    class="tw-text-gray-800  tw-text-center tw-leading-tight tw-text-3xl md:tw-text-6xl md:tw-text-left tw-font-semibold tw-mt-14 tw-w-full md:tw-w-5/6">
                    Our features that help you be more efficient
                </h1>
                <p class="tw-mt-7 tw-font-normal tw-leading-snug tw-w-full md:tw-w-4/6">
                    Can delegate tasks to the right people according to their
                    abilites to ensure the team is working productively .
                </p>
                <button
                    class="md:tw-w-2/6 tw-w-full tw-bg-purple-700 tw-mt-6 tw-text-white tw-shadow-2xl tw-rounded-lg active:tw-bg-purple-600 tw-font-medium tw-px-4 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md otw-utline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                    type="button">
                    <router-link to="/login">
                        Get Started
                    </router-link>
                </button>
            </div>

        </div>
    </section>

    <section id="price" class="tw-w-full tw-bg-gray-200">
        <h2
            class="tw-text-center tw-leading-tight tw-text-4xl md:tw-text-5xl tw-mt-10 tw-pt-16 tw-font-semibold tw-text-gray-800">
            We have affordable <br /><span class="tw-text-blue-600">price</span>
            options
        </h2>

        <div
            class="tw-flex tw-flex-wrap md:tw-justify-between md:tw-items-center tw-mt-20 tw-gap-3 tw-mx-5 md:tw-mx-10 tw-pb-12">
            <div class="tw-w-full md:tw-w-auto tw-border-2 tw-border-indigo-600 tw-rounded-2xl tw-p-6">
                <h1 class="tw-text-2xl tw-my-5 tw-font-semibold tw-text-gray-800">Basic</h1>

                <span class="tw-text-2xl"><span class="tw-text-5xl tw-font-bold tw-text-purple-400">$12
                    </span>
                    /month</span>

                <ul class="tw-mt-16 tw-font-medium">

                    <li class="tw-my-2"><span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle"
                            aria-hidden="true"></span>
                        Unlimited Drafts
                    </li>
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span> 3
                        Project
                        files
                    </li>
                    <li class="my-2">
                        <span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span> For
                        3
                        people per team
                    </li>
                </ul>

                <button
                    class="md:tw-w-80 tw-w-full tw-bg-purple-600 tw-mt-6 tw-text-white tw-shadow-lg tw-rounded-lg active:tw-bg-purple-600 tw-font-medium tw-mt-28 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md"
                    type="button">
                    <router-link to="/login">
                        Get Started
                    </router-link>
                </button>
            </div>
            <div class="tw-w-96 tw-border-2 tw-bg-purple-600 tw-rounded-2xl tw-p-6 tw-text-white">
                <h1 class="tw-text-2xl tw-my-5 ftw-ont-semibold">Medium</h1>

                <span class="tw-text-2xl"><span class="tw-text-5xl tw-font-bold">$16 </span> /month</span>

                <ul class="tw-mt-16 tw-font-medium">
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-white mdi mdi-check-circle" aria-hidden="true"></span>
                        Unlimited Drafts
                    </li>
                    <li class="tw-my-2">
                        <span class="ttw-ext-lg tw-text-white mdi mdi-check-circle" aria-hidden="true"></span> 10
                        Project files
                    </li>
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-white mdi mdi-check-circle" aria-hidden="true"></span>
                        For 5 people per team
                    </li>
                    <li class="my-2">
                        <span class="tw-text-lg tw-text-white mdi mdi-check-circle" aria-hidden="true"></span>
                        Get the latest updates
                    </li>
                </ul>

                <button
                    class="md:tw-w-80 tw-w-full tw-bg-white tw-text-indigo-600 tw-shadow-lg tw-rounded-lg active:tw-bg-purple-600 tw-font-medium tw-mt-20 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md"
                    type="button">
                    <router-link to="/login">
                        Get Started
                    </router-link>
                </button>
            </div>
            <div class="tw-w-96 tw-border-2 tw-border-indigo-600 tw-rounded-2xl tw-p-6">
                <h1 class="tw-text-2xl tw-my-5 tw-font-semibold tw-text-gray-800">
                    Professional
                </h1>

                <span class="tw-text-2xl"><span class="tw-text-5xl tw-font-bold tw-text-purple-400">$20
                    </span>
                    /month</span>

                <ul class="tw-mt-16 tw-font-medium">
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span>
                        Unlimited Drafts
                    </li>
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle" aria-hidden="true">
                        </span>
                        Unlimited Project files
                    </li>
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span>
                        For 10 people per team
                    </li>
                    <li class="tw-my-2">
                        <span class="tw-text-lg tw-text-purple-600 mdi mdi-check-circle" aria-hidden="true"></span> Get
                        the
                        latest updates
                    </li>
                </ul>

                <button
                    class="md:tw-w-80 tw-w-full tw-bg-purple-600 tw-text-white tw-shadow-lg tw-rounded-lg active:tw-bg-purple-600 tw-font-medium tw-mt-20 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md"
                    type="button">
                    <router-link to="/login">
                        Get Started
                    </router-link>
                </button>
            </div>
        </div>
    </section>

    <section id="testimony" class="tw-w-full tw-mb-20">
        <div class="md:tw-mx-10 tw-mx-5 tw-mt-28">
            <h1 class="tw-text-5xl tw-font-medium">
                What do they say about us
            </h1>

            <div data-aos="zoom-out"
                class="md:tw-flex md:tw-justify-space-between tw-gap-10 tw-align-center tw-mt-20 tw-gap-3">
                <div class="md:tw-w-2/3 tw-w-full tw-h-64 md:tw-h-80 tw-shadow-xl  tw-rounded-lg">
                    <div class="tw-mx-5 tw-my-10">
                        <span class="tw-text-purple-600 tw-text-5xl mdi mdi-format-quote-open"></span>

                        <p class="tw-text-base tw-mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            fuga
                            quisquam asperioreboriosam a, upiditate algnam.
                        </p>

                        <div class="tw-flex tw-w-48 tw-gap-2 tw-mt-10">
                            <img class="tw-w-11 tw-h-11 tw-rounded-full" src="../assets/images/k.jpg" alt="">
                            <div>
                                <p class="tw-font-medium">Emelly Putri</p>
                                <p class="tw-text-gray-500 tw-text-sm">CEO at company</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="md:tw-w-2/3 tw-w-full tw-h-64 md:tw-h-80 tw-shadow-xl  tw-rounded-lg">
                    <div class="tw-mx-5 tw-my-10">
                        <span class="tw-text-purple-600 tw-text-5xl mdi mdi-format-quote-open"></span>

                        <p class="tw-text-base tw-mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            fuga
                            quisquam asperioreboriosam a, upiditate algnam.
                        </p>

                        <div class="tw-flex tw-w-48 tw-gap-2 tw-mt-10">
                            <img class="tw-w-11 tw-h-11 tw-rounded-full" src="../assets/images/j.jpg" alt="">
                            <div>
                                <p class="tw-font-medium">Aldi Taher</p>
                                <p class="tw-text-gray-500 tw-text-sm">Founder at Agency</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tw-w-full md:tw-w-2/3 tw-h-64 md:tw-h-80 tw-shadow-xl  tw-rounded-lg">
                    <div class="tw-mx-5 tw-my-10">
                        <span class="tw-text-purple-600 tw-text-5xl mdi mdi-format-quote-open"></span>

                        <p class="tw-text-base tw-mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            fuga
                            quisquam asperioreboriosam a, upiditate algnam.
                        </p>

                        <div class="tw-flex tw-w-48 tw-gap-2 tw-mt-10">
                            <img class="tw-w-11 tw-h-11 tw-rounded-full" src="../assets/images/prog.jpeg" alt="">
                            <div>
                                <p class="tw-font-medium">Ayu Tenan</p>
                                <p class="tw-text-gray-500 tw-text-sm">Founder at Studio</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="tw-bg-purple-600 tw-rounded-lg tw-text-white tw-h-80 tw-mx-5 md:tw-mx-10 tw-mb-10">
        <div class="tw-w-fit tw-mx-2 md:tw-mx-auto md:tw-w-2/3 md:tw-h-72 tw-h-full">
            <h1 class="md:tw-text-5xl tw-text-2xl tw-font-medium tw-text-center tw-pt-16">Try it for free, Join now</h1>
            <p class="tw-text-center tw-font-normal tw-mt-8">Let's join now and get 1 file for free, with this you are
                more
                productive
            </p>
            <form class="tw-mt-10 tw-flex tw-items-center tw-justify-center ">
                <div
                    class="md:tw-w-2/3 tw-w-full tw-h-20 tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-3 tw-border-2 tw-border-red-200">

                    <input class="focus:tw-outline-none tw-text-gray-700 md:tw-w-4/6 tw-w-4/6 tw-p-2 tw-rounded-lg"
                        placeholder="Enter e-mail address" type="text" />
                    <button
                        class="md:tw-w-2/6 tw-w-2/6 tw-bg-purple-600 tw-text-sm md:tw-text-base tw-text-white tw-shadow-md tw-rounded-lg active:tw-bg-purple-600 tw-font-bold tw-px-4 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-ease-linear tw-transition-all tw-duration-150"
                        type="button">
                        <router-link to="/login">
                            Start Trial
                        </router-link>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="tw-h-16 tw-w-3/3 tw-mx-5 mdtw-mx-10 tw-mt-20">
        <div class="tw-flex tw-justify-between tw-py-5">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-4 md:tw-mb-0">
                <h1 class="tw-leading-none tw-text-xl tw-text-blue-700">
                    <a class="tw-no-underline tw-font-semibold " href="#">
                        <img class="logo tw-inline" src="../assets/images/logo.png" alt="" />
                        Clique
                    </a>
                </h1>

                <a class="tw-text-black hover:tw-text-orange md:tw-hidden" href="#">
                    <i class="fa fa-2x fa-bars"></i>
                </a>
            </div>
            <!-- END Logo text or image -->

            <!-- menu -->
            <nav class="tw-hidden md:tw-block">
                <ul class="tw-list-reset md:tw-flex md:tw-items-center">
                    <li class="md:tw-px-6">
                        <a class="tw-block tw-no-underline hover:tw-underline tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none"
                            href="#">
                            Solution
                            <span class="mdi mdi-chevron-down"></span>
                        </a>
                    </li>
                    <li class="md:tw-px-5">
                        <a class="tw-border-t tw-block tw-no-underline hover:tw-underline tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none"
                            href="#">
                            Pricing
                        </a>
                    </li>
                    <li class="md:tw-px-5">
                        <a class="tw-border-t tw-block tw-no-underline hover:tw-underline tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none"
                            href="#">
                            Features
                        </a>
                    </li>
                    <li class="md:px-5">
                        <a class="tw-border-t tw-blocktw- no-underline hover:tw-underline tw-font-medium tw-text-black hover:tw-text-black md:tw-border-none"
                            href="#">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>


            <div class="md:tw-flex tw-justify-between tw-mb-4 md:tw-mb-0">
                <span class="tw-text-2xl tw-px-2 mdi mdi-twitter"></span>
                <span class="tw-text-2xl tw-px-2 mdi mdi-facebook"></span>
                <span class="tw-text-2xl tw-px-2 mdi mdi-instagram"></span>
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
