import sqlite from "sqlite";
const initializeDatabase = async () => {

  const db = await sqlite.open("./db.sqlite");


  // this start code for faqs

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
      throw new Error("Could not retrieve list of faqs");
    }
  };

  const getFaqsByID = async id => {
    try {
      const rows = await db.get(
        `SELECT  id, question, answer FROM faq where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`faq with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve faq");
    }
  };

  const createFaq = async props => {
    const { question, answer } = props;
    if (!props || !question || !answer) {
      throw new Error(`You must provide a question and answer`);
    }
    console.log(question, answer)
    try {
      const result = await db.run(
        `Insert into faq (question, answer) values ('${question}', '${answer}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteFaq = async id => {
    try {
      const result = await db.run(
        `Delete from faq where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`Faq with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete faq with id ${id}` + err);
    }
  };

  const updateFaq = async (id, props) => {
    const { question, answer } = props;
    if (!props && !(props.question && props.answer)) {
      throw new Error(`You must provide a quetion or an answer`);
    }

    let stmt = "";
    if (question && answer) {
      stmt = `update faq set question = '${question}', answer= '${answer}' where id = ${id} `;

    } else if (question && !answer) {
      stmt = `update faq set question = '${question}' where id = ${id} `;
    } else {
      stmt = `update faq set  answer = '${answer}' where id = ${id} `;
    }
    try {
      const result = await db.run(stmt);

      if (result.stmt.changes == 0) {
        throw new Error(`Faq with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update faq with id ${id}` + err);
    }
  };

  // this End code for faqs
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
      if (rows.length == 0) {
        throw new Error("portfolio are empty!");
      }
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
    const { title, description, image , url } = props;
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


  const controller = {
    //Faq
    getFaqs,
    getFaqsByID,
    createFaq,
    deleteFaq,
    updateFaq,
    // Portfolio
    getPortfolio,
    getPortfolioByID,
    createPortfolio,
    deletePortfolio,
    updatePortfolio,

  };

  return controller;




};

export default initializeDatabase;
