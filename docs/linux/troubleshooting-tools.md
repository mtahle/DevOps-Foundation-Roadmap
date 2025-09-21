# Network Troubleshooting Tools

Network troubleshooting is a critical skill for DevOps engineers. These tools help diagnose connectivity issues, performance problems, and service availability.

## Ping - Connectivity Testing

Ping tests basic network connectivity and measures round-trip time to a destination.

### Understanding Ping

- **[Ping - Definition and Details | Paessler](https://www.paessler.com/it-explained/ping)**
  
  Comprehensive guide explaining ping functionality, parameters, and interpretation of results.

### Common Ping Usage

```bash
# Basic connectivity test
ping google.com

# Send specific number of packets
ping -c 4 google.com

# Set packet interval (seconds)
ping -i 2 google.com

# Flood ping (requires root)
sudo ping -f target-host

# IPv6 ping
ping6 ipv6.google.com
```

## Telnet - Port Connectivity Testing

Telnet is invaluable for testing if specific ports are open and accessible on remote hosts.

### Telnet Resources

- **[How to Use Linux Telnet Command | LinuxHint](https://linuxhint.com/linux-telnet-command/)**
  
  Complete guide to telnet usage and practical examples.

- **[Troubleshooting Network Applications with Telnet | A2 Hosting](https://www.a2hosting.com/kb/getting-started-guide/internet-and-networking/troubleshooting-network-applications-with-telnet)**
  
  Practical troubleshooting scenarios using telnet for various protocols.

### Telnet Usage Examples

```bash
# Test HTTP port
telnet google.com 80

# Test HTTPS port  
telnet google.com 443

# Test SSH port
telnet server.example.com 22

# Test SMTP port
telnet mail.example.com 25

# Test custom application port
telnet app-server.local 8080
```

## cURL - HTTP/API Testing

cURL is essential for testing web services, APIs, and HTTP-based applications.

### cURL Resources

- **[Essential CURL API Commands for Testing | Adam the Automator](https://adamtheautomator.com/curl-api/)**
  
  Comprehensive guide covering API testing and troubleshooting with cURL.

### cURL Examples

```bash
# Basic GET request
curl https://api.example.com/users

# GET with headers
curl -H "Authorization: Bearer token123" https://api.example.com/data

# POST request with JSON data
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"secret"}' \
  https://api.example.com/login

# Download file
curl -O https://example.com/file.zip

# Follow redirects
curl -L https://bit.ly/shortened-url

# Save response headers
curl -I https://example.com

# Test with different user agents
curl -A "Mozilla/5.0" https://example.com

# Upload file
curl -F "file=@document.pdf" https://upload.example.com

# Basic authentication
curl -u username:password https://protected.example.com
```

## Additional Network Tools

### Comprehensive Network Troubleshooting

- **[22 Linux Networking Commands for Sysadmin | Tecmint](https://www.tecmint.com/linux-networking-commands/)**
  
  Complete reference for network troubleshooting commands and utilities.

### Essential Network Commands

```bash
# Network interface information
ip addr show                 # Show all interfaces
ip route show               # Show routing table
ifconfig                    # Legacy interface configuration

# DNS troubleshooting
nslookup domain.com         # DNS lookup
dig domain.com             # Detailed DNS information
host domain.com            # Simple DNS lookup

# Network connections
netstat -tuln              # Show listening ports
ss -tuln                   # Modern replacement for netstat
lsof -i :80               # Show processes using port 80

# Network performance
traceroute google.com      # Trace packet route
mtr google.com            # Continuous traceroute
iperf3 -s                 # Network performance testing

# Packet analysis
tcpdump -i eth0           # Capture network packets
wireshark                 # GUI packet analyzer

# Network scanning
nmap -sT target-host      # TCP port scan
nc -zv host 80-443       # Port range scanning with netcat
```

## Troubleshooting Methodology

### Systematic Approach

1. **Layer 1 - Physical**: Check cables, hardware status
2. **Layer 2 - Data Link**: Verify interface status, VLAN configuration
3. **Layer 3 - Network**: Test IP connectivity, routing
4. **Layer 4 - Transport**: Verify port accessibility, firewall rules
5. **Layer 7 - Application**: Test application-specific functionality

### Common Network Issues

| Issue | Symptoms | Tools to Use | Typical Causes |
|-------|----------|--------------|----------------|
| No Connectivity | Cannot reach host | ping, traceroute | Network down, wrong IP, firewall |
| DNS Problems | Can ping IP but not hostname | nslookup, dig | DNS server issues, wrong configuration |
| Port Blocked | Connection refused | telnet, nmap | Firewall, service not running |
| Slow Performance | High latency, timeouts | mtr, iperf3 | Network congestion, routing issues |
| SSL/TLS Issues | Certificate errors | curl -v, openssl | Certificate problems, wrong configuration |

## DevOps-Specific Scenarios

### Container Networking

```bash
# Test container connectivity
docker exec container-name ping host.docker.internal

# Check container port mapping
docker port container-name

# Network troubleshooting in Kubernetes
kubectl exec -it pod-name -- ping service-name
kubectl describe service service-name
```

### Load Balancer Testing

```bash
# Test load balancer endpoints
for i in {1..10}; do curl -s http://load-balancer.example.com | grep server; done

# Check SSL certificate
curl -vI https://load-balancer.example.com 2>&1 | grep -E "(Server|SSL|TLS)"

# Test with specific headers
curl -H "Host: backend.internal" http://load-balancer-ip/
```

### Monitoring Integration

```bash
# Health check scripts
#!/bin/bash
if ping -c 1 target-host &> /dev/null; then
    echo "Host is reachable"
    exit 0
else
    echo "Host is unreachable"
    exit 1
fi

# Service availability check
#!/bin/bash  
if curl -f -s http://service-endpoint/health; then
    echo "Service is healthy"
else
    echo "Service is unhealthy"
    exit 1
fi
```

## Next Steps

Master these troubleshooting tools, then move on to:

- [Self-Managed Web Hosting](web-hosting.md)
- [Advanced Hosting Solutions](advanced-hosting.md)
- Container Networking concepts

!!! tip "Best Practices"
    - Always start with basic connectivity (ping)
    - Document your troubleshooting steps
    - Use verbose modes (-v) for detailed output
    - Combine multiple tools for comprehensive diagnosis
    - Automate repetitive troubleshooting tasks

!!! warning "Security Considerations"
    - Some tools require elevated privileges
    - Be careful with network scanning in production
    - Respect rate limits when testing APIs
    - Follow your organization's security policies