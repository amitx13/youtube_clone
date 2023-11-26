const VideoCard = ({info}) => {
  const {snippet,statistics} = info;
  console.log(info);
  console.log(statistics.likeCount);
  console.log(snippet.title);
  console.log(snippet.channelTitle);
  console.log(snippet.publishedAt);
  const {url} = snippet.thumbnails.default;
  return (
    <>
    <div className="p-2 m-2  w-3/12">
    <img className="rounded-2xl w-full "src={url} alt="thumbnails" />
    <ul>
      <li className="font-bold py-2">{snippet.title}</li>
      <li>{snippet.channelTitle}</li>
      <li>{statistics.likeCount}</li>
      <li>{snippet.publishedAt}</li>
    </ul>
    </div>
    {/* <h1 className="p-2 m-2  w-2/12">h</h1> */}
    </>
  )
}
export default VideoCard