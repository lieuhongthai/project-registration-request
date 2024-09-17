import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { convertToHTML } from 'draft-convert';
import { ContentState, EditorState } from 'draft-js';
import React, { useEffect, useRef, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Theme } from '@mui/material/styles';
import { Palette } from '@mui/material/styles/createPalette';

interface IProps {
  value: string;
  label: string;
  placeholder: string;
  onChange: (...event: any[]) => void;
  error?: boolean;
  loading: boolean;
}
const EditorPartition = ({ label, placeholder, value, onChange, error, loading }: IProps) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createWithContent(ContentState.createFromText(value)));
  const [isFocus, setFocus] = useState(false);
  const editRef = useRef<Editor>(null);

  const focusCallback = () => {
    setFocus(true);
  };

  const blurCallback = () => {
    setFocus(false);
  };

  const borderStyle = isFocus ? (error ? '2px solid red' : '2px solid #787EFF') : error ? '1px solid red' : '1px solid #DDDDE2';

  useEffect(() => {
    onChange(convertToHTML(editorState.getCurrentContent()));
  }, [editorState]);

  return (
    <Box>
      <Typography
        onClick={() => {
          editRef.current?.focusEditor();
        }}
        sx={{
          color: error ? 'red' : '#636578',
        }}
      >
        {label}
      </Typography>
      <Card
        sx={{
          border: borderStyle,
        }}
      >
        <CardContent>
          <Editor
            readOnly={loading}
            editorState={editorState}
            onEditorStateChange={setEditorState}
            placeholder={placeholder}
            ref={editRef}
            onFocus={focusCallback}
            onBlur={blurCallback}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditorPartition;
