<template lang="html">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item, index) in 3" :key="index">
      <h3></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {

}
</script>

<style lang="css">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(1) {
    background-image: url("http://www.kalaraco.com/images/projects/hq-slide.jpg");
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("https://irp-cdn.multiscreensite.com/79c003ea/import/base/dms3rep/multi/desktop/dualrollers.jpg");
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("http://www.kalaraco.com/images/projects/hq-slide.jpg");
  }
</style>
