//Uses accounting.js package
Template.registerHelper('formatCurrency', function(num) {
    return accounting.formatMoney(num, "$", 2);
});

Template.registerHelper('formatDecimal', function(num) {
    return accounting.formatMoney(num, "", 2);
});

Template.registerHelper('formatPercent', function(num) {
    num = num * 100;
    num = num.toFixed(1);
    num = num + '%';
    return num;
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM/DD/YYYY');
});

Template.registerHelper('convertToFraction', function(num) {
  var frac = num;
    if(num % 1 != 0)
      frac = fraction(num);
    console.log(num);
    console.log(frac);
    return frac;
});


HCF = function(u, v) { 
    var U = u, V = v
    while (true) {
        if (!(U%=V)) return V
        if (!(V%=U)) return U 
    } 
}
//convert a decimal into a fraction
fraction = function(decimal){

    if(!decimal){
        decimal=this;
    }
    whole = String(decimal).split('.')[0];
    decimal = parseFloat("."+String(decimal).split('.')[1]);
    num = "1";
    for(z=0; z<String(decimal).length-5; z++){
        num += "0";
    }
    decimal = decimal*num;
    num = parseInt(num);
    for(z=2; z<decimal+1; z++){
        if(decimal%z==0 && num%z==0){
            decimal = decimal/z;
            num = num/z;
            z=2;
        }
    }
    //if format of fraction is xx/xxx
    if (decimal.toString().length == 2 && 
            num.toString().length == 3) {
                //reduce by removing trailing 0's
        decimal = Math.round(Math.round(decimal)/10);
        num = Math.round(Math.round(num)/10);
    }
    //if format of fraction is xx/xx
    else if (decimal.toString().length == 2 && 
            num.toString().length == 2) {
        decimal = Math.round(decimal/10);
        num = Math.round(num/10);
    }
    //get highest common factor to simplify
    var t = HCF(decimal, num);

    //return the fraction after simplifying it
    return ((whole==0)?"" : whole)+"-"+decimal/t+"/"+num/t;
}