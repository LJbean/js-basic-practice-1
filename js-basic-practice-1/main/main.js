// Write your cade below:
function caclRemaindar(a,b) {

    return a%b;
};

function caclSum(numArray) {
    var sum=0;
    for(i=0;i<numArray.length ;i++)
    {
        sum+=numArray[i];
    }
    return sum;
};

function caclSumInConditon(numArray,n) {
    var sum=0;
    for(i=0;i<numArray.length ;i++)
    {
        if(numArray[i]<n)
            sum+=numArray [i];
    }
    return sum;

};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}