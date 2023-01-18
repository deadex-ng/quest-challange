#!/bin/sh

echo "Sample Log File" > input.txt
echo "Jun 14 15:16:01 combo sshd(pam_unix)[19939]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4" >> input.txt
echo "Jun 14 15:16:02 combo sshd(pam_unix)[19937]: check pass; user unknown" >> input.txt
echo "Jun 14 15:16:02 combo sshd(pam_unix)[19937]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4 " >> input.txt
echo "Jun 15 02:04:59 combo sshd(pam_unix)[20882]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root" >> input.txt
echo "Jun 15 02:04:59 combo sshd(pam_unix)[20884]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root" >> input.txt

cat input.txt

bash ./scripts/backup.sh input.txt

if tar xvzf backup.tar.gz  | grep -q "input.txt"; 
then
    echo "looking good!"
    exit 0;
else
    echo "backup archive has no file"
    exit 1;
fi
