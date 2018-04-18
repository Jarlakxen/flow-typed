import { type Agent, type ClientRequest, type IncomingMessage } from "http";
import { type Socket } from "net";
import { type Readable } from "stream";
import { type URL } from 'url';

declare module 'request-promise-native' {

  declare type UriOptions = {
      uri: string | URL;
  }

  declare type UrlOptions = {
      url: string | URL;
  }

  declare type RequiredUriUrl = UriOptions | UrlOptions;

  declare interface NameValuePair {
    name: string;
    value: string;
  }

  declare interface HttpArchiveRequest {
    url?: string;
    method?: string;
    headers?: NameValuePair[];
    postData?: {
      mimeType?: string;
      params?: NameValuePair[];
    };
  }

  declare interface Multipart {
    chunked?: boolean;
    data?: Array<{
      'content-type'?: string,
      body: string
    }>;
  }

  declare interface RequestPart {
    headers?: Headers;
    body: any;
  }

  declare interface Headers {
    [key: string]: any;
  }

  declare interface AuthOptions {
    user?: string;
    username?: string;
    pass?: string;
    password?: string;
    sendImmediately?: boolean;
    bearer?: string | (() => string);
  }

  declare interface OAuthOptions {
    callback?: string;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    transport_method?: 'body' | 'header' | 'query';
    verifier?: string;
    body_hash?: true | string;
  }

  declare interface HawkOptions {
    credentials: any;
  }

  declare interface AWSOptions {
    secret: string;
    bucket?: string;
  }

  declare interface RequestAsJSON {
    uri: URL;
    method: string;
    headers: Headers;
  }

  declare interface ResponseAsJSON {
    statusCode: number;
    body: any;
    headers: Headers;
    request: RequestAsJSON;
  }

  declare type Cookie = Object;

  declare interface CookieJar {
    setCookie(cookieOrStr: Cookie | string, uri: string | URL, options?: Object): void;
    getCookieString(uri: string | URL): string;
    getCookies(uri: string | URL): Cookie[];
  }

  declare type Request<T> = Promise<T> & {
    promise(): Promise<T>
  }

  declare interface Response extends IncomingMessage {
    statusCode: number;
    statusMessage: string;
    request: Request<any>;
    body: any;
    toJSON(): ResponseAsJSON;
    timingStart?: number;
    elapsedTime?: number;
    timings?: {
      socket: number;
      lookup: number;
      connect: number;
      response: number;
      end: number;
    };
    timingPhases?: {
      wait: number;
      dns: number;
      tcp: number;
      firstByte: number;
      download: number;
      total: number;
    };
  }

  declare type RequestCallback = (error: any, response: Response, body: any) => void;

  declare interface RequestOptions {
    baseUrl?: string;
    jar?: CookieJar | boolean;
    formData?: { [key: string]: any };
    form?: { [key: string]: any } | string;
    auth?: AuthOptions;
    oauth?: OAuthOptions;
    aws?: AWSOptions;
    hawk?: HawkOptions;
    qs?: any;
    qsStringifyOptions?: any;
    qsParseOptions?: any;
    json?: any;
    jsonReviver?: (key: string, value: any) => any;
    jsonReplacer?: (key: string, value: any) => any;
    multipart?: RequestPart[] | Multipart;
    agent?: Agent;
    agentOptions?: any;
    agentClass?: any;
    forever?: any;
    host?: string;
    port?: number;
    method?: string;
    headers?: Headers;
    body?: any;
    followRedirect?: boolean | ((response: IncomingMessage) => boolean);
    followAllRedirects?: boolean;
    followOriginalHttpMethod?: boolean;
    maxRedirects?: number;
    removeRefererHeader?: boolean;
    encoding?: string | null;
    pool?: any;
    timeout?: number;
    localAddress?: string;
    proxy?: any;
    tunnel?: boolean;
    strictSSL?: boolean;
    rejectUnauthorized?: boolean;
    time?: boolean;
    gzip?: boolean;
    preambleCRLF?: boolean;
    postambleCRLF?: boolean;
    withCredentials?: boolean;
    key?: Buffer;
    cert?: Buffer;
    passphrase?: string;
    ca?: string | Buffer | string[] | Buffer[];
    har?: HttpArchiveRequest;
    useQuerystring?: boolean;
  }

  declare interface RequestPromiseOptions extends RequestOptions {
    simple?: boolean;
    transform?: (body: any, response: Response, resolveWithFullResponse?: boolean) => any;
    transform2xxOnly?: boolean;
    resolveWithFullResponse?: boolean;
  }

  declare interface RequestAPI {
    defaults(options: RequestPromiseOptions): RequestAPI;

    (uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    (uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    (uri: string, callback?: RequestCallback): Request<any>;
    (options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    (options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    get(uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    get(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    get(uri: string, callback?: RequestCallback): Request<any>;
    get(options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    get(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    post(uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    post(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    post(uri: string, callback?: RequestCallback): Request<any>;
    post(options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    post(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    put(uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    put(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    put(uri: string, callback?: RequestCallback): Request<any>;
    put(options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    put(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    head(uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    head(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    head(uri: string, callback?: RequestCallback): Request<any>;
    head(options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    head(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    patch(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    patch(uri: string, callback?: RequestCallback): Request<any>;
    patch(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    del(uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    del(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    del(uri: string, callback?: RequestCallback): Request<any>;
    del(options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    del(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    delete(uri: string, options: RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    delete(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): Request<any>;
    delete(uri: string, callback?: RequestCallback): Request<any>;
    delete(options: RequiredUriUrl & RequestPromiseOptions & { resolveWithFullResponse: true }, callback?: RequestCallback): Request<Response>;
    delete(options: RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): Request<any>;

    initParams(uri: string, options?: RequestPromiseOptions, callback?: RequestCallback): RequiredUriUrl & RequestPromiseOptions;
    initParams(uriOrOpts: string | RequiredUriUrl & RequestPromiseOptions, callback?: RequestCallback): RequiredUriUrl & RequestPromiseOptions;

    forever(agentOptions: any, optionsArg: any): Request<any>;
    jar(store?: any): CookieJar;
    cookie(str: string): Cookie | void;

    debug: boolean;
  }

  declare module.exports: RequestAPI;
}
