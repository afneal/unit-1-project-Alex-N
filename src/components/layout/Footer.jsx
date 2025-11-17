

function Footer() {
    let thisYear = new Date().getFullYear();
    return (
        <footer>
            <div>
                <p>&copy; {thisYear} My Travel Planner</p>
            </div>

        </footer>

    )
}

export default Footer;