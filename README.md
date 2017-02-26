# file-input-list
## summary
- npm_package

https://www.npmjs.com/package/input-file-list

- main file

lib/InputFileList.js

## usage
### import node module
`import InputFileList from 'input-file-list'`

### set url props
```
<InputFileList
  file_urls=[list of file urls]
  file_root_path=[API_path to get image urls]
  onUploadFileCallBack=[callback function to get file urls]
  onClickCloseCallBack=[callback function close btn pushed]
/>
```

### terms of file_root_path
follow RoR Convention(COC)

ex
index_path: GET images/index
update_path: POST images/create

