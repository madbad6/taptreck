<template>
  <teleport to="body">
    <div
      class="layout"
      v-if="showFormBewierAdd"
      @click.self="showFormBewierAdd = false"
      style="background: rgba(0, 0, 0, 0.7); z-index: 10"
    >
      <div class="layout-content" style="width: 992px">
        <form-brewery-add></form-brewery-add>
      </div>
    </div>
  </teleport>
  <button
    class="btn-big"
    @click="showFormBewierAdd = true"
    v-if="role === 1 || role === 3"
  >
    Добавить пивоварню
  </button>
  <div
    class="card mb-3"
    style="padding: 40px 20px; border: 1px solid #000"
    v-for="breweryItem in breweryData"
    :key="breweryItem.id"
  >
    <div class="row g-0">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          :src="breweryItem.image"
          class="img-fluid"
          alt="IMAGE"
          style="border-radius: 16px"
        />
      </div>
      <div class="col-md-8 d-flex">
        <div class="card-body py-0 d-flex flex-column justify-content-between">
          <div>
            <div
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 21px"
            >
              <h3 class="card-title">{{ breweryItem.name }}</h3>
              <img src="@/assets/images/favorites.svg" alt="ICON HEART" />
            </div>
            <div>
              <p>{{ breweryItem.type }}</p>
            </div>
          </div>
          <p
            class="card-text"
            style="color: #b8b8b8; font-size: 20px; letter-spacing: 3px"
          >
            {{ breweryItem.description }}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <a href="#">Смотреть на карте</a>
            <a href="#">Оставить отзыв</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row-btn">
    <button class="btn-more">Загрузить еще</button>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import {useStore} from "vuex";
import { GetDataProfile } from "@/HelperFunctions/GetDataProfile.js";
import FormBreweryAdd from "@/components/FormBreweryAdd.vue";
import axios from "axios";
export default {
  components: { FormBreweryAdd },
  name: "profile-beweries-page",
  setup() {
    const showFormBewierAdd = ref(false);
    const store = useStore()
    const profile = GetDataProfile();
    const role = profile.userRole;
    const userId = profile.userId;

    const breweryData = computed(() => store.getters.USER_BREWERY_DATA)

   const getUserBreweryData = () => {
      store.dispatch('GET_USER_BREWERY_DATA', userId)
   }
   getUserBreweryData()

    return {
      showFormBewierAdd,
      profile,
      role,
      userId,
      breweryData,
    };
  },
};
</script>

<style scoped>
.btn-big {
  position: absolute;
  top: -165px;
  right: 30px;
}
.row-btn {
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
</style>
