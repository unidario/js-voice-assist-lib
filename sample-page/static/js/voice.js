let voice = Voice();

function Voice() {
    let r = new window.webkitSpeechRecognition();
    r.lang = 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 1;
    let c = {};
    r.onresult = process(c);
    return {
        start: start(r),
        addCommands: addCommands(r, c)
    };
}

function process(c) {
    return function (event) {
        let transcript = event.results[0][0].transcript;
        for (let key in c) {
            if (transcript === key) {
                c[key]();
            }
        }
    }
}

function start(r) {
    return function() {
        r.start();
    }
}

function addCommands(r, c) {
    return function(commands) {
        for (let key in commands) {
            c[key] = commands[key];
        }
    }
}

let annyang = voice;
