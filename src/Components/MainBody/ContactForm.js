import Button from "../../utils/Button";
import Input from "../../utils/Input";


function ContactToAgentForm() {
    return ( 
        <form className="border-2 h-max  p-10 flex flex-col justify-center items-center gap-4">
            <div className="bg-agent h-28 w-28 bg-cover bg-center rounded-full"></div>
            <h2 className="font-semibold text-lg">David Warner</h2>
            <p>Chief Marketing Officer</p>
            <Input type="text" placeholder="Name" required/>
            <Input type="email" placeholder="Email" required/>
            <Input type="text" placeholder="Contact No." required/>
            <textarea type="" placeholder="Message" rows="4" className="p-4 bg-form-color focus:outline-none focus:border focus:border-blue-400  w-full"/>
            <Button type="submit" className=" py-3 px-8 ">Send message</Button>
        </form>
     );
}

export default ContactToAgentForm;