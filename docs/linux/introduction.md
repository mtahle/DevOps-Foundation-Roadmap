# Linux Servers Introduction

Linux is the backbone of modern infrastructure and cloud computing. As a DevOps engineer, mastering Linux is essential for server management, automation, and scalable deployments.

## Why Linux for DevOps?

- **Open Source**: Cost-effective and customizable
- **Stability**: Reliable for production environments  
- **Security**: Strong permission model and security features
- **Automation**: Excellent scripting and automation capabilities
- **Cloud Native**: Foundation for containerization and orchestration

## Getting Started with Linux

### Comprehensive Learning Resource

- **[Introduction to Linux (LFS101x) | Linux Foundation](https://training.linuxfoundation.org/training/introduction-to-linux/)**
  
  Free comprehensive course covering Linux fundamentals, perfect for beginners and those needing a refresher.

## Essential Linux Concepts for DevOps

### File System Hierarchy

```
/                    # Root directory
├── /bin            # Essential user binaries
├── /boot           # Boot loader files
├── /dev            # Device files
├── /etc            # System configuration
├── /home           # User home directories
├── /lib            # Essential shared libraries
├── /opt            # Optional software packages
├── /proc           # Process information
├── /root           # Root user home
├── /tmp            # Temporary files
├── /usr            # User programs and data
└── /var            # Variable data (logs, databases)
```

### Key Directories for DevOps

| Directory | Purpose | DevOps Relevance |
|-----------|---------|------------------|
| `/etc/` | Configuration files | Service configuration, system settings |
| `/var/log/` | System and application logs | Monitoring and troubleshooting |
| `/opt/` | Third-party software | Custom application installations |
| `/srv/` | Service data | Web server content, databases |
| `/home/` | User directories | Developer workspaces, SSH keys |

## Essential Linux Skills for DevOps

### 1. Command Line Proficiency

Master these fundamental commands:

```bash
# File operations
ls, cd, pwd, mkdir, rmdir, cp, mv, rm, find, locate

# Text processing  
cat, less, head, tail, grep, sed, awk, sort, uniq, wc

# System information
ps, top, htop, df, du, free, uptime, who, id

# Network
ping, netstat, ss, curl, wget, ssh, scp, rsync

# Process management
kill, killall, nohup, screen, tmux, jobs, fg, bg

# Permissions
chmod, chown, chgrp, umask, sudo, su
```

### 2. Package Management

Different distributions use different package managers:

| Distribution | Package Manager | Commands |
|--------------|-----------------|----------|
| Ubuntu/Debian | APT | `apt update`, `apt install`, `apt remove` |
| RHEL/CentOS | YUM/DNF | `yum install`, `dnf install`, `rpm -qa` |
| SUSE | Zypper | `zypper install`, `zypper update` |
| Arch Linux | Pacman | `pacman -S`, `pacman -Syu` |

### 3. Service Management

Modern Linux uses systemd for service management:

```bash
# Service operations
systemctl start service-name
systemctl stop service-name  
systemctl restart service-name
systemctl reload service-name
systemctl enable service-name
systemctl disable service-name

# Service status
systemctl status service-name
systemctl is-active service-name
systemctl is-enabled service-name

# System operations
systemctl reboot
systemctl poweroff
systemctl suspend
```

## Linux Security Fundamentals

### User and Group Management

```bash
# User operations
useradd username
usermod -aG groupname username
passwd username
userdel username

# Group operations  
groupadd groupname
groupmod groupname
groupdel groupname

# Permission management
chmod 755 filename        # rwxr-xr-x
chmod u+x,g+r filename    # Add execute for user, read for group
chown user:group filename # Change ownership
```

### SSH Security

```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy public key to server
ssh-copy-id user@server

# SSH with key authentication
ssh -i ~/.ssh/private_key user@server

# SSH config file (~/.ssh/config)
Host myserver
    HostName server.example.com
    User myuser
    Port 2222
    IdentityFile ~/.ssh/my_key
```

## Next Learning Steps

After mastering Linux basics, explore:

1. [Network Troubleshooting Tools](troubleshooting-tools.md)
2. [Self-Managed Web Hosting](web-hosting.md) 
3. [Advanced Hosting Solutions](advanced-hosting.md)

## Practical Exercises

!!! tip "Hands-on Learning"
    - Set up a Linux VM or cloud instance
    - Practice command line operations daily
    - Configure SSH key authentication
    - Explore system logs in `/var/log/`
    - Set up a basic web server

!!! warning "Production Considerations"
    - Always test commands in development first
    - Use configuration management tools for consistency
    - Implement proper backup strategies
    - Follow the principle of least privilege
    - Keep systems updated and patched

## DevOps Integration

Linux skills directly enable:

- **Infrastructure as Code**: Ansible, Terraform automation
- **Containerization**: Docker and Kubernetes deployments
- **CI/CD Pipelines**: Build agents and deployment scripts
- **Monitoring**: Log analysis and system monitoring
- **Cloud Operations**: EC2, VPS, and bare metal management