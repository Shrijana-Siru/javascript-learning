const str = (val) => {
    let output = val.toString()
    document.getElementById("convert").innerHTML="Output is:"+output;
};
str(["hello"])