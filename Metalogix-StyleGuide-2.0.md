# Metalogix Styling Guide v.2.0

This documentation provides detailed styling guidelines and code snippets for all website components. Follow these specifications exactly to maintain consistency across the entire website.

## Core Design Principles

- **Accuracy**: Follow the design specification as is without modification. Rely on the html and css snippets for components.
- **Consistency**: Maintain the use of the same components, colors, and typography across the system
- **Responsiveness**: Full adaptation to all screen sizes from mobile, tablet, and desktop

Please use TailwindCSS, Headless UI 

## Color Usage Rules

### Guidelines

**STRICTLY use `Primary` (#4452E3) and `Secondary` (#61BDFF) colors for:**
- Primary CTA's. What you want the user to notice first
- Branding elements

**What not to Use `Primary` (#4452E3) and `Secondary` (#61BDFF) colors for**
- Body and Header text
- Errors, Warning, Success statuses
- Large white sections i.e backgrounds and containers
-  General Layout

**Status colors (Error, Warning, Success) are ONLY for:**
- Alerts and status messages
- Badges indicating specific states
- Error/success feedback

**What not to use Status colors (Error, Warning, Success) for:**
- Placeholder images
- Headers and Text
- Links, CTA's
- Large white sections i.e backgrounds and containers
- General Layout

## Color Palette

### Core Colors
```css
primary: #4452E3;
secondary: #61BDFF;
body-text: #212327;
```

### Status
```css
error-red: #FF6161;
warning-orange: #FFAB61;
success-green: #44E399;
```

### Base Theme

Light Mode background color: #EFF1F4
Light Mode Container color:  #FFFFFF
Dark Mode background color: #202122
Dark Mode Container color:  #2E3031


## Typography

All text uses **'Open Sans'** font family.

### H1

```
<h1 className="text-5xl font-bold text-[#202732] dark:text-[#F4F7F9]">Headline 1</h1>
```
### H2
```
<h2 className="text-4xl font-bold text-[#394352] dark:text-[#E9EEF0]">Headline 2</h2>
```
### H3
```
<h3 className="text-3xl font-bold text-[#566377] dark:text-[#E9EEF0]">Headline 3</h3>
```
### H4
```
<h4 className="text-2xl font-bold text-[#6B7788] dark:text-[#D4DBDF]">Headline 4</h4>
```
### Body Text
```
<p className="text-base text-[#6B7788] dark:text-[#D4DBDF]">
```
### Caption Text
```
<p className="text-sm text-gray-500 dark:text-[#8891EF]"> 
```

### Blockquote
```
<blockquote className="border-l-4 border-[#4452E3] pl-4 italic text-[#6B7788] dark:text-[#D4DBDF]">
            "This is a blockquote, perfect for highlighting a quote or important
            piece of information."
          </blockquote>
```

## Buttons

All buttons use uppercase text, bold weight, 4px border-radius, and hover transitions, and have dark and light mode versions

### Primary Button
```
<button className="btn btn-primary font-bold py-2 px-4 rounded bg-[#4452E3] text-[#EEEEF3] dark:bg-[#4452E3] dark:text-[#EEEEF3] hover:bg-[#3944B9] dark:hover:bg-[#3944B9]">Primary</button>
```
### Secondary Button
```
<button className="btn btn-secondary font-bold py-2 px-4 rounded bg-[#61BDFF] text-[#202732] dark:bg-[#61BDFF] text-[#202732] hover:bg-[#3E98D8] dark:hover:bg-[#3E98D8]">Secondary </button>
```
### Tertiary Button
```
<button className="btn btn-tertiary py-1 px-4 rounded font-bold bg-[#E4F4FF] text-[#202732] dark:bg-[#273743] dark:text-[#3E98D8] hover:bg-[#C0D9EB] dark:hover:bg-[#2E5672]">Tertiary</button>
```
## Form Elements

All form inputs have 4px border-radius.

### Text Input
```
<input
            type="text"
            placeholder="Text Input"
            className="border focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded transition-colors duration-300 ease-in-out w-full p-3 border-[#6b7788] bg-[#f8f8f8] dark:border-[#B4BCC7] dark:bg-[#202122]"
          />
```
### Text field with Icon
```
<div className="relative input-with-icon">
            <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Username"
              className="border focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded transition-colors duration-300 ease-in-out w-full p-3 border-[#6b7788] bg-[#f8f8f8] dark:border-[#B4BCC7] dark:bg-[#202122]  ps-10"
            />
          </div>
```
### Text Area
```
 <textarea
            placeholder="Textarea"
            className="input-field w-full p-3 h-24 border focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded transition-colors duration-300 ease-in-out w-full p-3 border-[#6b7788] bg-[#f8f8f8] dark:border-[#B4BCC7] dark:bg-[#202122]"
            defaultValue={""}
          />
```
### Checkbox
**HTML**
```
function Checkbx() {
  const [enabled, setEnabled] = useState(true)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-md bg-white/10 p-1 ring-1 dark:ring-white/15 ring-[#B4BCC7]
      ring-inset focus:not-data-focus:outline-none data-checked:dark:bg-[#4452E3] data-checked:bg-[#4452E3] data-focus:outline 
      data-focus:outline-offset-2 data-focus:outline-white"
    >
      <CheckIcon className="hidden size-4 fill-white group-data-checked:block" />
    </Checkbox>
  )
}
```
### Radio Button
**HTML**
```
const plans = ['Radio Button 1','Radio Button 2']

function RadioBtn() {
  let [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="flex gap-2">
      {plans.map((plan) => (
        <Field key={plan} className="flex items-center gap-2">
          <Radio
            value={plan}
            className="group flex size-5 items-center justify-center rounded-full border bg-white dark:border-[#73839A] border-[#B4BCC7] dark:bg-[#202122] data-checked:bg-[#4452E3]"
          >
            <span className="invisible size-2 rounded-full bg-white dark:bg-[#DBDFFF] group-data-checked:visible" />
          </Radio>
          <Label>{plan}</Label>
        </Field>
      ))}
    </RadioGroup>
  )
}
```
### Dropdown
```
function Dropdown() {
  return (
    <Menu>
      <MenuButton className ="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-[#979A9D] shadow-sm px-4 py-2 
      bg-white text-sm font-medium hover:bg-gray dark:hover:bg-[#353738] hover:-50 focus:outline-none
      dark:bg-[#202122]">
        My account
        <svg
              xmlns="http://www.w3.org/2000/svg"
               width={16}
               height={16}
               fill="currentColor"
               className="size-3 ml-1 mt-[6px] text-[#566377]"
              viewBox="0 0 16 16"
             >
               <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
       </MenuButton>
      <MenuItems
      anchor="bottom left"
      className="absolute left-0 mt-2 w-32 rounded text-[#B4BCC7]-md shadow-lg bg-white ring-1 ring-[#c8cdd5] ring-opacity-5 outline-hidden dark:bg-[#4C4F50] "
      >
        <MenuItem>
          <a className="dark:text-[#] block px-4 py-2 text-sm hover:bg-[#F8F8F8] dark:hover:bg-[#787A7D] dark:border-[#979A9D]" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block px-4 py-2 text-sm hover:bg-[#F8F8F8] dark:hover:bg-[#787A7D]" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block px-4 py-2 text-sm hover:bg-[#F8F8F8] dark:hover:bg-[#787A7D]" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
```
## Cards

Cards group related information with rounded corners and images.

### Basic Card
```
<div className="material-card bg-[#F8F8F8] dark:bg-[#2E3031] rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x300/4452E3/white?text=Card+Image"
            alt="Placeholder Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Card Title</h3>
            <p>
              This is the content of the card. It provides a brief description or
              summary of the topic.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button className="btn btn-primary font-bold py-2 px-4 rounded bg-[#4452E3] text-[#EEEEF3] dark:bg-[#4452E3] dark:text-[#EEEEF3] hover:bg-[#3944B9] dark:hover:bg-[#3944B9]">Action</button>
          </div>
```
## Tags / Badges

Small, rounded labels for categorization.

### Primary Tag
**HTML**
```
 <div className="bg-[#F8F8F8] dark:bg-[#2E3031] p-6 rounded-lg material-card flex items-center space-x-3">
          <span className="inline-flex items-center rounded-full bg-[#E5E7FB] dark:bg-[#272E72] px-2 py-1 text-[#E7E8F2]] ring-inset">
            Primary
          </span>
```
### Secondary Tag
```
<span className="inline-flex items-center rounded-full bg-[#E4F4FF] dark:bg-[#214157] px-2 py-1 text-[#2F82BE] dark:text-[#E4F4FF] ring-inset">
            Secondary
          </span>
```

### Warning Tag
**HTML**
```
<span class="inline-flex items-center rounded-full bg-[#FFE8E8] px-2 py-1 text-[#802828] ring-inset">Warning</span>
```

### Success Tag
```
<span className="inline-flex items-center rounded-full bg-[#D0F8E5] dark:bg-[#294538] px-2 py-1 text-[#294538] dark:text-[#D0F8E5] ring-inset">
            Success
          </span>
```
### Neutral Tag
**HTML**
```
<span className="inline-flex items-center rounded-full bg-[#F0F3F6] dark:bg-[#525557] px-2 py-1 text-gray-600  dark:text-[#F8F8F8] ring-inset">
            Neutral
```

## Alerts

Contextual feedback messages with colored left borders.

### Success Alert
```
<div
            className="bg-[#D0F8E5] dark:bg-[#294538] border-l-4 border-[#32C983] text-[#294538] dark:text-[#D0F8E5] p-4 rounded-md"
            role="alert"
          >
            <p className="font-bold">Success</p>
            <p>This is a success message. Something good happened!</p>
          </div>
```
### Warning Alert
```
<div
            className="dark:bg-[#5E3918] bg-[#FFEAD7] border-l-4 border-[#FFAB61] text-[#7B4B20] dark:text-[#FFAB61] p-4 rounded-md"
            role="alert"
          >
            <p className="font-bold">Warning</p>
            <p>This is a warning message. Be careful.</p>
          </div>
```
### Error Alert
**HTML**
```
<div
            className="bg-[#FFE8E8] dark:bg-[#652020] border-l-4 border-[#FF6161] text-[#802828] dark:text-[#FFE8E8] p-4 rounded-md"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>This is an error message. Something went wrong.</p>
          </div>
```
## Icons

### Icon Requirements

**CRITICAL RULES:**
- **Source**: All icons MUST be from [Bootstrap Icons](https://icons.getbootstrap.com/) library only
- **Style**: Icons MUST be stroke (outline) version, NOT filled
- **Implementation**: Use inline SVGs for better performance and styling control
- **Usage**: Icons should complement UI elements functionally

### Icon Implementation Example
```html
<!-- Correct: Bootstrap Icons stroke version -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.011L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>

<!-- With color styling -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-[#4452E3]" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.011L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
