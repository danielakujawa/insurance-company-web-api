
npm install

npm start 


curl links:

curl -X GET http://localhost:3000/clients/name/Barnett | json_pp

curl -X GET http://localhost:3000/clients/id/55601290-8619-4f54-b831-9c6c26c52b44 | json_pp

curl -X GET  -H 'Authorization: a0ece5db-cd14-4f21-812f-966633e7be86'  http://localhost:3000/policies/name/Britney | json_pp

curl -X GET -H 'Authorization: e8fd159b-57c4-4d36-9bd7-a59ca13057bb' http://localhost:3000/clients/policy/56b415d6-53ee-4481-994f-4bffa47b5239 | json_pp



