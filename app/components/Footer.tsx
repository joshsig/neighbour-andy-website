import './Footer.scss';
import Links from './Links';

export default function Footer() {
    return (
        <div className="footer">
            <Links />
            <p>© 2025 Neighbour Andy | All rights reserved.</p>
            <p>Site Design by <a href="https://joshsig.ca">JoshSig</a></p>
        </div>
    )
}