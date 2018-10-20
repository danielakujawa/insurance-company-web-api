
const { get } = require('axios')
const urlClients = 'http://www.mocky.io/v2/5808862710000087232b75ac'
const urlPolicies = 'http://www.mocky.io/v2/580891a4100000e8242b75c5'

exports.getClientById = (req, res) => {
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

exports.getClientByName = (req, res) => {
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

exports.getPoliciesByName = (req, res) => {
  get(urlClients)
    .then(response => {
      const clients = response.data.clients
      for (let index in clients) {
        if (clients[index].id === req.headers.authorization && clients[index].role === 'admin') {
          for (let clientIndex in clients) {
            if (clients[clientIndex].name === req.params.name) {
              const userId = clients[clientIndex].id
              console.log(userId)
              get(urlPolicies)
                .then(response => {
                  const policies = response.data.policies
                  return res.json(policies.filter(policy => policy.clientId === userId))
                })
            }
          }
        }
      }
      // return res.json()
    })
}

exports.getUserByPolicyNumber = (req, res) => {
  get(urlClients)
    .then(response => {
      const clients = response.data.clients
      for (let index in clients) {
        if (clients[index].id === req.headers.authorization && clients[index].role === 'admin') {
          get(urlPolicies)
            .then(response => {
              const policies = response.data.policies
              for (let policyIndex in policies) {
                if (policies[policyIndex].id === req.params.policy) {
                  const clientId = policies[policyIndex].clientId
                  get(urlClients)
                    .then(response => {
                      const clients = response.data.clients
                      for (let clientIndex in clients) {
                        if (clients[clientIndex].id === clientId) {
                          return res.json(clients[clientIndex])
                        }
                      }
                    })
                }
              }
            })
        }
      }
      // return res.json()
    })
}
