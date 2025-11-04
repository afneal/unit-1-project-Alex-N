

function Footer() {
    let thisYear = new Date().getFullYear();
    return (
        <footer>
            <div>
                <p>&copy; {thisYear} Alexandria Neal</p>
            </div>

        </footer>

    )
}

export default Footer;