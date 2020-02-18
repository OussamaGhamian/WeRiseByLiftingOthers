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
  console.log(question,answer)
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
    // console.log(`${id} , ${question} , ${answer}`)
    try {
      const result = await controller.updateFaq(id, { question, answer });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err });
  });

//   this end code for faqs

  app.listen(8080, () => {
    console.log("Listening on port 8080");
  });



};
start();

