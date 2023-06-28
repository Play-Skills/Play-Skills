function SEND(verb, verbId, object, objectId) {
  try {
    const player = GetPlayer();
    const userNamejs = player.GetVar("userName");
    const userEmailjs = player.GetVar("userID");
    const conf = {
      "endpoint": "https://sber.lrs.io/xapi/",
      "auth": "Basic " + toBase64("nurugw:jiwsiw")
    };
    ADL.XAPIWrapper.changeConfig(conf);
    const statement = {
      "actor": {
        "name": userNamejs,
        "mbox": userEmailjs
      },
      "verb": {
        "id": verbId,
        "display": { "en-US": verb }
      },
      "object": {
        "id": objectId,
        "definition": {
          "name": { "en-US": object }
        }
      }
    };
    try {
      const result = ADL.XAPIWrapper.sendStatement(statement);
    }  catch {
      console.log('Send Error');
    }
  } catch {
    console.log('Config Error');
  } 
}