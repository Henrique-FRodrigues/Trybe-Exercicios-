mkdir unix_tests
cd unix_tests
ls
touch trybe.txt
cp trybe.txt trybe_backup.txt
ls
mv trybe.txt trybe_novo_nome.txt
ls
mkdir backup
mv trybe_backup.txt backup
ls
mkdir backup2
cd backup
ls
mv trybe_backup.txt ../backup2
rmdir backup
mv backup2 backup
pwd
ls -la
rm -rf backup/
clear

touch skills.txt
cat > skills.txt

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

Aperte a tecla "Ctrl+d" para finalizar.

cat skills.txt
head -5 skills.txt
tail -4 skills.txt
rm *.txt