
import home from '../views/home.js'
import settings from '../views/settings.js'
import categories from '../views/categories.js'
import question from '../views/question.js'

export default function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function(scope) { 
            var url = 'views/' + htmlName,
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let html = htmlName.replace('.js', '')
                    scope.rootElem.innerHTML = '';
                    switch(html) {
                        case 'home': 
                            if(document.querySelector('.page')){ document.querySelector('.page').remove();}
                            if(!document.querySelector('.home')){ home()}
                            break
                        case 'settings': 
                            if(document.querySelector('.page')){ document.querySelector('.page').remove();}
                            if(!document.querySelector('.settings')){ settings()}
                            break
                        case 'categories': 
                            if(document.querySelector('.page')){ document.querySelector('.page').remove();}
                            if(!document.querySelector('.categories')){ categories()}
                            break
                        case 'question': 
                            if(document.querySelector('.page')){ document.querySelector('.page').remove();}
                            if(!document.querySelector('.question')){ question()}
                            break
                    }
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};