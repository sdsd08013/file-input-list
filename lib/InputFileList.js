import FileInput from 'react-file-input';

export default class InputFileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file_urls: this.props.file_urls
    };
  }
  getFileIndex() {
    $.ajax({
      url           : this.props.file_root_path,
      dataType      : 'json',
      type          : 'GET',
      success       : function(file_urls) {
        this.setState({file_urls: file_urls})
        this.props.onUploadFileCallBack(file_urls);
      }.bind(this),
      error         : function(xhr, status, err) {
      }.bind(this)
    });
  }
  uploadFile(e){
    var formdata = new FormData();
    formdata.append('file', e.target.files[0]);
    $.ajax({
      url           : this.props.file_root_path,
      dataType      : 'json',
      type          : 'POST',
      data          : formdata,
      contentType   : false,
      processData   : false,
      success       : function(success) {
        this.getFileIndex();
      }.bind(this),
      error         : function(xhr, status, err) {
      }.bind(this)
    });
  }

  clickCloseButton(){
    this.props.onClickCloseCallBack(this.state.selectedComponentId);
  }

  render() {
    return (
      <div className="image-gallery-form">
        <div className="col8">
          <FileInput name="coverImage"
          accept=".png,.gif"
          placeholder="＋Upload"
          className="image-gallery-file"
          onChange={this.uploadFile.bind(this)}
          />
        </div>
        <div className="col2">
          <input type="submit" value="submit" className="image-gallery-upload-button" onClick={this.clickCloseButton.bind(this)}/>
        </div>
      </div>
    )
  }
};
