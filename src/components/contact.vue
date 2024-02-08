<script></script>

<template>
    <div class="lg:rounded-2xl bg-[#111111] pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div class="heading">
            <h1 class="text-white text-[40px] font-bold leading-[60px] relative">Contact</h1>
        </div>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 my-[30px]">
            <div class="flex gap-4 rounded-[0.75rem] p-[1.5rem] bg-[#212425]">
                <div>
                    <i class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i>
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold mb-2">Phone :</h3>
                    <p class=" leading-8 text-[#A6A6A6]">8279214452</p>
                    <p class=" leading-8 text-[#A6A6A6]">9521081244</p>
                </div>
            </div>
            <div class="flex gap-4 rounded-[0.75rem] p-[1.5rem] bg-[#212425]">
                <div>
                    <i class="fa-solid fa-envelope text-[#FD7590]"></i>
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold">Email :</h3>
                    <p class="leading-8 text-[#A6A6A6]">taknaresh515@gmail.com</p>
                </div>
            </div>
        </div>
        <div>
            <form action="https://formspree.io/f/mayrevpp" method="post">
                <div class="flex flex-col mb-[20px]">
                    <label for="name"
                        class="peer-focus:font-medium text-sm text-gray-500 dark:text-color-910 peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name:</label>
                    <input type="text" id="name" name="name" required
                        class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer">
                </div>
                <div class="flex flex-col mb-[20px]">
                    <label for="email"
                        class="peer-focus:font-medium text-sm text-gray-500 dark:text-color-910 peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email:</label>
                    <input type="email" id="email" name="email" required
                        class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer">
                </div>
                <div class="flex flex-col">
                    <label for="message"
                        class="peer-focus:font-medium text-sm text-gray-500 dark:text-color-910 peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message:</label>
                    <input type="text" id="message" name="message" required
                        class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer">
                </div>
                <div class="mt-[20px]">
                    <input type="submit" value="Submit"
                        class="hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:border-transparent font-semibold cursor-pointer border-color-910 px-6 py-2 rounded-lg border-[2px] text-white">
                </div>
            </form>

        </div>
    </div>
</template>

<style scoped>
.heading h1:after {
    content: "";
    left: 11rem;
    width: 12rem;
    position: absolute;
    top: 50%;
    height: 0.125rem;
    transform: translateY(-50%);
    border-radius: 0.375rem;
    background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}
</style>