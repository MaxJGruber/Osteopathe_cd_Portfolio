<template>
  <div @click.stop="closeLightBox">
    <transition
      mode="out-in"
      name="vue-lb-content-transition"
      @afterEnter="enableImageTransition"
      @beforeLeave="disableImageTransition"
    >
      <div
        v-if="media"
        v-show="lightBoxOn"
        ref="container"
        class="vue-lb-container"
      >
        <div class="vue-lb-content">
          <div class="vue-lb-header">
            <span />
            <button
              v-if="closable"
              type="button"
              :title="closeText"
              class="vue-lb-button-close"
            >
              <slot name="close">
                <span>
                  <svg
                    fill="white"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                  >
                    <path
                      d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
                    />
                  </svg>
                </span>
              </slot>
            </button>
            <!-- .vue-lb-button-close -->
          </div>
          <!-- .vue-lb-header -->
          <div class="vue-lb-figure" @click.stop>
            <transition mode="out-in" :name="modalImageTransitionName">
              <img
                v-if="media[select].type !== 'video'"
                :key="media[select].src"
                v-lazy="{
                  src: media[select].src,
                  loading: media[select].src,
                  error: media[select].src,
                }"
                :srcset="media[select].srcset || ''"
                class="vue-lb-modal-image"
                :alt="media[select].caption"
              />
              <video
                v-else
                ref="video"
                :key="media[select].sources[0].src"
                :width="media[select].width"
                :height="media[select].height"
                :autoplay="media[select].autoplay"
                controls
              >
                <source
                  v-for="source in media[select].sources"
                  :key="source.src"
                  :src="source.src"
                  :type="source.type"
                />
              </video>
            </transition>

            <slot name="customCaption">
              <div
                v-show="showCaption"
                class="vue-lb-info"
                v-html="media[select].caption"
              />
            </slot>

            <div class="vue-lb-footer">
              <div class="vue-lb-footer-info" />
              <div class="vue-lb-footer-count" v-show="showFooterCount">
                <slot name="footer" :current="select + 1" :total="media.length">
                  {{ select + 1 }} / {{ media.length }}
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
let Hammer;
if (typeof window !== "undefined") {
  Hammer = require("hammerjs");
}
export default {
  components: {},
  props: {
    media: {
      type: Array,
      required: true,
    },
    disableScroll: {
      type: Boolean,
      default: true,
    },
    showLightBox: {
      type: Boolean,
      default: true,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    startAt: {
      type: Number,
      default: 0,
    },
    nThumbs: {
      type: Number,
      default: 7,
    },
    showThumbs: {
      type: Boolean,
      default: true,
    },
    showFooterCount: {
      type: Boolean,
      default: true,
    },
    // Mode
    autoPlay: {
      type: Boolean,
      default: false,
    },
    autoPlayTime: {
      type: Number,
      default: 3000,
    },
    siteLoading: {
      type: String,
      default: "",
    },
    showCaption: {
      type: Boolean,
      default: false,
    },
    lengthToLoadMore: {
      type: Number,
      default: 0,
    },
    closeText: {
      type: String,
      default: "Close (Esc)",
    },
    previousText: {
      type: String,
      default: "Previous",
    },
    nextText: {
      type: String,
      default: "Next",
    },
    previousThumbText: {
      type: String,
      default: "Previous",
    },
    nextThumbText: {
      type: String,
      default: "Next",
    },
  },
  data() {
    return {
      select: this.startAt,
      lightBoxOn: this.showLightBox,
      timer: null,
      modalImageTransitionName: "vue-lb-modal-image-no-transition",
    };
  },
  computed: {
    thumbIndex() {
      const halfDown = Math.floor(this.nThumbs / 2);
      if (this.select >= halfDown && this.select < this.media.length - halfDown)
        return {
          begin: this.select - halfDown + (1 - (this.nThumbs % 2)),
          end: this.select + halfDown,
        };
      if (this.select < halfDown)
        return {
          begin: 0,
          end: this.nThumbs - 1,
        };
      return {
        begin: this.media.length - this.nThumbs,
        end: this.media.length - 1,
      };
    },
    imagesThumb() {
      if (this.siteLoading) {
        return this.media.map(({ thumb, type }) => ({
          src: thumb,
          type,
          loading: this.siteLoading,
          error: this.siteLoading,
        }));
      }
      return this.media.map(({ thumb, type }) => ({
        src: thumb,
        type,
      }));
    },
  },
  watch: {
    lightBoxOn(value) {
      if (document != null) {
        this.onToggleLightBox(value);
      }
    },
    select() {
      this.$emit("onImageChanged", this.select);
      if (this.select >= this.media.length - this.lengthToLoadMore - 1)
        this.$emit("onLoad");
      if (this.select === this.media.length - 1) this.$emit("onLastIndex");
      if (this.select === 0) this.$emit("onFirstIndex");
      if (this.select === this.startAt) this.$emit("onStartIndex");
    },
  },
  mounted() {
    if (this.autoPlay) {
      this.timer = setInterval(() => {
        this.nextImage();
      }, this.autoPlayTime);
    }
    this.onToggleLightBox(this.lightBoxOn);
    if (this.$refs.container) {
      const hammer = new Hammer(this.$refs.container);
      hammer.on("swiperight", () => {
        this.previousImage();
      });
      hammer.on("swipeleft", () => {
        this.nextImage();
      });
    }
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.addKeyEvent);
    if (this.autoPlay) {
      clearInterval(this.timer);
    }
  },
  methods: {
    onLightBoxOpen() {
      this.$emit("onOpened");
      if (this.disableScroll) {
        document.querySelector("html").classList.add("no-scroll");
      }
      document.querySelector("body").classList.add("vue-lb-open");
      document.addEventListener("keydown", this.addKeyEvent);
      if (this.$refs.video && this.$refs.video.autoplay) {
        this.$refs.video.play();
      }
    },
    onLightBoxClose() {
      this.$emit("onClosed");
      if (this.disableScroll) {
        document.querySelector("html").classList.remove("no-scroll");
      }
      document.querySelector("body").classList.remove("vue-lb-open");
      document.removeEventListener("keydown", this.addKeyEvent);
      if (this.$refs.video) {
        this.$refs.video.pause();
        this.$refs.video.currentTime = 0;
      }
    },
    onToggleLightBox(value) {
      if (value) {
        this.onLightBoxOpen();
      } else {
        this.onLightBoxClose();
      }
    },
    showImage(index) {
      this.$set(this, "select", index);
      this.$set(this, "lightBoxOn", true);
    },
    addKeyEvent(event) {
      if (event.keyCode === 37) this.previousImage(); // left arrow
      if (event.keyCode === 39) this.nextImage(); // right arrow
      if (event.keyCode === 27) this.closeLightBox(); // esc
    },
    closeLightBox() {
      if (!this.closable) return;
      this.$set(this, "lightBoxOn", false);
      console.log(this.showLightBox);
      this.showLightBox = false;
    },
    nextImage() {
      this.$set(this, "select", (this.select + 1) % this.media.length);
    },
    previousImage() {
      this.$set(
        this,
        "select",
        (this.select + this.media.length - 1) % this.media.length
      );
    },
    enableImageTransition() {
      this.$set(
        this,
        "modalImageTransitionName",
        "vue-lb-modal-image-transition"
      );
    },
    disableImageTransition() {
      this.$set(
        this,
        "modalImageTransitionName",
        "vue-lb-modal-image-no-transition"
      );
    },
  },
};
</script>

<style>
@import "../style/lightbox.css";
</style>