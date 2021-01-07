function rando(length) {
   let outputString = '';
   let list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=[]{}\|;<>,.';
   let dbl = list.length;
   for ( var i = 0; i < length; i++ ) {
      outputString += list.charAt(Math.floor(Math.random() * dbl));
   }
   return outputString;
}


function orderedletters(str) {
   if (str.length = 0 ) {
      console.log('This String is empty');
      return true;
   }
    var s=str.toLowerCase().split("");
    for(var i=1; i<s.length; i++) {
        if (s[i - 1] > s[i]) {
            console.log('This string is NOT in order.');
            alert('This string is NOT in order.');
            return false;
        }
    }
    console.log('This string is in order.');
    alert('This string is in order.');
    return true;
}

