import { useEffect,useState } from "react";

const useComment = (videoId)=>{
    const [comment,setComment] = useState();
    useEffect(()=>{
        getComments(videoId);
    },[])

    async function getComments(videoId){
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=AIzaSyCX-_fo1DMJJxU0oavcGy-k0YIxEMmyN5E&videoId=${videoId}`)
        const json = await data.json();
        //console.log(json.items)
        setComment(json);
    }
    if (comment){
        return comment;
    }
    else{
        return undefined;
    }
    
}

export default useComment;