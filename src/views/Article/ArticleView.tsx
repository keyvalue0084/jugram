import React, { useState, useEffect, useRef } from "react";

import { useHistory, useParams } from "react-router";
import { updateArticle, getArticle } from "../../hooks/Articles";
import { V_ROUTES } from "../../var/keywords";
import { compare } from "../../hooks/Utils";
import { useUserState } from "../../context/UserContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ViewListIcon from "@mui/icons-material/ViewList";
import SaveIcon from "@mui/icons-material/Save";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Scrollbars } from "react-custom-scrollbars-2";

import Moment from "moment";
import { addFiles, deleteFile } from "../../hooks/Files";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import FileCard from "./FileCard";

const ArticleView = () => {
  const userState = useUserState();
  const history = useHistory();
  const params = useParams<{ id: string }>();

  const [article, setArticle] = useState<Components.Schemas.Article>();
  const [open, setOpen] = useState(false);
  const [isWriter, setIsWriter] = useState(false);

  const inputFileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    getArticle(params.id).then(response => {
      setArticle(response.data);
      if (response.data.user?.id && userState.user?.id) {
        setIsWriter(compare(userState.user.id, response.data.user.id));
      }
    });
  }, [, userState]);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*????????? ?????? ?????? ????????? ???????*/
    if (e.target.files) {
      const newFile = e.target.files[0];
    }
  };

  //????????? state ??????
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (params.id) {
      setArticle({
        ...article,
        id: params.id,
        [name]: value
      });
    }
  };

  const registProcess = () => {
    if (article) {
      toggleDialog();
      updateArticle(article).then(response => {
        if (inputFileRef.current?.files?.length) {
          addFiles(formRef.current).then(response => {
            history.push("/articleList");
          });
        } else {
          history.push("/articleList");
        }
      });
    }
  };

  const deleteFileProcess = (id: string) => {
    deleteFile(id).then(response => {
      if (article?.files) {
        const filteredFiles = article?.files.filter(file => {
          if (file.id !== id) {
            return file;
          }
        });
        setArticle({ ...article, files: filteredFiles });
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        p: 1,
        m: 1
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        paddingTop={10}
        sx={{ width: "700px" }}
      >
        <Grid item xs={12} textAlign="left">
          <Typography variant="h4" component="div" gutterBottom>
            {article?.user?.username}
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="left">
          <Typography variant="body1" gutterBottom>
            {Moment(article?.published_at).format("yyyy.MM.DD")}
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="favorite" size="large">
              <FavoriteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="comment" size="large">
              <CommentIcon fontSize="inherit" />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <IconButton
              aria-label="list"
              size="large"
              href={V_ROUTES.ARTICLE_LIST.PATH}
            >
              <ViewListIcon fontSize="inherit" />
            </IconButton>
            {isWriter ? (
              <IconButton aria-label="save" size="large" onClick={toggleDialog}>
                <SaveIcon fontSize="inherit" />
              </IconButton>
            ) : (
              ""
            )}
            {isWriter ? (
              <IconButton
                aria-label="upload"
                size="large"
                onClick={() => {
                  inputFileRef?.current?.click();
                }}
              >
                <UploadFileIcon fontSize="inherit" />
              </IconButton>
            ) : (
              ""
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Swiper spaceBetween={150} slidesPerView={1}>
            {article?.files
              ? article?.files.map((file, key) => {
                  return (
                    <SwiperSlide key={key}>
                      {" "}
                      <img
                        height={300}
                        key={key}
                        src={file.url}
                        alt={file.name}
                        onError={(e: React.ChangeEvent<HTMLImageElement>) => {
                          e.target.hidden = true;
                        }}
                      />
                    </SwiperSlide>
                  );
                })
              : ""}
          </Swiper>
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <TextField
            id="outlined-multiline-static"
            label="Contents"
            name="content"
            multiline
            rows={3}
            fullWidth
            focused={true}
            onChange={onChange}
            defaultValue={article?.content}
            inputProps={{ readOnly: !isWriter }}
          />
        </Grid>
        <Grid item xs={12}>
          <Scrollbars
            style={{
              height: "12vh",
              border: "solid 1px #cccccc",
              borderRadius: "3px"
            }}
            key="scrollbar-key"
          >
            <List dense={true}>
              {article?.files?.length ? (
                article?.files.map((file, key) => {
                  return (
                    <FileCard {...file} onClick={deleteFileProcess} key={key} />
                  );
                })
              ) : (
                <ListItem key={"noFiles"}>No Files</ListItem>
              )}
            </List>
          </Scrollbars>

          <form ref={formRef}>
            <input
              type="file"
              name="files"
              ref={inputFileRef}
              onChangeCapture={onFileChangeCapture}
              hidden={true}
            />
            <input type="hidden" name="ref" defaultValue="article" />
            <input type="hidden" name="refId" defaultValue={article?.id} />
            <input type="hidden" name="field" defaultValue="files" />
          </form>
        </Grid>
        <Dialog
          open={open}
          onClose={toggleDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"UPDATE"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Would you like to update?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={registProcess}>Yes</Button>
            <Button onClick={toggleDialog} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
};

export default ArticleView;
