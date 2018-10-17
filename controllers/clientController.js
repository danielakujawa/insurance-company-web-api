
const request = require('request')

exports.getClients = async (req, res) => {
  request('http://www.mocky.io/v2/5808862710000087232b75ac.json',
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body)
        res.render('index', { title: 'Express', data: body })
      } else {
        res.json(error)
      }
    }
  )
}
