export const navBar = [
    { id: "get signal", title: "Get Signal" },
    { id: "help", title: "Help" },
    { id: "blog", title: "Blog" },
    { id: "developers", title: "Developers" },
    { id: "careers", title: "Careers" },
    { id: "donate", title: "Donate" },
    { id: "twitter", title: <i className="fa-brands fa-twitter"></i> },
    { id: "instagram", title: <i className="fa-brands fa-instagram"></i> },
    {
        id: "vietnamese",
        title: (
            <>
                <i className="fa-solid fa-globe"></i> Tiếng Việt
            </>
        ),
    },
]

export const footerLinks = [
    {
        title: "Organization",
        links: [
            { name: "Donate" },
            { name: "Careers" },
            { name: "Blog" },
            { name: "Terms & Privacy Policy" },
        ],
    },
    {
        title: "Download",
        links: [
            { name: "Android" },
            { name: "iPhone & iPad" },
            { name: "Window" },
            { name: "Mac" },
            { name: "Linux" },
        ],
    },
    {
        title: "Social",
        links: [{ name: "GitHub" }, { name: "Twitter" }, { name: "Instagram" }],
    },
    {
        title: "Help",
        links: [{ name: "Support Center" }, { name: "Community" }],
    },
]
