const reg=(req,res)=>{
    const info=req.body;
    const firstName = info.first_name;
    const lastName = info.last_name;
    res.send(
        'The first name: '+firstName+"The last name: "+lastName
    );
}

module.exports=reg;