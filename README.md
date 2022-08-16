## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- Concepts: Next.js, Sanity, Google Auth with Google Identity Services, Zustand (Lightweight Redux), Axios, Tailwind, ServerSideRendering

- npx create-next-app@latest ./ --ts for initializing a next app with typescript - Setting up our sanity Backend: 
* After the installation of the packages, or just sanity, sanity init --coupon javascriptmastery2022 for a reduction of price as well
* We used sanity-backend as the name and the defauly dataset, and start with a clean project with no predefined schemas. (sanity docs, sanity manage, sanity help and sanity start are the commands usually used)
* We ignore the node modules in the sanity folder as well
- We start to create the schemas in sanity, user and comments are simple enough, while postedBy, is a reference schema between user and comment, and finally the post schema which is the most complex since it references other schemas
- Next we modify our schema.js to import these new schemas, and use sanity start in our terminal to compile your sanity and open up the studio on the localhost, and create a user and a post
- npm install --legacy-peer-deps to start on the frontend, and npm run dev to start working
- Working in Next, starting on pages, we remove most the app.tsx, and rewrite the globals.css style sheet with tailwind (npm install -D tailwindcss postcss autoprefixer or just install peer-deps based on package then npx tailwindcss init -p), and modify our tailwind-config to apply to what pages we want
- Now we start working on the app.tsx which defines our structure and from the get-go we set up the premise of server side rendering, in case the useEffect is triggered, it's client side, and if not it's server side rendering, then add the basic structure of the project in client-side.
- We started with the Navbar and Sidebar components, basic Navbar with just logo for now since it does not make sense for user, and search until we have a main page. The Sidebar includes multiple links, and shows a lot more for xl devices, and has the google login functionality which for now is for show only. The other components in the sidebar are Discover, For you accounts and Footer
- In the discover section, we first use router to grab data from the route we're on.
- Moving on to the main page of the site, the videos, we start using NextJs server side rendering with
- export const getServerSideProps = async () => {
-  const response = await axios.get(`http://localhost:3000/api/post`);
- }
- Careful with http vs https on local host,  encountering errors is common
- NextJs uses file based routing, based on the api in pages
- Then in the api for post, we're going to use the sanity client defined in the utils for our endpoint api. From sanity we grab the client id and add a cors origin for our application host. Now that we are getting the data back as videos, we need as per TypeScript, define the type in an interface at types.d.ts, d from development
- In the main, based on videos returned, we get a NoResults component or a map of VideoCard components, which also shows the user image. Note here, you might get an error, nextjs config needs to know what domain it supports images from, so you need to add whatever error comes up
- The VideoCard is quite simple and implements a new hook UseRef which is simillar to getElement in usual JS, and targets our video
- Next up is setting up Google auth which as of july 2022, is needing a new package, which we import GoogleAuthProvider, needing an id from Google Console  https://console.cloud.google.com/ then go into the project, credentials, and set up the consent screen first, and after that create credentials, and add both localhost and localhost:3000
- We're entering the setting up google user part, in utils index.ts, with the createorgetuser, using the jwt to decode the google token we get back on the button login and use it on the user.
- How do we create the user store? Using Zustand in this case instead of Redux or State, with it's own store folder, simillar way to Redux but more simplistic.
- Now moving on to the upload page, we make a new page and add simple functionality for upload there thanks to Sanity
- For another page we have the video details page, which takes advantage of Next file based routing and in a folder named details we have a [id].tsx which can be routed easily
- We've also added another id type to the api for this page, getting a specific video.
