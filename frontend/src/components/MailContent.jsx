import React, { useEffect, useState } from 'react'

const MailContent = () => {

    const [subsList, setSubsList] = useState([]);
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem('user'))
    )

   const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/subscriber/getbyowner/'+currentUser?._id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setSubsList(data);
   }

   useEffect(() => {
     fetchUserData();
   }, [])
   

    const sendMail = (subject, content) => {
        subsList.forEach(async (subscriber) => {
            const res = await fetch('http://localhost:5000/mail/sendmail', {
                method: 'POST',
                body : JSON.stringify({
                    from: 'plugingenerator96@gmail.com',
                    to: subscriber.email,
                    subject,
                    html: content
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            if(res.status === 201) console.log('mail sent to '+subscriber.email);
        })
    }

    const trigger = () => {
        sendMail('some subject', '<h1>Mail Test</h1><button>Mail Content</button>')
    }

  return (
    <div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4>Mail Content</h4>
                        </div>
                        <div className="card-body">
                            {/* <form> */}
                                <div className="form-group mb-3">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" placeholder="Enter Subject" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Body</label>
                                    <textarea className="form-control" rows="5" placeholder="Enter Body"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Attachment</label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <button onClick={trigger} type="submit" className="btn btn-primary">Send</button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MailContent;