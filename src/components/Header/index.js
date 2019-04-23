import HeaderComponents from './Header.vue';

const Header = {
    install:function(Vue) {
        Vue.component('Header', HeaderComponents)
    }
}

export default Header;