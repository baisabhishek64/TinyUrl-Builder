### Project : Custom TinyURL builder
A Service which is going to compress long urls and return shorter one. Laters it gives the original thorugh shorter one.

## Code Style
[![Code Style](https://github.com/baisabhishek64/TinyUrl-Builder/blob/master/supportedFiles/img.svg)](https://standardjs.com/)

## ScreenShots
- Posting long url
<div align="center">
    <img src="https://github.com/baisabhishek64/TinyUrl-Builder/blob/master/supportedFiles/Post.png" width="400px"</img> 
</div>
- Getting long url back
<div align="center">
    <img src="https://github.com/baisabhishek64/TinyUrl-Builder/blob/master/supportedFiles/Get.png" width="400px"</img> 
</div>

## Built with
* Framework : **ExpressJs**
* Encoding technique : **Base62**
* BackendDriver: **mongoose**
* Backend : **mongodb**

## Execute following steps to test this API
```
1. Open terminal/command prompt and run : mongod
2. Open another terminal/command prompt and run: npm start
3. Open postman or any other request agent and execute post request on: localhost:3000/url with json body
    
    {url: "your url"}
    
4. In the response you will get the short url in this format:
    
      {url: "shortyour"}
    
5. Get your long url back by making get request with the received short url: localhost:3000/url/shortUrl
```

It is can easily hooked up as a lib in your code base :blush:
