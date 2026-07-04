// cnContent.js
export const cnContent = {
  "1": {
    title: "OSI Model",
    sections: [
      {
        heading: "Overview",
        text: "The Open Systems Interconnection (OSI) model is a reference framework that standardizes networking functions into seven distinct layers. It helps in understanding and troubleshooting network communication."
      },
      {
        heading: "Layer 7 – Application",
        text: "Provides network services to end-user applications (e.g., HTTP, SMTP, FTP). It handles user authentication and message formatting."
      },
      {
        heading: "Layer 6 – Presentation",
        text: "Translates data between the application and the network. It handles data encryption, compression, and character encoding (e.g., SSL/TLS, JPEG)."
      },
      {
        heading: "Layer 5 – Session",
        text: "Establishes, manages, and terminates communication sessions (connections) between applications. It handles dialog control and synchronization (e.g., NetBIOS)."
      },
      {
        heading: "Layer 4 – Transport",
        text: "Provides reliable or unreliable data delivery and flow control. Segments data and reassembles it at the destination (e.g., TCP, UDP)."
      },
      {
        heading: "Layer 3 – Network",
        text: "Handles logical addressing and routing of packets across networks (e.g., IP, ICMP). It determines the best path using routing protocols."
      },
      {
        heading: "Layer 2 – Data Link",
        text: "Frames packets and handles physical addressing (MAC addresses). It provides error detection and access control (e.g., Ethernet, PPP)."
      },
      {
        heading: "Layer 1 – Physical",
        text: "Transmits raw bit streams over physical media (e.g., cables, fiber optics). It defines electrical, mechanical, and procedural interfaces."
      },
      {
        heading: "Key Points",
        bullets: [
          "The OSI model is a conceptual framework; TCP/IP is the practical implementation.",
          "Each layer provides services to the layer above and uses services from the layer below.",
          "Common mnemonics: 'Please Do Not Throw Sausage Pizza Away' (Layer 7 to 1).",
          "Encapsulation: data is wrapped with headers/trailers at each layer."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the seven layers of the OSI model?",
          "Explain the function of each layer.",
          "How does encapsulation work in the OSI model?",
          "Compare the OSI and TCP/IP models."
        ]
      }
    ]
  },
  "2": {
    title: "TCP/IP Model",
    sections: [
      {
        heading: "Overview",
        text: "The TCP/IP model is the practical implementation of networking used on the Internet. It has four layers: Application, Transport, Internet, and Network Access."
      },
      {
        heading: "Application Layer",
        text: "Equivalent to OSI Layers 5–7. It includes protocols like HTTP, FTP, SMTP, DNS, and DHCP. It provides high-level APIs for network applications."
      },
      {
        heading: "Transport Layer",
        text: "Corresponds to OSI Layer 4. Provides end-to-end communication using TCP (reliable, connection-oriented) or UDP (unreliable, connectionless)."
      },
      {
        heading: "Internet Layer",
        text: "Equivalent to OSI Layer 3. It handles packet routing and addressing via IP. ICMP and ARP operate at this layer."
      },
      {
        heading: "Network Access Layer",
        text: "Covers OSI Layers 1 and 2. It defines how data is transmitted over physical media, including Ethernet, Wi-Fi, and PPP."
      },
      {
        heading: "Key Points",
        bullets: [
          "TCP/IP is the foundation of the Internet and most modern networks.",
          "It is simpler than OSI, with fewer layers, but less granular.",
          "Protocols are independent of the underlying physical network.",
          "The suite also includes routing protocols like RIP, OSPF, BGP."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the layers of the TCP/IP model?",
          "How does the TCP/IP model differ from the OSI model?",
          "Explain the role of each layer in TCP/IP.",
          "Why is TCP/IP more widely used than OSI?"
        ]
      }
    ]
  },
  "3": {
    title: "IP Addressing and Subnetting",
    sections: [
      {
        heading: "Overview",
        text: "IP addresses uniquely identify devices on a network. IPv4 uses 32-bit addresses; IPv6 uses 128-bit. Subnetting divides networks into smaller subnets."
      },
      {
        heading: "IPv4 Address Structure",
        text: "IPv4 addresses are written as four octets (e.g., 192.168.1.1). They have a network portion and a host portion, determined by the subnet mask."
      },
      {
        heading: "Subnetting",
        text: "Subnetting involves borrowing bits from the host portion to create subnets. It improves efficiency and reduces broadcast domains. CIDR notation (e.g., /24) defines the prefix length."
      },
      {
        heading: "IPv6",
        text: "IPv6 uses 128-bit addresses (8 groups of hex digits) to solve IPv4 exhaustion. It supports auto-configuration and eliminates NAT, with features like anycast and multicast."
      },
      {
        heading: "Public vs. Private Addresses",
        text: "Private IP ranges (e.g., 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are used within internal networks and are not routable on the public Internet."
      },
      {
        heading: "Key Points",
        bullets: [
          "Subnet mask: 255.255.255.0 (or /24) means 24 bits for network, 8 bits for hosts.",
          "Subnetting calculations: number of subnets = 2^n, hosts per subnet = 2^(remaining bits) - 2.",
          "VLSM (Variable Length Subnet Mask) allows different subnet sizes.",
          "NAT maps private addresses to public addresses for internet access."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between IPv4 and IPv6?",
          "Explain subnetting with an example.",
          "How does CIDR work?",
          "What are private IP addresses and why are they used?"
        ]
      }
    ]
  },
  "4": {
    title: "Domain Name System (DNS)",
    sections: [
      {
        heading: "Overview",
        text: "DNS translates human-readable domain names (e.g., www.example.com) into IP addresses. It is a hierarchical, distributed database system."
      },
      {
        heading: "DNS Hierarchy",
        text: "Root servers (top-level) → Top-Level Domains (.com, .org) → Authoritative Name Servers for specific domains. Recursive and iterative queries resolve names."
      },
      {
        heading: "DNS Records",
        text: "A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail exchange), NS (name server), TXT (text). Each record type stores different information."
      },
      {
        heading: "DNS Resolution Process",
        text: "A client sends a query to a local resolver, which may query root servers, TLD servers, and authoritative servers. Caching reduces latency."
      },
      {
        heading: "DNSSEC",
        text: "DNS Security Extensions add cryptographic signatures to DNS data to prevent spoofing and man-in-the-middle attacks."
      },
      {
        heading: "Key Points",
        bullets: [
          "DNS uses UDP (port 53) for queries and TCP for zone transfers.",
          "Caching occurs at multiple levels (browser, OS, local DNS, ISP).",
          "Reverse DNS maps IP to domain name (PTR records).",
          "Dynamic DNS allows automatic updates for changing IPs."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How does DNS work?",
          "Explain the different types of DNS records.",
          "What is the difference between recursive and iterative queries?",
          "Why is DNSSEC important?"
        ]
      }
    ]
  },
  "5": {
    title: "HTTP and HTTPS",
    sections: [
      {
        heading: "Overview",
        text: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the Web. HTTPS adds encryption via SSL/TLS for secure communication."
      },
      {
        heading: "HTTP Methods",
        text: "GET (retrieve), POST (submit data), PUT (update), DELETE (remove), HEAD (metadata), OPTIONS (supported methods). Each has specific semantic meaning."
      },
      {
        heading: "HTTP Status Codes",
        text: "Informational (1xx), Success (2xx), Redirection (3xx), Client Error (4xx), Server Error (5xx). Common: 200 OK, 404 Not Found, 500 Internal Server Error."
      },
      {
        heading: "HTTPS and TLS/SSL",
        text: "HTTPS encrypts HTTP traffic using TLS (Transport Layer Security). It ensures confidentiality, integrity, and authentication via digital certificates."
      },
      {
        heading: "HTTP/2 and HTTP/3",
        text: "HTTP/2 introduces multiplexing and server push. HTTP/3 uses QUIC over UDP, reducing latency and improving performance."
      },
      {
        heading: "Key Points",
        bullets: [
          "HTTP is stateless; cookies and sessions add state.",
          "TLS handshake involves cipher negotiation, certificate validation, and key exchange.",
          "HTTP uses port 80; HTTPS uses port 443.",
          "Caching headers (Cache-Control, ETag) reduce server load."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the HTTP request/response cycle.",
          "What are the differences between HTTP and HTTPS?",
          "Describe common HTTP status codes and their meanings.",
          "How does TLS work?"
        ]
      }
    ]
  },
  "6": {
    title: "TCP vs UDP",
    sections: [
      {
        heading: "Overview",
        text: "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two main transport layer protocols. They differ in reliability, ordering, and overhead."
      },
      {
        heading: "TCP Features",
        text: "Connection-oriented, reliable, in-order delivery, flow control, congestion control, and error checking. Uses three-way handshake (SYN, SYN-ACK, ACK) to establish connection."
      },
      {
        heading: "UDP Features",
        text: "Connectionless, no reliability, no ordering, low overhead, fast. It adds only checksum error checking. Used for streaming, DNS, and DHCP."
      },
      {
        heading: "TCP vs UDP Comparison",
        text: "TCP is heavier, suitable for file transfers, emails, web browsing. UDP is lightweight, used for real-time applications (voice, video, gaming) where occasional loss is acceptable."
      },
      {
        heading: "TCP Header Fields",
        text: "Source port, destination port, sequence number, acknowledgment number, flags (SYN, ACK, FIN, RST), window size, checksum."
      },
      {
        heading: "UDP Header",
        text: "Source port, destination port, length, checksum. Minimal overhead, making it efficient."
      },
      {
        heading: "Key Points",
        bullets: [
          "TCP ensures all packets arrive and in order; UDP does not.",
          "TCP uses slow start, congestion avoidance, fast retransmit.",
          "UDP has no flow control; applications must handle it.",
          "TCP is stream-oriented; UDP is message-oriented."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Compare TCP and UDP.",
          "Explain the TCP three-way handshake.",
          "When would you use UDP instead of TCP?",
          "What is the purpose of the sequence number in TCP?"
        ]
      }
    ]
  },
  "7": {
    title: "Routing Algorithms",
    sections: [
      {
        heading: "Overview",
        text: "Routing algorithms determine the best path for data packets from source to destination. They are classified as distance-vector or link-state, and can be interior or exterior."
      },
      {
        heading: "RIP (Routing Information Protocol)",
        text: "A distance-vector protocol using hop count as metric (max 15). It uses Bellman-Ford algorithm and is simple but limited to small networks."
      },
      {
        heading: "OSPF (Open Shortest Path First)",
        text: "A link-state protocol that uses Dijkstra's algorithm. It scales well, supports VLSM, and converges quickly. It uses areas to reduce overhead."
      },
      {
        heading: "BGP (Border Gateway Protocol)",
        text: "The routing protocol of the Internet. It is a path-vector protocol that makes decisions based on path attributes (AS path, next-hop, local preference)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Distance-vector: periodic updates of entire routing table (RIP).",
          "Link-state: sends updates of link-state changes (OSPF).",
          "BGP uses TCP (port 179) and is policy-based.",
          "Metric: hop count, bandwidth, delay, cost are common."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between distance-vector and link-state routing?",
          "Explain how OSPF works.",
          "What is BGP used for?",
          "How does RIP avoid routing loops?"
        ]
      }
    ]
  },
  "8": {
    title: "Ethernet and MAC Addresses",
    sections: [
      {
        heading: "Overview",
        text: "Ethernet is the most common LAN technology. MAC (Media Access Control) addresses are 48-bit unique identifiers burned into network interfaces."
      },
      {
        heading: "Ethernet Frame Structure",
        text: "Preamble, SFD, destination MAC, source MAC, EtherType/Length, payload, and FCS (Frame Check Sequence). The payload carries IP packets."
      },
      {
        heading: "MAC Addressing",
        text: "MAC addresses (e.g., 00:1A:2B:3C:4D:5E) are assigned by manufacturers. The first 24 bits are OUI (Organizationally Unique Identifier)."
      },
      {
        heading: "CSMA/CD and CSMA/CA",
        text: "Ethernet uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) for wired networks; Wi-Fi uses CSMA/CA (Collision Avoidance) for wireless."
      },
      {
        heading: "Switching",
        text: "Switches learn MAC addresses and forward frames based on destination MAC. They reduce collisions and segment networks."
      },
      {
        heading: "Key Points",
        bullets: [
          "MAC addresses are layer-2 addresses; IP addresses are layer-3.",
          "ARP resolves IP to MAC addresses.",
          "Ethernet supports speeds from 10 Mbps to 400 Gbps.",
          "VLANs use MAC addresses for segmentation."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a MAC address and how is it used?",
          "Explain the Ethernet frame format.",
          "How does CSMA/CD work?",
          "What is the difference between a switch and a hub?"
        ]
      }
    ]
  },
  "9": {
    title: "Switching Techniques",
    sections: [
      {
        heading: "Overview",
        text: "Switching refers to how data is forwarded through a network. The main techniques are circuit switching, packet switching, and message switching."
      },
      {
        heading: "Circuit Switching",
        text: "A dedicated path is established between sender and receiver (like traditional phone networks). It guarantees bandwidth but is inefficient for bursty data."
      },
      {
        heading: "Packet Switching",
        text: "Data is divided into packets, each routed independently. It is connectionless (datagram) or connection-oriented (virtual circuit). Used in the Internet."
      },
      {
        heading: "Message Switching",
        text: "Entire messages are forwarded from one node to the next, stored until the next hop is available. Not common today; was used in store-and-forward networks."
      },
      {
        heading: "Virtual Circuit vs. Datagram",
        text: "Virtual circuit establishes a logical path before transmission (like ATM). Datagram packets are independent and take different routes (like IP)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Packet switching is efficient and robust.",
          "Circuit switching has a fixed latency; packet switching has variable latency.",
          "MPLS uses label switching for faster forwarding.",
          "Store-and-forward switching checks frames before forwarding."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Compare circuit switching and packet switching.",
          "What is a datagram?",
          "Explain virtual circuit switching.",
          "Which switching technique is used in the Internet?"
        ]
      }
    ]
  },
  "10": {
    title: "Network Security Basics",
    sections: [
      {
        heading: "Overview",
        text: "Network security involves protecting data in transit and network infrastructure from attacks. It includes firewalls, encryption, VPNs, and intrusion detection."
      },
      {
        heading: "Firewalls",
        text: "Firewalls filter traffic based on rules (packet filtering, stateful inspection, application-level). They can be hardware or software."
      },
      {
        heading: "VPNs (Virtual Private Networks)",
        text: "VPNs create secure tunnels over public networks using encryption (IPsec, SSL/TLS). They provide confidentiality and integrity for remote access."
      },
      {
        heading: "SSL/TLS",
        text: "TLS encrypts application-layer data. It uses asymmetric cryptography for handshake and symmetric encryption for data transfer."
      },
      {
        heading: "Attacks and Defenses",
        text: "Common attacks: DDoS, MITM, packet sniffing, spoofing. Defenses include encryption, authentication, intrusion prevention, and regular patching."
      },
      {
        heading: "Key Points",
        bullets: [
          "Security triad: Confidentiality, Integrity, Availability (CIA).",
          "Authentication can be done via passwords, tokens, biometrics.",
          "IPsec secures IP communications; TLS secures web traffic.",
          "Network segmentation limits attack surface."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a firewall and how does it work?",
          "Explain how VPNs ensure security.",
          "What is the difference between SSL and TLS?",
          "How can you protect a network against DDoS attacks?"
        ]
      }
    ]
  },
  "11": {
    title: "Network Layer Protocols",
    sections: [
      {
        heading: "Overview",
        text: "Network layer protocols handle addressing, routing, and forwarding. Key protocols include IP, ICMP, ARP, and RARP."
      },
      {
        heading: "ICMP (Internet Control Message Protocol)",
        text: "Used for error reporting and diagnostics (e.g., ping, traceroute). It carries messages like Echo Request/Reply, Destination Unreachable, Time Exceeded."
      },
      {
        heading: "ARP (Address Resolution Protocol)",
        text: "ARP maps IP addresses to MAC addresses within a local network. It broadcasts a request; the target replies with its MAC. ARP cache stores mappings."
      },
      {
        heading: "RARP (Reverse ARP)",
        text: "RARP maps MAC addresses to IP addresses, used by diskless workstations to discover their own IP. It has been largely replaced by BOOTP and DHCP."
      },
      {
        heading: "IP Forwarding",
        text: "When a packet arrives, the router checks its routing table to determine the next hop. It decrements TTL and recalculates checksum before forwarding."
      },
      {
        heading: "Key Points",
        bullets: [
          "ICMP is encapsulated in IP datagrams.",
          "ARP broadcasts are limited to the local subnet.",
          "Proxy ARP allows a router to respond for another network.",
          "IPv6 uses ND (Neighbor Discovery) instead of ARP."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is ICMP used for?",
          "Explain ARP and its purpose.",
          "What is the difference between ARP and RARP?",
          "How does IP forwarding work?"
        ]
      }
    ]
  },
  "12": {
    title: "Transport Layer Features",
    sections: [
      {
        heading: "Overview",
        text: "The transport layer provides end-to-end communication services. Key features include flow control, congestion control, and reliability."
      },
      {
        heading: "Flow Control",
        text: "Flow control prevents a sender from overwhelming a receiver. TCP uses sliding windows; the receiver advertises a window size. Stop-and-wait and sliding window are two approaches."
      },
      {
        heading: "Congestion Control",
        text: "Congestion control manages network load to avoid congestion collapse. TCP uses algorithms: slow start, congestion avoidance, fast retransmit, fast recovery."
      },
      {
        heading: "Reliability in TCP",
        text: "TCP ensures reliable delivery via sequence numbers, acknowledgments (ACKs), and retransmissions. It uses cumulative ACKs and selective ACKs (SACK)."
      },
      {
        heading: "Connection Management",
        text: "TCP connection establishment (three-way handshake) and termination (four-way handshake). States: LISTEN, SYN-SENT, ESTABLISHED, CLOSE-WAIT, etc."
      },
      {
        heading: "Key Points",
        bullets: [
          "UDP does not implement flow or congestion control.",
          "Congestion control is distinct from flow control (receiver vs. network).",
          "TCP timer: retransmission timer, persistence timer, keepalive timer.",
          "ECN (Explicit Congestion Notification) marks packets instead of dropping."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain TCP flow control.",
          "What is congestion control and how does TCP handle it?",
          "Describe the TCP three-way handshake.",
          "What is the difference between flow control and congestion control?"
        ]
      }
    ]
  },
  "13": {
    title: "Application Layer Protocols",
    sections: [
      {
        heading: "Overview",
        text: "The application layer provides protocols for specific user services. Common ones include FTP, SMTP, DHCP, Telnet, and SNMP."
      },
      {
        heading: "FTP (File Transfer Protocol)",
        text: "Transfers files between client and server. Uses two connections: control (port 21) and data (port 20). Supports active and passive modes."
      },
      {
        heading: "SMTP (Simple Mail Transfer Protocol)",
        text: "Used for sending emails between servers. It uses port 25. SMTP is push protocol; POP3/IMAP are used for retrieval."
      },
      {
        heading: "DHCP (Dynamic Host Configuration Protocol)",
        text: "Automatically assigns IP addresses and network configuration to clients. Uses DORA (Discover, Offer, Request, Acknowledge) process."
      },
      {
        heading: "Telnet and SSH",
        text: "Telnet (port 23) is an unencrypted remote terminal protocol; SSH (port 22) provides secure encrypted remote access."
      },
      {
        heading: "SNMP (Simple Network Management Protocol)",
        text: "Used for monitoring and managing network devices. It uses MIBs (Management Information Bases) and has versions with security improvements."
      },
      {
        heading: "Key Points",
        bullets: [
          "FTP uses two ports; passive mode helps with firewalls.",
          "SMTP is store-and-forward; uses MX records.",
          "DHCP leases IPs; renewals happen periodically.",
          "Telnet is obsolete; SSH is recommended."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain how FTP works.",
          "What is the difference between SMTP, POP3, and IMAP?",
          "How does DHCP assign IP addresses?",
          "Why is SSH preferred over Telnet?"
        ]
      }
    ]
  },
  "14": {
    title: "Wireless Networking",
    sections: [
      {
        heading: "Overview",
        text: "Wireless networking uses radio waves to connect devices. Key technologies include Wi-Fi (IEEE 802.11), Bluetooth, and cellular networks."
      },
      {
        heading: "Wi-Fi Standards",
        text: "802.11a/b/g/n/ac/ax (Wi-Fi 6). They differ in frequency bands (2.4 GHz, 5 GHz, 6 GHz), data rates, and modulation techniques (OFDM, OFDMA)."
      },
      {
        heading: "Bluetooth",
        text: "Short-range (≈10 m) wireless technology for personal area networks. It uses master-slave piconets and supports speeds up to 2 Mbps (Classic) and 2 Mbps (BLE)."
      },
      {
        heading: "Cellular Networks",
        text: "Mobile networks (2G/GSM, 3G/UMTS, 4G/LTE, 5G) provide wide-area coverage. They use technologies like CDMA, OFDMA, and MIMO."
      },
      {
        heading: "Challenges in Wireless",
        text: "Interference, signal attenuation, security (encryption like WPA3), mobility management, and power consumption."
      },
      {
        heading: "Key Points",
        bullets: [
          "Wi-Fi uses CSMA/CA; Bluetooth uses frequency hopping.",
          "WPA2/WPA3 provide Wi-Fi security.",
          "5G introduces low latency and massive IoT connectivity.",
          "Ad-hoc and infrastructure modes for Wi-Fi."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the different Wi-Fi standards?",
          "How does CSMA/CA differ from CSMA/CD?",
          "What is Bluetooth and how does it work?",
          "Explain the evolution from 1G to 5G."
        ]
      }
    ]
  },
  "15": {
    title: "Network Address Translation (NAT)",
    sections: [
      {
        heading: "Overview",
        text: "NAT translates private IP addresses to a public IP address (or vice versa) for internet access. It conserves IPv4 addresses and provides a layer of security."
      },
      {
        heading: "Static NAT",
        text: "One-to-one mapping between private and public IP. Used for hosting servers that need a fixed public address."
      },
      {
        heading: "Dynamic NAT",
        text: "Maps a private IP to a public IP from a pool. No fixed mapping; useful when many hosts need occasional internet access."
      },
      {
        heading: "PAT (Port Address Translation)",
        text: "Also called NAT overload. Multiple private IPs map to a single public IP using different source ports. This is common in home routers."
      },
      {
        heading: "NAT Traversal",
        text: "Protocols like STUN, TURN, and ICE help establish peer-to-peer connections through NATs, important for VoIP and gaming."
      },
      {
        heading: "Key Points",
        bullets: [
          "NAT modifies IP headers and may update checksums.",
          "IPv6 is designed to avoid NAT, but NAT64 exists for IPv6-IPv4 translation.",
          "Port forwarding redirects incoming traffic to specific internal hosts.",
          "CGNAT (Carrier-Grade NAT) is used by ISPs to extend IPv4 lifetime."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is NAT and why is it used?",
          "Explain the difference between static, dynamic, and PAT.",
          "How does PAT work?",
          "What are the limitations of NAT?"
        ]
      }
    ]
  },
  "16": {
    title: "Quality of Service (QoS)",
    sections: [
      {
        heading: "Overview",
        text: "QoS refers to traffic prioritization and resource reservation to ensure performance for critical applications. It addresses bandwidth, delay, jitter, and packet loss."
      },
      {
        heading: "QoS Mechanisms",
        text: "Classification, marking (DSCP, IP Precedence), policing, shaping, and congestion management (queuing algorithms like WFQ, CBWFQ)."
      },
      {
        heading: "Traffic Shaping vs. Policing",
        text: "Shaping buffers traffic to smooth bursts; policing drops or remarks traffic that exceeds a rate limit. Shaping is applied on output, policing on input."
      },
      {
        heading: "Queuing Algorithms",
        text: "FIFO (best effort), Priority Queuing (strict priority), Round Robin, Weighted Fair Queuing (WFQ), and Low Latency Queuing (LLQ) for real-time traffic."
      },
      {
        heading: "DiffServ and IntServ",
        text: "Integrated Services (IntServ) reserves resources per flow using RSVP. Differentiated Services (DiffServ) aggregates traffic classes and is more scalable."
      },
      {
        heading: "Key Points",
        bullets: [
          "QoS is essential for VoIP, video conferencing, and critical business apps.",
          "DSCP (Differentiated Services Code Point) is used in IP header.",
          "Congestion avoidance: WRED (Weighted Random Early Detection).",
          "Bandwidth reservation can be done via MPLS-TE or RSVP."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is QoS and why is it important?",
          "Explain DiffServ and IntServ.",
          "What are some queuing algorithms used for QoS?",
          "How does traffic shaping differ from policing?"
        ]
      }
    ]
  },
  "17": {
    title: "Error Detection and Correction",
    sections: [
      {
        heading: "Overview",
        text: "Error detection and correction techniques ensure data integrity during transmission. They add redundant bits to detect or correct errors caused by noise."
      },
      {
        heading: "Checksum",
        text: "A simple checksum adds all bytes and negates the result. TCP and IP use 16-bit checksums to detect errors. It catches many but not all errors."
      },
      {
        heading: "CRC (Cyclic Redundancy Check)",
        text: "CRC uses polynomial division to produce a remainder appended to the frame. It is highly effective for detecting burst errors. Common CRC-32, CRC-16."
      },
      {
        heading: "Parity Bits",
        text: "Even or odd parity adds one bit to make the number of 1s even or odd. It detects single-bit errors but not multiple-bit errors."
      },
      {
        heading: "Forward Error Correction (FEC)",
        text: "FEC adds redundancy so that the receiver can correct errors without retransmission (e.g., Hamming codes, Reed-Solomon). Used in satellite and wireless."
      },
      {
        heading: "Key Points",
        bullets: [
          "CRC is used in Ethernet, Wi-Fi, and many other protocols.",
          "Checksums are simpler but less robust.",
          "Hamming codes can correct single-bit errors.",
          "Error detection vs. correction: correction requires more overhead."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between error detection and error correction?",
          "Explain CRC and how it works.",
          "What is a checksum and where is it used?",
          "How does Hamming code correct errors?"
        ]
      }
    ]
  }
};