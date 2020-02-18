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
      try {
        const result = await db.run(
          `Insert into faq (question, answer) values ('${question}', '${answer}')`
        );
        return result.stmt.lastID;
      } catch (err) {
        throw new Error("This combination doesnt work");
      }
    };
  
    const deleteFaq= async id => {
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
      const { question, answer} = props;
      if (!props && !(props.question && props.answer)) {
        throw new Error(`You must provide a quetion or an answer`);
      }
  
      let stmt = "";
      if (question && answer) {
        stmt = `update faq set quetion = '${question}', answer= '${answer}' where id = ${id} `;
     
      } else if (question && !answer) {
        stmt = `update faq set quetion = '${question}' where id = ${id} `;
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
  
    const controller = {
        getFaqs,
     getFaqsByID,
     createFaq ,
     deleteFaq,
     updateFaq,
    
    };
  
    return controller;

    


};

export default initializeDatabase;
