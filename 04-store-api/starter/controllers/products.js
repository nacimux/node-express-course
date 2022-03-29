const getAllProductStatic = (req, res) => {
    throw new Error('Testig async errors');
    res.status(200).json({status : 'success', data : "producttesting routes"});
    };

const getAllProducts = async (req, res) => {
    res.status(200).json({status : 'success', data : "products routes"});
    };


    module.exports = {
        getAllProductStatic,
        getAllProducts
    };
