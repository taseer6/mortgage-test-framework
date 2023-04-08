
import HsbcResidentialCalculatorPage from "../pages/hsbcAffordabilityCalculator/residential/hsbcResidentialAffordabilityCalculator.page";
import { ResidentialData } from "../support";
import { DATA_FILE, EXTERNAL_URL } from "../support/constants";

describe("template spec", () => {
  let hsbcResidentialCalPage=new HsbcResidentialCalculatorPage()
  let residenatialDataRows: ResidentialData[];

  //reads table data from excel file once before running tests
  before(() => {
    cy.getDataTable(DATA_FILE.PATH, DATA_FILE.SHEET_NAME.PURCHASE).then(
      (dataFromExcelTable: ResidentialData[]) => {
        residenatialDataRows = dataFromExcelTable;
      }
    );
  });

  //TODO: cypress default doesn't have data provide annotation/hook so we are looping the data inside
  it(`should validate affordability test`, () => {
     //runs the test based on the number of lines in excel data file 
    residenatialDataRows.forEach((residentialData) => {
      cy.visit(EXTERNAL_URL.HSBC.RESIDENTIAL_CALCULATOR); 
      hsbcResidentialCalPage.fillDetails(residentialData)
      hsbcResidentialCalPage.verifyResults(residentialData)
    });
  });
});
