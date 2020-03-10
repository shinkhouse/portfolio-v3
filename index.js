angular
    .module("MyApp", [
        "ngMaterial",
        "ngMessages",
        "material.svgAssetsCache",
        "ui.router"
    ])
    .controller("pageController", function($mdSidenav) {
        var page = this;
        page.menuIcon = "menu";
        page.toggleNav = function() {
            $mdSidenav("sidebar").toggle();
        };
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider
            .theme("default")
            .primaryPalette("grey", {
                default: "900"
            })
            .accentPalette("blue");
    })
    .directive("sideNav", function() {
        return {
            restrict: "E",
            templateUrl: "sideNav.html",
            controller: "pageController",
            controllerAs: "page"
        };
    })

    .directive("mainBar", function() {
        return {
            restrict: "E",
            templateUrl: "mainBar.html",
            controller: "pageController",
            controllerAs: "page"
        };
    })

    .directive("navLinks", function() {
        return {
            restrict: "E",
            templateUrl: "navlinks.html",
            controller: "pageController",
            controllerAs: "page"
        };
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider

            .state("home", {
                url: "/home",
                templateUrl: "home.html",
                controller: "pageController",
                controllerAs: "page"
            })
            .state("about", {
                url: "/about",
                templateUrl: "about.html",
                controller: "pageController",
                controllerAs: "page"
            })
            .state("experience", {
                url: "/experience",
                templateUrl: "experience.html",
                controller: "pageController",
                controllerAs: "page"
            })
            .state("projects", {
                url: "/projects",
                templateUrl: "projects.html",
                controller: "pageController",
                controllerAs: "page"
            })

            .state("contact", {
                url: "/contact",
                templateUrl: "contact.html",
                controller: "pageController",
                controllerAs: "page"
            });
    });
