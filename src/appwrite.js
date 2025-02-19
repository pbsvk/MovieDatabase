import {Databases, Client, Query, ID} from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);
export const updateSearchCount = async (searchTerm, movie) => {
    // 1. Use Appwrite SDK to check the search term exists in the Database
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ])

    // 2. If it does, update the count
        if (result.documents.length > 0){
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                Count: doc.Count+1,
            })
        }
    // 3. If it doesn't then, create a new doc with the search term count as 1.
        else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                Count : 1,
                movie_ID : movie.id,
                poster_URL: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }
    }
    catch (error) {
        console.log(error);
    }


}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("Count")
        ])

        return result.documents;
    }
    catch (error) {
        console.log(error);
    }
}