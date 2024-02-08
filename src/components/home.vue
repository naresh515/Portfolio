<script></script>

<template>
    <div class="lg:rounded-2xl bg-[#111111] pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div class="heading">
            <h1 class="text-white text-[40px] font-bold leading-[60px] relative">About Me</h1>
            <p class="text-[#A6A6A6] text-[15px] leading-7 pt-[30px] pb-12">11 Months of experience in all facets of web
                development, from research and analysis,
                design,
                development, testing, and implementation of code and applications with long term support and
                maintenance. Doesn’t only create working inter/intranet sites, but creates better ones and continually
                strives to improve a site's usability, functionality, and navigation throughout its lifecycle. Ability to
                translate business requirements into innovative software solutions.
            </p>
        </div>
        <div class="works">
            <h3 class="text-[35px] text-white font-medium pb-5">What I do !</h3>
        </div>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div>
                    <img src="../assets/icon-1.svg" width="40" height="40" class="!w-10 !h-10 object-contain block !max-w-[40px]">
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold">Ui/Ux Design</h3>
                    <p class=" leading-8 text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
                        volutpat.</p>
                </div>
            </div>
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="img">
                    <img src="../assets/icon-2.svg" width="40" height="40" class="!w-10 !h-10 object-contain block !max-w-[40px]">
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold">App Development</h3>
                    <p class="leading-8 text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
                        volutpat.</p>
                </div>
            </div>
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="img">
                    <img src="../assets/icon-5.svg" width="40" height="40" class="!w-10 !h-10 object-contain block !max-w-[40px]">
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold">Managment</h3>
                    <p class="leading-8 text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
                        volutpat.</p>
                </div>
            </div>
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div class="img">
                    <img src="../assets/icon-6.svg" width="40" height="40" class="!w-10 !h-10 object-contain block !max-w-[40px]">
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold">Web Development</h3>
                    <p class="leading-8 text-[#A6A6A6]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
                        volutpat.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heading h1:after {
    content: "";
    left: 13rem;
    width: 12rem;
    position: absolute;
    top: 50%;
    height: 0.125rem;
    transform: translateY(-50%);
    border-radius: 0.375rem;
    background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}

</style>