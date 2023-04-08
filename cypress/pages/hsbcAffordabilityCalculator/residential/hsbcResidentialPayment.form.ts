import { HsbcForm, ResidentialData } from "../../../support";
import HsbcResidentialCalculatorPage from "./hsbcResidentialAffordabilityCalculator.page";


export default class HsbcResidentialPayment implements HsbcForm {
 
  public selectors = {
    editMortgage:"#editIncome",
    a1grossIncome: "#a1grossIncome",
    a2grossIncome: "#a2grossIncome",
    a1additionalIncome: "#a1additionalIncome",
    a2additionalIncome: "#a2additionalIncome",
  };
  private enterA1Details(data: ResidentialData) {
    const {selectors}=this
    cy.get(selectors.a1grossIncome).type(data.a1grossIncome)
    cy.get(selectors.a1additionalIncome).type(data.a1additionalIncome)
  }

  private enterA2Details(data: ResidentialData) {
    const {selectors}=this 
    cy.get(selectors.a2grossIncome).type(data.a2grossIncome)
    cy.get(selectors.a2additionalIncome).type(data.a2additionalIncome)
  }
  //fill payment form
  public fillForm(data: ResidentialData) {
    //initialisation
    const {isJointMortgage}=data
    const editMortgage=this.selectors.editMortgage

    //edit payment and fill form
    cy.get(editMortgage).click()
    this.enterA1Details(data);

     //checks for the joint account
    if (HsbcResidentialCalculatorPage.isJointAccount(isJointMortgage)) {
      this.enterA2Details(data);
    }
    
  }
}
