<template>
  <div class="card-box">
    <div class="card-pic">
      <img :src="detailItem.img" alt="">
      <div class="count">
        <span>43</span>
        <span>45</span>
      </div>
    </div>
    <p class="card-title">{{ detailItem.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    detailItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.card-box {
  .card-pic {
    position: relative;
    width: 100%;
    // height: 64%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-title {
    font-size: 3.2vw;
    color: #212121;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .count {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    font-size: 3.2vw;
    padding: 1.33333vw 1.6vw;
    color: red;
  }
}
.card-box:first-child {
  background-color: pink;
}
.card-box:nth-child(2) {
  background-color: yellow;
}
</style>
