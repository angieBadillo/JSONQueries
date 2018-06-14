module.exports.printCompaniesResult = function (companies) {
    console.log("Company Names:");
    if (companies) {
       console.log(companies);
    }
    console.log("Number of Companies: ", companies ? companies.length : 0);
    console.log("");
};