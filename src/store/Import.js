export const IMPORT_FILES = 'IMPORT_FILES'
export const PREVIEW_FILES = 'PREVIEW_FILES'
export const SELECT_FILE = 'SELECT_FILE'

const initialState = { file: '', import: false }

export const actionCreators = {
  onImportFiles: () => ({ type: IMPORT_FILES }),
  onPreviewFiles: files => ({ type: PREVIEW_FILES, files }),
  onSelectFile: file => ({ type: SELECT_FILE, file })
}

export const reducer = (state, action) => {
  state = state || initialState
  switch (action.type) {
    case IMPORT_FILES: 
      return [ ...state ]
//    case PREVIEW_FILES:
//      return [ ...state, action.files.map( file => ({file: file, import: false})) ]    
//    case SELECT_FILE:
//      return [ ...state, ({ file : action.file, import : true })]
    default:
      return state
  }
}
