
const makeRequest = (location) => {
    return new Promise((resolve, reject) => {
        console.log('Making request');
        if (location === 'Google') {
            resolve('Google says hi!!!');
        } else {
            reject('We can only talk to Google');
        }
    });
};


const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information + ${response}`);
    });
}


// makeRequest('Google').then(response => {
//     console.log('Response received');
//     return processRequest(response);
// }).then(processedResponse => {
//     console.log(processedResponse);
// });

async function processRequestsAsync() { 

    const respose = await makeRequest('Google');
    
    const processedResponse = await(processRequest(respose));
    console.log(processedResponse);
}

processRequestsAsync();


