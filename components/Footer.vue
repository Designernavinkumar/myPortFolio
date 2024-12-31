<template>
    <div class="bg-gray-50 lg:py-10 xl:py-8 gap-6 py-6 flex flex-col justify-center items-center mt-14 sm:mt-24 2xl:mt-32 lg:mt-28 lg:px-32 xl:px-96 px-3">
        <div class="flex-col flex justify-end gap-6 items-end bg-green-50 p-6 rounded-xl w-full mt-[-16%] bor">
            <div class=" text-black-3 flex flex-col gap-4 text-sm 2xl:text-lg justify-end w-full font-Poppins">
                <button @click="copyToClipboardInMail()" class="flex flex-row items-center justify-between px-6 py-3 bg-white drop-shadow-sm rounded-xl">
                    <p>+91 7639314383</p>
                    <img v-if="copied1 === true" src="/public/svg/Clipboard1.svg" alt="" class="w-6 rounded-full">
                    <img v-if="copied1 === false" src="/public/svg/Clipboard.svg" alt="" class="w-6 rounded-full">
                </button>
                <button @click="copyToClipboardInPhoneNumber()" class="flex flex-row items-center justify-between px-6 py-3 bg-white drop-shadow-sm rounded-xl">
                    <p>designernavinkumar@gmail.com</p>
                    <img v-if="copied2 === true" src="/public/svg/Clipboard1.svg" alt="" class="w-6 rounded-full">
                    <img v-if="copied2 === false" src="/public/svg/Clipboard.svg" alt="" class="w-6 rounded-full">
                </button>
            </div>
        </div>
        <div class="relative flex items-center">
            <h1 class="font-Poppins font-semibold sm:text-3xl text-2xl 2xl:text-4xl text-black-3 capitalize">Clip your pad my contacts</h1>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      copyToPhoneNumber: "7639314383",
      copyToEmail: "designernavinkumar@gmail.com",
      copied1: false,
      copied2: false,
    };
  },
  methods: {
    copyToClipboardInMail() {
      navigator.clipboard.writeText(this.copyToEmail).then(() => {
        // Set the copied state to true
        this.copied1 = true;
        // Reset the copied state after 2 seconds
        setTimeout(() => {
          this.copied1 = false;
        }, 1600);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    },
    copyToClipboardInPhoneNumber() {
      navigator.clipboard.writeText(this.copyToPhoneNumber).then(() => {
        // Set the copied state to true
        this.copied2 = true;

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          this.copied2 = false;
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    },
  },
};
</script>
