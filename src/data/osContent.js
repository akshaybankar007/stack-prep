// osContent.js
export const osContent = {
  "1": {
    title: "Process Management",
    sections: [
      {
        heading: "Overview",
        text: "A process is a program in execution, including the program code, current activity (program counter, registers), stack, and data section. The OS manages processes through creation, scheduling, and termination."
      },
      {
        heading: "Process States",
        text: "A process transitions through new, ready, running, waiting, and terminated states. The OS uses a process control block (PCB) to store process metadata."
      },
      {
        heading: "Process Creation and Termination",
        text: "Processes are created by system calls like fork() (Unix) or CreateProcess() (Windows). Termination occurs via exit() or when an error occurs. The parent can wait for child termination."
      },
      {
        heading: "Context Switching",
        text: "The kernel saves the state of the current process and loads the saved state of the next process. This involves switching registers, memory maps, and file descriptors, with overhead that affects performance."
      },
      {
        heading: "Key Points",
        bullets: [
          "Process vs. Program: Program is passive code; process is active execution.",
          "Process hierarchy: Parent-child relationships using fork() and exec().",
          "Orphan and zombie processes: Child outlives parent or exits while parent doesn't wait.",
          "Context-switch cost: Pure overhead; minimize by efficient scheduling."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the difference between a process and a thread.",
          "What is a PCB? What information does it contain?",
          "How does context switching work?",
          "Describe the lifecycle of a process."
        ]
      }
    ]
  },
  "2": {
    title: "Threads and Concurrency",
    sections: [
      {
        heading: "Overview",
        text: "A thread is the smallest unit of execution within a process. Multiple threads share the same address space and resources, enabling parallelism and concurrency."
      },
      {
        heading: "Thread Types",
        text: "User-level threads are managed by user libraries (e.g., pthreads) without kernel intervention; kernel-level threads are managed by the OS. Many-to-one, one-to-one, and many-to-many models describe the mapping."
      },
      {
        heading: "Concurrency Issues",
        text: "Race conditions occur when multiple threads access shared data concurrently. Synchronization mechanisms (mutexes, semaphores) are required to ensure data consistency."
      },
      {
        heading: "Threading Models",
        text: "The one-to-one model maps each user thread to a kernel thread (Linux, Windows). Many-to-one maps many user threads to one kernel thread (early Unix). Many-to-many allows multiplexing."
      },
      {
        heading: "Key Points",
        bullets: [
          "Threads share heap, code, and file descriptors but have own stack and registers.",
          "Thread-safe functions and reentrant code are essential.",
          "Posix threads (pthreads) and Windows threads are common APIs.",
          "Thread pools reduce creation overhead."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between a process and a thread?",
          "Explain the benefits of multithreading.",
          "What are race conditions and how do you prevent them?",
          "Compare user-level and kernel-level threads."
        ]
      }
    ]
  },
  "3": {
    title: "CPU Scheduling Algorithms",
    sections: [
      {
        heading: "Overview",
        text: "CPU scheduling determines which process runs next, aiming to maximize CPU utilization, throughput, and fairness while minimizing waiting and turnaround times."
      },
      {
        heading: "FCFS (First-Come, First-Served)",
        text: "The simplest algorithm: processes are executed in order of arrival. It suffers from the convoy effect, where short jobs wait for long jobs."
      },
      {
        heading: "SJF (Shortest Job First)",
        text: "Chooses the process with the smallest next CPU burst. It is optimal in terms of average waiting time but requires prediction of burst lengths. Preemptive SJF is also called Shortest Remaining Time First (SRTF)."
      },
      {
        heading: "Round Robin",
        text: "Each process gets a time quantum (e.g., 10-100 ms). If not finished, it is preempted and placed at the end of the ready queue. Fair and responsive, but quantum size affects performance."
      },
      {
        heading: "Priority Scheduling",
        text: "Each process has a priority; the highest priority runs first. Priorities can be static or dynamic. Starvation of low-priority processes is mitigated via aging."
      },
      {
        heading: "Key Points",
        bullets: [
          "Scheduling criteria: CPU utilization, throughput, turnaround, waiting, response.",
          "Preemptive vs. non-preemptive scheduling.",
          "Multilevel queue scheduling: different queues for foreground/background.",
          "Multilevel feedback queue: processes can move between queues."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Compare FCFS, SJF, and Round Robin scheduling.",
          "What is the convoy effect?",
          "How does aging solve starvation?",
          "Explain multilevel feedback queue scheduling."
        ]
      }
    ]
  },
  "4": {
    title: "Deadlock",
    sections: [
      {
        heading: "Overview",
        text: "Deadlock occurs when a set of processes are blocked because each holds a resource and waits for another resource held by another process in the set."
      },
      {
        heading: "Four Necessary Conditions",
        text: "Mutual exclusion, hold and wait, no preemption, and circular wait. All four must occur simultaneously for deadlock to exist."
      },
      {
        heading: "Deadlock Prevention",
        text: "Break any of the four conditions. For example, require processes to request all resources at once (breaking hold and wait) or allow preemption."
      },
      {
        heading: "Deadlock Avoidance",
        text: "The Banker's Algorithm checks resource allocation states to ensure safety. It requires knowledge of maximum future demands."
      },
      {
        heading: "Deadlock Detection and Recovery",
        text: "Periodically run an algorithm to detect cycles in the wait-for graph. Recovery can involve process termination or resource preemption."
      },
      {
        heading: "Key Points",
        bullets: [
          "Resource allocation graph: represents resources and processes.",
          "Deadlock vs. starvation: deadlock is circular; starvation is indefinite blocking.",
          "Dining Philosophers problem illustrates deadlock.",
          "Modern OS often ignore deadlock (e.g., Windows, Linux) and let applications handle it."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the four conditions for deadlock?",
          "Explain the Banker's Algorithm.",
          "How can deadlock be prevented?",
          "What is the difference between deadlock and livelock?"
        ]
      }
    ]
  },
  "5": {
    title: "Memory Management",
    sections: [
      {
        heading: "Overview",
        text: "Memory management involves allocating and deallocating memory to processes, ensuring efficient use and protection. It includes address translation from logical to physical addresses."
      },
      {
        heading: "Paging",
        text: "Physical memory is divided into fixed-size frames; logical memory into pages. A page table maps page numbers to frame numbers. This eliminates external fragmentation."
      },
      {
        heading: "Segmentation",
        text: "Memory is divided into variable-sized segments (e.g., code, data, stack). Each segment has a base and limit, enabling logical separation but causing external fragmentation."
      },
      {
        heading: "Combined Paging and Segmentation",
        text: "Many systems use segmentation with paging (e.g., x86). Segments have page tables, providing flexibility and efficient memory use."
      },
      {
        heading: "Key Points",
        bullets: [
          "Logical address vs. physical address: CPU generates logical; MMU translates.",
          "TLB (Translation Lookaside Buffer) caches page table entries for speed.",
          "Fragmentation: external (segments) and internal (paging).",
          "Swapping: moving entire processes to disk to free memory."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain paging and segmentation.",
          "What is a page table and how does it work?",
          "What is the TLB and why is it used?",
          "Compare internal and external fragmentation."
        ]
      }
    ]
  },
  "6": {
    title: "Virtual Memory",
    sections: [
      {
        heading: "Overview",
        text: "Virtual memory allows processes to use more memory than physically available by using disk as backing store. It enables demand paging and efficient use of memory."
      },
      {
        heading: "Demand Paging",
        text: "Pages are loaded into memory only when needed (on page faults). The page fault handler loads the page from disk, possibly evicting another page."
      },
      {
        heading: "Page Replacement Algorithms",
        text: "When memory is full, a page must be evicted. Common algorithms: FIFO, Optimal (future knowledge), LRU (Least Recently Used), Clock (second-chance)."
      },
      {
        heading: "Thrashing",
        text: "When a process spends more time paging than executing, thrashing occurs. It can be mitigated by adjusting the degree of multiprogramming or using working-set models."
      },
      {
        heading: "Key Points",
        bullets: [
          "Page fault handling: trap to OS, find free frame, load page, update page table.",
          "Copy-on-write: shared pages are copied only when written.",
          "Memory-mapped files: map files into virtual address space.",
          "Windows uses a working set to manage process memory."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain demand paging.",
          "Compare FIFO, LRU, and Optimal page replacement.",
          "What is thrashing and how can it be prevented?",
          "What is copy-on-write and how does it work?"
        ]
      }
    ]
  },
  "7": {
    title: "File Systems",
    sections: [
      {
        heading: "Overview",
        text: "A file system organizes data on storage devices, providing a hierarchical name space, access control, and efficient storage and retrieval."
      },
      {
        heading: "File Organization",
        text: "Files can be structured as contiguous, linked, or indexed allocation. Contiguous offers fast sequential access; linked uses pointers; indexed uses an index block for direct access."
      },
      {
        heading: "Directory Structure",
        text: "Directories map file names to file metadata (inodes). Single-level, two-level, tree, and acyclic graph structures are common."
      },
      {
        heading: "File System Examples",
        text: "FAT (File Allocation Table) is simple but lacks permissions. NTFS supports ACLs, journaling, and compression. ext4 is Linux's standard, with extents and journaling."
      },
      {
        heading: "Key Points",
        bullets: [
          "Inode: stores metadata (size, permissions, pointers to data blocks).",
          "Journaling: maintains a log to recover from crashes.",
          "Mounting: attaching a file system to the directory tree.",
          "VFS (Virtual File System) abstracts interfaces for different FS."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain inodes and their role.",
          "Compare FAT, NTFS, and ext4.",
          "What is journaling and why is it useful?",
          "How does the VFS work?"
        ]
      }
    ]
  },
  "8": {
    title: "I/O Management",
    sections: [
      {
        heading: "Overview",
        text: "I/O management coordinates input and output devices, providing a uniform interface to devices and optimizing performance through buffering, caching, and spooling."
      },
      {
        heading: "Device Drivers",
        text: "Drivers are kernel modules that communicate with hardware controllers. They translate OS requests into device-specific commands."
      },
      {
        heading: "Buffering and Caching",
        text: "Buffering stores data temporarily to smooth data transfer between device and memory. Caching keeps frequently accessed data in faster storage (e.g., disk cache)."
      },
      {
        heading: "Spooling",
        text: "Spooling (Simultaneous Peripheral Operation On-Line) overlaps I/O of one job with computation of another, e.g., print spooler queuing print jobs."
      },
      {
        heading: "I/O Scheduling",
        text: "Disk scheduling algorithms (SCAN, C-SCAN, SSTF) optimize disk head movement to reduce seek time and improve throughput."
      },
      {
        heading: "Key Points",
        bullets: [
          "DMA (Direct Memory Access) offloads data transfer from CPU.",
          "Interrupt-driven I/O vs. polling: interrupts are efficient for slow devices.",
          "MMIO (Memory-mapped I/O) and port-mapped I/O.",
          "Asynchronous vs. synchronous I/O."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the role of a device driver?",
          "Explain buffering and caching in I/O.",
          "What is spooling?",
          "Compare SCAN and SSTF disk scheduling."
        ]
      }
    ]
  },
  "9": {
    title: "Interprocess Communication (IPC)",
    sections: [
      {
        heading: "Overview",
        text: "IPC allows processes to exchange data and synchronize actions. It is essential for cooperative processes in multitasking environments."
      },
      {
        heading: "Pipes",
        text: "Unidirectional (or bidirectional) data streams between related processes. Anonymous pipes are for parent-child; named pipes (FIFOs) exist in the file system."
      },
      {
        heading: "Message Queues",
        text: "Messages are sent to a queue and retrieved by receivers. They allow multiple senders/receivers and can have priorities."
      },
      {
        heading: "Shared Memory",
        text: "Multiple processes map the same physical memory region. It is the fastest IPC but requires explicit synchronization (e.g., semaphores)."
      },
      {
        heading: "Sockets",
        text: "Used for communication between processes on the same or different hosts. They support both stream (TCP) and datagram (UDP) communication."
      },
      {
        heading: "Key Points",
        bullets: [
          "Signals: asynchronous notifications for process control.",
          "Remote Procedure Call (RPC): allows calling functions across address spaces.",
          "IPC performance: shared memory > pipes > sockets.",
          "Synchronization primitives (mutexes, semaphores) are often used with shared memory."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Compare pipes, message queues, and shared memory.",
          "What are named pipes?",
          "How do sockets work?",
          "Explain RPC and its advantages."
        ]
      }
    ]
  },
  "10": {
    title: "Synchronization",
    sections: [
      {
        heading: "Overview",
        text: "Synchronization mechanisms coordinate access to shared resources to maintain data consistency and avoid race conditions."
      },
      {
        heading: "Mutex (Mutual Exclusion)",
        text: "A mutex allows only one thread to hold it at a time. It is used to protect critical sections. Must be acquired and released."
      },
      {
        heading: "Semaphores",
        text: "A semaphore has a counter that can be incremented (signal) and decremented (wait). Binary semaphore (0/1) acts as mutex; counting semaphore controls access to a limited resource."
      },
      {
        heading: "Monitors",
        text: "A high-level synchronization construct that encapsulates shared data and procedures. Only one thread can be active in a monitor at a time; condition variables enable waiting/signaling."
      },
      {
        heading: "Classic Problems",
        text: "Producer-Consumer, Readers-Writers, and Dining Philosophers are classic synchronization problems used to illustrate different mechanisms."
      },
      {
        heading: "Key Points",
        bullets: [
          "Atomic operations ensure instructions complete without interruption.",
          "Spinlocks busy-wait; suitable for short critical sections.",
          "Deadlock and priority inversion are risks.",
          "Lock-free and wait-free algorithms exist for high-performance."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a mutex and how does it differ from a semaphore?",
          "Explain the producer-consumer problem and how to solve it.",
          "What is a monitor?",
          "What is priority inversion and how can it be avoided?"
        ]
      }
    ]
  },
  "11": {
    title: "System Calls",
    sections: [
      {
        heading: "Overview",
        text: "System calls provide the interface between user processes and the OS kernel. They allow processes to request privileged operations like file I/O, process creation, and communication."
      },
      {
        heading: "Common System Call Categories",
        text: "Process control (fork, exec, exit), file management (open, read, write, close), device management (ioctl), information maintenance (getpid, time), and communication (pipe, shmget)."
      },
      {
        heading: "fork() and exec()",
        text: "fork() creates a new process (child) that is a duplicate of the parent. exec() loads a new program into the current process, replacing its image."
      },
      {
        heading: "System Call Flow",
        text: "A user program invokes a system call via a library function; the CPU switches to kernel mode, handles the call, and returns to user mode. The underlying mechanism uses interrupts or traps."
      },
      {
        heading: "Key Points",
        bullets: [
          "System call overhead is high; use batch or buffered I/O for performance.",
          "POSIX standardizes many system calls (Unix/Linux).",
          "Windows uses Win32 API (which calls native NT system calls).",
          "System call numbers are passed via registers or memory."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the difference between fork() and exec().",
          "What is the purpose of system calls?",
          "How does a system call work at the hardware level?",
          "What are some categories of system calls?"
        ]
      }
    ]
  },
  "12": {
    title: "Boot Process",
    sections: [
      {
        heading: "Overview",
        text: "The boot process initializes the system hardware, loads the OS kernel, and starts system services. It involves firmware, bootloader, and kernel initialization."
      },
      {
        heading: "BIOS/UEFI",
        text: "BIOS (Basic I/O System) or UEFI (Unified Extensible Firmware Interface) performs POST (Power-On Self-Test), initializes hardware, and loads the bootloader from a boot device."
      },
      {
        heading: "Bootloader",
        text: "Bootloader (e.g., GRUB, LILO, Windows Boot Manager) loads the kernel into memory, passes parameters, and transfers control. It may support multiple OSes (dual-boot)."
      },
      {
        heading: "Kernel Initialization",
        text: "The kernel initializes internal data structures, drivers, and mounts the root file system. It then starts the init process (PID 1), which spawns user-space services."
      },
      {
        heading: "Init and Systemd",
        text: "Init is the first user-space process; systemd is a modern init system that manages services, parallel startup, and dependency handling."
      },
      {
        heading: "Key Points",
        bullets: [
          "Secure Boot ensures only signed bootloaders run.",
          "The kernel's boot process includes memory detection, CPU setup, and interrupt configuration.",
          "Boot parameters (e.g., root=, quiet) can be passed.",
          "Runlevels (SysV) or targets (systemd) define system states."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the boot process step-by-step.",
          "What is the role of the bootloader?",
          "What is the difference between BIOS and UEFI?",
          "What is systemd and how does it improve on init?"
        ]
      }
    ]
  },
  "13": {
    title: "Security and Protection",
    sections: [
      {
        heading: "Overview",
        text: "OS security ensures confidentiality, integrity, and availability of system resources. Protection mechanisms control access to objects and prevent unauthorized actions."
      },
      {
        heading: "Access Control",
        text: "Discretionary Access Control (DAC) allows owners to set permissions (Unix rwx, Windows ACLs). Mandatory Access Control (MAC) enforces system-wide policies (SELinux, AppArmor)."
      },
      {
        heading: "Authentication",
        text: "Users authenticate via passwords, biometrics, or tokens. The OS stores hashed passwords and may use challenge-response or multi-factor authentication."
      },
      {
        heading: "Security Threats",
        text: "Malware (viruses, worms, Trojans), buffer overflows, privilege escalation, and denial-of-service (DoS) are common. Mitigations include ASLR, DEP, and sandboxing."
      },
      {
        heading: "Secure Design Principles",
        text: "Least privilege, defense in depth, and fail-safe defaults. The OS should minimize attack surface and validate all inputs."
      },
      {
        heading: "Key Points",
        bullets: [
          "Capabilities vs. ACLs: capabilities grant permissions to processes.",
          "Trusted Computing Base (TCB): the set of components critical for security.",
          "Auditing logs security-relevant events.",
          "Cryptography used for file encryption (e.g., EFS, LUKS)."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the principle of least privilege?",
          "Compare DAC and MAC.",
          "How does authentication work in Unix/Linux?",
          "What are common security threats and how does the OS handle them?"
        ]
      }
    ]
  },
  "14": {
    title: "Distributed Operating Systems",
    sections: [
      {
        heading: "Overview",
        text: "A distributed OS manages a collection of independent computers that appear as a single system to users. It provides transparency in resource access, fault tolerance, and scalability."
      },
      {
        heading: "Transparency",
        text: "Location transparency (access resources by name, not location), migration transparency (resources can move), replication transparency (multiple copies), and failure transparency (recover from failures)."
      },
      {
        heading: "Communication",
        text: "Distributed systems use message passing over networks. Remote Procedure Call (RPC) abstracts communication as local procedure calls. Reliable communication protocols (e.g., TCP) ensure delivery."
      },
      {
        heading: "Distributed File Systems",
        text: "Examples: NFS (Network File System), AFS (Andrew File System). They allow access to remote files as if local, with caching and consistency semantics."
      },
      {
        heading: "Clock Synchronization",
        text: "Logical clocks (Lamport) and vector clocks order events. Physical clocks use NTP (Network Time Protocol) to synchronize time across nodes."
      },
      {
        heading: "Key Points",
        bullets: [
          "Distributed shared memory (DSM) provides a shared memory abstraction.",
          "Consistency models: strict, sequential, causal, eventual.",
          "Fault tolerance: redundancy, replication, and checkpointing.",
          "Middleware (e.g., CORBA, DCOM) simplifies distributed programming."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a distributed operating system?",
          "Explain transparency in distributed systems.",
          "How does RPC work?",
          "Compare NFS and AFS."
        ]
      }
    ]
  },
  "15": {
    title: "Real-Time Operating Systems (RTOS)",
    sections: [
      {
        heading: "Overview",
        text: "RTOS are designed for applications with strict timing requirements, such as embedded systems, robotics, and industrial control. They guarantee response within deadlines."
      },
      {
        heading: "Hard vs. Soft Real-Time",
        text: "Hard real-time: missing a deadline causes catastrophic failure (e.g., medical devices). Soft real-time: deadlines are desirable but not critical (e.g., multimedia streaming)."
      },
      {
        heading: "RTOS Scheduling",
        text: "Rate Monotonic Scheduling (RMS) assigns fixed priorities based on periods; Earliest Deadline First (EDF) is dynamic and optimal. Preemptive scheduling is common."
      },
      {
        heading: "RTOS Features",
        text: "Deterministic behavior, low interrupt latency, priority inversion handling (priority ceiling protocol), and minimal context-switch overhead. Examples: VxWorks, FreeRTOS, QNX."
      },
      {
        heading: "Key Points",
        bullets: [
          "Interrupt service routines (ISRs) should be short.",
          "Priority inversion: solved by priority inheritance or ceiling.",
          "RTOS often provide a small footprint and predictable memory allocation.",
          "Periodic and aperiodic tasks."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between hard and soft real-time?",
          "Explain Rate Monotonic Scheduling.",
          "How does RTOS handle priority inversion?",
          "What are typical applications of RTOS?"
        ]
      }
    ]
  },
  "16": {
    title: "Virtualization and Hypervisors",
    sections: [
      {
        heading: "Overview",
        text: "Virtualization abstracts hardware resources to run multiple guest OSes on a single physical host. A hypervisor (VMM) manages the virtual machines."
      },
      {
        heading: "Type 1 vs. Type 2 Hypervisors",
        text: "Type 1 (bare-metal) runs directly on hardware (e.g., VMware ESXi, KVM). Type 2 runs on a host OS (e.g., VirtualBox, VMware Workstation)."
      },
      {
        heading: "Hardware-Assisted Virtualization",
        text: "Intel VT-x and AMD-V add CPU instructions to reduce virtualization overhead. They support guest OS execution in non-root mode with traps to the hypervisor."
      },
      {
        heading: "Paravirtualization and Full Virtualization",
        text: "Full virtualization emulates hardware; paravirtualization requires modified guest OS for improved performance (e.g., Xen)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Virtual machines provide isolation and encapsulation.",
          "Containerization (Docker) is OS-level virtualization, lighter than full VM.",
          "Live migration: moving a VM without downtime.",
          "Hypercall: a system call from guest to hypervisor."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a hypervisor and what are its types?",
          "Explain hardware-assisted virtualization.",
          "Compare full virtualization and paravirtualization.",
          "What is the difference between virtual machines and containers?"
        ]
      }
    ]
  },
  "17": {
    title: "Shell and Command Interpreter",
    sections: [
      {
        heading: "Overview",
        text: "The shell is a command-line interpreter that accepts user commands, executes programs, and provides a scripting language for automating tasks."
      },
      {
        heading: "Shell Types",
        text: "Common shells: sh (Bourne), bash (Bourne Again), csh, zsh. Each offers different features: history, job control, aliases, and variable expansions."
      },
      {
        heading: "Command Execution",
        text: "The shell parses the command line, expands wildcards and variables, finds the executable using PATH, and forks a child to execute it (via exec)."
      },
      {
        heading: "Shell Scripting",
        text: "Scripts combine commands, conditionals, loops, and functions. They are powerful for system administration and automation (e.g., cron jobs)."
      },
      {
        heading: "Key Points",
        bullets: [
          "I/O redirection: >, <, | (pipes).",
          "Job control: background (&), foreground (fg), suspend (Ctrl+Z).",
          "Environment variables (e.g., PATH, HOME) affect behavior.",
          "Shell built-ins: cd, echo, export, etc."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the shell and what does it do?",
          "Explain how the shell executes a command.",
          "What are environment variables?",
          "Write a simple shell script to perform a task."
        ]
      }
    ]
  }
};