import Prompt from "@/models/prompt";
import { connectToDb } from "@/utils/db";

export const GET = async (request, {params}) => {
    console.log(params.id)
    try{
        connectToDb();

        let prompts = await Prompt.find({ creator: params.id }).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200})
    } catch(e){
        return new Response('Could not fetch posts for user', {status: 500})
    }
}