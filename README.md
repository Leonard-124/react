
# REACT APP

The react App is a responsive React web application designed to allow users to select an appropriate skip for hire based on various criteria. It uses a pre-defined dataset and includes a clean UI/UX built with standard CSS  The application is compatible across mobile and desktop browsers.

---

## Features

* Navigation bar showing steps in the hiring process
* List of skips rendered from static JSON data
* Image display for each skip
* Skip selection functionality with visual feedback
* Footer summarizing selected skip with pricing and terms
* Buttons for navigation (Back / Continue)

---

## File Structure

```
combined-selector-app/
├── public/
│   └── images/
│       ├── skip4.jpg
│       ├── skip6.jpg
│       └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── package.json
├── README.md
```

---

## Data

The skip data is hardcoded in the `App.js` file:

```js
const skips = [
  { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 278, vat: 20, postcode: "NR32", allowed_on_road: true, allows_heavy_waste: true },
  ...
];
```

---

## Components

### `Navbar`

Displays navigation steps for the skip hiring process. It is static and indicates the current active step as "Select Skip".

### `SkipCard`

A reusable component for displaying skip details including:

* Size
* Hire period
* Pricing (with VAT calculation)
* Allowed on road / Allows heavy waste flags
* A button to select a skip (which changes text to "Selected" when active)

### `Footer`

Displays a summary of the selected skip using data from the state:

* Informational disclaimer
* Skip size
* Final price
* Hire period
* Navigation buttons (currently static)

---

## Styling

* All styles are defined in `App.css`
* Responsive design using CSS Flexbox and grid techniques
* Skip images are displayed responsively and styled
* Navigation and footer styled to match the original design screenshot

---

## How It Works

1. The app loads and renders the navigation bar and a list of skips.
2. Users can click a skip card to select it. Only one skip can be selected at a time.
3. When a skip is selected, its information is displayed in the footer with pricing and a summary.
4. The "Back" and "Continue" buttons are placeholders for future navigation logic.

---

## Setup Instructions

1. Clone or download the project directory.
2. Ensure Node.js and npm are installed.
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the application:

   ```bash
   npm start
   ```
5. Add your skip images to `public/images/` with filenames like `skip4.jpg`, `skip6.jpg`, etc.

---

## Customization

* To update skip data, modify the `skips` array in `App.js`
* To change images, replace or add new files in the `/public/images` folder
* Update text or structure in `App.js` for UI changes

---

## Dependencies

* React
* CSS (no utility frameworks like Tailwind)

---

## Notes

* The app does not use any back-end services
* All data is stored and rendered from within the app
* Image assets must be added manually to `public/images`

---

## License

Open-source and customizable for personal or commercial use.
