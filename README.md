
**Table of Contents**

[TOCM]

[TOC]

###Solution 1
Solution to support queries from JSON array objects.
Exposes find method which can be invoked for any field in json and by passing comparator function.
This solution does not do any optimization/indexing on the input json and the complexity for each query is o(n)

###Solution 2
 This uses in memory database loki http://lokijs.org/#/
 In-memory database adds indexes on columns for faster query
 
##Input
Data comes from data/data.json

##Installation
Requires NPM and node
`cd projectDir`
`npm install`

##Commands to run
The following testing cases run in a terminal and belong to solution.js:
`node -e 'require("./solution.js").findCompaniesByLocation("MD")'`
`node -e 'require("./solution.js").findCompaniesBeforeYear(1950)'`
`node -e 'require("./solution.js").findCompaniesAfterYear(1950)'`
`node -e 'require("./solution.js").findCompaniesBySize("1-10")'`
`node -e 'require("./solution.js").findCompaniesByCategory("Data/Technology")'`

The following testing cases run in a terminal and belong to solution2.js: 
`node -e 'require("./solution2.js").findCompaniesByLocation("MD")'`
`node -e 'require("./solution2.js").findCompaniesBeforeYear(1950)'`
`node -e 'require("./solution2.js").findCompaniesAfterYear(1950)'`
`node -e 'require("./solution2.js").findCompaniesBySize("1-10")'`
`node -e 'require("./solution2.js").findCompaniesByCategory("Data/Technology")'`

