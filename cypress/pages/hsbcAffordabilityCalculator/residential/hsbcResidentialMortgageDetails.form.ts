import { HsbcForm, ResidentialData } from "../../../support";
import HsbcResidentialCalculatorPage from "./hsbcResidentialAffordabilityCalculator.page";

export default class HsbcResidentialMortgageDetails implements HsbcForm {
  private readonly selectors = {
    editMortgage: "#editMortgage",
    purchaseType: "#purchaserType",
    maximumLTV: '[data-id="maximumLTV"]',
    isJointMortgage: '[data-id="isJointMortgage"]',
    a1applicantsAge: '[data-id="a1applicantsAge"]',
    a2applicantsAge: '[data-id="a2applicantsAge"]',
    a1employmentStatus: '[data-id="a1employmentStatus"]',
    a2employmentStatus: '[data-id="a2employmentStatus"]',
    a1maritalStatus: '[data-id="a1maritalStatus"]',
    noDependantChildren: '[data-id="noDependantChildren"]',
  };
  private enterA1Details(data: ResidentialData) {
    const selectors = this.selectors;
    cy.selectListDropDown(selectors.a1applicantsAge, data.a1applicantsAge);
    cy.selectListDropDown(
      selectors.a1employmentStatus,
      data.a1employmentStatus
    );
  }

  private enterA2Details(data: ResidentialData) {
    const { selectors } = this;
    cy.selectListDropDown(selectors.a2applicantsAge, data.a2applicantsAge);
    cy.selectListDropDown(
      selectors.a2employmentStatus,
      data.a2employmentStatus
    );
  }

  public fillForm(data: ResidentialData) {
    let { selectors } = this;
    const { isJointMortgage } = data;
    //enter mortgageDetails details
    cy.get(selectors.editMortgage).click();
    cy.get(selectors.purchaseType).select(data.purchaseType, { force: true });
    cy.selectListDropDown(selectors.maximumLTV, data.maximumLTV);

    //enter appplicant 1 details
    this.enterA1Details(data);

    //enter appplicant 2 details
    cy.selectListDropDown(selectors.isJointMortgage, isJointMortgage);
    if (HsbcResidentialCalculatorPage.isJointAccount(isJointMortgage)) {
      this.enterA2Details(data);
    }
  }
}
