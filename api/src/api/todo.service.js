const todoSchema = require('./todo.schema');

todoSchema.methods(['get', 'post', 'put', 'delete']);
todoSchema.updateOptions({ new: true, runValidators: true });

module.exports = todoSchema;
