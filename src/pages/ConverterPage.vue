<template>
  <div class="page-wrapper">
    <div class="converter">
      <h1 class="title">
        КОНВЕРТЕР
      </h1>
      <ConverterChart 
        :chartData="{
          labels: getLabels(14),
          datasets: dataSets
        }" 
        :options="options"
        class="converter-chart"
      />
      <ConverterForm />
    </div>
  </div>
</template>

<script>
import {getLabels, getDatasets} from '../services/converter.service'
import ConverterForm from '../components/ConverterForm.vue'
import ConverterChart from '../components/ConverterChart.vue'

export default {
  name: 'ConverterPage',
  components: {
    ConverterChart,
    ConverterForm
  },
  data: () => {
    return {
      options : { 
        responsive: true, 
        maintainAspectRatio: false 
      },
      dataSets: ''
    }
  },
  methods: {
    getLabels: getLabels,
    getDatasets: getDatasets,
  },
  mounted() {
    this.getDatasets(14).then((value) => {this.dataSets = value})
  }
}
</script>

<style scoped>
.converter{
  box-shadow: 0 0 24px 0 rgb(0 0 0 / 50%);
  background: linear-gradient(180deg,#29262e 0,#29262e);

  width: 100%;
  
  box-sizing: border-box;

  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title{
  margin-bottom: 20px;
}

.converter-chart{
  width: 100%;
  max-width: 800px;
}
</style>
