const axios = require('axios');
const API_KEY = 'pV8lTVobeZgUkMNSUr5VJQ'

const estimatesApiUrl = 'https://www.carboninterface.com/api/v1/estimates';
const makesUrl = 'https://www.carboninterface.com/api/v1/vehicle_makes';

// Set up the headers
const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
};


//Search for user-requested make and return make id
function handleMakeResponse(response, userName) {
    var match = undefined;
    response.data.forEach(item => {
        var name = item.data.attributes.name;

        if (name == userName) {
            match = item.data.id;
        }       
    });
    return match;
}

//Search for user-generated model and return model id
function handleModelResponse(response, modelName, modelYear) {
    var match = undefined;
    response.data.forEach(item => {
        const name = item.data.attributes.name;
        const year = item.data.attributes.year;

        if (name == modelName && year == modelYear) {
            match = item.data.id;
        }       
    });
    return match;
}

//Search CarbonInterface API for Carbon Emissions of Vehicle
function getModelEmissions(modelId, routeDist) {
    const requestData = {
        type: 'vehicle',
        distance_unit: 'mi',
        distance_value: routeDist,
        vehicle_model_id: modelId
    };

    axios.post(estimatesApiUrl, requestData, { headers })
        .then(response => {
            // Handle the API response here
            const curr = response.data;
            console.log(response.data.attributes.carbon_kg);
            
        })
        .catch(error => {
            // Handle errors
            console.error('API Error:', error);
        });
}

function searchForModel(makeId, modelName, year, dist) {
    const modelsUrl = makesUrl + "/" + makeId + "/vehicle_models";
    axios.get(modelsUrl, { headers })
    .then(response => {
        const modelId =  handleModelResponse(response, modelName, year);
        getModelEmissions(modelId, 0, dist);
    })
    .catch(error => {
        // Handle errors
        console.error('API Error:', error);
    });
}

function calculateEmissions(make, model, year, dist) {
    axios.get(makesUrl, { headers })
    .then(response => {
        const makeId = handleMakeResponse(response, make);
        searchForModel(makeId, model, year, dist);
    })
    .catch(error => {
        // Handle errors
        console.error('API Error:', error);
    });
}





/* 
const requestData = {
  type: 'vehicle',
  distance_unit: 'mi',
  distance_value: 100,
  vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9'
};


// Make the POST request
axios.post(estimatesApiUrl, requestData, { headers })
  .then(response => {
    // Handle the API response here
    console.log('API Response:', response.data);
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('API Error:', error);
  });
*/
