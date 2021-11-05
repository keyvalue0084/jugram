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
    PATH: "/articleView",
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
