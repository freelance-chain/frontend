import { Link } from 'react-router-dom'

const clientLinks = [
    {
        title: "How to create a project",
        href: "/how-to-create"
    },
    {
        title: "Talent Marketplace",
        href: "/talent-marketplace"
    },
    {
        title: "Enterprise",
        href: "/enterprise"
    },
    {
        title: "What is the Smart Contract",
        href: "/what-smart-contract"
    },
    {
        title: "How-connect-metamask",
        href: '/how-connect-metamask'
    }
]

const freelancerLinks = [
    {
        title: "How to find work",
        href: "/how-find-work"
    },
    {
        title: "What is the Smart Contract",
        href: "/what-smart-contract"
    },
    {
        title: "How-connect-metamask",
        href: '/how-connect-metamask'
    },
    {
        title: "Find freelance jobs worldwide",
        href: '/jobs'
    }
]

const companyLinks = [
    {
        title: "About Us",
        href: '/about-us'
    },
    {
        title: "Help & Support",
        href: '/support'
    },
    {
        title: "Contact Us",
        href: "/contact-us"
    },
    {
        title: "Leadership",
        href: "/leadership"
    },
    {
        title: "Partners",
        href: "/partners"
    },
    {
        title: "Trust, Security & Safety",
        href: '/trust-and-safety'
    }
]

const Footer = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center lg:mt-16 lg:mb-8'>
            <div className='lg:w-3/4 lg:flex lg:flex-col bg-[#070707] text-white lg:p-24 rounded-lg'>
                <div className='lg:flex justify-around'>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-serif'> For Clients </h1>
                        <div className='mt-2 lg:mt-4'>
                            {clientLinks.map((link) => (
                                <Link to={link.href} className='flex flex-col mt-2'>
                                    <h1 className='text-sm font-roboto hover:underline'> {link.title} </h1>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-serif'> For Freelancers </h1>
                        <div className='mt-2 lg:mt-4'>
                            {freelancerLinks.map((link) => (
                                <Link to={link.href} className='flex flex-col mt-2'>
                                    <h1 className='text-sm font-roboto hover:underline'> {link.title} </h1>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-serif'> Company </h1>
                        <div className='mt-2 lg:mt-4'>
                            {companyLinks.map((link) => (
                                <Link to={link.href} className='flex flex-col mt-2'>
                                    <h1 className='text-sm font-roboto hover:underline'> {link.title} </h1>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:justify-between lg:mt-16'>
                    <div className='flex'>
                        <h1 className='font-roboto'> Follow Us </h1>
                        {/* Social Media Links */}
                    </div>
                    <div>
                        <h1 className='font-roboto'> Mobile App </h1>
                        {/* Mobile Apps links */}
                    </div>
                </div>
                <hr className='mt-4' />
                <div className='lg:flex lg:space-x-4 lg:mt-8'>
                    <h1 className='font-roboto'> © 2024 Freelance Chain </h1>
                    <Link to={'/privacy-policy'} className='hover:underline font-roboto'> Privacy Policy </Link>
                    <Link to={'/accessibility'} className='hover:underline font-roboto'> Accessibility </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer