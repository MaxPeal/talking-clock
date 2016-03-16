(function(){
    'use strict';

    var Word = function(text){
        this.text = text;
        this.status = false;
    };

    var words = {
        it: new Word("It"),
        is: new Word("is"),
        fiveMin: new Word("five"),
        tenMin: new Word("ten"),
        quarter: new Word("quarter"),
        half: new Word("half"),
        to: new Word("to"),
        past: new Word("past"),
        one: new Word("one"),
        two: new Word("two"),
        three: new Word("three"),
        four: new Word("four"),
        five: new Word("five"),
        six: new Word("six"),
        seven: new Word("seven"),
        eight: new Word("eight"),
        nine: new Word("nine"),
        ten: new Word("ten"),
        eleven: new Word("eleven"),
        twelve: new Word("twelve"),
        oclock: new Word("o'clock")
    };

    var view = {
        init: function(){
            for (var word in words){
                var container = document.getElementById('wordList');
                var node = document.createElement('LI');
                var textNode = document.createTextNode(words[word].text);
                node.id = word;
                if (node.status) node.className = true;
                node.appendChild(textNode);
                container.appendChild(node);
            }
        },
        render: function(){
            for (var word in words) {
                if(words[word]){
                    console.log(word);
                }
            }
        }
    };

    view.init();
    view.render();

    //Get the date
    var dt = new Date();
    console.log(dt.getHours());
})();
