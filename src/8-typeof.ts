/**
 * Typeof and Type Guards
 */


// a Type Guard is a way that we can get hold on type information after
// making a check inside a conditional. When we use a type guard, we get 
// the type information

/**
function foo(bar: string | number) {
    if (typeof bar === 'string') {
        // string
        return bar.toUpperCase();
    }
    // TS knows that here, bar can only be a number
    // but an extra check can ofcourse be performed
    if (typeof bar === 'number') {
        return bar.toFixed(2);
    }
}



// typeof example
class Song {
    constructor(public title: string, public duration: string|number){}
}

function getSongDuration(item: Song) {
    if (typeof item.duration === "string") {
        // TS knows its a string now
        return item.duration;
    }
    // TS knows it a number now due to the return statement above
    const { duration } = item;
    // 1 min = 60 * 1000 ms
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song("AAAA" , "05:31"));
console.log(songDurationFromString);

const songDurationFromMillis = getSongDuration(new Song("AAAA" , 330000));
console.log(songDurationFromMillis);
 */