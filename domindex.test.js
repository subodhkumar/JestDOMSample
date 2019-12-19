

test('Create the div tag | AddMyName()',function(){
    document.body.innerHTML = '';
    require('./domindex');
    const result =document.getElementsByTagName('div');
    expect(result).toBeTruthy();
    expect(result[0].innerHTML).toEqual('My Test App');
})

