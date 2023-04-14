<template>
  <div>
    <div class="score_container">
      <header class="your_scores">{{ scores }}分！</header>
      <span class="phrase">{{ scoreTip }}</span>
    </div>
    <span class="share_button" @click="showCover"></span>
    <span class="subscr">关注葡萄之家，获取答案</span>
    <span class="contactid"></span>
    <div class="show_cover" v-show="showHide" @click="showCover">
      <img src="../../assets/5-2.png" class="show_img">
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      rightId: [2, 7, 12, 13, 18],
      scores: 0,
      scoreTip: '',
      showHide: false,
      scoresTipsArr: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！', '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦，葡萄之家欢迎你！']
    }
  },
  computed: mapState(['answerid']),
  methods: {
    computedScore () {
      this.answerid.forEach((item, index) => {
        if (item === this.rightId[index]) {
          this.scores += 20
        }
      })
    },
    getScoreTip () {
      let index = (this.scores / 20) - 1
      this.scoreTip = this.scoresTipsArr[index]
    },
    showCover () {
      this.showHide = !this.showHide
    }
  },
  created () {
    this.computedScore()
    this.getScoreTip()
    document.body.style.backgroundImage = 'url(/static/img/4-1.jpg)'
    // 这里的图片地址是在整个根目录之下定位?
  }
}
</script>

<style lang="less">
// body {
//   background-image: url(../../assets/4-1.jpg);
// }
.score_container{
  width: 9rem;
  height: 9rem;
  background: url(../../assets/4-2.png) no-repeat;
  position: relative;
  background-size: 100% 100%;
  margin: 3rem auto 0;
  .your_scores{
    position: absolute;
    top: 4.7rem;
    left: 3.3rem;
    font-size: 1.4rem;
    font-family: '黑体';
    color: rgb(156, 75, 75);
    -webkit-text-stroke:rgb(70, 10, 10);
  }
  .phrase{
    position: absolute;
    bottom: 1rem;
    left: 0.6rem;
    width: 9rem;
    font-size: 0.5rem;
    color: rgb(145, 82, 82);
    text-align: center;
  }
}
.share_button{
  display: block;
  background: url(../../assets/4-3.png) no-repeat;
  background-size: 5.8rem 100%;
  width: 6rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
}
.subscr{
  display:block;
  font-size: 0.5rem;
  text-align: center;
  // line-height: 3rem;
  margin: 1.5rem auto 0;
}
.contactid{
  display:block;
  width:4rem;
  height: 4rem;
  background: url(../../assets/4-4.png) no-repeat;
  background-size: 100%;
  margin:1rem auto;
}
.show_cover{
  background: url(../../assets/5-1.png) no-repeat;
  background-size: 100% 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  opacity: 0.9;
  .show_img{
    position: fixed;
    top: 0;
    left: 50%;
    width: 11.8667rem;
    height: 11.0667rem;
    margin-left: -(11.8667rem/2) ;

  }
}
</style>
