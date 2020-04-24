// vue 및 사용되는 ui framework 적용 코드
import Vue from 'vue';
import vuetify from '@/plugins/vuetify' // path to vuetify export


// 메인 컴포넌트 및 라우터 적용 코드
import router from './router';
import App from './App.vue';

import EventHandler from './utils/EventHandler.js';

Vue.mixin({
    methods:{
        // 컴포넌트가 관심을 가지는 이벤트 리스트 정의
        notifications() {
            /*
            ex] 아래와 같이 사용
            [{id:common.events., action : function() { }}]
            */
            return [];
        },
        sendNotification(id, arg) {
            EventHandler.emit(id, arg)
        }
    },
    created: function () {
        var handlers = this.notifications();
        handlers.forEach(function(handle,k){
            EventHandler.on(handle.id, handle.action)
        });
    },
    destroyed: function() {
        var handlers = this.notifications();
        handlers.forEach(function(handle,k){
            EventHandler.off(handle.id, handle.action)
        });
    }
})

// vue 인스턴스 생성 코드(vue lifecycle start!)
new Vue({
    el: '#app',
    router,
    vuetify,
    components: { App },
    template: '<App/>'
})