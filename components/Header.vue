<template>
    <div class="fixed w-[100vw] z-30 ">
     <div class="lg:mx-28 xl:mx-60 mx-3 lg:p-2 md:p-2 sm:p-1 p-1 rounded-full overflow-hidden mt-4 flex flex-rows relative backdrop-blur-[6px]">
        <div class="bg-[url('/public/texsture/clothTextsture.jpg')] bg-repeat-x opacity-20 absolute h-fill inset-0 backdrop-grayscale z-0"></div>
        <div class="md:w-1/3 w-1/2">
            <div class="2xl:w-[60px] 2xl:h-[60px] lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[50px] h-[50px] overflow-hidden rounded-full">
            <img src="/public/img/myImg.jpg" class="w-full">
            </div>
        </div>
        <h1 class="md:w-1/3 sm:w-1/2 w-0 font-Sour 2xl:text-3xl md:text-2xl text-xl text-black-1 flex md:justify-center justify-end items-center"><p class="md:mr-0 mr-[10px] md:mt-0 mt-[-3px] hidden md:flex">Navinkumar</p></h1>
        <div class="md:w-1/3 w-1/2 flex justify-end items-center z-10 ">
                 <button class="bg-black-3 shadow-sm text-white px-6 2xl:h-[80%] h-full rounded-full 2xl:text-lg text-base font-semibold flex justify-center items-center font-poppins" @click="downloadFile()"><p class="mt-[-3px]">Resume</p></button>
        </div>
     </div>
    </div>
</template>
<script>
export default {
  methods: {
    downloadFile() {
  const fileUrl = "/download/resume.pdf"; // Corrected path for public folder
  const fileName = "resume.pdf";

  // Create an anchor element
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;

  // Trigger the download
  document.body.appendChild(link); // Append to body to ensure compatibility
  link.click();
  document.body.removeChild(link); // Clean up after download
},

  },
};
</script>
