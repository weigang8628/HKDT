import BannerComponents from './Banner.vue';

const Banner = {
    install:function(Vue) {
        Vue.component('Banner', BannerComponents)
    }
}

export default Banner;