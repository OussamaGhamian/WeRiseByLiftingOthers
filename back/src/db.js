import sqlite from "sqlite";
const initializeDatabase = async () => {
  const db = await sqlite.open("./db.sqlite");

  //  this start code for faqs
  const getFaqs = async orderBy => {
    let stmt = "SELECT id, question, answer FROM faq";
    switch (orderBy) {
      case "question":
        stmt += " order by question desc";
        break;
      case "answer":
        stmt += " order by answer desc";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error("Faqs are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };
  const createFaq = async props => {
    const { question, answer } = props;
    if (!props || !question || !answer) {
      throw new Error(`You must provide a question and answer`);
    }

    try {
      const result = await db.run(
        `Insert into faq (question, answer) values ('${question}', '${answer}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error(err);
    }
  };
  const getFaqsByID = async id => {
    console.log(id);
    try {
      const rows = await db.all(
        `SELECT  id, question, answer FROM faq where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`Faq with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };
  const deleteFaq = async id => {
    try {
      const result = await db.run(`Delete from faq where id = ${id}`);
      if (result.stmt.changes == 0) {
        throw new Error(`Faq with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  const updateFaq = async (id, props) => {
    const { question, answer } = props;
    let stmt = "";
    if (question && answer) {
      stmt = `update faq set question = '${question}', answer= '${answer}' where id = ${id} `;
    } else if (question && !answer) {
      stmt = `update faq set question = '${question}' where id = ${id} `;
    } else if (!question && answer) {
      stmt = `update faq set  answer = '${answer}' where id = ${id} `;
    } else {
      throw new Error(`You must provide a question or an answer`);
    }
    try {
      const result = await db.run(stmt);

      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  // this End code for faqs

  // this start code for service
  const getServices = async orderBy => {
    let stmt = "SELECT * FROM service";
    switch (orderBy) {
      case "title":
        stmt += " order by service desc";
        break;
      case "description":
        stmt += " order by description desc";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error("Services are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };
  const createService = async props => {
    const { title, description, image } = props;
    if (!props || !title || !description || !image) {
      throw new Error(`You must provide a title,descriptionand and answer`);
    }
    try {
      const result = await db.run(
        `Insert into service (title, description,image) values ('${title}', '${description}','${image}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error(err);
    }
  };
  const getServicesByID = async id => {
    try {
      const rows = await db.all(
        `SELECT  * FROM service where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`Service with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };
  const deleteService = async id => {
    try {
      const result = await db.run(`Delete from service where id = ${id}`);
      if (result.stmt.changes == 0) {
        throw new Error(`Service with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  const updateService = async (id, props) => {
    const { title, description, image } = props;
    let stmt = "";
    if (title && description && image) {
      stmt = `update service set title = '${title}', description= '${description}',image='${image}' where id = ${id} `;
    } else if (title && !description && !image) {
      stmt = `update service set title = '${title}' where id = ${id} `;
    } else if (!title && description && !image) {
      stmt = `update service set  description = '${description}' where id = ${id} `;
    } else if (!title && !description && image) {
      stmt = `update service set  image = '${image}' where id = ${id} `;
    } else if (title && description && !image) {
      stmt = `update service set  title = '${title}',description = '${description}' where id = ${id} `;
    } else if (title && !description && image) {
      stmt = `update service set  title = '${title}',image = '${image}' where id = ${id} `;
    } else if (!title && description && image) {
      stmt = `update service set description = '${description}',image = '${image}' where id = ${id} `;
    } else {
      throw new Error(`You must provide a title or an description or an image`);
    }
    try {
      const result = await db.run(stmt);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  // this End code for service
  //here our team code starts
  const getMembers = async () => {
    try {
      const result = await db.all(`select * from ourTeam`);

      if (result.length == 0) throw new Error(`No data to retireive.`);
      return result;
    } catch (err) {
      throw new Error("Could not retrieve list of faqs");
    }
  };

  const getMemberById = async id => {
    try {
      const result = await db.all(`select * from ourTeam where id = ${id}`);
      if (result.length == 0) throw new Error(`No member with ID : ${id}`);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };

  const deleteMember = async id => {
    try {
      const result = await db.run(`delete from ourTeam where id = ${id}`);
      if (result.stmt.changes == 0)
        throw new Error(`Member with ID ${id} does not exist.`);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  const addMember = async props => {
    let { name, position, description, image } = props;
    if (!props || !name || !position || !description || !image)
      throw new Error(
        `You must provide a name, position, descritption, and an image.`
      );
    try {
      const result = await db.run(
        `insert into ourTeam (name , position ,description , image) values ('${name}',"${position}","${description}",'${image}') `
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error(`this combination does not work`);
    }
  };
  const updateMember = async (id, props) => {
    let { name, position, description, image } = props;
    if (!props && !(name && position && description && image))
      throw new Error(
        `You must provide an id, name, descrition, position, and an image. `
      );
    let stmnt = "";
    if (name && position && description && image)
      stmnt = `update ourTeam set name = '${name}' , position = '${position}' , description = ${description} , image = '${image}' where id = '${id}'`;
    else if (!name && position && description && image)
      stmnt = `update ourTeam set position = '${position}' , description = ${description} , image = '${image}' where id = '${id}'`;
    else if (name && !position && description && image)
      stmnt = `update ourTeam set name = '${name}' , description = ${description} , image = '${image}' where id = '${id}'`;
    else if (name && position && !description && image)
      stmnt = `update ourTeam set name = '${name}' , position = '${position}' , image = '${image}' where id = '${id}'`;
    else name && position && description && !image;
    stmnt = `update ourTeam set name = '${name}' , position = '${position}' , description = ${description} , image = '${image}' where id = '${id}'`;
    console.log(id, name, position, description, image);
    try {
      const result = await db.run(
        `update ourTeam set name = '${name}' , position = '${position}' , description = '${description}' , image = '${image}' where id = ${id}`
      );
      console.log(result.stmt);
      if (result.stmt.changes == 0)
        throw new Error(`Could not be able to update member with ID : ${id}`);
      return true;
    } catch (err) {
      throw new Error(`Could not update faq with id ${id}` + err);
    }
  };
  //here our team code ends

  //here hero code starts
  const getHero = async () => {
    try {
      const result = await db.all(`select * from hero where id = 3`);
      if (result.length == 0) throw new Error(`No hero to retreive.`);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };
  const deleteHero = async () => {
    try {
      const result = await db.run(
        `update hero set name = '' , image = '' , slogan = '' , btn = '' where id = 3`
      );
      if (result.stmt.changes == 0)
        throw new Error(`Member with ID 1 does not exist.`);
      return true;
    } catch (err) {
      throw new Error(`could not delete hero. ${err}`);
    }
  };
  const updateHero = async (name, image, slogan, btn) => {
    try {
      const result = await db.run(
        `update hero set name = '${name}' , image = '${image}' , slogan = '${slogan}' , btn = '${btn}' where id = 3`
      );
      console.log(result);
      if (result.stmt.changes == 0)
        throw new Error(`Could not be able to update hero`);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  //here hero code ends
  //here promise code starts
  const getPromise = async () => {
    try {
      const result = await db.all(`select * from promise`);
      if (result.length == 0) throw new Error(`No promises to retreive.`);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };
  const getPromiseByID = async id => {
    try {
      const result = await db.all(`select * from promise where id = ${id}`);
      if (result.length == 0)
        throw new Error(`Promise with ID ${id} does not exist.`);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };
  const deletePromise = async id => {
    try {
      const result = await db.run(`delete from promise where id = ${id}`);
      if (result.stmt.changes == 0)
        throw new Error(`Could not be able to delete promise with ID : ${id}`);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  const addPromise = async (title, description) => {
    if (!title || !description)
      throw new Error(`You must have title and description to add a promise.`);
    try {
      const result = await db.run(
        `insert into promise (title , description) values ('${title}' , '${description}')`
      );
      if (result.stmt.changes == 0)
        throw new Error(`Could not add new promise`);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  const updatePromise = async (id, title, description) => {
    let stmnt = "";
    if (title && description)
      stmnt = `update promise set title = '${title}' , description = '${description}' where id = ${id}`;
    else if (!title && description)
      stmnt = `update promise set description = '${description}'`;
    else if (title && !description)
      stmnt = `update promise set title = '${title}'`;
    else throw new Error(`No provided data to update promise`);
    try {
      const result = await db.run(stmnt);
      if (result.stmt.changes == 0)
        throw new Error(`Could not be able to update promise with ID ${id}`);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  // this start code for howItWorks
  const getHowItWorks = async () => {
    try {
      const rows = await db.all(`select * from howItWorks`);
      if (rows.length == 0) {
        throw new Error("howItWorks are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of howItWorks");
    }
  };

  const getHowItWorksByID = async id => {
    try {
      const rows = await db.get(
        `SELECT  id, title, description , date FROM howItWorks where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`howItWorks with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve howItWorks");
    }
  };

  const createHowItWorks = async props => {
    const { title, description, date } = props;
    if (!props || !title || !description || !date) {
      throw new Error(`You must provide a title and description and date`);
    }
    console.log(title, description, date)
    try {
      const result = await db.run(
        `Insert into HowItWorks (title,description,date) values ('${title}', '${description}' ,'${date}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteHowItWorks = async id => {
    try {
      const result = await db.run(
        `Delete from howItWorks where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`HowItWorks with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete howItWorks with id ${id}` + err);
    }
  };

  const updateHowItWorks = async (id, props) => {
    const { title, description, date } = props;
    if (!props && !(props.title && props.description && props.date)) {
      throw new Error(`You must provide a title or a description or a date`);
    }

    let stmt = "";
    if (title && description && date) {
      stmt = `update howItWorks set title = '${title}', description= '${description}', date= '${date}' where id = ${id} `;

    } else if (title && !description && !date) {
      stmt = `update howItWorks set title = '${title}' where id = ${id} `;
    } else if (!title && description && !date) {
      stmt = `update howItWorks set  description = '${description}' where id = ${id} `;
    } else if (!title && !description && date) {
      stmt = `update howItWorks set  date = '${date}' where id = ${id} `;
    }
    else if (title && description && !date) {
      stmt = `update howItWorks set  title = '${title}',description = '${description}' where id = ${id} `;
    }
    else if (title && !description && date) {
      stmt = `update howItWorks set  title = '${title}',date = '${date}' where id = ${id} `;
    }
    else if (!title && description && date) {
      stmt = `update howItWorks set  description = '${description}',date = '${date}' where id = ${id} `;
    }
    else {
      "please provid me title or discription or date"
    }
    try {
      const result = await db.run(stmt);

      if (result.stmt.changes == 0) {
        throw new Error(`HowItWorks with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update howItWorks with id ${id}` + err);
    }
  };
  // this End code for howitworks

  // this start code for ContactUs
  const getContactUs = async () => {
    try {
      const rows = await db.all(`select * from ContactUs`);
      if (rows.length == 0) {
        throw new Error("ContactUs are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of ContactUs");
    }
  };

  const getContactUsByID = async id => {
    try {
      const rows = await db.get(
        `SELECT  id, fname, lname , message FROM ContactUs where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`ContactUs with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve ContactUs");
    }
  };

  const createContactUs = async props => {
    const { fname, lname, message } = props;
    if (!props || !fname || !lname || !message) {
      throw new Error(`You must provide a fname and lname and message`);
    }
    console.log(fname, lname, message)
    try {
      const result = await db.run(
        `Insert into ContactUs (fname,lname,message) values ('${fname}', '${lname}' ,'${message}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteContactUs = async id => {
    try {
      const result = await db.run(
        `Delete from ContactUs where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`ContactUs with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete ContactUs with id ${id}` + err);
    }
  };

  const updateContactUs = async (id, props) => {
    const { fname, lname, message } = props;
    if (!props && !(props.fname && props.lname && props.message)) {
      throw new Error(`You must provide a fname or a lname or a message`);
    }

    let stmt = "";
    if (fname && lname && message) {
      stmt = `update ContactUs set fname = '${fname}', lname= '${lname}', message= '${message}' where id = ${id} `;

    } else if (fname && !lname && !message) {
      stmt = `update ContactUs set fname = '${fname}' where id = ${id} `;
    } else if (!fname && lname && !message) {
      stmt = `update ContactUs set  lname = '${lname}' where id = ${id} `;
    } else if (!fname && !lname && message) {
      stmt = `update ContactUs set  message = '${message}' where id = ${id} `;
    }
    else if (fname && lname && !message) {
      stmt = `update ContactUs set fname = '${fname}',  lname = '${lname}' where id = ${id} `;
    }
    else if (fname && !lname && message) {
      stmt = `update ContactUs set fname = '${fname}',  message = '${message}' where id = ${id} `;
    }
    else if (!fname && lname && message) {
      stmt = `update ContactUs set  lname = '${lname}', message = '${message}' where id = ${id} `;
    }
    else {
      "please provid me fname or lname or message"
    }

    try {
      const result = await db.run(stmt);

      if (result.stmt.changes == 0) {
        throw new Error(`ContactUs with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update ContactUs with id ${id}` + err);
    }
  };
  // this End code for ContactUs
  // this Start Code For Portfolio 

  const getPortfolio = async orderBy => {
    let stmt = "SELECT id, title, description , image , url FROM portfolio";
    switch (orderBy) {
      case "title":
        stmt += " order by title desc";
        break;
      case "description":
        stmt += " order by description desc";
        break;
      case "image":
        stmt += " order by image desc";
      case "url":
        stmt += " order by url desc";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(stmt);

      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of portfolio");
    }
  };

  const getPortfolioByID = async id => {
    try {
      const rows = await db.get(
        `SELECT  id, title, description , image , url FROM portfolio where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`portfolio with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve portfolio");
    }
  };

  const createPortfolio = async props => {
    const { title, description, image, url } = props;
    if (!props || !title || !description || !image || !url) {
      throw new Error(`You must provide a title and description and image and url `);
    }
    try {
      const result = await db.run(
        `Insert into portfolio (title, description , image ,url ) values ('${title}', '${description}', '${image}','${url}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deletePortfolio = async id => {
    try {
      const result = await db.run(
        `Delete from portfolio where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`portfolio with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete portfolio with id ${id}` + err);
    }
  };

  const updatePortfolio = async (id, props) => {
    const { title, description, image, url } = props;
    if (!props && !(props.title && props.description && props.image && props.url)) {
      throw new Error(`You must provide a title or an description or an image or an url`);
    }

    let stmt = "";
    if (title && description && image && url) {
      stmt = `update portfolio set image = '${image}',title = '${title}',description = '${description}',url = '${url}' where id = ${id} `;

    } else if (title && !description && !image && !url) {
      stmt = `update portfolio set title = '${title}' where id = ${id} `;
    }
    else if (description && !title && !image && !url) {
      stmt = `update portfolio set description = '${description}' where id = ${id} `;

    } else if (image && !description && !title && !url) {
      stmt = `update portfolio set image = '${image}' where id = ${id} `;
    } else {
      stmt = `update portfolio set  url = '${url}' where id = ${id} `;
    }
    console.log(title, description, image, url)
    try {
      const result = await db.run(stmt);

      if (result.stmt.changes == 0) {
        throw new Error(`portfolio with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update portfolio with id ${id}` + err);
    }
  };

  // This End Code For Porfolio

  // This Start Code For Core 
  const getCore = async orderBy => {
    let stmt = "SELECT id, title, description, image FROM coreService";
    switch (orderBy) {
      case "title":
        stmt += " order by title desc";
        break;
      case "description":
        stmt += " order by description desc";
        break;
      case "image":
        stmt += " order by image desc";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(stmt);
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of coreService");
    }
  };

  const getCoreByID = async id => {
    try {
      const rows = await db.get(
        `SELECT  id, title, description , image  FROM coreService where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`coreService with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve coreService");
    }
  };

  const createCore = async props => {
    const { title, description, image } = props;
    if (!props || !title || !description || !image) {
      throw new Error(`You must provide a title and description and image`);
    }
    try {
      const result = await db.run(
        `Insert into coreService (title, description , image ) values ('${title}', '${description}', '${image}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteCore = async id => {
    try {
      const result = await db.run(
        `Delete from coreService where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`coreService with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete coreService with id ${id}` + err);
    }
  };

  const updateCore = async (id, props) => {
    const { title, description, image } = props;
    if (!props && !(props.title && props.description && props.image)) {
      throw new Error(`You must provide a title or an description or an image`);
    }

    let stmt = "";
    if (title && description && image) {
      stmt = `update coreService set title = '${title}', description= '${description}', image= '${image}' where id = ${id} `;

    } else if (title && !description && !image) {
      stmt = `update coreService set title = '${title}' where id = ${id} `;
    } else if (description && !title && !image) {
      stmt = `update coreService set description = '${description}' where id = ${id} `;
    } else {
      stmt = `update coreService set  image = '${image}' where id = ${id} `;
    }
    try {
      const result = await db.run(stmt);

      if (result.stmt.changes == 0) {
        throw new Error(`coreService with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update coreService with id ${id}` + err);
    }
  };

  // THIS End Code For Core
  // This Start Tstimonial
  const getTestimonial = async orderBy => {
    let stmt = "SELECT id, name, recommendation, image FROM testimonial";
    switch (orderBy) {
      case "name":
        stmt += " order by name desc";
        break;
      case "recommendation":
        stmt += " order by recommendation desc";
        break;
      case "image":
        stmt += " order by image desc";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(stmt);
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of testimonial");
    }
  };

  const getTestimonialByID = async id => {
    try {
      const rows = await db.get(
        `SELECT  id, name, recommendation , image  FROM testimonial where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`testimonial with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve testimonial");
    }
  };

  const createTestimonial = async props => {
    console.log(props)
    const { name, recommendation, image } = props;
    if (!props || !name || !recommendation || !image) {
      throw new Error(`You must provide a name and recommendation and image`);
    }
    try {
      // console.log(`Insert into testimonial (name, recommendation , image ) values ('${name}', '${recommendation}', '${image}')`)
      const result = await db.run(
        `Insert into testimonial (name, recommendation , image ) values ('${name}', '${recommendation}', '${image}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteTestimonial = async id => {
    try {
      const result = await db.run(
        `Delete from testimonial where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`testimonial with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete testimonial with id ${id} ` + err);
    }
  };

  const updateTestimonial = async (id, props) => {
    const { name, recommendation, image } = props;
    if (!props && !(props.name && props.recommendation && props.image)) {
      throw new Error(`You must provide a name or an recommendation or an image`);
    }

    let stmt = "";
    if (name && recommendation && image) {
      stmt = `update testimonial set name = '${name}', recommendation= '${recommendation}', image= '${image}' where id = ${id} `;

    } else if (name && !recommendation && !image) {
      stmt = `update testimonial set name = '${name}' where id = ${id} `;
    } else if (recommendation && !name && !image) {
      stmt = `update testimonial set recommendation = '${recommendation}' where id = ${id} `;
    } else {
      stmt = `update testimonial set  image = '${image}' where id = ${id} `;
    }
    try {
      const result = await db.run(stmt);

      if (result.stmt.changes == 0) {
        throw new Error(`testimonial with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update testimonial with id ${id}` + err);
    }
  };
  // This End Testimonial
  //Here notOtherCompany startS
  const getNoc = async () => {
    try {
      const result = await db.all(`select * from noc where id = 1`);
      if (result.length == 0) throw new Error(`No Noc to retreive.`);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  };
  const deleteNoc = async () => {
    try {
      const result = await db.run(
        `update noc set title = '' , description = '' , miniHeader = '' , image = '' where id = 1 `
      );
      if (result.stmt.changes == 0)
        throw new Error(`Member with ID 1 does not exist.`);
      return true;
    } catch (err) {
      throw new Error(`could not delete Not other company section. ${err}`);
    }
  };
  const updateNoc = async (title, description, miniHeader, image) => {
    try {
      const result = await db.run(
        `update noc set title = '${title}' , description = '${description}' , miniHeader = '${miniHeader}' , image = '${image}' where id = 1`
      );
      if (result.stmt.changes == 0)
        throw new Error(`Could not be able to update NotOtherCompany`);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  //Here notOtherCompany ends 
  //Here experience starts 
  const getExperiences = async () => {
    try {
      const rows = await db.all(`SELECT * FROM experience`);
      if (rows.length == 0) {
        throw new Error("experience table is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };
  const createExperience = async (yearsNbr, field) => {
    if (!yearsNbr || !field) {
      throw new Error(`You must provide a field and yearsNbr `);
    }
    try {
      const result = await db.run(
        `Insert into experience (yearsNbr, field) values ('${yearsNbr}', '${field}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error(err);
    }
  };
  const getExperienceByID = async id => {
    try {
      const rows = await db.all(
        `SELECT  * FROM experience where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`experience with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };
  const deleteExperience = async id => {
    try {
      const result = await db.run(`Delete from experience where id = ${id}`);
      if (result.stmt.changes == 0) {
        throw new Error(`experience with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  const updateExperience = async (id, yearsNbr, field) => {
    let stmt = "";
    if (id && yearsNbr && field) {
      stmt = `update experience set yearsNbr = '${yearsNbr}', field= '${field}' where id = ${id} `;
    } else if (id && yearsNbr && !field) {
      stmt = `update experience set yearsNbr = '${yearsNbr}' where id = ${id} `;
    } else if (id && !yearsNbr && field) {
      stmt = `update experience set field = '${field}' where id = ${id} `;
    } else {
      throw new Error(`You must provide yearsNbr or a field`);
    }
    try {
      const result = await db.run(stmt);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  };
  //Here experience ends 
  const controller = {
    ///Faq
    getFaqs,
    getFaqsByID,
    createFaq,
    deleteFaq,
    updateFaq,
    //Service
    getServices,
    getServicesByID,
    createService,
    deleteService,
    updateService,
    // our member
    getMembers,
    getMemberById,
    deleteMember,
    addMember,
    updateMember,
    //Hero
    getHero,
    deleteHero,
    updateHero,
    //promise
    getPromise,
    getPromiseByID,
    deletePromise,
    updatePromise,
    addPromise,
    //HowItWorks
    getHowItWorks,
    getHowItWorksByID,
    createHowItWorks,
    deleteHowItWorks,
    updateHowItWorks,
    //ContactUs
    getContactUs,
    getContactUsByID,
    createContactUs,
    deleteContactUs,
    updateContactUs,
    // Portfolio
    getPortfolio,
    getPortfolioByID,
    createPortfolio,
    deletePortfolio,
    updatePortfolio,
    // coreService
    getCore,
    getCoreByID,
    createCore,
    deleteCore,
    updateCore,
    // Testimonial
    getTestimonial,
    getTestimonialByID,
    createTestimonial,
    deleteTestimonial,
    updateTestimonial,
    //Noc
    getNoc,
    deleteNoc,
    updateNoc,
    //experience
    getExperiences,
    getExperienceByID,
    updateExperience,
    createExperience,
    deleteExperience,
  };

  return controller;
};

export default initializeDatabase;
