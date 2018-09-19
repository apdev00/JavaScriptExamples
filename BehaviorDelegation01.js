'use strict';

var Task = {
    setId: function(Id) {
        this.id = Id;
    },
    outputId: function() {
        console.log(this.id);
    }
};

// make object 'XYZ' delegate to Task
var XYZ = Object.create(Task);

XYZ.prepareTask = function(Id, Label){
    this.setId(Id);
    this.label = Label;
};

XYZ.outputTaskDetails = function() {
    this.outputId();
    console.log(this.label);
};

XYZ.prepareTask('123', 'Label01');
XYZ.outputTaskDetails();