// components/Footer.tsx
// (Implementation of the newsletter form logic will come later)
export const Footer = () => {
    return (
        <footer className="bg-text-dark text-white p-8 mt-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">We Social Workers UK</h3>
                    <p className="text-gray-300">A community for UK and International social workers.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="your.email@example.com" className="w-full p-2 rounded text-text-dark"/>
                        <button className="w-full bg-accent text-text-dark font-bold mt-2 p-2 rounded hover:bg-opacity-80">Subscribe</button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    {/* Add social media icons here */}
                </div>
            </div>
        </footer>
    );
};
