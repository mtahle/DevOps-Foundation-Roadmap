# Internet Protocols

Understanding network protocols is essential for DevOps engineers to troubleshoot connectivity issues and design secure, efficient systems.

## IP Addresses

IP addresses are the foundation of internet communication, identifying devices and services on networks.

### Dedicated vs Shared IP Addresses

- **[Dedicated IP vs Shared IP Address | Kinsta](https://kinsta.com/blog/dedicated-ip-address/)**
  
  Comprehensive guide explaining the differences and when to use each type.

## DNS (Domain Name System)

DNS translates human-readable domain names into IP addresses that computers can understand.

### Understanding DNS

- **[What is DNS? How DNS works | Cloudflare](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/)**
  
  Detailed explanation of DNS functionality and its importance in web infrastructure.

## File Transfer Protocols

### FTP & SFTP

File transfer protocols are essential for deploying applications and managing server files.

- **[What Is File Transfer Protocol (FTP) | Investopedia](https://www.investopedia.com/terms/f/ftp-file-transfer-protocol.asp)**
  
  Basic introduction to FTP and its business applications.

- **[FTP vs SFTP: What's the Difference? | Kinsta](https://kinsta.com/knowledgebase/ftp-vs-sftp/)**
  
  Security comparison and best practices for file transfers.

## HTTP & HTTPS

Web protocols that power internet communication between browsers and servers.

### HTTP Protocol

- **[HTTP Documentation | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)**
  
  Comprehensive technical reference for HTTP protocol.

### HTTPS Security

- **[The HTTPS Protocol Explained | Medium](https://anushadasari.medium.com/the-https-protocol-explained-under-the-hood-c7bd9f9aaa7b)**
  
  Deep dive into HTTPS security mechanisms and implementation.

## SSH (Secure Shell)

SSH is crucial for secure remote server management and automation.

### SSH Command Usage

- **[SSH Command in Linux with Examples | GeeksforGeeks](https://www.geeksforgeeks.org/ssh-command-in-linux-with-examples/)**
  
  Practical guide to using SSH for remote server administration.

## Protocol Security Considerations

!!! warning "Security Best Practices"
    - Always use encrypted protocols (HTTPS, SFTP, SSH) in production
    - Implement proper authentication and authorization
    - Regular security audits of protocol configurations
    - Keep protocol implementations updated

## Common Protocol Issues & Troubleshooting

| Protocol | Common Issues | Troubleshooting Tools |
|----------|---------------|---------------------|
| HTTP/HTTPS | Connection timeouts, SSL errors | curl, telnet, browser dev tools |
| SSH | Authentication failures, connection drops | ssh -v, key verification |
| DNS | Resolution failures, propagation delays | nslookup, dig, ping |
| FTP/SFTP | Transfer failures, permission issues | FileZilla, command line tools |

## Next Steps

Understanding protocols enables you to:

- [Configure SSL Certificates](ssl.md) properly
- [Manage Domain Names](domains-dns.md) effectively  
- [Implement Linux Server Security](../linux/introduction.md)

!!! tip "DevOps Application"
    Protocol knowledge is essential for network troubleshooting, security implementation, and infrastructure automation.