import { CloudClient, type Collection } from "chromadb";
import { DefaultEmbeddingFunction } from "@chroma-core/default-embed";
import 'dotenv/config'


interface KnowledgeData{
    id: string,
    document_name?: string,
    category: string,
    tags?: string[],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata?: any, 
    content: string
}

let client:CloudClient  | null=null
export function getClient(){
    if(!client){
         client=new CloudClient({
            tenant:process.env.CHROMA_TENANT as string,
            database:process.env.CHROMA_DATABASE as string,
            apiKey:process.env.CHROMA_API_KEY as string,
        })
    }

    return client
}

export const Collections=async (collectionName:string):Promise<Collection>=>{
        const res= await getClient().getOrCreateCollection({
            name:collectionName,
            embeddingFunction:new DefaultEmbeddingFunction()
        })
        return res
}


export const upsertData=async(collection:Collection, data:KnowledgeData[])=>{
    try {
         await collection.upsert({ 
            ids: data.map((d)=>d.id),
            documents:data.map((d)=>d.content),
            metadatas:data.map((d)=>d.metadata ? d.metadata : null),

        })
        console.log("upsert completed");
    } catch (error) {
        console.log("upsert failed");
        console.log(error);        
    }        
}   

export const queryKnowledge=async(collection:Collection, query:string, nResults:number)=>{

    const res=await collection.query({
        queryTexts:[query],
        nResults:nResults
    })
     return (res.documents[0] ?? []).filter(Boolean) as string[];
}

