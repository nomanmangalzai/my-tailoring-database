const mongoose = require("mongoose");

// Define the schema
const NaafSchema = new mongoose.Schema(
  {
    customerName: String,
    phoneNumber: String,
    Gins: String,
    quantity: Number,
    total: Number,
    remainingMoney: Number,
    todayDate: Date,
    submissionDate: Date,
    //تر دې ځایه پورې د مشتري معلومات دي
    naafQad: Number,
    naafShana: Number,
    naafAsteen: Number,
    naafYakhan: Number,
    naafBaghal: Number,
    naafDaman: Number,
    naafZeereBaghal: Number,
    naafTumban: Number,
    naafPacha: Number,
    naafTumbanJeeb: Number,
    naafPatay: Number,
    // تر دې ځایه پورې ناف ده
    yakhan: String,
    asteen: String,
    baghalJeeb: String,
    daman: String,
    tumban: String,
    shana: String,
    salayee: String,
    taar: String,
    jeebeRoy: String,
    dukma: String,
    //تر دې ځایه پورې فرمایش ده
  },
  { timestamps: true }
);

// Create the model
const Naaf = mongoose.model("Naaf", NaafSchema);

module.exports = Naaf;
