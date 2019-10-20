# ReactJs-Todo-App
Classic task list application, built in **ReactJS** and **NodeJS**.

## Initial configuration

To use the project you need to install the **all dependencies**: 

```
 npm i

```
![Capturar](https://user-images.githubusercontent.com/49910898/66718643-830fdc00-edbc-11e9-82fb-2cacc1b7ae2b.PNG)

## Starting the project

after we download the dependencies, we use the following commands in the console:  
>I recommend using two or three windows on the console

With this command, we initialize **MongoDB**, which is our database, without it, the project will **not work**.

```JS
cd backend
mongod
```
![mongod](https://user-images.githubusercontent.com/49910898/66759171-1c4ef900-ee76-11e9-8d68-75eb74fd97fd.PNG)

Now we'll start the **server**:
```JS
cd backend
npm run dev
```

![dev](https://user-images.githubusercontent.com/49910898/66759340-7485fb00-ee76-11e9-9366-d78a1c59e376.PNG)

After the **Back-End** initialization, the time has come to enter the **interface**.  
To start the application **Front-End**, we will use the following command:   
>Note, that at this time, we left the folder "backend" and now we enter the folder "frontend"
>If you do not know how to return to the folder, just use the command **cd ..** in the console.

```JS
cd frontend
npm run dev
```
![1](https://user-images.githubusercontent.com/49910898/67152727-3859fc80-f2b3-11e9-80fe-c43bafb17214.PNG)

The Front End will boot on port **8080**, to have access, just open your browser and enter this following address:
```
http://localhost:8080
```
#### Now enjoy this little project!! 
