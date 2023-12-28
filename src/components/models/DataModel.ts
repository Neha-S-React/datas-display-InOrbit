interface FormDataModel {
    personalInformation: Array<{ [category: string]: { [key: string]: string | number }[] }>;
  }
  
  export default FormDataModel;
  