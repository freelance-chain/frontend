import { Link } from "react-router-dom"
import { services } from "../../mock_data"

const Services = () => {
    return (
        <div className="w-full flex justify-center items-center lg:mt-16">
            <div className="lg:w-3/4 flex flex-col">
                <div className="">
                    <h1 className="font-serif text-3xl"> Popular Services </h1>
                </div>
                <div className="w-full flex mt-4 lg:space-x-4">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.title}`}
                            className="relative w-full lg:w-1/3 overflow-hidden rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                            style={{ height: '18rem' }}
                        >
                            <img
                                src={service.imageUrl}
                                alt={service.id}
                                className="w-full h-full object-cover rounded-lg "
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                            >
                                <h1 className="text-white font-bold">{service.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
