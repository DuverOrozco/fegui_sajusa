import {Response,Request} from "express";

import { CustomerModel } from '../model/customer.model';

const MODEL = new CustomerModel;

export class CustomerController{


    public async index(req:Request, res:Response){

        try {
            res.status(200).json( {ok:true,customers:await MODEL.customers()});
        } catch (error) {
            res.status(500).json({message:"Error calling function"});
        }
        
    }

    public async Byid(req:Request, res:Response){
        
        try {

            res.status(200).json( {ok:true,customer:await MODEL.customer(req.params.id)});

        } catch (error) {

            res.status(500).json({message:"Error calling function"});

        }

    }

    public async create(req:Request, res:Response){

        try {
            let a =await MODEL.createCustomer(req.body);
            console.log(a);
            res.status(200).json({ok:true,customer:a});

        } catch (error) {

            res.status(500).json({message:"Error calling function"});

        }

    }

    public async update(req:Request, res:Response){

        try {

            res.status(102);
            const A:any = await MODEL.updateCustomer(req.params.id,req.body);
            res.status(200).json({ok: true, customer:A});
                
        } catch (error) {

            res.status(500).json({message:"Error calling function"});

        }

    }

    public async deleteByid(req:Request, res:Response){
        
        try {

            await MODEL.deleteCustomer(req.params.id);

            res.status(204).json();

        } catch (error) {

            res.status(500).json({msg:"Error calling function"});

        }

    }

    public async createPayment(req:Request, res:Response){

        try {
            let a =await MODEL.createPayment(req.params.id,req.body);
            console.log(a);
            res.status(200).json({ok:true,payment:a});

        } catch (error) {

            res.status(500).json({message:"Error calling function"});

        }

    }

    public async ByidPayment(req:Request, res:Response){
        
        try {

            res.status(200).json( {ok:true,payment:await MODEL.searchPayment(req.params.id)});

        } catch (error) {

            res.status(500).json({message:"Error calling function"});

        }

    }

    public async updatePayment(req:Request, res:Response){

        try {

            res.status(102);
            const A:any = await MODEL.updatePayment(req.params.id,req.body);
            res.status(200).json({ok: true, payment:A});
                
        } catch (error) {

            res.status(500).json({message:"Error calling function"});

        }

    }

    public async deleteByidPayment(req:Request, res:Response){
        
        try {

            await MODEL.deletePayment(req.params.id);

            res.status(204).json();

        } catch (error) {
            res.status(500).json({msg:"Error calling function"});
        }

    }


        
    public async cart(req:Request, res:Response){

        try {
            res.status(200).json( {ok:true,products:await MODEL.cart(req.params.id,req.body.quantity)});
        } catch (error) {
            res.status(500).json({message:"Error calling function"});
        }
        
    }
}