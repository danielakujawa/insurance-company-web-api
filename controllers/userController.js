
const { get } = require('axios')
const urlClients = 'http://www.mocky.io/v2/5808862710000087232b75ac'
const urlPolicies = 'http://www.mocky.io/v2/580891a4100000e8242b75c5'

const getClients = (callback) => {
  get(urlClients).then(response => {
    return callback(response.data.clients)
  })
}

const getPolicies = (callback) => {
  get(urlPolicies).then(response => {
    return callback(response.data.policies)
  })
}

exports.getClientById = (req, res) => {
  getClients(clients => {
    for (let index in clients) {
      if (clients[index].id === req.params.id) {
        return res.json(clients[index])
      }
    }
    return res.json()
  })
}

exports.getClientByName = (req, res) => {
  getClients(clients => {
    for (let index in clients) {
      if (clients[index].name === req.params.name) {
        return res.json(clients[index])
      }
    }
    return res.json()
  })
}

exports.getPoliciesByName = (req, res) => {
  getClients(clients => {
    for (let index in clients) {
      if (clients[index].id === req.headers.authorization && clients[index].role === 'admin') {
        for (let clientIndex in clients) {
          if (clients[clientIndex].name === req.params.name) {
            const userId = clients[clientIndex].id
            console.log(userId)
            getPolicies(policies => {
              return res.json(policies.filter(policy => policy.clientId === userId))
            })
          }
        }
      }
    }
  })
}

exports.getUserByPolicyNumber = (req, res) => {
  getClients(clients => {
    for (let index in clients) {
      if (clients[index].id === req.headers.authorization && clients[index].role === 'admin') {
        getPolicies(policies => {
          for (let policyIndex in policies) {
            if (policies[policyIndex].id === req.params.policy) {
              const clientId = policies[policyIndex].clientId
              getClients(clients => {
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
  })
}
