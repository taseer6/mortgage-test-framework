import { ResidentialData } from "../../../support";
import HsbcResidentialMortgageDetails from "./hsbcResidentialMortgageDetails.form";
import HsbcResidentialPayment from "./hsbcResidentialPayment.form";
import HsbcResidentialCalculatorResult from "./hsbcResidentialResults.form";

export default class HsbcResidentialCalculatorPage {
  mortgageDetails=new HsbcResidentialMortgageDetails ()
  payment= new HsbcResidentialPayment()
  results=new HsbcResidentialCalculatorResult()

  
  public static isJointAccount = (isJointMortgage: string) =>
  isJointMortgage.toLowerCase().match("joint");

  //Calls the forms classed to fill the data in the relevant fields
  public fillDetails=(data:ResidentialData)=>{
    this.mortgageDetails.fillForm(data)
    this.payment.fillForm(data)
  }

  //verify the results of the outputs
  public verifyResults=(data:ResidentialData)=>{
    this.results.verifyResults(data)
  }


}
