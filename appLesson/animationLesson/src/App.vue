<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr />
        <button class="btn btn-primary" @click="show = !show">Show alert</button>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition :name="alertAnimation" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is some Info ptain</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__flip"
          appear
        >
          <div class="alert alert-info" v-if="show">This is some Info ptain</div>
        </transition>
        <transition :name="alertAnimation" appear>
          <div class="alert alert-info" v-if="show" key="info">This is some Info ptain</div>
          <div class="alert alert-warning" v-else key="warning">This is some Info ptain</div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">Load / Remove element</button>
        <hr />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div style="width :300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="selectComponent == `app-success-alert` ? selectComponent = `app-danger-alert` : selectComponent = `app-success-alert`"
        >Toogle components</button>
        <hr />
        <transition name="fade" mode="out-in">
          <component :is="selectComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
  data() {
    return {
      //show: false
      show: true,
      load: true,
      alertAnimation: "fade",
      elementWidth: 100,
      selectComponent: "app-success-alert"
    };
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      // console.log("enter");
      // done();
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
}
.slider-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slider-leave {
}
.slider-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>

