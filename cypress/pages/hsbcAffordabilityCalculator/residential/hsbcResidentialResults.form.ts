import { HsbcForm, ResidentialData } from "../../../support";

export default class HsbcResidentialCalculatorResult {
  private readonly selectors = {
    editResults: "#editResults",
    resultantLTV:"#resultantLTV"
  };

  public verifyResults(data: ResidentialData) {
    const {selectors}=this
    cy.get(selectors.editResults).click()
    cy.get(selectors.resultantLTV).should('have.text',data.resultantLTV)
  }
}
