import React from 'react'

// https://developers.deepgram.com/blog/2021/11/sending-audio-files-to-expressjs-server/

// Test to sends audio to server
const PostAudio = () => {
  return (
    <div>
        <form encType="multipart/form-data" action="http://localhost:3001/audioUpload" method="POST">
            <label htmlFor="file-upload">Select file:</label>
            <input id="file-upload" type="file" name="file"/>
            <input type="submit" value="POST to server"></input>
        </form>
        {/* <form>
            <label for="file">Select files</label>
            <input id="file" type="file" name="file" />
            <input type="submit" value="POST to server"></input>
        </form> */}
    </div> 
  );
}

export default PostAudio;



// const fetch_audio = () => {
//     const form = document.querySelector('form');
//     const fileInput = document.getElementById('file');
//     const formData = new formData();
//     formData.append('username', 'Sandra Rodgers');
//     formData.append('files', file);

//     const options = {
//         method: 'POST',
//         mode: 'cors',
//         // headers: { 'Content-Type': 'application/json' },
//         body: formData,
//     };
//     fetch(`http://localhost:3001/upload_files`, options)
//         .then(res => console.log(res))
//         .catch((err) => ('Error occurred', err));
// }