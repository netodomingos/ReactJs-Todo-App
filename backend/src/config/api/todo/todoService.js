const Todo = require('./todo')


Todo.methods(['get', 'post', 'put', 'delete'])

// Update Validation
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo