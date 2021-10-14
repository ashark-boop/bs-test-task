<template>
<form action="" class="converter-form">
    <div class="selection-wrapper">
        <select 
            name="" 
            id="" 
            class="select-id"
            v-model="selectID"
        >
            <option value="bitcoin">BTC</option>
            <option value="ethereum">ETH</option>
        </select>
        <div class="converter-image-wrapper">
            <img src="../assets/arrow.svg" alt="" class="arrow">
        </div>
        <select 
            name="" 
            id="" 
            class="select-vs"
            v-model="selectVS"
        >
            <option value="usd">USD</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
        </select>
    </div>

    <div class="input-wrapper">
        <input 
            type="text" 
            class="input-value"
            v-model="inputValue"
        >
        <div class="converter-image-wrapper">
            <img src="../assets/arrow.svg" alt="" class="arrow">
        </div>

        <p class="result-value">
            <span>{{resultValue}}</span>
        </p>
    </div>
    </form>
</template>

<script>
import {convert} from '../services/converter.service'

export default {
  name: 'ConverterForm',
  components: {
  },
  data: () => {
    return {
        selectID: 'bitcoin',
        selectVS: 'usd',
        inputValue: 0.001,
        resultValue: 0,
    }
  },
  methods: {
    convert: convert
  },
  watch:{
    inputValue: function() {
        this.convert(this.inputValue, this.selectID, this.selectVS).then((value) => {this.resultValue = value})
    },
    selectVS: function() {
        this.convert(this.inputValue, this.selectID, this.selectVS).then((value) => {this.resultValue = value})
    },
    selectID: function() {
        this.convert(this.inputValue, this.selectID, this.selectVS).then((value) => {this.resultValue = value})
    }
  },
  mounted(){
    this.convert(this.inputValue, this.selectID, this.selectVS).then((value) => {this.resultValue = value})
  }
}
</script>

<style scoped>
.converter-form{
    margin-top: 40px;
    width: 100%;
    max-width: 420px;
}

.selection-wrapper, .input-wrapper{
    margin-bottom: 30px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.select-vs, .select-id, .input-value, .result-value{
    height: 40px;
    width: 180px;

    background: #bb9f89;
    color: white;

    font-size: 22px;
    font-weight: 700;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;

    outline: none;
    border-radius: 0;
    border: 3px solid #bb9f89;

    box-sizing: border-box;
}

.input-value, .result-value{
    font-size: 16px;
}

.input-value:focus{
    background-color: #29262e;
}

.result-value{
    display: flex;
    justify-items: center;
    align-items: center;
}

.arrow{
    width: 40px;
}
</style>