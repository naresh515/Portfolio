<script></script>

<template>
    <div class="lg:rounded-2xl bg-[#111111] pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14">
        <div class="heading">
            <h1 class="text-white text-[20px] lg:text-[40px] font-bold leading-[60px] relative">Contact</h1>
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
                    <label for="name" class="text-sm text-gray-500">Name:</label>
                    <input type="text" id="name" name="name" required autocomplete="off"
                        class="block py-2.5 px-0 w-full text-sm !bg-transparent border-0 border-b-[2px] appearance-none dark:text-white border-[#333333] focus:border-[#FF6464] focus:outline-none">
                </div>
                <div class="flex flex-col mb-[20px]">
                    <label for="email" class="text-sm text-gray-500">Email:</label>
                    <input type="email" id="email" name="email" required autocomplete="off"
                        class="block py-2.5 px-0 w-full text-sm !bg-transparent border-0 border-b-[2px] appearance-none dark:text-white border-[#333333] focus:border-[#FF6464] focus:outline-none">
                </div>
                <div class="flex flex-col">
                    <label for="message" class="text-sm text-gray-500">Message:</label>
                    <input type="text" id="message" name="message" required autocomplete="off"
                        class="block py-2.5 px-0 w-full text-sm !bg-transparent border-0 border-b-[2px] appearance-none dark:text-white border-[#333333] focus:border-[#FF6464] focus:outline-none">
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

@media screen and (max-width: 800px) {
    .heading h1:after {
        left: 7rem;
        width: 10rem;
    }
}
</style>