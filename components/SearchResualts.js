import NextButton from "./NextButton"

const SearchResualts = ({results}) => {
    return (
        <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="mt-3 mb-5 text-gray-600 text-md">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>

            {results.items.map((result) =>(
                <div className="max-w-xl mb-8" key={result.link}>
                    <div className="group">
                        <a href={result.link} className="text-sml">{result.formattedUrl}</a>
                        <a href={result.link}>
                            <h2 className="text-xl font-medium text-[#1d62d1] truncate group-hover:underline ">{result.title}</h2>
                        </a>
                    </div>
                        <p className="">{result.snippet}</p>
                </div>
            ))}
            <NextButton/>
        </div>
    )
}

export default SearchResualts
