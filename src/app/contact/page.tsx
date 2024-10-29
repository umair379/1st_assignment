import Image from "next/image";
import { resolve } from "path";

export default async function Contact() {

  await new Promise((resolve)=>{
    setTimeout(resolve,5000)
  })

  return (
    <div>
      <h1 className="font-semibold text-blue-900 text-4xl ml-2 text-center">Contact-US</h1>
      <div className="contact-div">
        <form action="/sumbit.html" className="pl-11">
          <fieldset className="p-4 border-2 border-blue-600 w-6 rounded-lg">
            <legend>Your Details:</legend>
            <p>
              Name:
              <input
                type="text"
                name="fullName"
                className="border-2 border-blue-900"
              />
            </p>
            <p>
              Email:
              <input
                type="email"
                name="email"
                className="border-2 border-blue-900"
              />
            </p>
          </fieldset>

          <br />

          <fieldset className="p-4 border-2 border-blue-600 w-6 rounded-lg">
            <legend>Your Review:</legend>
            <p>
              How did you hear about us?
              <select name="options" className="ml-2 p-1 border-2 border-black">
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="tv">TV</option>
                <option value="newspaper">News paper</option>
              </select>
            </p>
            <p>Would you visit again?</p>
            <p>
              <label>
                <input type="radio" name="visit" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="visit" value="no" />
                No
              </label>
              <label>
                <input type="radio" name="visit" value="maybe" />
                Maybe
              </label>
            </p>

            <p>Comments:</p>
            <textarea name="text" placeholder="Comments" className="border-2 border-blue-900 bg-slate-300"></textarea>
          </fieldset>
          <p>
            <input type="checkbox" name="checkbox" />
            Sign me up for email updates
          </p>
          <button className="mt-2 pl-2 pr-2 border-2 border-blue-900 rounded-lg">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
