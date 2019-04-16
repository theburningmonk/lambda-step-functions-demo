module.exports.handler = async (event, context) => {
  return event.x - event.y;
};