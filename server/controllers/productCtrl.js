const { query } = require('express');
const Products = require('../models/productModel')


//Filter,sorting and pagination

class APIfeatures{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString
    }

    filtering(){
        const queryObj = {...this.queryString} 

        const excluededFields = ['page','sort','limit']
        excluededFields.forEach(el => delete(queryObj[el]))


        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
        
        this.query = this.query.find(JSON.parse(queryStr))

        return this
    }

    sorting(){
        if(this.queryString.sort){
            
            const sortBy = this.queryString.sort.split(',').join(' ')

            this.query = this.query.sort(sortBy)

            console.log(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this
    }

   
}

