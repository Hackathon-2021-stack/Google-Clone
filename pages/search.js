import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import SearchResualts from "../components/SearchResualts"
import { API_KEY, CONTEXT_KEY } from "../keys"
import { Response } from "../Response"

const Search = ({results}) => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </Head>

            {/* Header */}
            <Header/>

            {/* Search Resualt */}
            <SearchResualts results={results}/>

        </div>
    )
}

export default Search

export async function getServerSideProps (context){
    const useDummyData = false
    const startIndex = context.query.start || "0"
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())
    // pass the result
    return {
        props:{
            results: data
        }
    }
}
