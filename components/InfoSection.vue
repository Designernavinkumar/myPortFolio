<template>
    <div class="lg:mx-28 xl:mx-60 mx-3 lg:p-2 md:p-2 sm:p-1 p-1 mt-24 2xl:mt-32 xl:mt-28 lg:mt-24 md:mt-20 sm:mt-28">
      <div class="flex md:flex-row gap-6 flex-col items-center">
        <div class="lg:w-3/5 md:w-3/6 flex flex-col 2xl:gap-8 gap-6 md:order-1 order-2">
          <div class="flex flex-col gap-6 sm:gap-4">
            <h1 class="font-EBGaramond italic font-semibold 2xl:text-6xl sm:text-5xl text-4xl text-black-3">
              Front-end Developer
            </h1>
            <div class="flex flex-col gap-4">
              <p class="font-Poppins 2xl:text-lg md:text-sm sm:text-base text-sm font-light text-black-3">
                I specialize in crafting interactive, user-friendly websites and
                applications. With a passion for clean design and seamless user
                experiences, I bridge the gap between design and development.
              </p>
            </div>
          </div>
          <div class="flex flex-row 2xl:gap-6 gap-4">
              <ButtonForGitHub />
              <a href="https://www.linkedin.com/in/navinkumardesigner/" target="_blank" class="flex flex-row gap-2 items-center bg-black-2 px-3 rounded-md">
                <img src="/public/svg/linked_in_icon.svg" alt="icon" class="w-4 md:w-6">
              </a>
              <a href="https://www.behance.net/navinkumar174" target="_blank" class="flex flex-row gap-2 items-center bg-black-2 px-3 rounded-md">
                <img src="/public/svg/behance_icon.svg" alt="icon" class="w-4 md:w-6">
              </a>
          </div>
        </div>
        <div class="lg:w-2/5 md:w-3/6 md:order-2 order-1 flex justify-center">
          <div class="flex justify-end items-end h-[331px] w-[331px]  relative bg-gray-50 rounded-full">
            <div class="absolute z-0 h-full w-full container rounded-full overflow-hidden">
              <div
                v-for="(line, index) in lines"
                :key="index"
                class="vertical-line"
                :style="{ left: `${line}px`, opacity: getOpacity(line) }"
              ></div>
            </div>
            <img
              @mousemove="handleMouseMove" 
              @mouseleave="handleMouseLeave"
              src="/public/img/myImgBanner-1.png"
              alt="img"
              class="z-10 h-[100%] absolute left-0 top-0 "
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const lines = ref([]); // Store positions of lines
  const containerWidth = ref(0); // Container width for calculation
  const showLines = ref(false); // Toggle lines visibility
  
  const getOpacity = (lineX) => {
    if (!showLines.value) return 0; // Hide lines when cursor leaves
    const distance = Math.abs(mouseX.value - lineX);
    const maxDistance = containerWidth.value / 2;
    return Math.max(0, 0.6 - distance / maxDistance); // Adjust opacity based on proximity
  };
  
  const mouseX = ref(0);
  
  const handleMouseMove = (event) => {
    showLines.value = true; // Show lines when cursor is inside the container
    const container = event.currentTarget.getBoundingClientRect();
    mouseX.value = event.clientX - container.left;
  };
  
  const handleMouseLeave = () => {
    showLines.value = false; // Hide lines when cursor leaves
  };
  
  onMounted(() => {
    const container = document.querySelector('.container');
    if (container) {
      containerWidth.value = container.offsetWidth;
  
      // Initialize lines evenly spaced across the container
      const lineCount = 50; // Number of lines
      const spacing = containerWidth.value / lineCount;
      for (let i = 0; i < lineCount; i++) {
        lines.value.push(i * spacing);
      }
    }
  });
  </script>
  
<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.vertical-line {
  position: absolute;
  bottom: 0;
  filter: sepia(1.8px);
  width: 2px;
  height: 100%;
  background-color: #40904D;
  transition: opacity 0.5s ease; /* Smooth transition for opacity */
}
</style>
    