<script>

</script>
<template>
    <section class="tw-bg-gray-50 tw-min-h-screen tw-flex tw-items-center tw-justify-center">
        <!-- login container -->
        <div class="tw-bg-gray-100 tw-flex tw-rounded-2xl tw-shadow-lg tw-max-w-3xl tw-p-5 tw-items-center">
            <!-- form -->
            <div class="md:tw-w-1/2 tw-px-8 md:tw-px-16">
                <h2 class="tw-font-bold tw-text-2xl tw-text-[#002D74]">Login</h2>
                <p class="tw-text-xs tw-mt-4 tw-text-[#002D74]">If you are already a member, easily log in</p>

                <form action="" class="tw-flex tw-flex-col tw-gap-4">
                    <input class="tw-p-2 tw-mt-8 tw-rounded-xl tw-border" type="email" name="email" placeholder="Email">
                    <div class="tw-relative">
                        <input class="tw-p-2 tw-rounded-xl tw-border tw-w-full" type="password" name="password"
                            placeholder="Password">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                            class="bi bi-eye tw-absolute tw-top-1/2 tw-right-3 tw--translate-y-1/2" viewBox="0 0 16 16">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </div>
                    <button
                        class="tw-bg-[#002D74] tw-rounded-xl tw-text-white tw-py-2 hover:tw-scale-105 tw-duration-300">Login</button>
                </form>
                <!-- 
                <div class="tw-mt-6 tw-grid tw-grid-cols-3 tw-items-center tw-text-gray-400">
                    <hr class="tw-border-gray-400">
                    <p class="tw-text-center text-sm">OR</p>
                    <hr class="tw-border-gray-400">
                </div> -->

                <!-- <button
                    class="tw-bg-white tw-border tw-py-2 tw-w-full tw-rounded-xl tw-mt-5 tw-flex tw-justify-center tw-items-center tw-text-sm hover:tw-scale-105 tw-duration-300 tw-text-[#002D74]">
                    <svg class="tw-mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                        <path fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    Login with Google
                </button> -->

                <div class="tw-mt-5 tw-text-xs tw-border-b tw-border-[#002D74] tw-py-4 tw-text-[#002D74]">
                    <a href="#">Forgot your password?</a>
                </div>

                <div class="tw-mt-3 tw-text-xs tw-flex tw-justify-between tw-items-center tw-text-[#002D74]">
                    <p>Don't have an account?</p>
                    <button
                        class="tw-py-2 tw-px-5 tw-bg-white tw-border tw-rounded-xl hover:tw-scale-110 tw-duration-300">
                        <router-link to="/register">Register</router-link>
                    </button>
                </div>
            </div>

            <!-- image -->
            <div class="md:tw-block tw-hidden tw-w-1/2">
                <img class="tw-rounded-2xl"
                    src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80">
            </div>
        </div>
    </section>
</template>