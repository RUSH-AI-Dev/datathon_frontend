import * as BangkokApis from "@/services/api_Bangkok.js"
import * as BudgetApis from "@/services/api_Budget.js"

export default {
  ...BangkokApis,
  ...BudgetApis
};
