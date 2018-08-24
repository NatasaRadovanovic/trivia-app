import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp'
import ChuckApp from './components/ChuckApp'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'trivia',
            name:'home'
        },
        {
            path: '/trivia',
            component: TriviaApp,
            name: 'trivia'
        },

        {
            path: '/chuck',
            component: ChuckApp,
            name: 'chuck'
        },
        
    ]
})