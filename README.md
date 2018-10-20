
Project name:
Insurance Company Web Api

Description:
Technical backend test

Requirements: 
• Node.js 
• Express

How to run the project:

1. Install and run NPM
• npm install
• npm start 

2. Use the Terminal to run the following curl links:

• Get user data filtered by username -> Can be accessed by users with role "users" and "admin":

curl -X GET http://localhost:3000/clients/name/Barnett | json_pp

• Get	user data	filtered by	user id	-> Can be accessed by users with role	"users"	and	"admin":

curl -X GET http://localhost:3000/clients/id/55601290-8619-4f54-b831-9c6c26c52b44 | json_pp

• Get	the	list of	policies linked	to a user	name	->	Can	be accessed	by	users	with role	"admin":

curl -X GET  -H 'Authorization: a0ece5db-cd14-4f21-812f-966633e7be86'  http://localhost:3000/policies/name/Britney | json_pp

• Get	the	user linked	to a policy number	->	Can	be accessed	by users with	role "admin":

curl -X GET -H 'Authorization: e8fd159b-57c4-4d36-9bd7-a59ca13057bb' http://localhost:3000/clients/policy/56b415d6-53ee-4481-994f-4bffa47b5239 | json_pp

3. Click here to import and run the postman collection

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="4cfcb433150a1178c04e"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>


Author:
Daniela Kujawa Arvelo