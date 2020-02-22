import app from "./app";
import initializeDatabase from "./db";
import multer from 'multer'
//config storage for multer = detailed wau to how you want to store your file.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const fileFilter = (req, file, cb) => {
  file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ? cb(null, true) : cb(new Error(`file not supported`), false)
}
//multer config
const upload = multer({ storage, fileFilter }).single('image')

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
  app.post("/faq/", async (req, res, next) => {
    const { question, answer } = req.body;
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
  app.delete("/faq/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteFaq(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.put("/faq/:id", async (req, res, next) => {
    const { id } = req.params;
    const { question, answer } = req.body;
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
  app.post("/service", upload, async (req, res, next) => {
    const { title, description } = req.body;
    const image = req.file.path
    try {
      const result = await controller.createService({
        title,
        description,
        image
      });
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
  app.delete("/service/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteService(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.put("/service/:id", upload, async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const image = req.file.path
    try {
      const result = await controller.updateService(id, {
        title,
        description,
        image
      });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  //   this end code for services
  // here our team code starts
  app.get(`/ourTeam`, async (req, res, next) => {
    try {
      const result = await controller.getMembers()
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.delete(`/ourTeam/:id`, async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await controller.deleteMember(id)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.post(`/ourTeam`, upload, async (req, res, next) => {
    const { name, position, description } = req.body
    const image = req.file.path
    try {
      const result = await controller.addMember({ name, position, description, image })
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.put(`/ourTeam/:id`, upload, async (req, res, next) => {
    const { id } = req.params
    const { name, position, description } = req.body
    const image = req.file.path
    try {
      const result = await controller.updateMember(id, { name, position, description, image })
      res.json({ success: true, result })
    }
    catch (err) { next(err) }
  })
  app.get(`/ourTeam/:id`, async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await controller.getMemberById(id)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  // here our team code ends
  // here Hero code starts
  app.put(`/home/hero`, upload, async (req, res, next) => {
    const { name, slogan, btn } = req.body
    const image = req.file.path
    try {
      const result = await controller.updateHero(name, image, slogan, btn)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.delete(`/home/hero`, async (req, res, next) => {

    try {
      const result = await controller.deleteHero()
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })

  app.get(`/home/hero`, async (req, res, next) => {
    try {
      const result = await controller.getHero(2)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  // here Hero code ends
  // here promise code ends
  app.get(`/home/promise`, async (req, res, next) => {
    try {
      const result = await controller.getPromise()
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.get(`/home/promiseByID/:id`, async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await controller.getPromiseByID(id)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.delete(`/home/promise/:id`, async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await controller.deletePromise(id)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.post(`/home/Promise`, async (req, res, next) => {
    const { title, description } = req.body
    try {
      const result = await controller.addPromise(title, description)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.put(`/home/promise/:id`, async (req, res, next) => {
    const { title, description } = req.body
    const { id } = req.params
    try {
      const result = await controller.updatePromise(id, title, description)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  // here promise code ends
  //  this start code for HowItWorks
  app.get("/HowItWorks", async (req, res, next) => {
    try {
      const result = await controller.getHowItWorks();
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.post("/HowItWorks", async (req, res, next) => {
    const { title, description, date } = req.body;
    try {
      const result = await controller.createHowItWorks({ title, description, date });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/HowItWorks/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.getHowItWorksByID(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.delete("/HowItWorks/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deletegetHowItWorks(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.put("/HowItWorks/:id", async (req, res, next) => {
    const { id } = req.params;
    const { title, description, date } = req.body;
    try {
      const result = await controller.updateHowItWorks(id, { title, description, date });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  //   this end code for HowItWorks
  //  this start code for ContactUs
  app.get("/ContactUs", async (req, res, next) => {
    try {
      const result = await controller.getContactUs();
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.post("/ContactUs", async (req, res, next) => {
    const { fname, lname, message } = req.body;
    try {
      const result = await controller.createContactUs({ fname, lname, message });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/ContactUs/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.getContactUsByID(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.delete("/ContactUs/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteContactUs(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  // No need to update the info of a user
  // app.get("/ContactUs/update/:id", async (req, res, next) => {
  //   const { id } = req.params;
  //   const { fname, lname, message } = req.query;
  //   try {
  //     const result = await controller.updateContactUs(id, { fname, lname, message });
  //     res.json({ success: true, result });
  //   } catch (err) {
  //     next(err);
  //   }
  // });

  // This Start Code For Portfoio
  app.delete("/portfolio/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deletePortfolio(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.put("/portfolio/:id", upload, async (req, res, next) => {
    const { id } = req.params;
    const { title, description, url } = req.body;
    const image = req.file.path
    try {
      const result = await controller.updatePortfolio(id, { title, description, image, url });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.post("/portfolio", upload, async (req, res, next) => {
    const { title, description, url } = req.body;
    const image = req.file.path
    try {
      const result = await controller.createPortfolio({ title, description, image, url });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/portfolio/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.getPortfolioByID(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/portfolio", async (req, res, next) => {
    const { orderBy } = req.query;
    try {
      const result = await controller.getPortfolio(orderBy);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  // This End Code For Portfoio
  // This Start Code For Core 
  app.get("/core", async (req, res, next) => {
    const { orderBy } = req.query;
    try {
      const result = await controller.getCore(orderBy);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.post("/core", upload, async (req, res, next) => {
    const { title, description } = req.body;
    const image = req.file.path
    try {
      const result = await controller.createCore({ title, description, image });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/core/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.getCoreByID(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.delete("/core/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteCore(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.put("/core/:id", upload, async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const image = req.file.path
    try {
      const result = await controller.updateCore(id, { title, description, image });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  // This End For Core
  // This Start Testimonial
  app.get("/testimonial", async (req, res, next) => {
    const { orderBy } = req.query;
    try {
      const result = await controller.getTestimonial(orderBy);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.post("/testimonial", upload, async (req, res, next) => {
    const { name, recommendation } = req.body;
    const image = req.file.path
    try {
      const result = await controller.createTestimonial({ name, recommendation, image });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/testimonial/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.getTestimonialByID(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.delete("/testimonial/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteTestimonial(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.put("/testimonial/:id", upload, async (req, res, next) => {
    const { id } = req.params;
    const { name, recommendation} = req.body;
    const image = req.file.path
    try {
      const result = await controller.updateTestimonial(id, { name, recommendation, image });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  // This End For Testimonial
  app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
  });

  app.listen(8080, () => {
    console.log("Listening on port 8080");
  });
};
start();
