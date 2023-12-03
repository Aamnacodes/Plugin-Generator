import React, { useEffect, useState } from 'react'

const MailContent = () => {
    const defaultItem = () => {
        return {
            subject: '',
            mailBody: '',
        }
    }

    const [mailObject, setMailObject] = useState(defaultItem());
    const [subsList, setSubsList] = useState([]);
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem('user'))
    )

   const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/subscriber/getbyowner/'+currentUser?._id);
    const data = await res.json();
    setSubsList(data?.map((e) => e.email));
   }

   useEffect(() => {
     fetchUserData();
   }, [])
   

    const sendMail = (subject, content) => {
        subsList.forEach(async (mailId) => {
            const res = await fetch('http://localhost:5000/mail/sendmail', {
                method: 'POST',
                body : JSON.stringify({
                    from: 'plugingenerator96@gmail.com',
                    to: mailId,
                    subject,
                    html: content
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            if(res.status === 201) console.log('mail sent to '+mailId);
        })
    }

    const trigger = () => {
        sendMail(mailObject.subject, `<h1>Mail Test ABC</h1><span>${mailObject.mailBody}</span>`)
    }

    const onChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setMailObject((ps) => {
            return {
                ...ps,
                [name]: value,
            };
        })

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
                                    <input
                                        name="subject" 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Subject"
                                        onChange={onChange}
                                        value={mailObject.subject} 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Body</label>
                                    <textarea 
                                        name="mailBody"
                                        className="form-control" 
                                        rows="5" 
                                        placeholder="Enter Body"
                                        onChange={onChange}
                                        value={mailObject.mailBody}  >
                                    </textarea>
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