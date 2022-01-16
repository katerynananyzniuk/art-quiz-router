import Route from './Route.js'
import Router from './Router.js'

export default function spa() {
    function init() {
        let router = new Router([
            new Route('home', 'home.js', true),            
            new Route('settings', 'settings.js'),
            new Route('categories', 'categories.js'),
            new Route('question', 'question.js'),
        ]);
        return router
    }
    init();
}
