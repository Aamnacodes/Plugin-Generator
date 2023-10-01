import React from 'react'

const MailContent = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4>Mail Content</h4>
                        </div>
                        <div className="card-body">
                            <form>
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
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MailContent;