# Describe node module methods
List all methods name including arguments and properties in a Node module.

## API endpoint

- /api/methods/:moduleName
- /api/properties/:moduleName

## Heroku curl command example for fs module
```curl https://list-module-methods.herokuapp.com/api/methods/fs```

Output
```
{
  "moduleName": "fs",
  "methods": [
    "_toUnixTimestamp: time,name = 'time'",
    "access: path,mode,callback",
    "accessSync: path,mode",
    "appendFile: path,data,options,callback",
    "appendFileSync: path,data,options",
    "chmod: path,mode,callback",
    "chmodSync: path,mode",
    "chown: path,uid,gid,callback",
    "chownSync: path,uid,gid",
    "close: fd,callback",
    "closeSync: fd",
    "copyFile: src,dest,flags,callback",
    "copyFileSync: src,dest,flags",
    "createReadStream: path,options",
    "createWriteStream: path,options",
    "Dirent: no args",
    "exists: path,callback",
    "existsSync: path",
    "fchmod: fd,mode,callback",
    "fchmodSync: fd,mode",
    "fchown: fd,uid,gid,callback",
    "fchownSync: fd,uid,gid",
    "fdatasync: fd,callback",
    "fdatasyncSync: fd",
    "FileReadStream: path,options",
    "FileWriteStream: path,options",
    "fstat: fd,options,callback",
    "fstatSync: fd,options = {}",
    "fsync: fd,callback",
    "fsyncSync: fd",
    "ftruncate: fd,len = 0,callback",
    "ftruncateSync: fd,len = 0",
    "futimes: fd,atime,mtime,callback",
    "futimesSync: fd,atime,mtime",
    "lchown: path,uid,gid,callback",
    "lchownSync: path,uid,gid",
    "link: existingPath,newPath,callback",
    "linkSync: existingPath,newPath",
    "lstat: path,options,callback",
    "lstatSync: path,options = {}",
    "mkdir: path,options,callback",
    "mkdirSync: path,options",
    "mkdtemp: prefix,options,callback",
    "mkdtempSync: prefix,options",
    "open: path,flags,mode,callback",
    "openSync: path,flags,mode",
    "read: fd,buffer,offset,length,position,callback",
    "readdir: path,options,callback",
    "readdirSync: path,options",
    "readFile: path,options,callback",
    "readFileSync: path,options",
    "readlink: path,options,callback",
    "readlinkSync: path,options",
    "ReadStream: path,options",
    "readSync: fd,buffer,offset,length,position",
    "realpath: p,options,callback",
    "realpathSync: p,options",
    "rename: oldPath,newPath,callback",
    "renameSync: oldPath,newPath",
    "rmdir: path,callback",
    "rmdirSync: path",
    "stat: path,options,callback",
    "Stats: dev,mode,nlink,uid,gid,rdev,blksize,ino,size,blocks,atim_msec,mtim_msec,ctim_msec,birthtim_msec",
    "statSync: path,options = {}",
    "symlink: target,path,type_,callback_",
    "symlinkSync: target,path,type",
    "truncate: path,len,callback",
    "truncateSync: path,len",
    "unlink: path,callback",
    "unlinkSync: path",
    "unwatchFile: filename,listener",
    "utimes: path,atime,mtime,callback",
    "utimesSync: path,atime,mtime",
    "watch: filename,options,listener",
    "watchFile: filename,options,listener",
    "write: fd,buffer,offset,length,position,callback",
    "writeFile: path,data,options,callback",
    "writeFileSync: path,data,options",
    "WriteStream: path,options",
    "writeSync: fd,buffer,offset,length,position"
  ]
}
```