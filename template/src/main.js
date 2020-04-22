// vue 및 사용되는 ui framework 적용 코드
import Vue from 'vue';
import vuetify from '@/plugins/vuetify' // path to vuetify export


// 메인 컴포넌트 및 라우터 적용 코드
import router from './router';
import App from './App.vue';

// vue 인스턴스 생성 코드(vue lifecycle start!)
new Vue({
    el: '#app',
    router,
    vuetify,
    components: { App },
    template: '<App/>'
})