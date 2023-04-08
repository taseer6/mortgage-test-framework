import HsbcBuyToLetAffordabilityCalculatorPage from "../pages/hsbcAffordabilityCalculator/buyToLet/hsbcBuyToLetAffordabilityCalculator.page";
import { BuyToLetData } from "../support";
import { DATA_FILE, EXTERNAL_URL } from "../support/constants";

describe("HSBC Buy To Let spec", () => {
  const hsbcBuyToLetCalculatorpage =new HsbcBuyToLetAffordabilityCalculatorPage();
  let BuyToLetDataRows: BuyToLetData[];

  //reads table data from excel file once before running tests
  before(() => {
    cy.getDataTable(DATA_FILE.PATH, DATA_FILE.SHEET_NAME.BUY_TO_LET).then(
      (dataFromExcelTable: []) => {
        BuyToLetDataRows = dataFromExcelTable;
      }
    );
  });

  //TODO: cypress by default doesn't have data provide annotation/hook so we are looping the data inside
  it(`Verify Buy To let Calculator Values Based On the Data file values`, () => {
    //runs the test based on the number of lines in excel data file 
    BuyToLetDataRows.forEach((buyToLetData) => {
      cy.visit(EXTERNAL_URL.HSBC.BUY_TO_LET_CALCULATOR);
      hsbcBuyToLetCalculatorpage.enterCalculatorData(buyToLetData);
      hsbcBuyToLetCalculatorpage.verifyResults(buyToLetData);
    });
  });
});
