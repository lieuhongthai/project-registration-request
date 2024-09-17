import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useParams } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FieldGroup from 'src/@core/components/FieldGroup';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ApproveProjectUpdateStatus = () => {
  const { id } = useParams();

  return (
    <Grid container spacing={6}>
      <Grid size={12}>
        <Typography variant='h1'>Request detail</Typography>
      </Grid>

      <Grid size={12}>
        <Card>
          <CardContent>
            <Grid container spacing={4}>
              <Grid size={12}>
                <Stack direction='row' alignItems='center' justifyContent='space-between' gap={2}>
                  <Chip label='Status' />

                  <Stack direction='row' gap={2}>
                    <Button variant='outlined' startIcon={<ArrowBackIcon />}>
                      戻る
                    </Button>
                    <Button variant='contained' startIcon={<CommentIcon />}>
                      コメント
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={12}>
                <Divider sx={{ mx: -5 }} />
              </Grid>

              <Grid size={12}>
                <FieldGroup label='申請部門'>
                  <Typography>Department name</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <FieldGroup label='プロジェクト名'>
                  <Typography>Project name</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <FieldGroup label='開発背景/目的'>
                  <Typography>Development background/purpose</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <FieldGroup label='関係者・問合せ先'>
                  <Typography>Scope of use</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <FieldGroup label='導入希望日'>
                  <Typography>Request</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <FieldGroup label='関係者・問合せ先'>
                  <Typography>Related parties and contact information</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <FieldGroup label='導入希望日'>
                  <Typography>Desired implementation date</Typography>
                </FieldGroup>
              </Grid>

              <Grid size={12}>
                <Button variant='contained' startIcon={<AttachFileIcon />}>
                  Attach
                </Button>
              </Grid>

              <Grid size={12}>
                <Divider sx={{ mx: -5 }} />
              </Grid>

              <Grid size={12}>
                <TextField fullWidth />
              </Grid>

              <Grid size={12}>
                <Stack direction='row' gap={2}>
                  <Button variant='contained' startIcon={<CheckIcon />}>
                    Approve
                  </Button>
                  <Button variant='outlined' startIcon={<CancelIcon />}>
                    Return
                  </Button>
                  <Button variant='outlined' startIcon={<DescriptionIcon />}>
                    Export
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ApproveProjectUpdateStatus;
