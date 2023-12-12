import React, { useEffect, useState, useRef  } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

const MailContent = () => {
    const defaultItem = () => {
        return {
            subject: '',
            mailBody: '',
            attachment: null,
            fileName: '',
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
    setSubsList(data?.length > 0 ? data?.map((e) => e.email) : []);
   }

   useEffect(() => {
     fetchUserData();
   }, [])   

    const sendMail = (subject, content) => {
        subsList.forEach(async (mailId) => {
            const unsubscribeLink = `http://localhost:5000/subscriber/unsubscribe/${currentUser?._id}`;
            const mailOptions = {
                from: 'plugingenerator96@gmail.com',
                to: mailId,
                subject,
                html:content,
                // text: `To unsubscribe, click here: ${unsubscribeLink}`,
                fileName: mailObject.fileName
            }
            const res = await fetch('http://localhost:5000/mail/sendmail', {
                method: 'POST',
                body : JSON.stringify({
                    from: 'plugingenerator96@gmail.com',
                    to: mailId,
                    subject,
                    html: `${content}<br/><br/><a href="${unsubscribeLink}">Unsubscribe</a>`,
                    fileName: mailObject.fileName,
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            fetchUserData();

            if(res.status === 201) 
            console.log('mail sent to '+mailId);
        })
        
        Swal.fire({
            icon: 'success',
            title: 'Mail Sent',
            text: 'Mail sent Succesfully to all Subscribers!✉️'
        });
    }

    const unsubscribe = (mailId) => {
        // Implement your unsubscribe logic here
        console.log('Unsubscribed: ' + mailId);
    }


    const trigger = () => {
        sendMail(mailObject.subject, `<h1>Mail Magnet</h1><span>${mailObject.mailBody}</span>`)
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

    const onFileUpload = (event) => {
        const formData = new FormData();
        formData.append("myFile", event.target.files[0]);
    
        console.log(event.target.files[0]);
        axios.post("http://localhost:5000/util/uploadfile", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        }); //I need to change this line
        setMailObject((ps) => {
            return {
                ...ps,
                attachment: event.target.files[0],
                fileName: event.target.files[0].name
            };
        })
    };
    // const onUploadFile = (e) =>{

    //     const { }
    //     console.log(filepath);
    //     setAttachment(e.target.files[0])
    // Add an unsubscribe link to the mail content body
    // const mailBodyWithUnsubscribe = `${mailObject.mailBody}<br/><br/><a href="unsubscribe">Unsubscribe</a>`;

  return (
    <div className='bg-light' style={{height:'100vh', width:'100%'}}>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="shadow top card mt-5">
                        <div className="card-header">
                            <p className='display-6 fst-italic'>Mail Content</p>
                        </div>
                        <div className="card-body">
                            {/* <form> */}
                                <div className="fw-bold form-group mb-3">
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
                                <div className="fw-bold form-group mb-3">
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
                                <div className="fw-bold form-group mb-3">
                                    <label>Attachment</label>
                                    <input
                                        name="attachment"
                                        type="file"
                                        className="bg-light form-control"
                                        onChange={onFileUpload}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <button onClick={trigger} type="submit" className="btn fw-bold btn-primary">
                                        Send
                                    </button>
                                </div>
                                     {/* <label>Attachment</label>
                                    <input type="file" className="bg-light form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <button onClick={trigger} type="submit" className="btn fw-bold btn-primary">Send</button>
                                </div>  */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>            
                );
      }

export default MailContent;