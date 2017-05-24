import { Stats } from "fs";

declare module 'fs-extra' {

  declare type CopyFilterFunction = (src: string) => boolean;

  declare type CopyFilter = CopyFilterFunction | RegExp;

  declare type CopyOptions = {
      dereference?: boolean;
      overwrite?: boolean;
      preserveTimestamps?: boolean;
      errorOnExist?: boolean;
      filter?: CopyFilter;
      recursive?: boolean;
  }

  declare type MoveOptions = {
      overwrite?: boolean;
      limit?: number;
  }

  declare type ReadOptions = {
      throws?: boolean;
      fs?: any;
      reviver?: any;
      encoding?: string;
      flag?: string;
  }

  declare type WriteOptions = {
      fs?: any;
      replacer?: any;
      spaces?: number;
      encoding?: string;
      flag?: string;
      mode?: number;
  }

  declare function copy(src: string, dest: string, options?: CopyOptions): Promise<void>;
  declare function copy(src: string, dest: string, callback: (err: Error) => void): void;
  declare function copy(src: string, dest: string, options: CopyOptions, callback: (err: Error) => void): void;
  declare function copySync(src: string, dest: string, options?: CopyOptions): void;

  declare function move(src: string, dest: string, options?: MoveOptions): Promise<void>;
  declare function move(src: string, dest: string, callback: (err: Error) => void): void;
  declare function move(src: string, dest: string, options: MoveOptions, callback: (err: Error) => void): void;
  declare function moveSync(src: string, dest: string, options?: MoveOptions): void;

  declare function createFile(file: string): Promise<void>;
  declare function createFile(file: string, callback: (err: Error) => void): void;
  declare function createFileSync(file: string): void;

  declare function ensureDir(path: string): Promise<void>;
  declare function ensureDir(path: string, callback: (err: Error) => void): void;
  declare function ensureDirSync(path: string): void;

  declare function mkdirs(dir: string): Promise<void>;
  declare function mkdirs(dir: string, callback: (err: Error) => void): void;
  declare function mkdirp(dir: string): Promise<void>;
  declare function mkdirp(dir: string, callback: (err: Error) => void): void;
  declare function mkdirsSync(dir: string): void;
  declare function mkdirpSync(dir: string): void;

  declare function outputFile(file: string, data: any): Promise<void>;
  declare function outputFile(file: string, data: any, callback: (err: Error) => void): void;
  declare function outputFileSync(file: string, data: any): void;

  declare function readJson(file: string, options?: ReadOptions): Promise<any>;
  declare function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
  declare function readJson(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;
  declare function readJSON(file: string, options?: ReadOptions): Promise<any>;
  declare function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
  declare function readJSON(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;

  declare function readJsonSync(file: string, options?: ReadOptions): any;
  declare function readJSONSync(file: string, options?: ReadOptions): any;

  declare function remove(dir: string): Promise<void>;
  declare function remove(dir: string, callback: (err: Error) => void): void;
  declare function removeSync(dir: string): void;

  declare function outputJSON(file: string, data: any, options?: WriteOptions): Promise<void>;
  declare function outputJSON(file: string, data: any, options: WriteOptions, callback: (err: Error) => void): void;
  declare function outputJSON(file: string, data: any, callback: (err: Error) => void): void;
  declare function outputJson(file: string, data: any, options?: WriteOptions): Promise<void>;
  declare function outputJson(file: string, data: any, options: WriteOptions, callback: (err: Error) => void): void;
  declare function outputJson(file: string, data: any, callback: (err: Error) => void): void;
  declare function outputJsonSync(file: string, data: any, options?: WriteOptions): void;
  declare function outputJSONSync(file: string, data: any, options?: WriteOptions): void;

  declare function writeJSON(file: string, object: any, options?: WriteOptions): Promise<void>;
  declare function writeJSON(file: string, object: any, callback: (err: Error) => void): void;
  declare function writeJSON(file: string, object: any, options: WriteOptions, callback: (err: Error) => void): void;
  declare function writeJson(file: string, object: any, options?: WriteOptions): Promise<void>;
  declare function writeJson(file: string, object: any, callback: (err: Error) => void): void;
  declare function writeJson(file: string, object: any, options: WriteOptions, callback: (err: Error) => void): void;

  declare function writeJsonSync(file: string, object: any, options?: WriteOptions): void;
  declare function writeJSONSync(file: string, object: any, options?: WriteOptions): void;

  declare function ensureFile(path: string): Promise<void>;
  declare function ensureFile(path: string, callback: (err: Error) => void): void;
  declare function ensureFileSync(path: string): void;

  declare function ensureLink(path: string): Promise<void>;
  declare function ensureLink(path: string, callback: (err: Error) => void): void;
  declare function ensureLinkSync(path: string): void;

  declare function ensureSymlink(path: string): Promise<void>;
  declare function ensureSymlink(path: string, callback: (err: Error) => void): void;
  declare function ensureSymlinkSync(path: string): void;

  declare function emptyDir(path: string): Promise<void>;
  declare function emptyDir(path: string, callback: (err: Error) => void): void;
  declare function emptyDirSync(path: string): void;

  declare function pathExists(path: string): Promise<boolean>;
  declare function pathExists(path: string, callback: (err: Error, exists: boolean) => void): void;
  declare function pathExistsSync(path: string): boolean;

  declare function access(path: string | Buffer, callback: (err: Error) => void): void;
  declare function access(path: string | Buffer, mode: number, callback: (err: Error) => void): void;
  declare function access(path: string | Buffer, mode?: number): Promise<void>;

  declare function appendFile(file: string | Buffer | number, data: any, options: { encoding?: string; mode?: number | string; flag?: string; }, callback: (err: Error) => void): void;
  declare function appendFile(file: string | Buffer | number, data: any, callback: (err: Error) => void): void;
  declare function appendFile(file: string | Buffer | number, data: any, options?: { encoding?: string; mode?: number | string; flag?: string; }): Promise<void>;

  declare function chmod(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;
  declare function chmod(path: string | Buffer, mode: string | number): Promise<void>;

  declare function chown(path: string | Buffer, uid: number, gid: number): Promise<void>;
  declare function chown(path: string | Buffer, uid: number, gid: number, callback: (err?: Error) => void): void;

  declare function close(fd: number, callback: (err?: Error) => void): void;
  declare function close(fd: number): Promise<void>;

  declare function fchmod(fd: number, mode: string | number, callback: (err?: Error) => void): void;
  declare function fchmod(fd: number, mode: string | number): Promise<void>;

  declare function fchown(fd: number, uid: number, gid: number, callback: (err?: Error) => void): void;
  declare function fchown(fd: number, uid: number, gid: number): Promise<void>;

  declare function fdatasync(fd: number, callback: () => void): void;
  declare function fdatasync(fd: number): Promise<void>;

  declare function fstat(fd: number, callback: (err: Error, stats: Stats) => any): void;
  declare function fstat(fd: number): Promise<Stats>;

  declare function fsync(fd: number, callback: (err?: Error) => void): void;
  declare function fsync(fd: number): Promise<void>;

  declare function ftruncate(fd: number, callback: (err?: Error) => void): void;
  declare function ftruncate(fd: number, len: number, callback: (err?: Error) => void): void;
  declare function ftruncate(fd: number, len?: number): Promise<void>;

  declare function futimes(fd: number, atime: number, mtime: number, callback: (err?: Error) => void): void;
  declare function futimes(fd: number, atime: Date, mtime: Date, callback: (err?: Error) => void): void;
  declare function futimes(fd: number, atime: number, mtime: number): Promise<void>;
  declare function futimes(fd: number, atime: Date, mtime: Date): Promise<void>;

  declare function lchown(path: string | Buffer, uid: number, gid: number, callback: (err?: Error) => void): void;
  declare function lchown(path: string | Buffer, uid: number, gid: number): Promise<void>;

  declare function link(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: Error) => void): void;
  declare function link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>;

  declare function lstat(path: string | Buffer, callback: (err: Error, stats: Stats) => any): void;
  declare function lstat(path: string | Buffer): Promise<Stats>;

  /**
   * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
   *
   * @param path
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare function mkdir(path: string | Buffer, callback: (err?: Error) => void): void;
  /**
   * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
   *
   * @param path
   * @param mode
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare function mkdir(path: string | Buffer, mode: number | string, callback: (err?: Error) => void): void;
  declare function mkdir(path: string | Buffer): Promise<void>;

  declare function open(path: string | Buffer, flags: string | number, callback: (err: Error, fd: number) => void): void;
  declare function open(path: string | Buffer, flags: string | number, mode: number, callback: (err: Error, fd: number) => void): void;
  declare function open(path: string | Buffer, flags: string | number, mode?: number): Promise<number>;

  declare function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback: (err: Error, bytesRead: number, buffer: Buffer) => void): void;
  declare function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null): Promise<[number, Buffer]>;

  declare function readFile(file: string | Buffer | number, callback: (err: Error, data: Buffer) => void): void;
  declare function readFile(file: string | Buffer | number, encoding: string, callback: (err: Error, data: string) => void): void;
  declare function readFile(file: string | Buffer | number, options: { flag?: string; } | { encoding: string; flag?: string; }, callback: (err: Error, data: Buffer) => void): void;
  declare function readFile(file: string | Buffer | number, options: { flag?: string; } | { encoding: string; flag?: string; }): Promise<string>;
  // tslint:disable-next-line:unified-signatures
  declare function readFile(file: string | Buffer | number, encoding: string): Promise<string>;
  declare function readFile(file: string | Buffer | number): Promise<Buffer>;

  declare function readdir(path: string | Buffer, callback: (err: Error, files: string[]) => void): void;
  declare function readdir(path: string | Buffer): Promise<string[]>;

  declare function readlink(path: string | Buffer, callback: (err: Error, linkString: string) => any): void;
  declare function readlink(path: string | Buffer): Promise<string>;

  declare function realpath(path: string | Buffer, callback: (err: Error, resolvedPath: string) => any): void;
  declare function realpath(path: string | Buffer, cache: { [path: string]: string }, callback: (err: Error, resolvedPath: string) => any): void;
  declare function realpath(path: string | Buffer, cache?: { [path: string]: string }): Promise<string>;

  declare function rename(oldPath: string, newPath: string, callback: (err?: Error) => void): void;
  declare function rename(oldPath: string, newPath: string): Promise<void>;

  /**
   * Asynchronous rmdir - removes the directory specified in {path}
   *
   * @param path
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare function rmdir(path: string | Buffer, callback: (err?: Error) => void): void;
  declare function rmdir(path: string | Buffer): Promise<void>;

  declare function stat(path: string | Buffer, callback: (err: Error, stats: Stats) => any): void;
  declare function stat(path: string | Buffer): Promise<Stats>;

  declare function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type: string, callback: (err?: Error) => void): void;
  declare function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): Promise<void>;

  declare function truncate(path: string | Buffer, callback: (err?: Error) => void): void;
  declare function truncate(path: string | Buffer, len: number, callback: (err?: Error) => void): void;
  declare function truncate(path: string | Buffer, len?: number): Promise<void>;

  /**
   * Asynchronous unlink - deletes the file specified in {path}
   *
   * @param path
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare function unlink(path: string | Buffer, callback: (err?: Error) => void): void;
  declare function unlink(path: string | Buffer): Promise<void>;

  declare function utimes(path: string | Buffer, atime: number, mtime: number, callback: (err?: Error) => void): void;
  declare function utimes(path: string | Buffer, atime: Date, mtime: Date, callback: (err?: Error) => void): void;
  declare function utimes(path: string | Buffer, atime: number, mtime: number): Promise<void>;
  declare function utimes(path: string | Buffer, atime: Date, mtime: Date): Promise<void>;

  declare function write(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback: (err: Error, written: number, buffer: Buffer) => void): void;
  declare function write(fd: number, buffer: Buffer, offset: number, length: number, callback: (err: Error, written: number, buffer: Buffer) => void): void;
  declare function write(fd: number, data: any, callback: (err: Error, written: number, str: string) => void): void;
  declare function write(fd: number, data: any, offset: number, callback: (err: Error, written: number, str: string) => void): void;
  declare function write(fd: number, data: any, offset: number, encoding: string, callback: (err: Error, written: number, str: string) => void): void;
  declare function write(fd: number, buffer: Buffer, offset: number, length: number, position?: number | null): Promise<[number, Buffer]>;
  declare function write(fd: number, data: any, offset: number, encoding?: string): Promise<[number, string]>;

  declare function writeFile(file: string | Buffer | number, data: any, callback: (err: Error) => void): void;
  declare function writeFile(file: string | Buffer | number, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): Promise<void>;
  declare function writeFile(file: string | Buffer | number, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback: (err: Error) => void): void;

  /**
   * Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
   *
   * @param prefix
   * @param callback The created folder path is passed as a string to the callback's second parameter.
   */
  declare function mkdtemp(prefix: string): Promise<string>;
  declare function mkdtemp(prefix: string, callback: (err: Error, folder: string) => void): void;
}
