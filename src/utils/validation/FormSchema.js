import * as yup from "yup";

function FormSchema() {
    return yup.object({
    jopTitle: yup
      .string("This Field Should Be Text")
      .oneOf(['ReactJs'],'Pleace Select ReactJs')
      .required("This Field Is Required"),

    jopField: yup.string("This Field Should Be Text").oneOf(['TypeScript'],'Pleace Select TypeScript').required("This Field Is Requird"),

    jopLocation: yup.string("This Field Should Be Text").oneOf(['Front_End_developer'],'Pleace Select Front_End_developer').required("This Field Is Requird"),

    startDate: yup.date().required('This Field Is Requird'),

    endDate: yup.date().when('currentlyWork',{
      is:true,
      then:yup.date(),
      otherwise: yup.date().min(yup.ref('startDate', 'end data must be more than start date')).required('This Field Is Requird')
    }),

    currentlyWork: yup.boolean(),

    description: yup.string("This Field Should Be Text").required("This Field Is Requird"),

    companyName: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),

    companyAdress: yup.string("This Field Should Be Text").required("This Field Is Required"),

    companyIndustry: yup.string("This Field Should Be Text").required("This Field Is Required"),

    companySize: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),

    companySector: yup.string("This Field Should Be Text").required("This Field Is Required"),

    supervisorName: yup.string("This Field Should Be Text").required("This Field Is Required"),

    supervisedEmployees: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),

    leavingReazon: yup.string("This Field Should Be Text").required("This Field Is Required"),

    startSalary: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),

    endSalary: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    
    currency: yup.string().required("This Field Is Required"),
  });
}

export default FormSchema;