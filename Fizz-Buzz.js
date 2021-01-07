console.log('Write a program that prints the numbers from 1 to 100. But for multiples of three print “Tres” instead of the number and for the multiples of five print "Cinco". For numbers which are multiples of both three and five print “Trescinco”.');

var i;
for (i = 0; i < 101; i++) {
     if (i % 5 == 0 && i % 3 == 0) {
        console.log('trescinco');
    }
    else if (i % 3 == 0) {
        console.log('tres');
    }
    else if (i % 5 == 0) {
        console.log('cinco');
    }
    else {
        console.log(i);
    }
} 
