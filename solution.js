/**
 * Solution to support queries from JSON array objects.
 * Exposes find method which can be invoked for any field in json and by passing comparator function.
 *
 * This solution does not do any optimization/indexing on the input json and the complexity for each query is o(n)
 */
//Read the data from json file
let dataArray = require('./data/data.json');
let utils = require('./utils');

//performs equals check
function equalsFilter(value, searchTerm) {
    if (value && value !== 'NA' && value !== 'N/A') {
        if (value.toLowerCase() === searchTerm.toLowerCase()) {
            return true;
        }
    }
    return false;
}

//Function to review the data for company's year.
function lessThanFilter(value, compareToValue) {
    if (typeof value === 'number') {
        if (value <= compareToValue) {
            return true;
        }
    }
    return false;
}

function greaterThanFilter(value, compareToValue) {
    if (typeof value === 'number') {
        if (value >= compareToValue) {
            return true;
        }
    }
    return false;
}

/**
 * find function filters the input data by given filter
 * @param dataArray : JSON input
 * @param comparatorFn : pure function that returns true or false based on condition.
 * @param field : string name in the data to search for
 * @param searchTerm
 * @returns {*} Returns filtered list of company names based on comparator function
 */
function find(dataArray, comparatorFn, field, searchTerm) {
    if (!searchTerm) {
        return [];
    }
    return dataArray
        .filter(dataItem => comparatorFn(dataItem[field], searchTerm));
}

function findCompaniesByLocation(location) {
    let results = find(dataArray, equalsFilter, "state", location);
    results = results.map(dataItem => dataItem.company_name);
    return utils.printCompaniesResult(results);
}

function findCompaniesBeforeYear(year) {
    let results = find(dataArray, lessThanFilter, "year_founded", year);
    results = results.map(dataItem => dataItem.company_name);
    return utils.printCompaniesResult(results);
};

function findCompaniesAfterYear(year) {
    let results = find(dataArray, greaterThanFilter, "year_founded", year);
    results = results.map(dataItem => dataItem.company_name);
    return utils.printCompaniesResult(results);
}

function findCompaniesBySize(full_time_employees) {
    let results = find(dataArray, equalsFilter, "full_time_employees", full_time_employees);
    results = results.map(dataItem => dataItem.company_name);
    return utils.printCompaniesResult(results);
}

function findCompaniesByCategory(category) {
    let results = find(dataArray, equalsFilter, "company_category", category);
    results = results.map(dataItem => dataItem.company_name);
    return utils.printCompaniesResult(results);
}


module.exports = {
    equalsFilter: equalsFilter,
    lessThanFilter: lessThanFilter,
    greaterThanFilter: greaterThanFilter,
    find: find,
    findCompaniesByLocation: findCompaniesByLocation,
    findCompaniesBeforeYear: findCompaniesBeforeYear,
    findCompaniesAfterYear: findCompaniesAfterYear,
    findCompaniesBySize: findCompaniesBySize,
    findCompaniesByCategory: findCompaniesByCategory
};