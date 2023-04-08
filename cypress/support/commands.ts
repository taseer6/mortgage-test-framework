
/** Reads data from an Excel file and returns it as an array of objects
* @example cy.getDataTable("data.xlsx", "Sheet1")
*/
export const getDataTable = (filePath: string, sheetName: string) => {
  return cy.task<any[]>("readXlsx", { file: filePath, sheet: sheetName });
};
/** custom command for dropdowns without select
* @example cy.selectListDropDown(locator, dropDownValue, options);
*/
export const selectListDropDown = (
  locator: string,
  dropDownValue: string,
  options = { force: false }
) => {
  const { force } = options;
  return cy
    .get(locator)
    .click()
    .siblings()
    .contains(dropDownValue)
    .click({ force });
};
Cypress.Commands.add("getDataTable", getDataTable);
Cypress.Commands.add("selectListDropDown", selectListDropDown);
