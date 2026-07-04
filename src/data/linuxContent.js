// linuxContent.js
export const linuxContent = {
  "1": {
    title: "Linux File System Hierarchy",
    sections: [
      {
        heading: "Overview",
        text: "The Filesystem Hierarchy Standard (FHS) defines the structure of directories in Linux. It ensures consistency across distributions."
      },
      {
        heading: "Root Directory (/)",
        text: "The top-level directory. Everything starts from here. Contains essential system directories and mount points."
      },
      {
        heading: "/bin, /sbin, /usr/bin, /usr/sbin",
        text: "User and system binaries. /bin contains essential commands (ls, cp); /sbin for system administration (fdisk, mkfs). /usr/bin holds most user programs."
      },
      {
        heading: "/etc",
        text: "Configuration files for system and applications (e.g., /etc/passwd, /etc/fstab, /etc/ssh/sshd_config)."
      },
      {
        heading: "/var",
        text: "Variable data: logs (/var/log), spool (/var/spool), cache (/var/cache), and temporary files."
      },
      {
        heading: "/tmp and /var/tmp",
        text: "Temporary files. /tmp is cleared on reboot; /var/tmp persists across reboots."
      },
      {
        heading: "/home and /root",
        text: "User home directories (/home/username) and root's home (/root)."
      },
      {
        heading: "/dev",
        text: "Device files representing hardware (e.g., /dev/sda, /dev/tty). Managed by udev."
      },
      {
        heading: "/proc and /sys",
        text: "Virtual filesystems. /proc exposes process and kernel information (e.g., /proc/cpuinfo). /sys provides device and driver info."
      },
      {
        heading: "/boot",
        text: "Boot loader files, kernel images (vmlinuz), and initrd/initramfs."
      },
      {
        heading: "/opt and /usr/local",
        text: "Optional add-on software (/opt) and locally compiled software (/usr/local)."
      },
      {
        heading: "/mnt and /media",
        text: "Mount points for temporary filesystems (/mnt) and removable media (/media)."
      },
      {
        heading: "Key Points",
        bullets: [
          "FHS ensures application compatibility and predictability.",
          "Some directories are shared (e.g., /usr) or read-only.",
          "Symbolic links often connect different locations (e.g., /bin → /usr/bin).",
          "View the hierarchy with `ls -l /` or `tree`."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the purpose of /etc, /var, and /proc?",
          "Explain the FHS.",
          "What is the difference between /bin and /usr/bin?",
          "Where are user home directories stored?"
        ]
      }
    ]
  },
  "2": {
    title: "Linux Boot Process",
    sections: [
      {
        heading: "Overview",
        text: "The Linux boot process consists of firmware initialization, bootloader execution, kernel loading, and system initialization."
      },
      {
        heading: "BIOS/UEFI and POST",
        text: "Power-On Self-Test checks hardware. BIOS or UEFI loads the bootloader from a boot device (disk, USB)."
      },
      {
        heading: "Bootloader (GRUB, LILO)",
        text: "GRUB (Grand Unified Bootloader) presents a menu and loads the kernel and initramfs into memory. It passes kernel parameters."
      },
      {
        heading: "Kernel Initialization",
        text: "The kernel initializes core subsystems (CPU, memory, interrupts, device drivers) and mounts the root filesystem (read-only initially)."
      },
      {
        heading: "initramfs",
        text: "A temporary root filesystem loaded with the kernel to load essential modules (e.g., disk drivers) and mount the real root."
      },
      {
        heading: "Init Process (PID 1)",
        text: "The kernel starts the init process (systemd on most modern systems). It mounts filesystems, starts system services, and enters the default runlevel/target."
      },
      {
        heading: "Systemd Targets and Services",
        text: "Systemd uses targets (multi-user.target, graphical.target) to define system states. It starts units (services, sockets, timers) in parallel."
      },
      {
        heading: "Key Points",
        bullets: [
          "GRUB configuration: /boot/grub/grub.cfg (auto-generated) and /etc/default/grub.",
          "Kernel parameters can be edited in GRUB for debugging or recovery.",
          "initramfs can be rebuilt with dracut or mkinitcpio.",
          "Systemd is the default init on most distributions."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the Linux boot process step by step.",
          "What is GRUB and what does it do?",
          "What is the role of initramfs?",
          "How does systemd improve over SysV init?"
        ]
      }
    ]
  },
  "3": {
    title: "Process Management in Linux",
    sections: [
      {
        heading: "Overview",
        text: "Process management involves viewing, controlling, and prioritizing running processes. Each process has a unique PID and state."
      },
      {
        heading: "Viewing Processes",
        text: "`ps` (static snapshot) with options (aux, ef). `top` (dynamic) and `htop` (interactive) display real-time CPU/memory usage and process lists."
      },
      {
        heading: "Process States",
        text: "Running (R), Sleeping (S/D), Stopped (T), Zombie (Z). Processes transition through these states during execution."
      },
      {
        heading: "Signals and Process Control",
        text: "Signals (SIGTERM, SIGKILL, SIGHUP) are used to control processes. `kill` sends signals; `kill -9` forces termination."
      },
      {
        heading: "Priorities and Nice Values",
        text: "Nice values range from -20 (highest priority) to 19 (lowest). `nice` starts a process with a nice value; `renice` changes it."
      },
      {
        heading: "Background and Foreground Jobs",
        text: "In shells, commands can be run in background (&) or foreground. `jobs`, `fg`, `bg` manage job control."
      },
      {
        heading: "Key Points",
        bullets: [
          "PID 1 is init/systemd; parent processes manage children (orphan processes are adopted by init).",
          "Zombie processes: child has exited but parent hasn't waited; avoid by proper signal handling.",
          "`pstree` visualizes process hierarchy.",
          "`ulimit` sets resource limits for processes."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you view all running processes?",
          "What are the different process states?",
          "Explain the difference between SIGTERM and SIGKILL.",
          "What is a zombie process and how to eliminate it?"
        ]
      }
    ]
  },
  "4": {
    title: "Linux Permissions and Ownership",
    sections: [
      {
        heading: "Overview",
        text: "Linux uses a permission model based on user, group, and others, with read (4), write (2), execute (1) bits for files and directories."
      },
      {
        heading: "Changing Permissions",
        text: "`chmod` modifies permissions (symbolic: u+rwx, numeric: 755). `chown` changes owner and group. `chgrp` changes group only."
      },
      {
        heading: "Default Permissions (umask)",
        text: "umask sets default permissions for new files/directories (permissions = 666/777 - umask). Default umask is 022 (files 644, dirs 755)."
      },
      {
        heading: "Special Permissions",
        text: "SUID (set user ID) runs file with owner's permissions. SGID (set group ID) inherits group. Sticky bit on directories restricts file deletion to owners."
      },
      {
        heading: "ACLs (Access Control Lists)",
        text: "ACLs provide finer-grained permissions beyond standard ugo/rwx. `setfacl`, `getfacl` manage extended permissions for specific users/groups."
      },
      {
        heading: "Key Points",
        bullets: [
          "Permissions are displayed with `ls -l` (e.g., -rwxr-xr--).",
          "Directories need execute permission to be traversed.",
          "SUID example: /bin/passwd runs as root to update /etc/shadow.",
          "ACLs are useful for multi-user environments."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the meaning of `chmod 755 filename`.",
          "What is the difference between chown and chmod?",
          "What are SUID, SGID, and sticky bit?",
          "How do ACLs extend Linux permissions?"
        ]
      }
    ]
  },
  "5": {
    title: "Shell Scripting Basics",
    sections: [
      {
        heading: "Overview",
        text: "Shell scripting automates tasks using a sequence of commands. Scripts are interpreted by a shell (bash, sh, zsh)."
      },
      {
        heading: "Script Structure",
        text: "Shebang line (#!/bin/bash), variables (name=value), commands. Make script executable with `chmod +x`."
      },
      {
        heading: "Variables and Data Types",
        text: "Variables are untyped (strings). Use $var to reference. Environment variables (export) persist. Arrays: arr=(a b c)."
      },
      {
        heading: "Conditional Statements",
        text: "if-elif-else uses `[ condition ]` or `[[ condition ]]`. Tests for files (-f), directories (-d), strings (=, !=), and numbers (-eq, -gt)."
      },
      {
        heading: "Loops",
        text: "for (for i in {1..10}), while, until. Break and continue control loop flow."
      },
      {
        heading: "Functions",
        text: "Define functions: func_name() { commands; }. Return values via echo or return (exit status)."
      },
      {
        heading: "Input and Output",
        text: "Read input with `read`. Output with echo/printf. Redirection (>, >>, <) and pipes (|)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Exit status: 0 success, non-zero error. Use $? to check.",
          "Quoting: double quotes preserve variables; single quotes preserve literal.",
          "Command substitution: $(cmd) or `cmd`.",
          "Set -x for debugging; set -e to exit on error."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a shebang line and why is it used?",
          "How do you write a for loop in bash?",
          "Explain the difference between double and single quotes.",
          "Write a script to check if a file exists."
        ]
      }
    ]
  },
  "6": {
    title: "Package Management",
    sections: [
      {
        heading: "Overview",
        text: "Package managers handle installation, upgrade, and removal of software, resolving dependencies automatically."
      },
      {
        heading: "Debian-based (APT)",
        text: "APT (Advanced Package Tool) uses .deb packages. Commands: apt update, apt install, apt upgrade, apt remove. APT handles dependencies via repositories."
      },
      {
        heading: "RHEL-based (YUM/DNF)",
        text: "YUM (Yellowdog Updater Modified) and DNF (newer) use .rpm packages. Commands: yum install, yum update, yum remove. DNF is the default on Fedora."
      },
      {
        heading: "RPM (Red Hat Package Manager)",
        text: "Low-level tool for installing .rpm files directly (rpm -ivh, rpm -e). Does not handle dependencies, so YUM/DNF are used."
      },
      {
        heading: "Arch Linux (pacman)",
        text: "Pacman uses .pkg.tar.zst packages. Commands: pacman -S (install), -Syu (update), -R (remove). AUR (Arch User Repository) for community packages."
      },
      {
        heading: "Snap and Flatpak",
        text: "Universal package formats for cross-distribution deployment. Snap (by Canonical) and Flatpak (by GNOME) are containerized applications."
      },
      {
        heading: "Key Points",
        bullets: [
          "Repositories store packages and metadata.",
          "Dependency resolution can be complex; use tools like aptitude for interactive resolution.",
          "Compiling from source (./configure, make, make install) bypasses package manager.",
          "Version pinning and holds prevent unwanted upgrades."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between APT and YUM?",
          "Explain the role of a package manager.",
          "How do you install a .deb package manually?",
          "What are Snap and Flatpak?"
        ]
      }
    ]
  },
  "7": {
    title: "Systemd and Init Systems",
    sections: [
      {
        heading: "Overview",
        text: "Systemd is a system and service manager for Linux. It replaces SysV init, managing services, sockets, timers, and more."
      },
      {
        heading: "Units and Types",
        text: "Units are configuration files (service, socket, target, timer, mount). Service units define how to start/stop a service. Target units group services (multi-user.target)."
      },
      {
        heading: "Managing Services",
        text: "systemctl start|stop|restart|status <service>. Enable/disable at boot: systemctl enable/disable. Mask/unmask to prevent accidental starting."
      },
      {
        heading: "Systemd Targets (Runlevels)",
        text: "Targets correspond to SysV runlevels: poweroff.target, rescue.target, multi-user.target, graphical.target. Switching: systemctl isolate multi-user.target."
      },
      {
        heading: "Timers and Schedules",
        text: "Systemd timers replace cron. Timers can be calendar-based (OnCalendar) or monotonic (OnBootSec). Example: systemd-run --on-calendar 'daily'."
      },
      {
        heading: "Journal (Journald)",
        text: "Systemd's logging system collects logs from the kernel, services, and applications. journalctl queries logs with filters."
      },
      {
        heading: "Key Points",
        bullets: [
          "Systemd's parallel startup speeds boot time.",
          "Unit files are in /etc/systemd/system and /lib/systemd/system.",
          "Dependency management: Wants, Requires, After, Before.",
          "Systemd is controversial but widely adopted."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is systemd and why is it used?",
          "How do you start a service at boot with systemd?",
          "Explain the difference between a service and a target.",
          "How to view logs with journalctl?"
        ]
      }
    ]
  },
  "8": {
    title: "Linux Networking Commands",
    sections: [
      {
        heading: "Overview",
        text: "Linux provides a rich set of command-line tools for network configuration, diagnostics, and monitoring."
      },
      {
        heading: "ifconfig (deprecated) and ip",
        text: "ifconfig shows/ configures network interfaces. ip (from iproute2) is modern: ip addr, ip link, ip route. ip replaces ifconfig, route, arp."
      },
      {
        heading: "ping and traceroute",
        text: "ping tests connectivity using ICMP. traceroute (or tracepath) shows the path packets take to a destination."
      },
      {
        heading: "netstat and ss",
        text: "netstat displays network connections, routing tables, and interface stats. ss is faster and more detailed; used for socket statistics."
      },
      {
        heading: "iptables and nftables",
        text: "Firewall tools. iptables (legacy) manages packet filtering rules. nftables is the newer replacement with simpler syntax."
      },
      {
        heading: "Network Configuration Files",
        text: "Distributions use different configurations: /etc/network/interfaces (Debian), /etc/sysconfig/network-scripts/ (RHEL), or NetworkManager."
      },
      {
        heading: "Key Points",
        bullets: [
          "Use `ip a` to view IP addresses; `ip r` for routes.",
          "`ss -tuln` shows listening TCP/UDP ports.",
          "`tcpdump` captures packets for analysis.",
          "`nslookup` and `dig` query DNS."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you check the IP address of a Linux machine?",
          "What is the difference between ping and traceroute?",
          "Explain the use of ss over netstat.",
          "How do you block an IP address with iptables?"
        ]
      }
    ]
  },
  "9": {
    title: "Linux Kernel Modules",
    sections: [
      {
        heading: "Overview",
        text: "Kernel modules are pieces of code that can be loaded/unloaded dynamically, extending the kernel's functionality without rebooting."
      },
      {
        heading: "Module Management Commands",
        text: "lsmod lists loaded modules. modprobe loads modules with dependencies (modprobe <name>). insmod loads a single module. rmmod removes a module."
      },
      {
        heading: "Module Configuration",
        text: "/etc/modprobe.d/ contains configuration options. Blacklist modules to prevent loading. Module parameters can be set in /etc/modprobe.d/ or via kernel cmdline."
      },
      {
        heading: "Building a Module",
        text: "A typical module has init and exit functions. The Makefile uses the kernel build system. After compilation, `insmod` loads it."
      },
      {
        heading: "Common Modules",
        text: "Device drivers (net, sound, video), filesystem modules (ext4, vfat), and virtual modules (vboxguest)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Modules are found in /lib/modules/$(uname -r)/.",
          "depmod generates module dependency maps.",
          "Kernel module signing for security.",
          "Loading modules can be done automatically via udev or modules-load.d."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a kernel module and why use it?",
          "How do you list loaded modules?",
          "Explain modprobe vs insmod.",
          "How do you blacklist a module?"
        ]
      }
    ]
  },
  "10": {
    title: "File System Types and Management",
    sections: [
      {
        heading: "Overview",
        text: "Linux supports various filesystems: ext4, XFS, Btrfs, and others. Management includes creating, checking, mounting, and resizing."
      },
      {
        heading: "ext4",
        text: "The default for many distributions. Supports journaling, large files (up to 16 TiB), and extents for efficient large file handling."
      },
      {
        heading: "XFS",
        text: "High-performance 64-bit journaling filesystem, excellent for large files and parallel I/O. Common in enterprise environments."
      },
      {
        heading: "Btrfs",
        text: "Copy-on-write filesystem with advanced features: snapshots, subvolumes, compression, and RAID-like capabilities. Still evolving."
      },
      {
        heading: "Mounting and fstab",
        text: "Mount a filesystem with `mount` (e.g., mount /dev/sda1 /mnt). /etc/fstab defines automatic mounts with options (rw, noatime)."
      },
      {
        heading: "Filesystem Checking and Repair",
        text: "fsck checks and repairs filesystems. For ext4: fsck.ext4. Run on unmounted filesystems; can be done at boot with force check."
      },
      {
        heading: "Key Points",
        bullets: [
          "Choose filesystem based on use case: ext4 for general, XFS for large files, Btrfs for features.",
          "`df -h` shows disk usage; `du -sh` shows directory sizes.",
          "Resize: resize2fs for ext4, xfs_growfs for XFS (only grow).",
          "LVM (Logical Volume Manager) provides flexible storage management."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the differences between ext4, XFS, and Btrfs?",
          "How do you mount a filesystem permanently?",
          "What is the purpose of fstab?",
          "How do you check a filesystem for errors?"
        ]
      }
    ]
  },
  "11": {
    title: "User and Group Administration",
    sections: [
      {
        heading: "Overview",
        text: "Linux manages users and groups with commands to add, modify, and delete, with files /etc/passwd, /etc/shadow, and /etc/group."
      },
      {
        heading: "Adding Users",
        text: "useradd creates a new user. Options: -m (home directory), -s (shell), -G (supplementary groups). Example: useradd -m -s /bin/bash john."
      },
      {
        heading: "Modifying Users",
        text: "usermod changes user properties: -l (new login), -g (primary group), -aG (append groups)."
      },
      {
        heading: "Deleting Users",
        text: "userdel removes a user. -r removes home directory and mail spool. Example: userdel -r john."
      },
      {
        heading: "Group Management",
        text: "groupadd, groupmod, groupdel. Add users to groups via usermod -aG groupname user. The primary group is defined in /etc/passwd."
      },
      {
        heading: "Password Management",
        text: "passwd sets/ changes passwords. /etc/shadow stores encrypted passwords. Password aging policies via chage."
      },
      {
        heading: "Key Points",
        bullets: [
          "UID 0 is root. System users have UIDs 1-999 (on many distros).",
          "Groups allow permission delegation (e.g., wheel group for sudo).",
          "sudoers file (/etc/sudoers) controls privileges.",
          "Lock/unlock accounts with passwd -l/-u."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you add a new user and set their home directory?",
          "What is the difference between primary and secondary groups?",
          "How do you change a user's password?",
          "Explain the structure of /etc/passwd and /etc/shadow."
        ]
      }
    ]
  },
  "12": {
    title: "Linux Security and Firewall",
    sections: [
      {
        heading: "Overview",
        text: "Linux security includes mandatory access control (SELinux, AppArmor), firewall (iptables/nftables), and other hardening measures."
      },
      {
        heading: "SELinux (Security-Enhanced Linux)",
        text: "SELinux implements MAC policies (targeted, strict). It uses contexts (user:role:type). Commands: ls -Z, chcon, restorecon. Modes: enforcing, permissive, disabled."
      },
      {
        heading: "AppArmor",
        text: "AppArmor is another MAC system based on pathnames. Profiles restrict application capabilities. Tools: aa-status, aa-enforce, aa-complain."
      },
      {
        heading: "Firewall: iptables/nftables",
        text: "iptables uses tables (filter, nat, mangle) and chains (INPUT, OUTPUT, FORWARD). Rules define actions (ACCEPT, DROP, REJECT). nftables is the successor."
      },
      {
        heading: "SSH Security",
        text: "Disable root login, use key-based authentication, change default port, limit users. Configure /etc/ssh/sshd_config."
      },
      {
        heading: "Security Tools",
        text: "Fail2ban (block brute-force), ClamAV (antivirus), Lynis (auditing), and unattended-upgrades for automatic patches."
      },
      {
        heading: "Key Points",
        bullets: [
          "SELinux is complex but powerful; AppArmor is easier.",
          "Firewall rules can be saved persistently (iptables-save).",
          "Regular system updates are critical.",
          "Use `sudo` for privileged commands; avoid root shell."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is SELinux and how does it work?",
          "Explain the difference between SELinux and AppArmor.",
          "How do you configure a firewall with iptables?",
          "What steps can you take to secure an SSH server?"
        ]
      }
    ]
  },
  "13": {
    title: "Cron and Scheduled Jobs",
    sections: [
      {
        heading: "Overview",
        text: "Cron is a time-based job scheduler in Unix-like systems. It runs jobs at specified intervals. Alternatives include anacron and systemd timers."
      },
      {
        heading: "Crontab",
        text: "Each user can have a crontab. Edit with `crontab -e`. Syntax: minute hour day month day-of-week command. Special strings: @reboot, @daily, @hourly."
      },
      {
        heading: "System-wide Cron",
        text: "System crontabs are in /etc/crontab and /etc/cron.d/. They include a user field. /etc/cron.hourly, .daily, .weekly, .monthly for scripts."
      },
      {
        heading: "Anacron",
        text: "Anacron runs jobs even if system was off at the scheduled time. It is often used for periodic maintenance scripts."
      },
      {
        heading: "Systemd Timers",
        text: "Systemd timers replace cron in systems using systemd. Timers are defined in unit files with OnCalendar or OnBootSec. Example: systemctl enable mytimer.timer."
      },
      {
        heading: "Key Points",
        bullets: [
          "Cron logs to /var/log/syslog (or /var/log/cron).",
          "Use absolute paths in cron commands.",
          "Environment variables in cron differ from user shell; set explicitly.",
          "Check syntax with `crontab -l` and verify."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you schedule a job to run every day at 2 AM?",
          "What is the difference between cron and anacron?",
          "How do you edit the crontab for a specific user?",
          "Explain systemd timers vs cron."
        ]
      }
    ]
  },
  "14": {
    title: "Linux I/O Redirection and Pipes",
    sections: [
      {
        heading: "Overview",
        text: "I/O redirection changes where input comes from and output goes. Pipes connect commands, passing output of one as input to another."
      },
      {
        heading: "Standard Streams",
        text: "stdin (0), stdout (1), stderr (2). Redirect stdout: command > file (overwrite) or >> (append). Redirect stderr: 2> file."
      },
      {
        heading: "Combining Redirections",
        text: "Redirect both stdout and stderr: command > file 2>&1 (or &> file). Command < file reads from file as stdin."
      },
      {
        heading: "Pipes (|)",
        text: "Pipe connects stdout of left command to stdin of right command: `ls -l | grep .txt`. Useful for filtering and processing data."
      },
      {
        heading: "Here Documents and Here Strings",
        text: "Here document (<<) passes multi-line input. Here string (<<<) passes a string as stdin. Example: cat << EOF ... EOF."
      },
      {
        heading: "Key Points",
        bullets: [
          "Redirections are processed left to right.",
          "Use `tee` to simultaneously display and save output.",
          "Named pipes (mkfifo) allow inter-process communication.",
          "Process substitution (`<(cmd)`) treats output as a file."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the difference between > and >>.",
          "How do you redirect both stdout and stderr to a file?",
          "What is the purpose of a pipe?",
          "Give an example of using grep with pipes."
        ]
      }
    ]
  },
  "15": {
    title: "Virtual Memory and Swapping",
    sections: [
      {
        heading: "Overview",
        text: "Linux uses virtual memory to extend physical RAM with swap space. Swap can be a partition or a file. The kernel manages paging and swapping."
      },
      {
        heading: "Swap Space",
        text: "Swap is used when RAM is full. It can be a dedicated partition (swap) or a file (swapfile). Use `swapon` to enable, `swapoff` to disable."
      },
      {
        heading: "Viewing Memory Usage",
        text: "`free -h` shows RAM and swap usage. /proc/meminfo provides detailed information. `vmstat` shows memory and CPU stats."
      },
      {
        heading: "Swappiness",
        text: "The swappiness parameter (/proc/sys/vm/swappiness) controls how aggressively the kernel swaps. Lower values (0-10) favor RAM; higher (60-100) favor swap."
      },
      {
        heading: "OOM Killer",
        text: "When out of memory, the OOM killer selects a process to kill. It uses a score (oom_score) based on memory usage and other factors."
      },
      {
        heading: "Key Points",
        bullets: [
          "Swap file is more flexible than partition (can resize).",
          "ZRAM compresses RAM to act as swap, reducing disk I/O.",
          "`sudo fallocate -l 2G /swapfile` creates a swap file.",
          "Persistent swap configuration in /etc/fstab."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is swap space and why is it used?",
          "How do you check memory usage in Linux?",
          "Explain swappiness and its effect.",
          "What is the OOM killer and how does it work?"
        ]
      }
    ]
  },
  "16": {
    title: "Linux System Monitoring",
    sections: [
      {
        heading: "Overview",
        text: "Monitoring tools help track system performance, resource usage, and identify bottlenecks. They cover CPU, memory, disk, and network."
      },
      {
        heading: "top and htop",
        text: "top shows real-time process list, CPU, memory. htop is more interactive with colors, mouse support, and easier process management."
      },
      {
        heading: "vmstat",
        text: "vmstat reports virtual memory statistics, processes, CPU, and I/O. Useful for system-wide analysis."
      },
      {
        heading: "iostat",
        text: "iostat (from sysstat) reports CPU and disk I/O statistics. It shows average transfer rates, waits, and utilization."
      },
      {
        heading: "sar (System Activity Reporter)",
        text: "sar collects and reports historical system data (CPU, memory, network, etc.). Use sa1/sa2 for data collection; sar -u, sar -r, etc."
      },
      {
        heading: "Network Monitoring",
        text: "nload, iftop, and nethogs monitor network bandwidth per interface or per process."
      },
      {
        heading: "Key Points",
        bullets: [
          "Install sysstat to get sar and related tools.",
          "Use `watch` to run commands periodically (e.g., watch -n 1 free).",
          "`uptime` shows load averages over 1, 5, 15 minutes.",
          "`dmesg` shows kernel messages."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What tools do you use to monitor CPU usage?",
          "Explain the output of `top`.",
          "How do you monitor disk I/O?",
          "What is sar and how is it used?"
        ]
      }
    ]
  },
  "17": {
    title: "Logging and Journaling",
    sections: [
      {
        heading: "Overview",
        text: "Logging records system events, errors, and application messages. Linux uses syslog (rsyslog) and systemd's journald."
      },
      {
        heading: "Syslog (rsyslog)",
        text: "Rsyslog handles logging. Configuration in /etc/rsyslog.conf and /etc/rsyslog.d/. Logs are typically stored in /var/log/ (messages, syslog, auth.log)."
      },
      {
        heading: "Journald",
        text: "Systemd's journal collects logs in binary format. Commands: journalctl (view), journalctl -xe (detailed error). It integrates with syslog."
      },
      {
        heading: "Log Rotation (logrotate)",
        text: "logrotate manages log file growth by rotating, compressing, and deleting old logs. Configuration in /etc/logrotate.conf and /etc/logrotate.d/."
      },
      {
        heading: "Centralized Logging",
        text: "Logs can be sent to remote servers using syslog (via UDP/TCP) or via tools like ELK Stack (Elasticsearch, Logstash, Kibana)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Log levels: emerg, alert, crit, err, warning, notice, info, debug.",
          "Use `logger` to send messages to syslog from scripts.",
          "Check /var/log/ for application-specific logs.",
          "Persistent journald storage can be enabled."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you view system logs in Linux?",
          "What is the difference between syslog and journald?",
          "Explain log rotation and why it's important.",
          "How do you centralize logs from multiple servers?"
        ]
      }
    ]
  }
};