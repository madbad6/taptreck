<template>
  <section id="beweryesPage">
    <!-- <button id="addBeer" class="btn btn-warning text-white">
      Добавить пиво
    </button> -->
    <h1 class="text-center">
      <span class="title fw-semibold">Пивоварни</span>
    </h1>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div
              class="card mb-3"
              v-for="item in breweriesData"
              :key="item.id"
              :data-id="item.id"
              :data-breweryId="item.breweryId"
            >
              <div class="row g-0">
                <div
                  class="col-md-4 d-flex justify-content-center align-items-center"
                >
                  <div class="card-img">
                    <img :src="item.image" :alt="item.name" />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">
                      {{ item.type }}
                    </p>
                    <p class="card-text">
                      {{ item.description }}
                    </p>
                    <p class="card-text">Город: {{ item.city }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-btn">
              <button class="btn-more"
                @click="loadMore"
              >Загрузить еще</button>
            </div>
          </div>
          <div class="col-4">
            <div class="row mt-5">
              <h3 class="text-center">Здесь может быть ваша реклама</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "breweries-page",
  props: {},
  setup() {
    const store = useStore();
    const limit = 45
    const offset = ref(0)
    const breweriesData = computed(() => store.getters.BEWERYES_DATA);

    const getDataBreweries = () => {
      store.dispatch('GET_DATA_BREWERYES', {limit, offset:offset.value});
    };
    const loadMore = () => {
      offset.value += limit
      getDataBreweries()
    }
    getDataBreweries();

    return {
      breweriesData,
      loadMore,
    };
  },
};
</script>



<style scoped>
section {
  position: relative;
}
#addBeer {
  position: absolute;
  top: 8px;
  right: 40px;
  width: 402px;
}
.title {
  position: relative;
}
.title::before {
  width: 50%;
  position: absolute;
  content: "";
  left: 0;
  top: 100%;
  height: 6px;
  background-color: #fbcc04;
}
.content {
  margin-top: 80px;
}
.card-img {
  max-width: 380px;
  height: 380px;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row-btn{
  margin-top: 345px;
  display: flex;
  justify-content: center;
}
</style>
