import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, FormControl, FormHelperText, styled, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';
import SellIcon from '@mui/icons-material/Sell';
import EditorPartition from './EditorPartition';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

interface IFormInputs {
  department: string;
  projectName: string;
  purpose: string;
  scopeOfUse: string;
  demand: string;
  contactInformation: string;
  implementationDate: Date;
}

interface IFileResponse {
  filename: string;
  originalName: string;
}

const defaultValues = {
  department: '',
  projectName: '',
  purpose: '',
  scopeOfUse: '',
  demand: '',
  contactInformation: '',
  implementationDate: new Date(),
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const validationSchema = yup.object({
  department: yup.string().required('This field is required'),
  projectName: yup.string().required('This field is required'),
  purpose: yup
    .string()
    .matches(/^(?!<p><\/p>$).*/, 'This field is required')
    .required(),
  scopeOfUse: yup
    .string()
    .matches(/^(?!<p><\/p>$).*/, 'This field is required')
    .required(),
  demand: yup
    .string()
    .matches(/^(?!<p><\/p>$).*/, 'This field is required')
    .required(),
  contactInformation: yup
    .string()
    .matches(/^(?!<p><\/p>$).*/, 'This field is required')
    .required(),
  implementationDate: yup.date().required('This field is required'),
});

const CreateFormPartition = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(validationSchema), defaultValues });

  const [files, setFiles] = useState<FileList | null>();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: IFormInputs) => {
    try {
      setLoading(true);
      let file: IFileResponse[] = [];
      if (files) {
        file = await handleUploadFiles(files);
      }
      await axios.post('/api/project-registration', { ...data, attachments: file });
      setLoading(false);
      toast.success('Create request successfully!');
      navigate('/project-registration');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadFiles = async (files: FileList): Promise<IFileResponse[]> => {
    const data = new FormData();
    for (let i = 0; i < files?.length; i++) {
      data.append('files', files[i]);
    }

    try {
      const result = await axios.post('/api/file-upload/files', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        maxBodyLength: Infinity,
      });

      return result.data;
    } catch (error) {
      console.log(error);
    }

    return [];
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='department'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='申請部門'
                      onChange={onChange}
                      placeholder='申請部門'
                      error={Boolean(errors.department)}
                      aria-describedby='validation-basic-first-name'
                      helperText={errors.department?.message}
                      disabled={isLoading}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='projectName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='プロジェクト名'
                      onChange={onChange}
                      placeholder='プロジェクト名'
                      error={Boolean(errors.projectName)}
                      aria-describedby='validation-basic-first-name'
                      helperText={errors.projectName?.message}
                      disabled={isLoading}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='purpose'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <EditorPartition
                      label='開発背景/目的'
                      placeholder='開発背景/目的'
                      value={value}
                      onChange={onChange}
                      error={!!errors.purpose}
                      loading={isLoading}
                    />
                  )}
                />
                {errors.purpose && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
                    {errors.purpose.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='scopeOfUse'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <EditorPartition
                      label='利用範囲'
                      placeholder='利用範囲'
                      value={value}
                      onChange={onChange}
                      error={!!errors.scopeOfUse}
                      loading={isLoading}
                    />
                  )}
                />
                {errors.scopeOfUse && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
                    {errors.scopeOfUse.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='demand'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <EditorPartition label='要求' placeholder='要求' value={value} onChange={onChange} error={!!errors.demand} loading={isLoading} />
                  )}
                />
                {errors.demand && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
                    {errors.demand.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='contactInformation'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <EditorPartition
                      label='関係者・問合せ先'
                      placeholder='関係者・問合せ先'
                      value={value}
                      onChange={onChange}
                      error={!!errors.contactInformation}
                      loading={isLoading}
                    />
                  )}
                />
                {errors.contactInformation && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
                    {errors.contactInformation.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <Controller
                  name='implementationDate'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={value}
                      id='basic-input'
                      onChange={onChange}
                      placeholderText='Click to select a date'
                      popperPlacement={'bottom-start'}
                      customInput={
                        <TextField
                          value={value}
                          label='導入希望日'
                          onChange={onChange}
                          placeholder='導入希望日'
                          error={Boolean(errors.implementationDate)}
                          aria-describedby='validation-basic-first-name'
                          disabled={isLoading}
                          fullWidth
                        />
                      }
                    />
                  )}
                />
                {errors.implementationDate && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid size={1.5}>
              <Button component='label' role={undefined} variant='contained' tabIndex={-1} startIcon={<CloudUploadIcon />} disabled={isLoading}>
                Attach
                <VisuallyHiddenInput type='file' name='files' onChange={event => setFiles(event.target.files)} multiple />
              </Button>
            </Grid>
            <Grid container size={12} sx={{ borderTop: '1px solid gray' }} pt={3}>
              <Grid size={6} sx={{ display: 'flex', gap: 2 }}>
                <Button type='submit' variant='contained' startIcon={<SendIcon />} disabled={isLoading}>
                  Submit
                </Button>
                <Button type='button' variant='outlined' startIcon={<DescriptionIcon />} disabled={isLoading}>
                  Save draft
                </Button>
              </Grid>
              <Grid size={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type='submit' variant='contained' startIcon={<SellIcon />} disabled={isLoading}>
                  Guide
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateFormPartition;
