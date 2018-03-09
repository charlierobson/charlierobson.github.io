function Slicer(text) {
    this.text = text;
    this.cursor = 0;
    this.wordFinder = /\s*\S+/
    this.lastWord = '';

    this.peekWord = function() {
        if (this.cursor == this.text.length) {
            this.lastWord = '';
            return '';
        }

        var word;
        var sub = this.text.substring(this.cursor);

        if (sub[0] == '\n') {
            word = '\n';
        }
        else {
            var match = sub.match(this.wordFinder);
            if (match) {
                word = match[0];
            }
            else {
                word = '';
            }
        }

        this.lastWord = word;
        return word;
    };

    this.popWord = function() {
        this.cursor += this.lastWord.length;
        this.lastWord = '';
    };
};
