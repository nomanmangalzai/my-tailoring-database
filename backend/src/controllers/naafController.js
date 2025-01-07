const Naaf = require("../models/naafSchema");
const mongoose = require("mongoose");

// Controller to handle form submission (POST request)
exports.createNaaf = async (req, res) => {
  try {
    // Destructure the data from the request body
    const {
      customerName,
      phoneNumber,
      todayDate,
      submissionDate,
      Gins,
      quantity,
      total,
      remainingMoney,
      naafQad,
      naafShana,
      naafAsteen,
      naafYakhan,
      naafBaghal,
      naafDaman,
      naafZeereBaghal,
      naafTumban,
      naafPacha,
      naafTumbanJeeb,
      naafPatay,
      yakhan,
      asteen,
      baghalJeeb,
      daman,
      tumban,
      shana,
      salayee,
      taar,
      jeebeRoy,
      dukma,
    } = req.body;

    // Create a new document based on the model
    const newNaaf = new Naaf({
      customerName, // Changed from 'name' to 'customerName'
      phoneNumber,
      todayDate,
      submissionDate,
      Gins,
      quantity,
      total,
      remainingMoney,
      naafQad, // Changed from 'naaf1' to 'naafQad'
      naafShana, // Changed from 'naaf2' to 'naafShana'
      naafAsteen, // Changed from 'naaf3' to 'naafAsteen'
      naafYakhan, // Changed from 'naaf4' to 'naafYakhan'
      naafBaghal, // Changed from 'naaf5' to 'naafBaghal'
      naafDaman, // Changed from 'naaf6' to 'naafDaman'
      naafZeereBaghal, // Changed from 'naaf7' to 'naafZeereBaghal'
      naafTumban, // Changed from 'naaf8' to 'naafTumban'
      naafPacha, // Changed from 'naaf9' to 'naafPacha'
      naafTumbanJeeb, // Changed from 'naaf10' to 'naafTumbanJeeb'
      naafPatay, // Changed from 'naaf11' to 'naafPatay'
      yakhan,
      asteen,
      baghalJeeb,
      daman,
      tumban,
      shana,
      salayee,
      taar,
      jeebeRoy,
      dukma,
    });

    // Save the document to MongoDB
    const savedData = await newNaaf.save();

    // Return the saved data as the response
    res.status(201).json(savedData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to handle retrieving data (GET request)
exports.getNaaf = async (req, res) => {
  console.log("getNaaf APi has been called");
  try {
    // Fetch all the records from the Naaf collection
    const naafData = await Naaf.find();

    // Return the data as the response
    res.status(200).json(naafData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getOneNaaf = async (req, res) => {
  console.log("Get One Naaf API has been called");

  const { customerName, phoneNumber } = req.query; // Extract name and phone from query parameters
  console.log(phoneNumber);

  try {
    let query = {}; // Initialize an empty query object

    // If name is provided, search by name only
    if (customerName) {
      query.customerName = customerName;
    }
    // If name is not provided, check if phone is available and search by phone
    else if (phoneNumber) {
      query.phoneNumber = phoneNumber;
    }

    // If neither name nor phone is provided, return a bad request error
    if (!customerName && !phoneNumber) {
      return res
        .status(400)
        .json({ message: "Please provide either name or phone" });
    }

    // Find one document that matches the query
    const oneNaaf = await Naaf.findOne(query);

    if (!oneNaaf) {
      return res.status(404).json({ message: "Data not found" });
    }

    // If data is found, return it as the response
    res.status(200).json(oneNaaf);
  } catch (error) {
    console.error("Error in getOneNaaf API:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Naaf data
exports.updateNaaf = async (req, res) => {
  console.log("update naaf API has been called");

  try {
    // Extract the parameters from the request body
    const {
      _id, // Mongoose ObjectId
      customerName,
      phoneNumber,
      todayDate,
      submissionDate,
      Gins,
      quantity,
      total,
      remainingMoney,
      naafQad,
      naafShana,
      naafAsteen,
      naafYakhan,
      naafBaghal,
      naafDaman,
      naafZeereBaghal,
      naafTumban,
      naafPacha,
      naafTumbanJeeb,
      naafPatay,
      yakhan,
      asteen,
      baghalJeeb,
      daman,
      tumban,
      shana,
      salayee,
      taar,
      jeebeRoy,
      dukma,
    } = req.body;

    // Ensure `id` is provided
    if (!_id) {
      return res
        .status(400)
        .json({ message: "Please provide the record's ID for the update" });
    }

    // Validate that `id` is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Define the update object with all fields
    const updateData = {
      customerName,
      phoneNumber,
      todayDate,
      submissionDate,
      Gins,
      quantity,
      total,
      remainingMoney,
      naafQad,
      naafShana,
      naafAsteen,
      naafYakhan,
      naafBaghal,
      naafDaman,
      naafZeereBaghal,
      naafTumban,
      naafPacha,
      naafTumbanJeeb,
      naafPatay,
      yakhan,
      asteen,
      baghalJeeb,
      daman,
      tumban,
      shana,
      salayee,
      taar,
      jeebeRoy,
      dukma,
    };

    // Update the document by `_id`
    const updatedNaaf = await Naaf.findByIdAndUpdate(
      _id, // Search by _id
      updateData, // Update data
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the fields
      }
    );

    if (!updatedNaaf) {
      return res.status(404).json({ message: "Naaf not found" });
    }
    // Return the updated Naaf document
    return res.status(200).json(updatedNaaf);
  } catch (error) {
    console.error("Error updating Naaf:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// delete naaf api

// Controller function to delete a record
exports.deleteNaaf = async (req, res) => {
  console.log("deleteNaaf API has been hit");

  const { _id } = req.params; // Extract _id from route parameters
  console.log(`Deleting record with ID: ${_id}`); // Log the ID being deleted

  try {
    const result = await Naaf.findByIdAndDelete(_id); // Directly use _id for deletion

    if (!result) {
      return res.status(404).json({ message: "Record not found" });
    }

    return res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error("Error during deletion:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
