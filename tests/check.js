#!/bin/sh

echo "Sample Log File" > Linux.log
echo "Jun 14 15:16:01 combo sshd(pam_unix)[19939]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4" >> Linux.log
echo "Jun 14 15:16:02 combo sshd(pam_unix)[19937]: check pass; user unknown" >> Linux.log
echo "Jun 14 15:16:02 combo sshd(pam_unix)[19937]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=218.188.2.4 " >> Linux.log
echo "Jun 15 02:04:59 combo sshd(pam_unix)[20882]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root" >> Linux.log
echo "Jun 15 02:04:59 combo sshd(pam_unix)[20884]: authentication failure; logname= uid=0 euid=0 tty=NODEVssh ruser= rhost=220-135-151-1.hinet-ip.hinet.net  user=root" >> Linux.log


bash ./scripts/backup.sh Linux.log

if ls -l | grep "backup.tar.gz"; 
then
    echo "Test 1 Passed: backup.tar.gz has been successfuly created"

    if tar xzf backup.tar.gz  | grep -q "Linux.log";
    then
        echo "Test 2 Passed: Backup archive contains the correct file!"
        exit 0;
    else
        echo "Test 2 Failed: Backup archive does not contain the correct file!"
    fi
else
    echo "Test 1 Failed: backup.tar.gz has not been created."
    exit 1;
fi
