import { getDataTable, selectListDropDown } from "../support/commands";
declare global {
  namespace Cypress {
    interface Chainable {
      getDataTable: typeof getDataTable;
      selectListDropDown: typeof selectListDropDown;
    }
  }
}
export interface BuyToLetData {
  propertyValue: string;
  loanAmount: string;
  feeAmountCapitalised: string;
  monthlyrentalIncome: string;
  likeByLikeRemortgage: string;
  productType: string;
  productRate: string;
  taxRate: string;
  outcomes:string;
}
export interface ResidentialData{
  isJointMortgage: string; 

  purchaseType: string;
  maximumLTV: string;
  a1applicantsAge: string;
  a2applicantsAge: string;
  a1employmentStatus: string;
  a2employmentStatus: string;
  
  a1grossIncome:string,
  a2grossIncome: string,
  a1additionalIncome: string,
  a2additionalIncome: string,

  resultantLTV:string
}


export interface HsbcForm {
  fillForm(data: ResidentialData): void; 
}