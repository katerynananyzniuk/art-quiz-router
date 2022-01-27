

const _modules = {
    home: () => import('../views/home.js'),
    categories: () => import('../views/categories.js'),
    question: () => import('../views/question.js'),
    settings: () => import('../views/settings.js'),
  };
export default class Router{
    static get modules() {
        return _modules
    }
    constructor(routes, rootElem) {
        this.routes = routes
        this.rootElem = document.getElementById('app')
    }
    init() {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    }
    hasChanged(scope, r) {
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
    }
    goToRoute(htmlName) {
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
}