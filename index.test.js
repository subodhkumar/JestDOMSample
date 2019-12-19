const {sum} = require('./sample');
beforeAll(()=>{
    document.body.innerHTML=``;
    require('./index');
})
test('DOM is setup',function(){
    expect(document.getElementById('head').innerHTML).toEqual('APP');
    expect(document.getElementById('action')).toBeTruthy();
})
test('Add action',function(){
    expect(document.getElementsByClassName('card').length).toEqual(0);
    expect(document.getElementById('action')).toBeTruthy();
    expect(document.getElementById('container')).toBeTruthy();
    document.getElementById('actionButton').click();
    expect(document.getElementsByClassName('card').length).toEqual(1);
    document.getElementById('actionButton').click();
    expect(document.getElementsByClassName('card').length).toEqual(2);
    document.getElementById('actionButton').click();
    expect(document.getElementsByClassName('card').length).toEqual(3);
})
