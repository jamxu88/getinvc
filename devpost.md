
<h1 align="center">

  <br>
  <a href="http://getin.vc"><img src="https://user-images.githubusercontent.com/39576123/160287162-980f10de-ec50-43ab-bd41-cc0e45fdeb2e.png" alt="getin.vc" width="200"></a>
</h1>

<h4 align="center">Temporary voice and text chat lobbies.</h4>
<h1 align="center">
<img src="https://user-images.githubusercontent.com/39576123/160287035-dfe7a8ff-21e3-4cca-9266-aa8ddd8a65de.gif" alt="getin.vc" width="500">
</h1>


### What if there was an easier way to quickly speak to people online?
In many online games, such as League of Legends, only text chat is available to communciate between players. Creating a discord server leads to additional hassle, as members would likely need to leave after, and could be saddled with pings.

### Enter: **getin.vc**
getin.vc is a temporary VOIP (Voice Over Internet Protocol) lobby platform targeted towards gamers. Share a short join code and **_anyone can connect through their browser_**. Users can join a voice call and a text chat, in just **_two clicks_**. getin.vc contains features designed to make chatting easier like volume sliders for individual users, locking lobbies, and banning users. 

### Features
* Quick & Easy - Join a voice call in just two clicks.
* Simple text chat.
* Banning functionality.
* **All contained in your browser, no software necessary.**

## Tech
* Figma - User Experience/User Interface related construction
* Node.js - text chat and voice calling backend
* ReactCSS & TailwindCSS - Frontend UI/UX
* WebRTC - Voice calling support
* Socket.io - Communication between clients 
* Fastify - Creation of web servers
* Firebase - Hosting of user and lobby information 

## The Development Process

We created the idea of getin.vc after thinking about the issues that we each faced in our lives. We quickly realized that the lack of a quick way to talk to teammates on text-only games was a hole that needed to be filled. We created a flow chart of what the project would need to do, and planned out the UI needed to achieve what we wanted on Figma. 


![The Backend Flow Simplified](https://cdn.discordapp.com/attachments/957293311046090845/957642709621940284/Bridge_1.png)

<br><br> <img src="https://user-images.githubusercontent.com/39576123/160269808-8a75ec37-96b6-41c4-bb60-c62887515c68.png" width="500">
<br><br> <img src="https://user-images.githubusercontent.com/39576123/160269768-ce24f45c-42a6-429c-a8ff-18d4c87bb4aa.png" width="500">
<br><br> <img src="https://user-images.githubusercontent.com/39576123/160269847-0f09cb93-32f1-4ca2-92e0-7fe20a5dcdca.png" width="500">
<br><br> <img src="https://user-images.githubusercontent.com/39576123/160269881-b042f50e-a439-4fea-bb50-536454d3eb2b.png" width="500">
<br><br> <img src="https://user-images.githubusercontent.com/39576123/160269933-2e4cb69f-453a-4c16-8feb-d183455ff132.png" width="500">
<br><br>

After finishing our designs and waiting until the start of the hackathon, the coding begun. We faced many issues, as we were working on an unfamiliar type of application. We collaborated over Github and kept tabs on each other's progress to make sure everyone was able to succeed. We sent code, shared screens, and bounced ideas over Discord. We spent quite a few hours overnight finishing our application. (stuff in morning IDK)


## Accomplishments that we're proud of
We're especially proud of the implementation of a messaging syncing system, so that every user sees the same message at the same time. The implementation of a voice calling system was especially impressive to us, because it involved the usage of complicated libraries that we had to learn to use. We also somehow managed to work until 4:00 AM, which was a miracle by itself.


## What we learned
We learned how to use software like Figma to model our designs and to better envision our project. We learned how to utlize the WebRTC library to allow for voice communication between multiple users. In order to access and edit user and lobby information, we figured out how to Google Firebase with JavaScript. HooHacks 22 was truly an educational experience for us.

## Future plans
In the future, we plan to implement even more features into getin.vc, including but not limited to:
* Increasing audio quality in voice calls
* Software-based daemon to automatically generate getin.vc link into clipboard, and to automically join user into lobby when hotkey is pressed
* Ability for users to send media in the text chat
* Choose between mute and push-to-talk
* Botting protection
