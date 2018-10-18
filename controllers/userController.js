
const { get } = require('axios')
const urlClients = 'http://www.mocky.io/v2/5808862710000087232b75ac'

exports.getClientsById = async (req, res) => {
  get(urlClients)
    .then(response => {
      const clients = response.data.clients
      for (let index in clients) {
        if (clients[index].id === req.params.id) {
          return res.json(clients[index])
        }
      }
      return res.json()
    })
}

exports.getClientsByName = async (req, res) => {
  get(urlClients)
    .then(response => {
      const clients = response.data.clients
      for (let index in clients) {
        if (clients[index].name === req.params.name) {
          return res.json(clients[index])
        }
      }
      return res.json()
    })
}
