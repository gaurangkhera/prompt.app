import Prompt from "@/models/prompt";
import { connectToDb } from "@/utils/db";

export const GET = async (request) => {
    try{
        await connectToDb()

        let prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), {status: 200})
    }catch(e){
        return new Response('Could not fetch prompts', {status: 500})
    }
}