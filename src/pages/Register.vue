<script>

</script>
<template>
    <section class="tw-bg-gray-50 tw-min-h-screen tw-flex tw-items-center tw-justify-center">
        <!-- login container -->
        <div class="tw-bg-gray-100 tw-flex tw-rounded-2xl tw-shadow-lg tw-max-w-3xl tw-p-5 tw-items-center">
            <!-- form -->
            <div class="mdtw-w-1/2 tw-px-8 md:tw-px-16">
                <h2 class="tw-font-bold tw-text-2xl tw-text-[#002D74]">Register</h2>
                <p class="tw-text-xs tw-mt-4 tw-text-[#002D74]">Get Started</p>

                <form action="" class="tw-flex tw-flex-col tw-gap-4">
                    <input class="tw-p-2 tw-mt-8 tw-rounded-xl tw-border-2 tw-border-blue-200" type="text" name="name"
                        placeholder="Fullname">
                    <input class="tw-p-2 tw-rounded-xl tw-border-2 tw-border-blue-200" type="email" name="email"
                        placeholder="Email">
                    <div class="tw-relative">
                        <input class="tw-p-2 tw-rounded-xl tw-border-2 tw-border-blue-200 tw-w-full" type="password"
                            name="password" placeholder="Password">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                            class="bi bi-eye tw-absolute tw-top-1/2 tw-right-3 tw--translate-y-1/2" viewBox="0 0 16 16">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </div>
                    <button
                        class="tw-bg-[#002D74] tw-rounded-xl tw-text-white tw-py-2 hover:tw-scale-105 tw-duration-300">Register</button>
                </form>

                <div class="tw-mt-6 tw-grid tw-grid-cols-3 tw-items-center tw-text-gray-400">
                    <hr class="tw-border-gray-400">
                    <p class="tw-text-center tw-text-sm">OR</p>
                    <hr class="tw-border-gray-400">
                </div>


                <div class="tw-mt-3 tw-text-xs tw-flex tw-justify-between tw-items-center tw-text-[#002D74]">
                    <p>Already have an account?</p>
                    <button
                        class="tw-py-2 tw-px-5 tw-bg-white tw-border tw-rounded-xl hover:tw-scale-110 tw-duration-300">Register</button>
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