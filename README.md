### Solution 1
Solution to support queries from JSON array objects.<br/>
Exposes find method which can be invoked for any field in json and by passing comparator function.<br/>
This solution does not do any optimization/indexing on the input json and the complexity for each query is o(n)<br/>

### Solution 2
 This uses in memory database loki http://lokijs.org/#/<br/>
 In-memory database adds indexes on columns for faster query
 
## Input
Data comes from data/data.json

## Installation
Requires NPM and node<br/>
`cd projectDir`<br/>
`npm install`<br/>

## Commands to run
Format `node -e 'require(<solutionFileName>).<functionName>'`</br>

##### Examples
The following examples are for first solution<br/>
`node -e 'require("./solution.js").findCompaniesByLocation("MD")'`<br/>
`node -e 'require("./solution.js").findCompaniesBeforeYear(1950)'`<br/>
`node -e 'require("./solution.js").findCompaniesAfterYear(1950)'`<br/>
`node -e 'require("./solution.js").findCompaniesBySize("1-10")'`<br/>
`node -e 'require("./solution.js").findCompaniesByCategory("Data/Technology")'`<br/>

The following examples are for solution2.js: <br/>
`node -e 'require("./solution2.js").findCompaniesByLocation("MD")'`<br/>
`node -e 'require("./solution2.js").findCompaniesBeforeYear(1950)'`<br/>
`node -e 'require("./solution2.js").findCompaniesAfterYear(1950)'`<br/>
`node -e 'require("./solution2.js").findCompaniesBySize("1-10")'`<br/>
`node -e 'require("./solution2.js").findCompaniesByCategory("Data/Technology")'`<br/>

## Testing
Added unit tests in test.js and can be run by calling below command </br>
`node test.js`
