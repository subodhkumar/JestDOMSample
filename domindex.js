function AddMyName(){
    const dContainer = document.createElement('div');
    dContainer.innerHTML='My Test App';
    document.body.appendChild(dContainer)
}

AddMyName();

module.exports = {AddMyName}