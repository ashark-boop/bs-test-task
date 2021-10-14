<template>
  <div class="page-wrapper">
    <div class="case">
      <div class="chart-wrapper">
        <CaseChart 
          :chartData="{ 
            labels: getLabels(money),
            datasets: getDatasets(money)
          }" 
          :options="options"
          class=""
        />
      </div>
      <div class="info-block">
        <h1 class="title">
          ПОРТФЕЛЬ
        </h1>
        <div class="money">
          <MoneyBracket v-for="item in money" :key="item.name"
            :count="item.value" 
            :currency="item.name"
            @plus-money-count="item.value++"
            @minus-money-count="item.value >= 1 ? item.value-- : ''"
            />
        </div>
        <h2 class="summ">
          СТОИМОСТЬ ПОРТФЕЛЯ В USD ($) : {{caseValue}}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import {getLabels, getDatasets, getCaseValue} from '../services/case.service'

import CaseChart from '../components/CaseChart.vue'
import MoneyBracket from '../components/MoneyBracket.vue'

export default {
  name: 'CasePage',
  components: {
    CaseChart,
    MoneyBracket,
  },
  data() {
    return {
      money: [
        {
          name: 'USD $',
          value: 40,
          id: 'usd',
          vs: 'usd'
        },
        {
          name: 'BTC ₿',
          value: 20,
          id: 'bitcoin',
          vs: 'btc'
        },
        {
          name: 'ETH Ξ',
          value: 10,
          id: 'ethereum',
          vs: 'eth'
        }
      ],
      options: {
        responsive: true,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: false,
        cutoutPercentage: 0
      },
      caseValue: 0,
    }
  },
  methods:{
    getLabels : getLabels,
    getDatasets: getDatasets,
    getCaseValue: getCaseValue
  },
  watch:{
    money: {
      handler(){
        this.getCaseValue(this.money).then((value) => {this.caseValue = value})
      },
      deep: true
    }
  },
  mounted(){
    this.getCaseValue(this.money).then((value) => {this.caseValue = value})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.case{
  box-shadow: 0 0 24px 0 rgb(0 0 0 / 50%);
  background: linear-gradient(180deg,#29262e 0,#29262e);

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.info-block{
  flex-grow: 2;
  height: 100%;

  padding: 20px;
  box-sizing: border-box;

  flex-direction: column;
}

.money{
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.summ{
  font-size: 21px;
  font-weight: 600;
  line-height: 1.18;
  color: #bb9f89;
  text-align: center;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;

  margin-top: 30px;
}

</style>
