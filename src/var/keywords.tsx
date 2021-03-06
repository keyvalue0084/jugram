//BACK END
export const V_BACK_END = {
  BASIC_URL: "https://jsbackend.herokuapp.com"
};

//USER CONTEXT관련된 키워드
export const V_USER_CONTEXT = {
  ACTION: {
    LOGIN: {
      NAME: "LOGIN"
    },
    LOGOUT: {
      NAME: "LOGOUT"
    }
  }
};

export const V_ARTICLE_CONTEXT = {
  ACTION: {
    DELETE: {
      NAME: "LOGIN"
    }
  }
};

//레이아웃 관련된 키워드
export const V_LAYOUT_ROUTES = {
  AUTH: {
    NAME: "auth",
    PATH: "/auth"
  },
  BASIC: {
    NAME: "basic",
    PATH: "/"
  }
};

//라우트 관련된 키워드
export const V_ROUTES = {
  WELCOME: {
    NAME: "welcome",
    PATH: "/welcome",
    LAYOUT: "BASIC"
  },
  ARTICLE_LIST: {
    NAME: "articleList",
    PATH: "/articleList",
    LAYOUT: "BASIC"
  },
  ARTICLE_VIEW: {
    NAME: "articleView",
    PATH: "/articleView/:id",
    URL: "/articleView",
    LAYOUT: "BASIC"
  },
  ARTICLE_REGIST: {
    NAME: "articleRegist",
    PATH: "/articleRegist",
    LAYOUT: "BASIC"
  },
  AUTH: {
    CALLBACK_GOOGLE: {
      NAME: "callbackGoogle",
      PATH: "/auth/callback/google",
      LAYOUT: "AUTH"
    },
    SIGN_IN: {
      NAME: "signIn",
      PATH: "/auth/signin",
      LAYOUT: "AUTH"
    },
    SIGN_UP: {
      NAME: "signUp",
      PATH: "/auth/signup",
      LAYOUT: "AUTH"
    }
  }
};
