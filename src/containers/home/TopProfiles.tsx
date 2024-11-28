import { Link } from "react-router-dom"
import { popularFreelancers } from "../../mock_data"

const TopProfiles = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:mt-16">
            <div className="lg:w-3/4 flex flex-col">
                <div className="">
                    <h1 className="font-serif text-3xl font-semibold"> Popular Freelancers </h1>
                </div>
                <div className="w-full flex mt-4 lg:mt-8 justify-between">
                    {popularFreelancers.map((freelancer) => (
                        <Link
                            key={freelancer.id}
                            to={`/user/${freelancer.title}`}
                            className="flex flex-col justify-center items-center"
                        >
                            <img src={freelancer.profileImage} alt={freelancer.fullName} className="rounded-full w-32" />
                            <h1 className="font-roboto font-semibold mt-2 text-xl"> {freelancer.fullName} </h1>
                            <h1 className="font-roboto"> {freelancer.title} </h1>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProfiles