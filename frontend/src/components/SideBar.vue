<template>
  <div class="side-bar-wrapper">
    <!-- active=['r']는 r => 오른쪽으로 resize화 되도록    -->
    <VueResizable v-if="data.isVisibleSideBar" class ="resizable-side-bar" :width="500" :min-width="500" :max-width="Infinity" :active="['r']">

      <div class="side-bar">
        <div class="title-area">
          <input :value="data.title" placeholder="맛집 이름을 입력해주세요."/>
        </div>
        <div class="image-area">
          <div class="iw-file-input">
            사진을 업로드 해주세요
          </div>
        </div>
        <div class="location-info-area">
          <input placeholder="위치 정보 직접 입력하기" :value="data.address"/>
        </div>
        <div class="rate-area">
          <StarRating :value="data.grade" :max-stars="5" @ratingData = "updateRating" />
<!--          <p>Selected rating: {{ grade }}</p>-->
        </div>
        <div class="review-area">
          <textarea
              ref="textarea"
              placeholder="후기를 입력해주세요."
              cols="57"
              :value="data.review"
          />
        </div>
        <div class="bottom-btn-area">
          <b-button class="save-btn">저장</b-button>
        </div>
      </div>

    </VueResizable>
    <button class="side-bar-active-btn" size="sm" @click="showSideBar">
      {{ data.isVisibleSideBar ? '◀' : '▶' }}
    </button>
  </div>
</template>

<script setup>

import VueResizable from 'vue-resizable';
import StarRating from 'vue3-star-ratings';
import { computed, ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();

let data = ref({
  isVisibleSideBar: true,
  title: null,
  grade: null,
  review: null,
  address: null,
});

data.value.address = computed(() => store.state.address);

function showSideBar() {
  data.value.isVisibleSideBar = !data.value.isVisibleSideBar;
}

function updateRating(newRating) {
  data.value.grade = newRating;
}

</script>

<style lang="scss" scoped>
.side-bar-wrapper {
  display: flex;
  color: #fff;

  > .resizable-side-bar {
    > .side-bar {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px;

      > .title-area {
        padding: 20px 10px;

        input, input::placeholder, input:focus {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          box-shadow: none;
          background: none;
          border: none;
        }
      }

      > .image-area {
        padding: 0 10px;

        > .iw-file-input {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
          border: 5px dashed rgb(255,255,255);
          border-radius: 10px;
          height: 250px;
          background-color: #c8c8c8;
        }
      }

      > .location-info-area {
        width: 300px;
        padding: 10px;

        input, input::placeholder, input:focus {
          font-size: 1rem;
          color: #fff;
          box-shadow: none;
          background: none;
          border: none;
          width: 450px;
        }
      }

      > .rate-area {
        padding: 0 20px;
        text-align: center;

        output {
          font-size: 2rem;
          color: #ffdd00;
          background: none;
          border: none;
          box-shadow: none;
        }
      }

      > .review-area {
        padding: 20px 10px;

        textarea, textarea::placeholder {
          min-height: 300px;
          resize: none;
          color: #fff;
          background: none;
          border: none;
          box-shadow: none;
        }

        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
    }
  }

  > .side-bar-active-btn {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    padding: 0;
    border: none;
    border-radius: unset;
    color: #fff;
    opacity: 0.5;
    width: 40px;
    height: 40px;
  }

  > .bottom-btn-area {
    text-align: right;
    padding-right: 10px;

    > .save-btn {
      color: #fff;
      font-weight: bold;
      background-color: #ee9e06;
    }
  }
}

</style>
