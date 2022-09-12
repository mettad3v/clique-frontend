<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <header class="md:flex md:items-center md:justify-between shadow-lg p-4 pb-0 md:pb-4">
  
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-blue-700">
      <a class="no-underline font-semibold hover:text-black" href="#">
        <img class="logo inline" src="../assets/images/logo.png" alt="">
        Clique
      </a>
    </h1>


    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>
  <!-- END Logo text or image -->
  
  <!-- Search field -->
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 font-medium text-black hover:text-black md:border-none md:p-0" href="#">
          Solution
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 font-medium text-black hover:text-black md:border-none md:p-0" href="#">
          Pricing
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 font-medium text-black hover:text-black md:border-none md:p-0" href="#">
          Features
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 font-medium text-black hover:text-black md:border-none md:p-0" href="#">
          Blog
        </a>
      </li>
    </ul>
  </nav>
  
  <!-- END Search field -->
  
  <!-- Global navigation -->
  <div class="md:flex mb-4 md:mb-0 ">
    <button class="text-blue-700 active:bg-purple-600 font-semibold text-sm px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Log in</button>

    <button class="bg-blue-700 text-white active:bg-purple-600 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
    >
      Sign up
    </button>
  </div>
  
  <!-- END Global navigation -->

</header>

  <section class="md:flex -mt-20 md:items-center md:justify-between bg p-12 w-full h-screen ">
    <div class="w-2/6 -mt-10 ml-10">
      <h1 class="leading-none text-5xl text-left font-semibold">Manage projects across <span class="text-purple-600">teams</span> <br> and <span class="text-gray-700">boards</span> .</h1>
      <p class="mt-5 text-gray-500 ">With this platform, you can find out the priority of your tasks so that your activities become efficient.</p>

      <form class=" mt-5 flex-wrap items-stretch">
        <span class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base  items-center justify-center w-8 pl-2 py-1">
          <i class="fas fa-lock"></i>
        </span>
        <input class="md:w-4/6 bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg" placeholder="Enter e-mail address" type="text">
        <button class="md:w-2/6 bg-purple-500 text-white shadow-md rounded-lg active:bg-purple-600 font-bold px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
        <i class="fas fa-gem"></i> Start Trial
        </button>
      </form>
    </div>
    <img class="w-4/6 h-4/6" src="../assets/images/scrum.svg" alt="">
  </section>

  <section class="bg-gray-200 sections w-full md:flex md:items-center md:justify-between">
    <div class="w-3/6 z-9 p-12 -mt-20 h-auto">
      <h2 class="leading-none text-6xl text-left font-medium">Why use task management tool</h2>
      <p class="mt-5 text-gray-700 w-4/6">You can be productive with this tool and distinguish your work priorities.</p>

      <button class="md:w-36 bg-purple-700 mt-6 text-white shadow-lg rounded-lg active:bg-purple-500 font-normal px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
      Get Started
      </button>
    </div>

    <div class="w-3/6 bg-gray-500 z-9 h-96">
      
    </div>
  </section>

  <section class="w-full ">
    <h3 class="text-center text-4xl pt-16 font-semibold">Trusted by over a lot of companies</h3>
    <div class="grid grid-cols-5 w-3/4 content-center gap-4 m-auto my-5 w-auto h-20 mt-11">
      <img src="../assets/images/partner/1.png" alt="">
      <img src="../assets/images/partner/3.png" alt="">
      <img src="../assets/images/partner/4.png" alt="">
      <img src="../assets/images/partner/5.png" alt="">
      <img src="../assets/images/partner/2.png" alt="">
    </div>


    <div class="items-center justify-between flex flex-row xs:flex-row mt-14 ">
      <div class="w-3/6 my-7 mx-11">
        <div class="w-4/6 progress-img rounded-xl shadow-xl "></div>
        <div class="w-72 ml-80 -mt-44 h-80 absolute bg-white rounded-lg shadow-2xl">
          <div class="flex justify-between">
            <div>
              <p class="text-sm text-gray-700 leading-none py-2 px-4 mt-5 font-semibold">Daily Progress</p>
              <p class="text-xs leading-none py-2 px-4">Start from Oct 20-25, 2021</p>
            </div>
            <div><p class="text-sm text-gray-500 py-2 px-4 mt-5 font-bold">...</p></div>
          </div>

          <div class="w-36 h-36 flex items-center progress-rating m-auto mt-8 rounded-full">
            <span class="text-center m-auto">
              <b class="text-4xl text-blue-600">80%</b>
              <p class="text-xs">Tasks Completed</p>
            </span>
          </div>
        </div>
      </div>

        
      <div class="w-3/6 h-auto ml-28 ">
        <h1 class="leading-none text-6xl text-left font-semibold text-gray-800 mt-10">Helps you be productive with activities</h1>

        <p class=" mt-7 font-normal w-5/6 leading-snug">The next step in managing an effective work team is to get to know the members of the work team individually. Getting to know here is not only on a professional level, but on a more personal level so that work relations will be better directed.</p>

        <button class="md:w-2/6 bg-purple-700 mt-6 text-white shadow-2xl rounded-lg active:bg-purple-600 font-medium px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
          Learn more
        </button>
      </div>
    </div>
  </section>

  <section class="w-full sections  ">
    <div class="items-center flex flex-row xs:flex-column mx-11 justify-between  mt-40 xs:flex-wrap">    
      <div class="w-3/6 h-96 my-7 -mt-40 flex-auto">
        <h1 class="text-gray-800 text-6xl text-left font-semibold mt-14 w-5/6">Our features that help you be more efficient</h1>
        <p class=" mt-7 font-light leading-snug w-4/6">Can delegate tasks to the right people according to their abilites to ensure the team is working productively .</p>
        <button class="md:w-2/6 bg-purple-700 mt-6 text-white shadow-2xl rounded-lg active:bg-purple-600 font-medium px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
          Get Started
        </button>
      </div>
      <div class="w-3/6 flex items-center my-7">
        <img class="w-6/6 h-auto flex-end" src="../assets/images/11.svg" alt="">
        <!-- <div class="w-3/6 card-img rounded-xl shadow-xl "></div> -->
      </div>
    </div>
  </section>
  
  <section class="w-full bg-gray-200">
    <h2 class="text-center text-5xl pt-16 font-semibold text-gray-800">We have affordable <br><span class="text-blue-600">price</span> options</h2>
    
    <div class=" grid grid-cols-3 justify-items-center align-center mt-20 gap-0 mx-14 pb-12">
      <div class=" price-card border-2 border-indigo-600 rounded-2xl p-6">
        <h1 class="text-2xl my-5 font-semibold text-gray-800">Basic</h1>

        <span class="text-2xl"><span class="text-5xl font-bold text-purple-600">$12 </span> /month</span>

        <ul class="mt-16 ">
          <li>Unlimited Drafts</li>
          <li>3 Project files</li>
          <li>For 3 people per team</li>
        </ul>

        <button class="md:w-80 bg-purple-700 mt-6 text-white shadow-lg rounded-lg active:bg-purple-600 font-medium mt-28 py-3 rounded   shadow hover:shadow-md" type="button">
          Get Started
        </button>
      
      </div>
      <div class="w-96 price-card border-2 bg-indigo-600 border-indigo-600 rounded-2xl p-6 text-white">
        <h1 class="text-2xl my-5 font-semibold ">Medium</h1>

        <span class="text-2xl"><span class="text-5xl font-bold">$16 </span> /month</span>

        <ul class="mt-16 ">
          <li>Unlimited Drafts</li>
          <li>10 Project files</li>
          <li>For 5 people per team</li>
          <li>Get the latest updates</li>
        </ul>

        <button class="md:w-80 bg-white text-indigo-600 shadow-lg rounded-lg active:bg-purple-600 font-medium mt-20 py-3 rounded   shadow hover:shadow-md" type="button">
          Get Started
        </button>
      </div>
      <div class="w-96 price-card border-2 border-indigo-600 rounded-2xl p-6">
        <h1 class="text-2xl my-5 font-semibold text-gray-800">Professional</h1>

        <span class="text-2xl"><span class="text-5xl font-bold text-purple-500">$20 </span> /month</span>

        <ul class="mt-16 ">
          <li><span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>Unlimited Drafts</li>
          <li>Unlimited Project files</li>
          <li>For 10 people per team</li>
          <li>Get the latest updates</li>
        </ul>

        <button class="md:w-80 bg-purple-700  text-white shadow-lg rounded-lg active:bg-purple-600 font-medium mt-20 py-3 rounded   shadow hover:shadow-md" type="button">
          Get Started
        </button>
      </div>
    </div>
  </section>

  <section class="w-full sections">

  </section>

</template>

<style scoped>
*{
  margin: 0;
}
.bg{
  background-image: url('../assets/images/bg.svg');
  height: 100vh;
}
.price-card{
  width: 87% ;
  height: 480px;
}
.logo{
  width: 40px;
  height: 40px;
}
.sections{
  min-height: 600px;
}
.progress-img{
  height: 450px;
  background-image: url('../assets/images/7.jpg');
  background-size: cover;
}

.progress-rating{
  border: 8px solid rgb(37 99 235);
  border-right-color: lightgray;
  border-bottom-right-radius: 70%;
}

.card-img{
  height: 450px;
  background-image: url('../assets/images/prog.jpeg');
  background-size: cover;
}

</style>
