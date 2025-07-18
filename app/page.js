'use client'
import { Menu, MenuButton, MenuItem, MenuItems, Checkbox} from '@headlessui/react'
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from "react";
import './styles.css';

// Checkbox Component
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
//Radiobutton Component 
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

export default function Home() {
  return (
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Material-Inspired Design System</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    />
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Material-Inspired Design System
      </h1>
      {/* Colors Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Color Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <div
            className="p-4 rounded-lg font-bold"
            style={{ backgroundColor: "#4452E3", color: "#EEEEF3" }}
          >
           primary
          </div>
          <div
            className="p-4 rounded-lg font-bold"
            style={{ backgroundColor: "#61BDFF", color: "#202732" }}
          >
            Secondary
          </div>
          <div
            className="p-4 rounded-lg font-bold"
            style={{ backgroundColor: "#FF6161" }}
          >
             <span className="text-black">Error</span>
          </div>
          <div
            className="p-4 rounded-lg font-bold"
            style={{ backgroundColor: "#FFAB61" }}
          >
          <span className="text-black"> Warning </span>
          </div>
          <div
            className="p-4 rounded-lg font-bold"
            style={{ backgroundColor: "#44E399" }}
          >
          <span className="text-black">Success</span>
          </div>
          <div
            className="p-4 rounded-lg font-bold bg-[#F8F8F8] dark:bg-[#2E3031]"
            style={{ border: "1px solid #ddd" }}
          >
            Container Background
          </div>
          <div
            className="p-4 rounded-lg font-bold bg-[#EFF1F4] dark:bg-[#202122]"
            style={{ border: "1px solid #ddd" }}
          >
            Background
          </div>
        </div>
      </section>
      {/* Typography Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Typography</h2>
        <div className="space-y-4 bg-white dark:bg-[#2E3031] p-6 rounded-lg material-card">
          <h1 className="text-5xl">Headline 1</h1>
          <h2 className="text-4xl">Headline 2</h2>
          <h3 className="text-3xl">Headline 3</h3>
          <h4 className="text-2xl">Headline 4</h4>
          <p className="text-base">
            This is a paragraph of body text. It's used for long-form content.
            Roboto is a clean and legible font that works well for user
            interfaces.
          </p>
          <p className="text-sm text-gray-500">
            This is a smaller caption or helper text.
          </p>
          <blockquote className="border-l-4 border-[#4452E3] pl-4 italic">
            "This is a blockquote, perfect for highlighting a quote or important
            piece of information."
          </blockquote>
        </div>
      </section>
      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buttons</h2>
        <div className="space-x-4 bg-[#F8F8F8] dark:bg-[#2E3031] p-6 rounded-lg material-card">
          <button className="btn btn-primary py-2 px-4 rounded">Primary</button>
          <button className="btn btn-secondary py-2 px-4 rounded">
            Secondary
          </button>
          <button className="btn btn-tertiary py-1 px-4 rounded">Tertiary</button>
        </div>
      </section>
      {/* Form Elements Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Form Elements
        </h2>
        <div className="bg-[#F8F8F8] dark:bg-[#2E3031] p-6 rounded-lg material-card space-y-6">
          {/* Standard Text Input */}
          <input
            type="text"
            placeholder="Text Input"
            className="input-field w-full p-3"
          />
          {/* Text Input with Icon */}
          <div className="relative input-with-icon">
            <span className="icon icon-left">
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
              className="input-field w-full p-3 input-left-icon"
            />
          </div>
          {/* Text Area */}
          <textarea
            placeholder="Textarea"
            className="input-field w-full p-3 h-24"
            defaultValue={""}
          />
          <div className="flex items-center space-x-4">
            {/* Checkboxes */}
            <div className="flex items-center">
             <Checkbx> Checkbox </Checkbx>
            </div>
            {/* Radio Buttons */}
            <div className="">
              <RadioBtn></RadioBtn>
            </div>
          </div>
        </div>
      </section>
      {/* Dropdowns Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dropdowns</h2>
        <div className="bg-[#F8F8F8] dark:bg-[#2E3031] p-6 rounded-lg material-card">
          <div
            className="relative inline-block text-left"
            id="dropdown-container"
          >
            <Dropdown />
          </div>
        </div>
      </section>
      {/* Tags Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tags</h2>
        <div className="bg-[#F8F8F8] dark:bg-[#2E3031] p-6 rounded-lg material-card flex items-center space-x-3">
          <span className="inline-flex items-center rounded-full bg-[#E5E7FB] dark:bg-[#272E72] px-2 py-1 text-[#E7E8F2]] ring-inset">
            Primary
          </span>
          <span className="inline-flex items-center rounded-full bg-[#E4F4FF] dark:bg-[#214157] px-2 py-1 text-[#2F82BE] dark:text-[#E4F4FF] ring-inset">
            Secondary
          </span>
          <span className="inline-flex items-center rounded-full bg-[#FFEAD7] dark:bg-[#5E3918] px-2 py-1 text-[#DD7B26] dark:text-[#FFEAD7] ring-inset">
            Warning
          </span>
          <span className="inline-flex items-center rounded-full bg-[#D0F8E5] dark:bg-[#294538] px-2 py-1 text-[#294538] dark:text-[#D0F8E5] ring-inset">
            Success
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F0F3F6] dark:bg-[#525557] px-2 py-1 text-gray-600  dark:text-[#F8F8F8] ring-inset">
            Neutral
          </span>
        </div>
      </section>
      {/* Cards Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cards</h2>
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
            <button className="btn btn-primary py-2 px-4 rounded">Action</button>
          </div>
        </div>
      </section>
      {/* Alerts Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Alerts</h2>
        <div className="space-y-4">
          <div
            className="bg-[#D0F8E5] dark:bg-[#294538] border-l-4 border-[#32C983] text-[#294538] dark:text-[#D0F8E5] p-4 rounded-md"
            role="alert"
          >
            <p className="font-bold">Success</p>
            <p>This is a success message. Something good happened!</p>
          </div>
          <div
            className="dark:bg-[#5E3918] bg-[#FFEAD7] border-l-4 border-[#FFAB61] text-[#7B4B20] dark:text-[#FFAB61] p-4 rounded-md"
            role="alert"
          >
            <p className="font-bold">Warning</p>
            <p>This is a warning message. Be careful.</p>
          </div>
          <div
            className="bg-[#FFE8E8] dark:bg-[#652020] border-l-4 border-[#FF6161] text-[#802828] dark:text-[#FFE8E8] p-4 rounded-md"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>This is an error message. Something went wrong.</p>
          </div>
        </div>
      </section>
    </div>
</>
  );
}
