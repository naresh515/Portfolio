<script setup></script>

<template>
  <div class="lg:mx-[40px]">
    <div class="sub_container flex flex-col lg:grid grid-cols-[400px,1fr] lg:my-[50px] gap-14">
      <div class="w-full mx-auto text-center dark:bg-[#111111] p-6 lg:rounded-[20px] h-[690px]">
        <div class="flex flex-col items-center">
          <img src="./assets/Naresh.jpg">
          <h2 class="mt-6 mb-2 text-3xl font-semibold text-white">Naresh Tak</h2>
          <span class="mb-4 text-[#A6A6A6] inline-block px-5 py-1.5 rounded-lg bg-[#1D1D1D] ">Ui/Ux Designer</span>
        </div>
        <div class="flex socail_icon justify-center">
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"><a
              href="https://www.instagram.com/lunatic_naresh1?igsh=cGVwZmIxdjU5bjJv" class="text-[#1773EA]"><i
                class="fa-brands fa-instagram"></i></a></button>
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"><a
              href="https://x.com/Lunatic_Naresh?t=fCjBUwjalqrTpLxgy2BTYA&s=09" class="text-[#1C9CEA]"><i
                class="fa-brands fa-twitter"></i></a></button>
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"> <a
              href="https://github.com/naresh515?fbclid=PAAaZUwv63b3s-1QU2oKR5eoYGZJzcNUHih6vupC6vAN5lON1OK3Lb_eG75p8"
              class="text-[#e14a84]"><i class="fa-brands fa-github"></i></a></button>
          <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#212425] ml-[15px]"><a
              href="https://www.linkedin.com/in/naresh-tak-90b9a9209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              class="text-[#0072b1]"><i class="fa-brands fa-linkedin"></i></a></button>
        </div>
        <div class="contact_info bg-[#1D1D1D] p-2 lg:p-7 rounded-2xl my-7">
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Phone</span>
              <span><a href="tel:8279214452" class="text-white hover:text-[#FA5252]">8279214452</a></span>
            </div>
          </div>
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-location-dot text-[#6AB5B8]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Location</span>
              <span><a href="tel:8279214452" class="text-white">Bikaner, Rajasthan, India</a></span>
            </div>
          </div>
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-envelope text-[#FD7590]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Email</span>
              <span><a href="tel:8279214452" class="text-white hover:text-[#FA5252]">taknaresh515@gmail.com</a></span>
            </div>
          </div>
          <div class="flex py-2.5 gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-calendar-days text-[#C17CEB]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Birthday</span>
              <span><a href="tel:8279214452" class="text-white">April 15, 1997</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_container">
        <div class="lg:w-[526px] lg:h-[144px] p-[15px] lg:block lg:p-[30px] ml-auto mb-10 lg:rounded-[16px] bg-[#111111]">
          <div class="tabs flex">
            <RouterLink to="/" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium "><a
                  class="text-white flex flex-col"><i class="fa-solid fa-house"></i> Home</a></button>
            </RouterLink>
            <RouterLink to="resume" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-regular fa-file-lines"></i>Resume</a></button>
            </RouterLink>
            <RouterLink to="project" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-solid fa-cube"></i>Project</a></button>
            </RouterLink>
            <RouterLink to="contact" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-regular fa-address-book"></i>Contact</a></button>
            </RouterLink>
          </div>
        </div>
        <div class="tab-area">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-image: url(./assets/bgtwo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.socail_icon button:hover,
.contact_info button:hover .main_container .tabs button:hover {
  background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
  transition: all .5s ease-in-out;
}

.socail_icon button:hover a,
.contact_info button:hover i {
  color: white !important;
  transition: all .3s ease-in-out;
}

.router-link-active button {
  background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}
</style>
