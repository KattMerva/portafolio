import Button from "./ui/Button.tsx";

export default function Footer() {
    return (
    <footer className="bg-softPink">
        <section className="bg-white rounded-t-4xl pt-16 pb-8">
            <div className="grid gap-4">

                <div>
                    <Button>contactame</Button>
                </div>
            </div>
            <div className="container mx-auto">
                <p className="text-center w-full">© {new Date().getFullYear()} Katt Mercado. Made with ♥️ and code.</p>
            </div>
        </section>
    </footer>
    );
}