import logoImage from "../assets/Logo.png";

export default function Logo() {
    return (
        <img
            src={logoImage}
            alt="Satin Beauty logo"
            className="h-12 w-12 rounded-full object-cover"
        />
    );
}