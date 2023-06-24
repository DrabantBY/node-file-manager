# Node.js file manager

1. `Task`: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md
2. `Done`: 2023-06-22 / `Deadline`: 2023-06-27
3. `Score`: 330 / 330

# Manual:
`npm run start -- --username=your_username`

- `up` => _go upper from current directory_
- `cd path_to_directory` => _go to dedicated folder from current directory_
- `ls` => _print in console list of all files and folders in current directory_

### basic operations with files
- `cat path_to_file` => _read file and print it's content in console_
- `add new_file_name` => _create empty file in current working directory_
- `rm path_to_file` => _delete file_
- `rn path_to_file new_filename` => _rename file_
- `cp path_to_file path_to_new_directory` => _copy file_
- `mv path_to_file path_to_new_directory` => _move file_

!!! If you want to enter path names with spaces, you need to add an asterisk (*) symbol without any spaces. <br/>
(example: cp folder/file\*name.txt folder/target\*folder)
