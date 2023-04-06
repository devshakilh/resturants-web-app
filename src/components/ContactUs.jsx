import React from 'react';


const ContactUs = () => {

    return (
        <div className=" mt-40 h-screen bg-testimonial px-12 flex ">
            <div className="m-auto flex-grow max-w-lg">
                <h1 className="text-4xl font-bold text-gray-800 text-center bg-green-300 rounded py-4 mb-8">Contact</h1>
                <form

                >
                    <form className="flex flex-col text-lg">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="flex flex-col text-green-100 ">
                            <label>Name:</label>
                            <input type="name" id="name" name="name" placeholder="Name" className="pl-2 rounded py-2 bg-green-50 text-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700" />
                            <div className="bg-red-300 text-gray-800 ml-1 px-1 max-w-max"> </div>
                        </div>

                        <div className="flex flex-col text-green-100 mt-4">
                            <label>Email Address:</label>
                            <input type="email" id="email" name="email" placeholder="Email Address" className="pl-2 py-2 bg-green-50 rounded text-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700" />
                            <div className="bg-red-300 text-gray-800 ml-1 px-1 max-w-max"></div>
                        </div>


                        <div className="flex flex-col text-green-100 mt-4">
                            <label>Message:</label>
                            <input as="textarea" id="message" name="message" placeholder="Message" className="pl-2 py-2 bg-green-50 text-gray-800 rounded focus:outline-none focus:ring-4 focus:ring-gray-700" />

                        </div>

                        <button className="bg-green-300 text-gray-800 rounded-xl mx-8 text-center py-4 text-2xl mt-8 transistion-all hover:bg-green-400 " type="submit">Submit</button>
                    </form>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;