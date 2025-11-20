const Product=require("../models/product.models")

exports.getAllProducts=async(req,res)=>{
    try {
        const products = await Product.find();
        res.json({datas:{products}})
    } catch (error) {
        res.status(500).json({error:"failed to get products"})
    }
}
//add new product data
exports.addProduct =async(req,res)=>{
    try {
        const product =  new Product(req.body);
        await product.save();
        res.status(201).json({message:"product saved",product})
    } catch (error) {
        res.status(500).json({error:"Failed to add products"})
    }
}

//get product by id
exports.getProductById=async(req,res)=>{
    try {
        const product = await Product.findById(req.params.productId)
        if(!product){
            return res.status(404).json({error:"Product not found"})
        }
        res.status(200).json({data:{product}})
    } catch (error) {
        res.status(500).json({error:"Failed to get products By id"})
    }
}

//get all category
exports.getAllCategory = async(req,res)=>{
    try {
        const findCategory = await Product.distinct("category")
        res.status(200).json({datas:{findCategory}})
    } catch (error) {
        res.status(500).json({error:"Failed to get by category datas"})
    }
}

//get category by id , here id belongs to name [men,women....]
exports.getCategoryById = async(req,res)=>{
    try {
        const categoryName = req.params.categoryId
        const categories = await Product.find({category:categoryName})
        if(!categories || categories.length === 0){
            res.status(404).json({error:"Category not found"})
        }
        res.status(200).json({data:{category:{name:categoryName,categories:categories}}})
    } catch (error) {
        res.status(500).json({error:"Failed to get the category datas by id"})
    }
}