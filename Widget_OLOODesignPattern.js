'use strict';

var Widget = {
    init: function(width, height){
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert: function($where){
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
};

var Button = Object.create(Widget);

Button.setup = function(width, height, label){
    // delegated call
    this.init(width, height);
    this.label = label || "Default";

    this.$elem = $("<button>").text(this.label);
};

Button.build = function($where) {
    // delegated call
    this.insert($where);
    this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function(evt) {
    console.log("Button " + this.label + " clicked!");
};