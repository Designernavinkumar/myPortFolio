<template>
    <div class="flex flex-col gap-10 2xl:gap-12 2xl:mt-8 xl:mt-7 lg:mt-6 sm:mt-6">
      <!-- Chips -->
      <div class="chip-container w-[100vw] scroll-smooth snap-x flex flex-row gap-3 2xl:gap-4 lg:px-28 xl:px-60 px-3 sm:px-5 overflow-x-auto no-scrollbar">
        <button
          v-for="chip in chips"
          :key="chip.value"
          :class="['chip', { active: selectedCategory === chip.value }]"
          @click="filterCards(chip.value)"
          class="px-6 py-2 bg-gray-100 rounded-full font-Poppins font-medium text-sm 2xl:text-base text-black-2 flex items-center gap-2 text-nowrap"
        >
          <span>{{ chip.label }}</span>
        </button>
      </div>
  
      <!-- Cards -->
      <div class="lg:mx-28 xl:mx-60 mx-3 sm:mx-5 card-container flex flex-row flex-wrap lg:gap-6 sm:gap-5 gap-4 2xl:gap-10">
        <div
          v-for="card in filteredCards"
          :key="card.id"
          class="lg:max-w-[48%] md:max-w-[48%] md:min-w-[33.3%] min-w-[100%] max-w-[100%] flex-grow bg-white"
        >
        <div class="overflow-hidden relative">
          <div class="">
            <img
              :src="card.icon"
              alt=""
              class="absolute top-[6%] right-[2.4%] bg-white p-2 rounded-lg w-10 2xl:w-12"
            />
          </div>
          <img :src="card.img" alt="" class="w-full" />
        </div>
        <div class="p-4 bg-gray-50 flex flex-row items-center">
          <div class="flex-grow">
            <h6 class="font-Poppins text-xl font-semibold text-black-3 2xl:text-2xl">
              {{ card.cardHeading }}
            </h6>
            <p class="text-base text-black-3 2xl:text-lg">{{ card.cardpara }}</p>
          </div>
          <a :href="card.url" target="_blank">
            <div
            class="p-2 border-black-3 border-[1.8px] h-10 w-10 rounded-full flex justify-center items-center hover:bg-black-3 hover:border-none group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-300"
            >
              <g clip-path="url(#clip0_107_2815)">
                <path
                  d="M7 17L17 7"
                  class="path-stroke"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 7L17 7V16"
                  class="path-stroke"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_107_2815">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 -1 24 24)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Define chips for filtering
        chips: [
          { label: "All", value: "all" },
          { label: "Front-end Web Sites", value: "category1" },
          { label: "Ux&Ui Design", value: "category2" },
        ],
        // Define cards with categories
        cards: [
          { 
            id: 1, 
            category: "category2", 
            img: "/img/thumnail_for_block_flow.jpg",
            cardHeading: "UX/UI Case Study", 
            cardpara: "Block flow aims to develop a ...",
            icon: "/svg/behance_icon_black.svg",
            url : "https://www.behance.net/gallery/202073045/Blockchain-based-logistics-application"
            },
          { 
            id: 2, 
            category: "category2",
            img: "/img/thumnail_for_hap_days.jpg",
            cardHeading: "Responsive web site design",
            cardpara: "Hapdays is a user-centered travel website",
            icon: "/svg/behance_icon_black.svg",
            url : "https://www.behance.net/gallery/202424679/Travel-website-(Ux-UI-design)"
            },
            { 
            id: 5, 
            category: "category1",
            img: "/img/thumnail_Github_for_Opulence.jpg",
            cardHeading: "Landing page for opulence",
            cardpara: "Raw tailwindcss static site",
            icon: "/svg/git_hub_icon_black.svg",
            url : "https://github.com/Designernavinkumar/opilent-drive-web-application"
            },
          { 
            id: 3, 
            category: "category2",
            img: "/img/thumnail_for_sadp.jpg",
            cardHeading: "Dash board design",
            cardpara: "The School Dashboard simplifies school life",
            icon: "/svg/behance_icon_black.svg",
            url : "https://www.behance.net/gallery/204833945/School-administration-Dash-board(Ui-Ux-design)"
            },
          { 
            id: 4, 
            category: "category1",
            img: "/img/thumnail_Github_for_hap_days.jpg",
            cardHeading: "landing page for Hapdays",
            cardpara: "develope a website in vue stack",
            icon: "/svg/git_hub_icon_black.svg",
            url : "https://github.com/Designernavinkumar/nuxtHapDays"
            },
        ],
        selectedCategory: "all", // Default category
      };
    },
    computed: {
      filteredCards() {
        // Filter cards based on selected category
        if (this.selectedCategory === "all") {
          return this.cards;
        }
        return this.cards.filter(
          (card) => card.category === this.selectedCategory
        );
      },
    },
    methods: {
      filterCards(category) {
        this.selectedCategory = category;
      },
    },
  };
  </script>
  
  <style scoped>
    .chip.active {
    background-color: #e0f7fa;
    border: 1px solid #00796b;
    }
    .path-stroke {
    stroke: black;
    transition: stroke 0.3s ease;
    }
    .group:hover .path-stroke {
    stroke: white;
    }
  </style>
    