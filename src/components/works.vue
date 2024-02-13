<script></script>

<template>
    <div class="lg:rounded-2xl bg-[#111111] pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14 pb-5">
        <div class="heading">
            <h1 class="text-white text-[20px] lg:text-[40px] font-bold leading-[60px] relative">Projects</h1>
        </div>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-[30px]">
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="des">
                    <h3 clas s="text-white text-xl font-semibold mb-3">
                        <a href="https://naresh515.github.io/Delici/" target="_blank"> <img src="../assets/logo.png"></a>
                    </h3>
                    <p class=" leading-8 text-[#A6A6A6]">A responsive template for food domain, a minimal single page
                        website best fit for an informative site, it showcases menus and other information all in a single
                        page. Click on the img for experience the project live</p>
                </div>
            </div>
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="des">
                    <h3 class="text-white text-xl font-semibold mb-3">
                        <a href="https://naresh515.github.io/interior/" target="_blank"><img
                                src="../assets/Interior-Design-Webflow-Website.png"></a>
                    </h3>
                    <p class="leading-8 text-[#A6A6A6]">A responsive website for Modern Kitchen architecture. It contains
                        several pages like home services. It showcases the information in the particular based pages. Click
                        on the img for experience the project live</p>
                </div>
            </div>
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="des">
                    <h3 class="text-white text-xl font-semibold mb-3">
                        <a href="https://naresh515.github.io/Dexon-templete/" target="_blank"><img
                                src="../assets/logo2.png"></a>
                    </h3>
                    <p class="leading-8 text-[#A6A6A6]">A responsive website with using Sass and bootstrap. Click on the img
                        for experience the project live</p>
                </div>
            </div>
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="des last">
                    <h3 class="text-white text-xl font-semibold mb-3">
                        <a href="https://naresh515.github.io/Swiss-air-base/" target="_blank"><img
                                src="../assets/logo (2).png"></a>
                    </h3>

                    <p class="leading-8 text-[#A6A6A6]">A responsive website for Zerman Air Craft protect us for emergencies
                        of all kinds. Click on the img for experience the project live</p>
                </div>
            </div>
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

.last h3 img {
    height: 80px;
}

@media screen and (max-width: 800px) {
    .heading h1:after {
        left: 7rem;
        width: 10rem;
    }
}
</style>