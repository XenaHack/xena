```
POST http://localhost:8080/project/create
{
  "title":"Xena Microservice",
  "githubUrl":"https://github.com/whoisjeff/xena",
  "tags": ["angularjs","#springBoot"]
}
```
 

GET http://localhost:8080/project/get/5971719da7b11b0048fae5e6


GET http://localhost:8080/project/get/tags/[angularjs, k]



```
POST http://localhost:8080/post/create
{
  "message":"I need help w/ this one problem in my spring boot app",
  "tags": ["springBoot", "probs"]
}
```
GET http://localhost:8080/post/get/597171cea7b11b0048fae5e7

GET http://localhost:8080/post/get/tags/[probs, springBoot]
