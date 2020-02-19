import app from "./app";
import initializeDatabase from "./db";


const start = async () => {
    
const controller = await initializeDatabase();





//  this start code for faqs
app.get("/faqs", async (req, res, next) => {
  const { orderBy } = req.query;
  try {
    const result = await controller.getFaqs(orderBy);
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});



app.get("/faq/create", async (req, res, next) => {
  const { question, answer } = req.query;

  try {
    const result = await controller.createFaq({ question, answer });
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});




app.get("/faq/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await controller.getFaqsByID(id);
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});



app.get("/faq/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await controller.deleteFaq(id);
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});



app.get("/faq/update/:id", async (req, res, next) => {
  const { id } = req.params;
  const { question, answer} = req.query;

  try {
    const result = await controller.updateFaq(id, { question, answer });
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});

//   this end code for faqs


 
//  this start code for services



app.get("/services", async (req, res, next) => {
  const { orderBy } = req.query;
  try {
    const result = await controller.getServices(orderBy);
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});




app.get("/service/create", async (req, res, next) => {
  const { title, description,image } = req.query;

  try {
    const result = await controller.createService({ title, description,image });
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});



app.get("/service/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await controller.getServicesByID(id);
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});



app.get("/service/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await controller.deleteService(id);
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});



app.get("/service/update/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, description} = req.query;
  try {
    const result = await controller.updateService(id, { title, description});
    res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
});
//   this end code for services




app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});

  app.listen(8080, () => {
    console.log("Listening on port 8080");
  });



};
start();

