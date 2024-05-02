import mongoose from "mongoose";
import Request from "../models/request.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addRequest = asyncHandler( async(req,res)=>{
    const {user, requestType, image, conversation} = req.body
    const date = new Date()

    const response = await Request.create({
        user,
        requestType,
        image,
        conversation,
    })

    return res.status(201).json( new ApiResponse(201, response))
})

const getAllRequests = asyncHandler( async(req,res)=>{
    const response = await Request.find({})
    return res.status(200).json( new ApiResponse(200, response))
})

const getRequest = asyncHandler( async(req,res)=>{
    const {id} = req.params
    const response = await Request.findById(id)
    return res.status(200).json( new ApiResponse(200, response))
})

export { addRequest, getAllRequests, getRequest }