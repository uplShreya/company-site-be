export interface request {
    // user?: user;
    query?: any;
    params?: any;
    body?: any;
    // headers: header;
    files?: any;
    status: Function;
  }
  export interface response {
    status: Function;
    send: Function;
  }
  export interface image {
    key?: string;
    name?: string;
    mimetype?: string;
    location?: string;
    size?: number;
  }