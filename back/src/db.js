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
        return rows;
      } catch (err) {
        throw new Error("Could not retrieve list of faqs");
      }
    };
  
    const getFaqsByID = async id => {
      try {
        const rows = await db.all(
          `SELECT  id, question, answer FROM faq where id=${id}`
        );
      
        return rows;
      } catch (err) {
        console.log(err.message)
        throw new Error("Could not retrieve faq")+err;
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
    
  
      let stmt = "";
      if (question && answer) {
        stmt = `update faq set question = '${question}', answer= '${answer}' where id = ${id} `;
     
      } else if (question && !answer) {
        stmt = `update faq set question = '${question}' where id = ${id} `;
      } else if(!question && answer){
        stmt = `update faq set  answer = '${answer}' where id = ${id} `;
      }else{
        throw new Error(`You must provide a quetion or an answer`);
      }
      try {
        const result = await db.run(stmt);
        
       
        return true;
      } catch (err) {
        throw new Error(`Could not update faq with id ${id}` + err);
      }
    };

    // this End code for faqs
 

     // this start code for service

     const getServices = async orderBy => {
      let stmt = "SELECT id, title, description FROM service";
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
      
        return rows;
      } catch (err) {
        throw new Error("Could not retrieve list of services");
      }
    };
  
    const getServicesByID = async id => {
      try {
        const rows = await db.all(
          `SELECT  id, title, description FROM service where id=${id}`
        );
       
        return rows;
      } catch (err) {
        throw new Error("Could not retrieve service");
      }
    };
  
    const createService= async props => {
      const { title, description,image} = props;
      if (!props || !title || !description || !image) {
        throw new Error(`You must provide a title,descriptionand and answer`);
     
      }
    
      try {
        const result = await db.run(
          `Insert into service (title, description,image) values ('${title}', '${description}','${image}')`
        );
        return result.stmt.lastID;
      } catch (err) {
        throw new Error("This combination doesnt work");
      }
    };
  
    const deleteService= async id => {
      try {
        const result = await db.run(
          `Delete from service where id = ${id}`
        );
     
        return true;
      } catch (err) {
        throw new Error(`Could not delete service with id ${id}` );
      }
    };
  
    const updateService = async (id, props) => {
      const { title, description,image} = props;
     
  
      let stmt = "";
      if (title && description && image) {
        stmt = `update service set title = '${title}', description= '${description}',image='${image}' where id = ${id} `;
     
      } else if (title && !description &&!image) {
        stmt = `update service set title = '${title}' where id = ${id} `;
      } else if (!title && description&&!image){
        stmt = `update faq set  description = '${description}' where id = ${id} `;
      }
      else if (!title && !description && image){
        stmt = `update faq set  image = '${image}' where id = ${id} `;
      }
      else if (title && description && !image){
        stmt = `update faq set  title = '${title}',description = '${description}' where id = ${id} `;
      }
      else if (title && !description && image){
        stmt = `update faq set  title = '${title}',image = '${image}' where id = ${id} `;
      }
      else if (!title && description && image){
        stmt = `update faq set description = '${description}',image = '${image}' where id = ${id} `;
      }else{
        throw new Error(`You must provide a title or an description or an image`);
      }
      try {
        const result = await db.run(stmt);
        
       
        return true;
      } catch (err) {
        throw new Error(`Could not update service with id ${id}`);
      }
    };

    // this End code for service
    
  
    const controller = {
      ////////////
        getFaqs,
     getFaqsByID,
     createFaq ,
     deleteFaq,
     updateFaq,
     ///////////
     getServices,
     getServicesByID ,
     createService,
     deleteService,
     updateService,
     //////////////

     
    
    };
  
    return controller;

    


};

export default initializeDatabase;
