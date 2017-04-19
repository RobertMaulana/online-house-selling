<template lang="html">
  <el-row>
    <el-col :span="24">
      <el-card class="box-card" v-for="(house, index) in this.$store.state.house" :key="index">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">{{house.title.toUpperCase()}}</span>
          <el-button-group>
            <el-button type="primary" icon="edit" @click="updateHouse(house)"></el-button>
            <el-button type="primary" icon="delete" @click="removeHouse(house.id)"></el-button>
          </el-button-group>
        </div>
        <div class="img">
          <img :src="house.photo" class="image">
        </div>
        <div class="text item">
          <h3>Detail Properti</h3>
          <p>{{house.description}}</p>
          <h3>Fasilitas & Fasilitas Sekitar</h3>
          <ul>
            <li>-</li>
          </ul>
          <h3>Peta & Properti Sekitar</h3>
          <el-card class="box-card">
            <gmap-map
              :center="center"
              :zoom="7"
              style="width: 100%; height: 500px"
            >
              <!-- <gmap-marker
                v-for="(m, index) in markers" :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker> -->
            </gmap-map>
          </el-card>
        </div>
        <el-dialog title="Edit house information" v-model="dialogFormVisible">
          <el-form>
            <el-form-item label="" prop="desc">
              <el-input placeholder="Title question" v-model="title"></el-input>
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
              <el-input placeholder="Location" v-model="location"></el-input>
              <el-input type="hidden" v-model="id"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="updateHouseAction({id: id, title: title, description: description, photo: photo, address:address, price:price, lat:11, long:11}); dialogFormVisible = false">Submit</el-button>
          </span>
        </el-dialog>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data () {
    // let mark = [];
    // this.$store.state.house.forEach((maps) => {
    //   let pos = {
    //     position: {lat: Number(maps[0].lat), lng: Number(maps[0].long)}
    //   }
    //   mark.push(pos)
    // })
    return {
      center: {lat: 0, lng: 0},
      // markers: mark,
      dialogFormVisible: false,
      title: '',
      description: '',
      photo: '',
      address: '',
      price: '',
      location: '',
      id: ''
    }
  },
  methods: {
    updateHouse(house){
      this.dialogFormVisible = true
      this.title= house.title,
      this.description= house.description,
      this.photo= house.photo,
      this.address= house.address,
      this.price= house.price,
      this.location= house.location,
      this.id= house.id
    },
    ...mapActions([
      "removeHouse",
      "updateHouseAction"
    ])
  },
  created(){
    this.$store.dispatch("dataHouse")
  }

}
</script>

<style lang="css" scoped>
  .el-button-group {
    float: right;
  }
  #title {
    font-size: 13px;
  }
  .img {
    width: 300px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
