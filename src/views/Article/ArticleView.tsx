import React, { useState, useEffect, useRef } from "react";

import { useHistory, useParams } from "react-router";
import { updateArticle, getArticle } from "../../hooks/Articles";
import { V_ROUTES, V_BACK_END } from "../../var/keywords";
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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Scrollbars } from "react-custom-scrollbars-2";

import Moment from "moment";
import { addFiles, deleteFile } from "../../hooks/Files";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const ArticleView = () => {
  const userState = useUserState();
  const [article, setArticle] = useState<Components.Schemas.Article>();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const [isWriter, setIsWriter] = useState(false);
  const [images, setImages] =
    useState<
      React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >[]
    >();
  const [files, setFiles] =
    useState<
      React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >[]
    >();
  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getArticle(params.id).then(response => {
      setArticle(response.data);
      getImageComponents(response.data);
      getFileComponents(response.data);
      if (response.data.user?.id && userState.user?.id) {
        setIsWriter(compare(userState.user.id, response.data.user.id));
      }
    });
  }, [userState]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFileChangeCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*추후에 다중 파일 업로드 처리?*/
    console.log(e.target.files);
  };
  const onBtnClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  //입력값 state 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      id: params.id,
      [name]: value
    });
  };

  const registProcess = () => {
    if (article) {
      handleClose();
      updateArticle(article).then(response => {
        addFiles(document.querySelector("form")).then(response => {
          history.push("/articleList");
        });
      });
    }
  };

  const deleteFileProcess = (id: string) => {
    if (files) {
      console.log(files);
      const filteredFiles = files.filter(file => {
        if (file.id === "11") {
          return file;
        }
      });
      setFiles(filteredFiles);
      setImages(filteredFiles);
    }
    /*
    deleteFile(id).then(response => {
      if (files) {
        const filteredFiles = files.filter(file => {
          if (file.id !== id) {
            return file;
          }
        });
        setFiles(filteredFiles);
      }
    });*/
  };
  const getImageComponents = (data: Components.Schemas.Article) => {
    if (data && data.files) {
      setFiles(
        data?.files.map((file, key) => {
          return (
            <ListItem key={key}>
              <Grid container>
                <Grid item xs={9} textAlign="left" display="flex">
                  <ListItemIcon sx={{ paddingTop: "10px" }}>
                    <CropOriginalIcon />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.mime} />
                </Grid>
                <Grid item xs={3} textAlign="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteFileProcess(file.id);
                    }}
                  >
                    <DeleteOutlineIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
          );
        })
      );
    }
  };

  const getFileComponents = (data: Components.Schemas.Article) => {
    if (data && data.files) {
      setImages(
        data?.files.map((file, key) => {
          return (
            <SwiperSlide key={key}>
              {" "}
              <img
                height={300}
                key={key}
                src={V_BACK_END.BASIC_URL + file.url}
                alt={file.name}
              />
            </SwiperSlide>
          );
        })
      );
    }
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
              <IconButton
                aria-label="save"
                size="large"
                onClick={handleClickOpen}
              >
                <SaveIcon fontSize="inherit" />
              </IconButton>
            ) : (
              ""
            )}
            {isWriter ? (
              <IconButton aria-label="upload" size="large" onClick={onBtnClick}>
                <UploadFileIcon fontSize="inherit" />
              </IconButton>
            ) : (
              ""
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Swiper spaceBetween={150} slidesPerView={1}>
            {images}
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
            <List dense={true}>{files}</List>
          </Scrollbars>

          <form>
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
          onClose={handleClose}
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
            <Button onClick={handleClose} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
};

export default ArticleView;
