import { Github, Instagram, Linkedin, Mail, MapPin,  Phone, Send} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";




export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting]= useState(false);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting (true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500 );

    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? feel to reach out.
                I'm always open to descussing new opportunities. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6 ">{" "}Contact Information</h3>
                
                <div  className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Mail  className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mahigopani1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                mahigopani1@gmail.com 
                            </a>

                        </div>
                    </div>
                    {/* <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Phone  className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+919328947570" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 93289 47570
                            </a>

                        </div>
                    </div> */}
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <MapPin  className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium">Loccation</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Surat, Katargam
                            </a>
                        </div>
                    </div>     
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/mahi-gopani-b88523353?trk=contact-info">
                            <Linkedin />
                        </a>
                        <a href="https://github.com/Mahi12-Gopani">
                           <Github />
                        </a>
                    </div>
                </div> 
                </div>

                <div className="bg-card p-8 roundded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibolf mb-6">Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">your Name</label>
                            <input type="text" id="name" name="name requried" className=" w-full w-d px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Gopani Mahi..."/>
                        </div>

                        <div>
                            <label htmlFor="Email" className="block text-sm font-medium mb-2">your Email</label>
                            <input type="email" id="email" name="email requried" className=" w-full w-d px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Mahigopani@gmail.com"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">your message</label>
                            <textarea id="message" name="message requried" rows="4" className=" w-full w-d px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd Like to talk about..."></textarea>
                        </div>

                        <button type="submit" 
                        disabled={isSubmitting}
                        
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
         </div>
        </section>
    );
};