<template>
    <div class="money-bracket">
        <div class="money-bracket-text">
            <p class="currency">{{currency}}</p>
            <p class="count">{{count}}</p>
        </div>
        <div class="money-bracket-buttons">
            <div 
                class="money-bracket-button"
                @click="$emit('minus-money-count')"
            >
                <img src="../assets/svg-minus.svg" alt="-" class="money-bracket-image">
            </div>
            <div class="money-bracket-button"
                @click="$emit('plus-money-count')"
            >
                <img src="../assets/svg-plus.svg" alt="+" class="money-bracket-image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MoneyBracket',
  props: {
    count: Number,
    currency: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.money-bracket{
    border: 5px solid #bb9f89;
    background-color: #29262e;
    font-size: 12px;
    font-weight: 600;
    color: #bb9f89; 

    display: flex;
    flex-direction: row;
    padding: 14px 20px;

    min-width: 460px;
    margin: 20px 0px;
}

.money-bracket-text{
    height: 100%;
    padding-right: 20px;
    box-sizing: border-box;
    
    display: flex;
    flex-direction: row;

    flex-grow: 2;
    justify-content: space-between;
    align-items: center;
}

.currency, .count{
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 2.14px;
    color: #bb9f89;
    font-family: Montserrat,sans-serif;
}

.money-bracket-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 56px;
}

.money-bracket-button{
    padding: 2px;
    border: 3px solid #bb9f89;

    cursor: pointer;
    height: 14px;
    width: 14px;
}

.money-bracket-image{
    width: 14px;
}
</style>
