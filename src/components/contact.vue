<script></script>

<template>
    <div class="lg:rounded-2xl bg-[#111111] pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14 pb-5">
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
                    <p class=" leading-8 text-[#A6A6A6]"><a href="tel:8279214452">+91 8279214452</a></p>
                    <p class=" leading-8 text-[#A6A6A6]"><a href="tel:9521081244"> +91 9521081244 </a></p>
                </div>
            </div>
            <div class="flex gap-4 rounded-[0.75rem] p-[1.5rem] bg-[#212425]">
                <div>
                    <i class="fa-solid fa-envelope text-[#FD7590]"></i>
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold">Email :</h3>
                    <p class="leading-8 text-[#A6A6A6]"><a href="mailto:taknaresh515@gmail.com">taknaresh515@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
        <div>
            <form action="https://formspree.io/f/mayrevpp" method="post">
                <div class="flex flex-col mb-[20px]">
                    <label for="name" class="text-sm text-gray-500">Name:</label>
                    <input type="text" id="name" name="name" required autocomplete="off"
                        class="block py-2.5 px-0 w-full text-sm !bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none">
                </div>
                <div class="flex flex-col mb-[20px]">
                    <label for="email" class="text-sm text-gray-500">Email:</label>
                    <input type="email" id="email" name="email" required autocomplete="off"
                        class="block py-2.5 px-0 w-full text-sm !bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none">
                </div>
                <div class="flex flex-col">
                    <label for="message" class="text-sm text-gray-500">Message:</label>
                    <input type="text" id="message" name="message" required autocomplete="off"
                        class="block py-2.5 px-0 w-full text-sm !bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none">
                </div>
                <div class="mt-[20px]">
                    <input type="submit" value="Submit"
                        class="hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:border-transparent font-semibold cursor-pointer border-color-910 px-6 py-2 rounded-lg border-[2px] text-white">
                </div>
            </form>

        </div>
        <div class="py-[10px] text-sm mt-8 rounded-[0.75rem] bg-[#212425]">
            <p class="text-white text-center flex items-center justify-center gap-4">This website created on
                <a href="https://vuejs.org/" target="_blank"><svg class="logo" viewBox="0 0 128 128" width="24" height="24"
                        data-v-e9cb7cd5="">
                        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                            data-v-e9cb7cd5=""></path>
                        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-e9cb7cd5="">
                        </path>
                    </svg></a> &
                <a href="https://tailwindcss.com/" target="_blank"><svg viewBox="0 0 248 31"
                        class="text-slate-900 dark:text-white w-auto h-5">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                            fill="#38bdf8"></path>
                    </svg></a>
            </p>
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