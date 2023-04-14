<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fcomponent == 'home'">{{ level }}</span>
      <span class="num_tip" v-else-if="fcomponent == 'item'">{{ itemDetail[itemNum-1].topic_name}}</span>
    </header>
    <div v-if="fcomponent=='home'">
      <div class="home_pic item_container_style"></div>
      <router-link to="item" class="button_style start_button"></router-link>
   </div>
  <div  v-else-if="fcomponent=='item'">
    <div class="item_pic item_container_style">
      <div class="item_list_container" v-if="itemDetail.length>0">
        <ul>
          <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index"  @click="choosed(index,item.topic_answer_id)" >
            <span class="option_button" :class="{'has_choosed':choosedNum==index}">{{ chooseCode(index) }}</span>
            <span class="option_style">{{ item.answer_name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <span class="button_style next_button" @click="nextItem" v-if="itemNum<itemDetail.length"></span>
    <span class="button_style submit_button" v-else @click="submit"></span>
  </div>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'itemcontainer',
  props: {
    fcomponent: {
      type: String
    }
  },
  data () {
    return {
      itemId: null,
      choosedNum: null,
      choosedId: null
    }
  },
  computed: mapState([
    'level',
    'itemNum',
    'itemDetail'
  ]),
  methods: {
    ...mapActions([
      'addNum',
      'initializeData'
    ]),
    chooseCode: type => {
      switch (type) {
        case (0):return 'A'
        case (1):return 'B'
        case (2):return 'C'
        case (3):return 'D'
      }
    },
    choosed (index, id) {
      this.choosedNum = index
      this.choosedId = id
    },
    nextItem () {
      if (this.choosedNum !== null) {
        this.choosedNum = null
        this.addNum(this.choosedId)
      } else {
        alert('你还没有选择答案呢')
      }
    },
    submit () {
      if (this.choosedNum !== null) {
        this.choosedNum = null
        this.addNum(this.choosedId)
        this.$router.push('score')
      } else {
        alert('你还没选择答案呢')
      }
    }
  },
  created () {
    if (this.fcomponent === 'home') {
      this.initializeData()
      console.dir(this.fcomponent)
      document.body.style.backgroundImage = 'url(/static/img/1-1.jpg)'
    }
  }
}

</script>

<style lang="less" >
.top_tips {
  background:url(../assets/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  position:absolute;
  top: -1.3rem;
  right: 1.6rem;
  height: 8rem;
  width:4rem;
  .num_tip{
    position:absolute;
    left: 0.9rem;
    bottom: 1.3rem;
    width: 2.5rem;
    height: 0.7rem;
    font-size: 0.8rem;
    font-family:'黑体';
    color: #a57c50;
    text-align: center;
  }}
  .home_pic{
    background-image:url(../assets/1-2.png);

  }
  .item_pic{
    background-image:url(../assets/2-1.png) ;
  }
  .item_container_style{
    width:13.15rem;
    height:11.625rem;
    position: absolute;
    top:4.1rem;
    left: 1rem;
    background-repeat: no-repeat;
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .start_button{
    background-image: url(../assets/1-4.png) ;
  }
  .next_button{
    background-image: url(../assets/2-2.png) ;
  }
  .submit_button {
    background-image: url(../assets/3-1.png);
  }
  .button_style{
    display:block;
    width: 4.35rem;
    height: 2.1rem;
    background-size: 100% 100%;
    position: absolute;
    top:16.5rem;
    left: 50%;
    margin-left: -2.175rem;
    background-repeat: no-repeat;
  }

  .item_list_container{
position:absolute;
height:5.2rem;
width: 8rem;
top: 2.4rem;
left: 3rem;
    }
  .option_button{
    display: inline-block;
    width:0.725rem;
    height: 0.725rem;
    border: 1px solid #a57c50;
    border-radius: 50%;
    line-height: 0.725rem;
    color: #a57c50;
    font-size: 0.5rem;
    text-align: center;
  }
  .has_choosed{
    background-color:rgb(142, 165, 109);
    border-color: rgb(142, 165, 109);
  }
  .option_style {
    color: #a57c50;
    font-size: 0.5rem;
  }

</style>
