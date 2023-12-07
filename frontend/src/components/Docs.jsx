import React ,{ useState}from 'react';


const Docs = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const getPluginCode = () => {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
<div id="plugin" owner-id="${currentUser._id}"></div>
<script src="http://localhost:5000/index.js"></script>`
    }
    /**
     * Copies the plugin link to the clipboard.
     */
    const copyLink = () => {
        const link = getPluginCode();
        navigator.clipboard.writeText(link)
            .then(() => {
                console.log('Link copied to clipboard:', link);
            })
            .catch((error) => {
                console.error('Failed to copy link:', error);
            });
    };

    return (
        <div style={{ padding: '75px' ,background: "linear-gradient(to bottom, #7d8c9248, #7b89b0)",height:"100vh"}}>
            <h1 style={{padding :'25px', textAlign:'center'}}>Get Started with Our Newsletter Plugin Generator</h1>
            <h3>Integrate a newsletter component into your website seamlessly using our CDN without any build steps.</h3>
            <p>Place the &lt;link&gt; tag in the &lt;head&gt; for our CSS, and the &lt;script&gt; tag for our JavaScript bundle before the closing &lt;/body&gt;</p>
            <p>Copy the link below:</p>
            <div style={{ overflow: 'auto', maxHeight: '200px' }}>
                <textarea className='form-control'
                    value={getPluginCode()} rows={5}
                    readOnly
                    style={{ width: '85%', height: '100%' }}
                />
            </div>
            <button onClick={copyLink}>Copy Link</button>
        </div>
    );
};

export default Docs;
