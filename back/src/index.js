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
    const { question, answer } = req.query;

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
    const { title, description, image } = req.query;
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
    const { title, description, image } = req.query;
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
      console.log(result)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })

  app.get(`/ourTeam/delete/:id`, async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await controller.deleteMember(id)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.get(`/outTeam/create`, async (req, res, next) => {
    const { name, position, description, image } = req.query
    try {
      const result = await controller.addMember({ name, position, description, image })
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.get(`/ourTeam/update/:id`, async (req, res, next) => {
    const { id } = req.params
    const { name, position, description, image } = req.query
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
  app.get(`/home/hero/update`, async (req, res, next) => {
    const { name, image, slogan, btn } = req.query
    try {
      const result = await controller.updateHero(name, image, slogan, btn)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.get(`/home/hero/delete`, async (req, res, next) => {

    try {
      const result = await controller.deleteHero()
      console.log(result)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })

  app.get(`/home/hero`, async (req, res, next) => {
    try {
      const result = await controller.getHero(1)
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
  app.get(`/home/deletePromise/:id`, async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await controller.deletePromise(id)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.get(`/home/addPromise`, async (req, res, next) => {
    const { title, description } = req.query
    try {
      const result = await controller.addPromise(title, description)
      res.json({ success: true, result })
    }
    catch (err) {
      next(err)
    }
  })
  app.get(`/home/updatePromise/:id`, async (req, res, next) => {
    const { title, description } = req.query
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


  app.get("/HowItWorks/create", async (req, res, next) => {
    const { title, description, date } = req.query;
    try {
      const result = await controller.createHowItWorks({ title, description, date });
      console.log(result)
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


  app.get("/getHowItWorks/delete/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deletegetHowItWorks(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/HowItWorks/update/:id", async (req, res, next) => {
    const { id } = req.params;
    const { title, description, date } = req.query;
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


  app.get("/ContactUs/create", async (req, res, next) => {
    const { fname, lname, message } = req.query;
    try {
      const result = await controller.createContactUs({ fname, lname, message });
      console.log(result)
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


  app.get("/ContactUs/delete/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteContactUs(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/ContactUs/update/:id", async (req, res, next) => {
    const { id } = req.params;
    const { fname, lname, message } = req.query;
    try {
      const result = await controller.updateContactUs(id, { fname, lname, message });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  // This Start Code For Portfoio
  app.get("/portfolio", async (req, res, next) => {
    const { orderBy } = req.query;
    try {
      const result = await controller.getPortfolio(orderBy);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/portfolio/delete/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deletePortfolio(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/portfolio/update/:id", async (req, res, next) => {
    const { id } = req.params;
    const { title, description, image, url } = req.query;

    try {
      const result = await controller.updatePortfolio(id, { title, description, image, url });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/portfolio/create", async (req, res, next) => {
    const { title, description, image, url } = req.query;
    console.log(title, description, image)
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

  app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err });
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

  app.get("/core/create", async (req, res, next) => {
    const { title, description, image } = req.query;

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


  app.get("/core/delete/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteCore(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/core/update/:id", async (req, res, next) => {
    const { id } = req.params;
    const { title, description, image } = req.query;

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

  app.get("/testimonial/create", async (req, res, next) => {
    const { name, recommendation, image } = req.query;

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


  app.get("/testimonial/delete/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await controller.deleteTestimonial(id);
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });

  app.get("/testimonial/update/:id", async (req, res, next) => {
    const { id } = req.params;
    const { name, recommendation, image } = req.query;

    try {
      const result = await controller.updateTestimonial(id, { name, recommendation, image });
      res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  // This End For Testimonial

  app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message});
  });

  app.listen(8080, () => {
    console.log("Listening on port 8080");
  });
};
start();
