# React + Vite

I'll be building an artwork viewer app 

## 0 - Planning 

* I'll be using the API https://api.artic.edu/docs/ from the Art Institute of Chicago. Endpoints:
    * https://api.artic.edu/api/v1/artworks
    * https://api.artic.edu/api/v1/artworks/{artworkId}
* MVP User Stories:
  * Users can visit a Home page to learn about the app I'm building
  * Users can visit an Artworks page to view a grid of artwork pulled from the Art Institute of Chicago
  * Users can click on a single artwork to view more details about that piece of artwork
* Pages:
  * `/`
  * `/artworks`
  * `/artworks/:artworkId`

## 1 - Setup
* First Set up the project
* Created the folder structure in `src/`
  * `/components`
  * `/context`
  * `/pages`
  * `/utils`
* Copy and paste the `handleFetch` function into the `utils` folder
* Delete most of the css in `App.css` and `index.css`
* In `App.jsx`, deleted all of the content. Replaced it with the generic page structure:

```jsx
function App() {
  return (
    <>
      <header>
        {/* nav will go here*/}
      </header>
      <main>
        {/* Routes will go here*/}
      </main>
      <footer>
        {/* dev information will go here*/}
      </footer>
    </>
  )
}
```

## 2 - Fetching Data + Context
* Start by making sure my data can be fetched into context
  * Create the `DataContext` 
  * Create `DataContextProvider`
    * Create `artworks` and `error` state in the context provider
    * Write a `useEffect` fetch to set the `artworks` data. Using the api https://api.artic.edu/api/v1/artworks
    * Return the `DataContext.Provider` wrapped around the `children`
  * Render the `DataContextProvider` around the entire `App` in `main.jsx` (and removed the strict mode component)
    * Add a `console.log(artworks)` to the provider to test that the provider is rendering, the effect is running, and the data is being fetched

## 3 - Setting up Routes

* Import and render `BrowserRouter` in `main.jsx`
* Decide on my page structure:
  * `/` to render a home page
  * `/artworks` to render the artworks page
  * `/artworks/:artworkId` to render a single piece of artwork
* Set up `Routes` with a `Route` for each of the pages above
* Set up a `nav` component with `NavLink` components for Home and Artworks pages (the third page will be linked to when I click on a piece of art)
* Create page components: `Home`, `Artworks`, `ArtworkDetails` with basic JSX

## 4 — Rendering Artworks

* Use the `DataContext` to grab the `artworks` and `console.log(artworks)` to ensure I'm receiving the data
* Create an `ArtworkCard` component that takes in a single `artwork` prop. For now, I'm just making this in the `Artworks.jsx` page component file. I can move it around later if I want to.
* Create a `ul` and render a `<li>` for each `artwork` in `artworks`:
  * Use the `artwork.id` for the unique key
  * Within each `li` render an `ArtworkCard` component, passing in the current `artwork`
* Figure out how to render the data.
  * For this API, I had to look closely at the docs to figure out that the images aren't in the objects I'm given. Instead, I had to construct a URL using the `artwork.image_id` value to get the images.


## 5 — Rendering a Single Artwork

* Within `Artworks.jsx`, I put the `img` element of each `ArtworkCard` inside a `Link` that would take the user to `/artworks/{artwork.id}`. I tested this out and because of my routing from step 3, the `ArtworkDetails` page component is rendered.
* In the `ArtworkDetails` page component, I invoke `useParams` to get the `artworkId` value from the URL. I `console.log(artworkId)` to test that for each picture I click on, I am able to get the `artworkId` from the URL.
* While I could pull this data from context, I decided to use the `artworkId` to perform a fetch for a single artwork resource using the endpoint `https://api.artic.edu/api/v1/artworks/{artworkId}`. I did this using `useState` and `useEffect`, just like in the Provider. 
* Once I confirmed that the data was being fetched, I began rendering the fetched data. In the most basic manner.

## 6 - Styling

* I now have the MVP features. Time to style
* The things I want to focus on are:
  * Displaying the artwork grid in an organized manner
  * Displaying the artwork details

## Tech Checklist

### Project Fundamentals (7)
- [x] Used Vite for this project
- [x] Used React
- [x] Used React Router for client side routing
- [x] Used Context at least once
- [x] Made a fetch to get multiple resources
- [x] Made a fetch to get a single, specific resource
- [ ] Made a third fetch for whatever you want
- [ ] **Bonus: Were able to get it deployed in a functional state**

### React Fundamentals (8)
- [x] Created at least 3 components
- [x] Have all components in their own files (1 export per file)
- [ ] Passed props to a component at least 3 times
  - [x] 1st check box
  - [ ] 2nd check box
  - [ ] 3rd check box
- [x] Rendered an array of items to the screen at least once
- [x] At no point did you ever use any vanilla DOM JS methods

### State Management (10)
- [x] A Context is created to manage global state
- [x] The `useContext` hook is used at least once
- [x] Used the `useEffect` hook at least 2 times
  - [x] 1st check box
  - [x] 2nd check box
- [x] Used the `useState` hook at least 3 times
  - [x] 1st check box
  - [x] 2nd check box
  - [x] 3rd check box
- [x] Lifted state up out of a component at least once
  - That is a fancy way of saying that you had the state of a component and then passed down the getter and setter functions for the hook to a child component. You've seen us do this!

### React Router (3)
- [x] Had at least 2 different pages in the application
- [x] Used the proper `Link` components to navigate between pages
- [x] Used the `useParams` hook at least once

### Forms & Events (5)
- [ ] Handled at least 2 non-submission events (clicking on something causes a UI change)
  - [ ] 1st check box
  - [ ] 2nd check box
- [ ] Handled form submission event properly with React syntax
- [ ] Demonstrated a working controlled Form

### Style (15)
- [ ] Navigation bar fits cleanly on mobile and desktop
- [x] Navigation visually indicates what page you are on (look into `NavLink`)
  - Think underlines, bolding, etc. this should change as you move around the site
- [x] Used Flexbox or Grid to style list of components
- [x] Repeated elements have a consistent "card" style
- [ ] Site has a primary color
- [ ] Site has a secondary color
- [ ] Site has an accent color
  - This is for things like buttons, links, etc.
- [x] No more than 2 different fonts were used on any one page
- [ ] Buttons have altered visual states for hover, active, and focus
- [x] Links have altered visual states for hover, active, and focus

### A11y (12)
- [x] There is a `main` element on *each* page
- [x] There is a `nav` element on *each* page
- [x] The `nav` contains a `ul` of links
- [x] At least one `h1` element on *each* page
- [x] At least one `section` is used properly on *each* page
- [x] Heading tag hierarchy is always correct
- [x] `div` is never used in place of `ul` and `li`
- [ ] Every `form` `input` has a proper `label`
- [ ] Each `form` is `aria` labelled properly to make it a landmark
- [x] Every `img` has a unique `alt` (if applicable, get points if no image)
- [ ] All colors have a AAA difference
  - https://color.a11y.com can check your site for you!
- [x] All buttons look like buttons, all links look like links

### README (4)

- [ ] Includes a README.md file
- [ ] The README file describes the purpose and audience for the application
- [ ] The README file describes the user stories 
- [ ] The README file include screenshots of the final project
