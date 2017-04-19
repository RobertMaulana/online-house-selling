<template lang="html">
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <el-input
          icon="plus"
          :on-icon-click="newHouse">
        </el-input>
      </div>
    </el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-dialog title="New house information" v-model="dialogFormVisible">
      <el-form>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Title" v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Description" v-model="description"></el-input>
        </el-form-item>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Photo" v-model="photo"></el-input>
        </el-form-item>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Address" v-model="address"></el-input>
        </el-form-item>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Price" v-model="price"></el-input>
        </el-form-item>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Latitude" v-model="lat"></el-input>
        </el-form-item>
        <el-form-item label="" prop="desc">
          <el-input placeholder="Longitude" v-model="long"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="newHouseAction({title: title, description: description, photo: photo, address:address, price:price, lat:lat, long:long}); dialogFormVisible = false">Submit</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      dialogFormVisible: false,
      title: '',
      description: '',
      photo: '',
      address: '',
      price: '',
      lat: '',
      long: ''
    }
  },
  methods: {
    newHouse(){
      this.dialogFormVisible = true
    },
    ...mapActions([
      'newHouseAction'
    ])
  }
}
</script>

<style lang="css">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-input__icon {
    width: 60px;
  }
</style>
