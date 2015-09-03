(function () {

    var app = angular.module('store', []);

    app.controller('StoreController', function () {

        this.products = gems

    });
    app.controller('PanelController', function(){

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    });
    var gems = [

        {
            name: 'Azurite',
            description: "Some gems have hidden qualities beyond " +
            "their luster, beyond their shine... Azurite is one" +
            " of those gems.",
            price: 110.50,
            images: [
                "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif",
                "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-05.gif",
                "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-09.gif"
            ]
        },
        {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, " +
            "hence its low value. It has a very high shine and" +
            " 12 sides, however.",
            price: 22.90,
            images: [
                "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif",
                "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-03.gif",
                "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-04.gif",
            ],
        }
    ]

})();