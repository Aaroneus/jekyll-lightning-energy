
var widgetState = {};


function initialisePageState (dataArray) {

    for( value in dataArray) {
        data = dataArray[value];
        state = data.state === 'GRANTED' ? true : false;
        option = { record: data, state: state };
        widgetState[data.optionId] = option;
    }

    console.log(widgetState);
};

var updateState = (id, record) => {

}