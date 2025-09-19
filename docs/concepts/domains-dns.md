# Domain Names & DNS

Domain names and DNS management are fundamental to web infrastructure. Understanding these concepts is essential for DevOps engineers managing web applications and services.

## Name Servers

Name servers are the backbone of the DNS system, translating domain names into IP addresses.

### Understanding Name Servers

- **[What Is A Name Server? | Forbes Advisor](https://www.forbes.com/advisor/business/software/what-is-a-name-server/)**
  
  Comprehensive explanation of name server functionality and management.

## Domain Names

Domain names provide human-readable addresses for websites and services, making the internet accessible to users.

### Domain Name Basics

- **[What is a Domain Name? | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name)**
  
  Detailed guide covering domain name structure, registration, and management.

## URLs (Uniform Resource Locators)

URLs specify the location of resources on the internet, combining domain names with specific paths and parameters.

### URL Structure

- **[What is a URL? | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)**
  
  Complete breakdown of URL components and their purposes.

## DNS Management in DevOps

### DNS Record Types

| Record Type | Purpose | Example |
|-------------|---------|---------|
| A | Points domain to IPv4 address | example.com → 192.168.1.1 |
| AAAA | Points domain to IPv6 address | example.com → 2001:db8::1 |
| CNAME | Alias one domain to another | www.example.com → example.com |
| MX | Mail server records | example.com → mail.example.com |
| TXT | Text records (SPF, DKIM, verification) | Various text-based configurations |
| NS | Name server records | Delegates DNS authority |

### DNS Propagation

DNS changes take time to propagate globally due to caching mechanisms:

- **TTL (Time To Live)**: Controls cache duration
- **Global Propagation**: Can take 24-48 hours
- **Testing Changes**: Use tools like dig, nslookup, or online DNS checkers

## Common DNS Configuration Patterns

### Load Balancing with DNS

```yaml
# Example DNS configuration for load balancing
A records:
  api.example.com:
    - 192.168.1.10
    - 192.168.1.11
    - 192.168.1.12
  TTL: 300  # Short TTL for quick failover
```

### Subdomain Organization

```
production:   app.example.com
staging:      staging-app.example.com  
development:  dev-app.example.com
api:          api.example.com
cdn:          cdn.example.com
```

## DNS Security Considerations

!!! warning "Security Best Practices"
    - **DNSSEC**: Implement DNS Security Extensions
    - **DNS over HTTPS (DoH)**: Encrypt DNS queries
    - **Regular Monitoring**: Watch for unauthorized changes
    - **Access Control**: Restrict DNS management permissions

### Common DNS Attacks

- **DNS Spoofing**: Redirecting traffic to malicious servers
- **DNS Cache Poisoning**: Corrupting DNS resolver caches  
- **DNS Amplification**: DDoS attacks using DNS responses
- **Domain Hijacking**: Unauthorized domain control

## DNS Monitoring & Troubleshooting

### Essential Tools

- **dig**: Command-line DNS lookup utility
- **nslookup**: Interactive DNS troubleshooting
- **host**: Simple DNS lookup tool
- **Online DNS Checkers**: Global propagation verification

### Common Issues

| Issue | Symptoms | Troubleshooting Steps |
|-------|----------|---------------------|
| DNS Resolution Failure | Site unreachable | Check A/AAAA records, verify name servers |
| Slow Resolution | Page load delays | Check TTL values, DNS server performance |
| Intermittent Issues | Sporadic failures | Test multiple DNS servers, check propagation |
| Email Delivery Problems | Mail bounces | Verify MX records, SPF, DKIM configuration |

## Infrastructure as Code for DNS

### Terraform Example

```hcl
resource "cloudflare_record" "api" {
  zone_id = var.cloudflare_zone_id
  name    = "api"
  value   = "192.168.1.10"
  type    = "A"
  ttl     = 300
}

resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  value   = "example.com"
  type    = "CNAME"
  ttl     = 1
}
```

## Next Steps

With domain and DNS knowledge, you're ready to:

- [Set up Linux Servers](../linux/introduction.md) with proper DNS configuration
- [Implement SSL Certificates](ssl.md) for your domains
- [Configure Load Balancers](../linux/advanced-hosting.md) with DNS

!!! tip "DevOps Integration"
    DNS management is crucial for blue-green deployments, service discovery, and infrastructure automation. Consider using infrastructure as code tools for DNS configuration.