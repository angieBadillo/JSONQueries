/**
 * Solution to support queries.
 *
 * This uses in memory database loki http://lokijs.org/#/
 * In memory database adds indexes on columns for faster query
 *
 * TODO : Issue $lte (less than equals) check in loki includes empty string
 */

let utils = require('./utils');
let loki = require('lokijs');
let db = new loki('db.json');

let dataArray = require('./data/data.json');

const COLLECTION_NAME = 'companies';
// Columns to index to optimize query
const FIELD_INDEXES = ['state', 'year_founded', 'full_time_employees','company_category'];

function createCollection(collectionName, fieldIndexes ) {
    let collection = db.addCollection(collectionName, {
        indices: fieldIndexes
    });
    return collection;
}


let companies = createCollection(COLLECTION_NAME, FIELD_INDEXES);
//Load JSON into database
companies.insert(dataArray);


module.exports.findCompaniesByLocation = function (location) {
    let result = companies.find({ state:  location });
    let companyNames = result.map(dataItem =>  dataItem.company_name);
    return utils.printCompaniesResult(companyNames);
};

module.exports.findCompaniesBeforeYear = function (year_founded) {
    let result = companies.find({'year_founded': {'$lte': year_founded}});
    let companyNames = result.map(dataItem =>  dataItem.company_name);
    return utils.printCompaniesResult(companyNames);
};

module.exports.findCompaniesAfterYear = function (year_founded) {
    let result = companies.find({'year_founded': {'$gte': year_founded}});
    let companyNames = result.map(dataItem =>  dataItem.company_name);
    return utils.printCompaniesResult(companyNames);
};

module.exports.findCompaniesBySize = function (full_time_employees) {
    let result = companies.find({ full_time_employees:  full_time_employees });
    let companyNames = result.map(dataItem =>  dataItem.company_name);
    return utils.printCompaniesResult(companyNames);
};

module.exports.findCompaniesByCategory = function (company_category) {
    let result = companies.find({ company_category:  company_category });
    let companyNames = result.map(dataItem =>  dataItem.company_name);
    return utils.printCompaniesResult(companyNames);
};
