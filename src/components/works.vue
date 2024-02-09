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
}</style>