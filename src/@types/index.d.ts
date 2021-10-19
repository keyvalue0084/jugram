declare namespace Components {
  namespace Schemas {
    export interface Article {
      id: string;
      content?: string;
      files?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: {
          [key: string]: any;
        };
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: {
          [key: string]: any;
        };
        related?: string;
        created_by?: string;
        updated_by?: string;
      }[];
      replies?: {
        id: string;
        article?: string;
        content?: string;
        user?: string;
        published_at?: string;
        created_by?: string;
        updated_by?: string;
      }[];
      user?: {
        id: string;
        username: string;
        email: string;
        provider?: string;
        password?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: string;
        created_by?: string;
        updated_by?: string;
      };
      published_at?: string; // date-time
    }
    export interface Error {
      code: number; // int32
      message: string;
    }
    export interface NewArticle {
      content?: string;
      replies?: string[];
      user?: string;
      published_at?: string; // date-time
      created_by?: string;
      updated_by?: string;
    }
    export interface NewReply {
      article?: string;
      content?: string;
      user?: string;
      published_at?: string; // date-time
      created_by?: string;
      updated_by?: string;
    }
    export interface NewUsersPermissionsRole {
      name: string;
      description?: string;
      type?: string;
      permissions?: string[];
      users?: string[];
      created_by?: string;
      updated_by?: string;
    }
    export interface NewUsersPermissionsUser {
      username: string;
      email: string;
      provider?: string;
      password?: string; // password
      resetPasswordToken?: string;
      confirmationToken?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: string;
      created_by?: string;
      updated_by?: string;
    }
    export interface Reply {
      id: string;
      article?: {
        id: string;
        content?: string;
        files?: string[];
        replies?: string[];
        user?: string;
        published_at?: string;
        created_by?: string;
        updated_by?: string;
      };
      content?: string;
      user?: {
        id: string;
        username: string;
        email: string;
        provider?: string;
        password?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: string;
        created_by?: string;
        updated_by?: string;
      };
      published_at?: string; // date-time
    }
    export interface UsersPermissionsRole {
      id: string;
      name: string;
      description?: string;
      type?: string;
      permissions?: {
        id: string;
        type: string;
        controller: string;
        action: string;
        enabled: boolean;
        policy?: string;
        role?: string;
        created_by?: string;
        updated_by?: string;
      }[];
      users?: {
        id: string;
        username: string;
        email: string;
        provider?: string;
        password?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: string;
        created_by?: string;
        updated_by?: string;
      }[];
    }
    export interface UsersPermissionsUser {
      id: string;
      username: string;
      email: string;
      provider?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: {
        id: string;
        name: string;
        description?: string;
        type?: string;
        permissions?: string[];
        users?: string[];
        created_by?: string;
        updated_by?: string;
      };
    }
  }
}
declare namespace Paths {
  namespace Articles {
    namespace Get {
      namespace Parameters {
        export type Contains = string;
        export type Containss = string;
        export type Gt = string;
        export type Gte = string;
        export type In = string[];
        export type Limit = number;
        export type Lt = string;
        export type Lte = string;
        export type Ne = string;
        export type Nin = string[];
        export type Sort = string;
        export type Start = number;
        export type _ = string;
      }
      export interface QueryParameters {
        _limit?: Parameters.Limit;
        _sort?: Parameters.Sort;
        _start?: Parameters.Start;
        "="?: Parameters._;
        _ne?: Parameters.Ne;
        _lt?: Parameters.Lt;
        _lte?: Parameters.Lte;
        _gt?: Parameters.Gt;
        _gte?: Parameters.Gte;
        _contains?: Parameters.Contains;
        _containss?: Parameters.Containss;
        _in?: Parameters.In;
        _nin?: Parameters.Nin;
      }
      namespace Responses {
        export type $200 = Components.Schemas.Article[];
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Post {
      export type RequestBody = Components.Schemas.NewArticle;
      namespace Responses {
        export type $200 = Components.Schemas.Article;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Articles$Id {
    namespace Delete {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export type $200 = number; // int64
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Get {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export type $200 = Components.Schemas.Article;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Put {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      export type RequestBody = Components.Schemas.NewArticle;
      namespace Responses {
        export type $200 = Components.Schemas.Article;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace ArticlesCount {
    namespace Get {
      namespace Responses {
        export interface $200 {
          count?: number;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Auth$ProviderCallback {
    namespace Get {
      namespace Parameters {
        export type Provider = string;
      }
      export interface PathParameters {
        provider: Parameters.Provider;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace AuthEmailConfirmation {
    namespace Get {
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace AuthForgotPassword {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace AuthLocal {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace AuthLocalRegister {
    namespace Post {
      export type RequestBody = Components.Schemas.NewUsersPermissionsUser;
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsUser;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace AuthResetPassword {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace AuthSendEmailConfirmation {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Connect {
    namespace Get {
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Email {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace EmailSettings {
    namespace Get {
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace EmailTest {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Replies {
    namespace Get {
      namespace Parameters {
        export type Contains = string;
        export type Containss = string;
        export type Gt = string;
        export type Gte = string;
        export type In = string[];
        export type Limit = number;
        export type Lt = string;
        export type Lte = string;
        export type Ne = string;
        export type Nin = string[];
        export type Sort = string;
        export type Start = number;
        export type _ = string;
      }
      export interface QueryParameters {
        _limit?: Parameters.Limit;
        _sort?: Parameters.Sort;
        _start?: Parameters.Start;
        "="?: Parameters._;
        _ne?: Parameters.Ne;
        _lt?: Parameters.Lt;
        _lte?: Parameters.Lte;
        _gt?: Parameters.Gt;
        _gte?: Parameters.Gte;
        _contains?: Parameters.Contains;
        _containss?: Parameters.Containss;
        _in?: Parameters.In;
        _nin?: Parameters.Nin;
      }
      namespace Responses {
        export type $200 = Components.Schemas.Reply[];
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Post {
      export type RequestBody = Components.Schemas.NewReply;
      namespace Responses {
        export type $200 = Components.Schemas.Reply;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Replies$Id {
    namespace Delete {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export type $200 = number; // int64
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Get {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export type $200 = Components.Schemas.Reply;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Put {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      export type RequestBody = Components.Schemas.NewReply;
      namespace Responses {
        export type $200 = Components.Schemas.Reply;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace RepliesCount {
    namespace Get {
      namespace Responses {
        export interface $200 {
          count?: number;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace SwaggerOpenapiJson {
    namespace Get {
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace SwaggerV$Major$Minor$PatchOpenapiJson {
    namespace Get {
      namespace Parameters {
        export type Major = string;
        export type Minor = string;
        export type Patch = string;
      }
      export interface PathParameters {
        major: Parameters.Major;
        minor: Parameters.Minor;
        patch: Parameters.Patch;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Upload {
    namespace Post {
      export interface RequestBody {
        foo?: string;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UploadFiles {
    namespace Get {
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UploadFiles$Id {
    namespace Delete {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Get {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UploadFilesCount {
    namespace Get {
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UploadSearch$Id {
    namespace Get {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Users {
    namespace Get {
      namespace Parameters {
        export type Contains = string;
        export type Containss = string;
        export type Gt = string;
        export type Gte = string;
        export type In = string[];
        export type Limit = number;
        export type Lt = string;
        export type Lte = string;
        export type Ne = string;
        export type Nin = string[];
        export type Sort = string;
        export type Start = number;
        export type _ = string;
      }
      export interface QueryParameters {
        _limit?: Parameters.Limit;
        _sort?: Parameters.Sort;
        _start?: Parameters.Start;
        "="?: Parameters._;
        _ne?: Parameters.Ne;
        _lt?: Parameters.Lt;
        _lte?: Parameters.Lte;
        _gt?: Parameters.Gt;
        _gte?: Parameters.Gte;
        _contains?: Parameters.Contains;
        _containss?: Parameters.Containss;
        _in?: Parameters.In;
        _nin?: Parameters.Nin;
      }
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsUser[];
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace Users$Id {
    namespace Delete {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Get {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsUser;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Put {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      export type RequestBody = Components.Schemas.NewUsersPermissionsUser;
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsUser;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UsersMe {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsUser;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UsersPermissionsRoles {
    namespace Get {
      namespace Parameters {
        export type Contains = string;
        export type Containss = string;
        export type Gt = string;
        export type Gte = string;
        export type In = string[];
        export type Limit = number;
        export type Lt = string;
        export type Lte = string;
        export type Ne = string;
        export type Nin = string[];
        export type Sort = string;
        export type Start = number;
        export type _ = string;
      }
      export interface QueryParameters {
        _limit?: Parameters.Limit;
        _sort?: Parameters.Sort;
        _start?: Parameters.Start;
        "="?: Parameters._;
        _ne?: Parameters.Ne;
        _lt?: Parameters.Lt;
        _lte?: Parameters.Lte;
        _gt?: Parameters.Gt;
        _gte?: Parameters.Gte;
        _contains?: Parameters.Contains;
        _containss?: Parameters.Containss;
        _in?: Parameters.In;
        _nin?: Parameters.Nin;
      }
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsRole[];
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Post {
      export type RequestBody = Components.Schemas.NewUsersPermissionsRole;
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsRole;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UsersPermissionsRoles$Id {
    namespace Get {
      namespace Parameters {
        export type Id = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsRole;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UsersPermissionsRoles$Role {
    namespace Delete {
      namespace Parameters {
        export type Role = string;
      }
      export interface PathParameters {
        role: Parameters.Role;
      }
      namespace Responses {
        export interface $200 {
          foo?: string;
        }
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
    namespace Put {
      namespace Parameters {
        export type Role = string;
      }
      export interface PathParameters {
        role: Parameters.Role;
      }
      export type RequestBody = Components.Schemas.NewUsersPermissionsRole;
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsRole;
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
  namespace UsersPermissionsSearch$Id {
    namespace Get {
      namespace Parameters {
        export type Contains = string;
        export type Containss = string;
        export type Gt = string;
        export type Gte = string;
        export type Id = string;
        export type In = string[];
        export type Limit = number;
        export type Lt = string;
        export type Lte = string;
        export type Ne = string;
        export type Nin = string[];
        export type Sort = string;
        export type Start = number;
        export type _ = string;
      }
      export interface PathParameters {
        id: Parameters.Id;
      }
      export interface QueryParameters {
        _limit?: Parameters.Limit;
        _sort?: Parameters.Sort;
        _start?: Parameters.Start;
        "="?: Parameters._;
        _ne?: Parameters.Ne;
        _lt?: Parameters.Lt;
        _lte?: Parameters.Lte;
        _gt?: Parameters.Gt;
        _gte?: Parameters.Gte;
        _contains?: Parameters.Contains;
        _containss?: Parameters.Containss;
        _in?: Parameters.In;
        _nin?: Parameters.Nin;
      }
      namespace Responses {
        export type $200 = Components.Schemas.UsersPermissionsUser[];
        export type $403 = Components.Schemas.Error;
        export type $404 = Components.Schemas.Error;
        export type Default = Components.Schemas.Error;
      }
    }
  }
}
