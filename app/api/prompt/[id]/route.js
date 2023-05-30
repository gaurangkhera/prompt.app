import Prompt from "@/models/prompt";
import { connectToDb } from "@/utils/db";

export const GET = async (request, { params }) => {
    try{
        await connectToDb();

        let prompt = await Prompt.findById(params.id).populate('creator');

        return new Response(JSON.stringify(prompt), {status: 200})
    } catch(e){
        return new Response('error pls fix gaurang dum dum', {status: 500})
    }
}

export const PATCH = async (request, { params }) => {
    try {
        await connectToDb();

        const { prompt, tag } = await request.json();

        let promptObj = await Prompt.findById(params.id).populate('creator');

        promptObj.prompt = prompt;
        promptObj.tag = tag;

        await promptObj.save();

        return new Response('updated', { status: 200 });
    } catch (e) {
        return new Response('couldn\'t update prompt', { status: 500 });
    }
}


export const DELETE = async (request, {params}) => {
    try{
        await connectToDb();

        let prompt = await Prompt.findByIdAndDelete(params.id);

        return new Response('deleted', {status: 200});
    } catch(e){
        return new Response(' err', {status: 500})
    }
}