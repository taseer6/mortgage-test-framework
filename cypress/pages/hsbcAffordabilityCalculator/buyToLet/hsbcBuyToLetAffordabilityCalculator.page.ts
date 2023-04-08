import { BuyToLetData } from "../../../support";

export default class HsbcBuyToLetAffordabilityCalculatorPage {
  private readonly selectors = {
    propertyValue: "#property-value-input",
    loanAmount: "#loan-amount-input",
    feeAmount: "#fee-amount-input",
    monthlyrentalIncome: "#monthly-rental-income-input",
    likeByLikeRemortgage: "#likeByLikeRemortgage-dropdown",
    productType: "#productType-dropdown",
    productRate: "#product-rate-input",
    taxRate: "#taxRate-dropdown",
    outcomeList: ".outcomeResult li",
  };


  //======== ====  results verification Code ==== ==== ==== ==== 
  private webOutcomes = () => {
    return cy.get(this.selectors.outcomeList);
  };
  private splittedDataOutcomes = (data: BuyToLetData) => {
    return data.outcomes.split(",");
  };

  private verifyOutcomeResults = (data: BuyToLetData) => {
    const { webOutcomes, splittedDataOutcomes } = this;
    webOutcomes().should("have.length", splittedDataOutcomes(data).length);
    webOutcomes().each(($hsbcOutcome) => {
      expect(data.outcomes).contain($hsbcOutcome.text());
    });
  };



  enterCalculatorData(data: BuyToLetData) {
    const {
      propertyValue,
      loanAmount,
      feeAmountCapitalised,
      monthlyrentalIncome,
      likeByLikeRemortgage,
      productType,
      productRate,
      taxRate,
    } = data;
    const selectors = this.selectors;

    cy.get(selectors.propertyValue).type(propertyValue);
    cy.get(selectors.loanAmount).type(loanAmount);
    cy.get(selectors.feeAmount).type(feeAmountCapitalised);
    cy.get(selectors.monthlyrentalIncome).type(monthlyrentalIncome);
    cy.get(selectors.likeByLikeRemortgage).select(likeByLikeRemortgage);
    cy.get(selectors.productType).select(productType);
    cy.get(selectors.productRate).type(productRate);
    cy.get(selectors.taxRate).select(taxRate);
  }

  

  verifyResults(data: BuyToLetData) {
    this.verifyOutcomeResults(data);
    //will add code for LOAN TO VALUE 
  }
}
