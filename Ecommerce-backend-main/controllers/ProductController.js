const Product = require("../model/Product");

const post_product = async (req, res) => {
  const { product_name, price, stock, description, tel } = req.body;
  const image = req.file ? req.file.filename : '';
  try {
    const newProduct = {
            product_name,
            price,
            stock,
            image,
            description,
            tel,
    };
    const product = await new Product(newProduct).save();
    return res.json(product);
  } catch (error) {
    return res.json({ message: "Error creating product", error });
  }
};

const get_product = (req, res) => {
    return Product.find()
        .then((data) => {
            return res.json(data);
        })
        .catch((error) => {
            return res.json({ message: "Error fetching products", error });
        });
};

const get_allproduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}

const each_product =  async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

const product_image = async (req, res) => {
  const gfs = Grid(conn.db, mongoose.mongo);
  const filename = req.params.filename;
  const imageStream = gfs.createReadStream({ filename: filename });

  gfs.files.findOne({ filename: filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      });
    }

    res.set('Content-Type', file.contentType);
    res.set('Content-Type', 'image/*');
    imageStream.pipe(res);
  });
}

module.exports = {
    post_product,
    get_product,
    get_allproduct,
    each_product,
    product_image
}