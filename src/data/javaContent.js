export const javaContent = {
  1: {
    title: "Java Basics",
    sections: [
      { 
        heading: "1. Variables & Data Types", 
        text: "Java is a strongly typed language. Every variable must be declared with a data type. Primitives include int (32-bit), double (64-bit), boolean, char (16-bit Unicode), byte (8-bit), short (16-bit), long (64-bit), and float (32-bit)." 
      },
      { 
        heading: "2. Type Casting", 
        text: "Converting one primitive type to another. Widening (automatic) e.g., int to double. Narrowing (manual) requires explicit casting e.g., (int) myDouble." 
      },
      { 
        heading: "Example Code", 
        code: `public class Main {
    public static void main(String[] args) {
        int myInt = 9;
        double myDouble = myInt; // Automatic casting
        int narrowedInt = (int) 9.99; // Explicit casting (truncates to 9)
    }
}` 
      }
    ]
  },
  2: {
    title: "Control Flow",
    sections: [
      {
        heading: "Conditional Statements & Switch",
        text: "Control flow dictates execution order. `if-else` handles boolean logic. `switch` statements evaluate a single variable (byte, short, char, int, String, or Enum) against multiple cases. Java 14+ introduced enhanced switch expressions yielding values directly."
      },
      {
        heading: "Loops (for, while, do-while)",
        text: "Use `for` loops when iterations are known, `while` when condition-dependent, and `do-while` to guarantee at least one execution. The `break` statement exits the nearest loop, while `continue` skips to the next iteration.",
        code: `for (int i = 0; i < 5; i++) {
    if (i == 2) continue; // Skips printing 2
    System.out.println(i);
}`
      }
    ]
  },
  3: {
    title: "Methods",
    sections: [
      {
        heading: "Method Architecture",
        text: "A method is a block of code executing a specific task, maximizing reusability. It requires an access modifier, return type (or `void`), name, and parameters. Java strictly passes arguments by value (for objects, the reference is passed by value)."
      },
      {
        heading: "Method Overloading",
        text: "Compile-time polymorphism. Multiple methods can share the same name in the same class if their parameter lists (number or type of arguments) differ. Return type alone is insufficient for overloading.",
        code: `public int add(int a, int b) { return a + b; }
public double add(double a, double b) { return a + b; } // Overloaded`
      }
    ]
  },
  4: {
    title: "Arrays",
    sections: [
      {
        heading: "1D and 2D Arrays",
        text: "Arrays are statically sized, contiguous memory blocks holding elements of the same type. Once initialized, the length is fixed and accessible via the `.length` property. 2D arrays are arrays of arrays (matrices)."
      },
      {
        heading: "Traversal and Foreach Loop",
        text: "Use standard `for` loops when index manipulation is needed. Use the enhanced `for-each` loop for strictly reading values sequentially.",
        code: `int[] arr = {1, 2, 3, 4};
for (int num : arr) { // Enhanced for-loop
    System.out.print(num);
}`
      }
    ]
  },
  5: {
    title: "Strings",
    sections: [
      {
        heading: "String Immutability and the String Pool",
        text: "The `String` class is immutable (cannot be changed once created). To save memory, Java stores string literals in the String Constant Pool inside the Heap. Assigning the same literal to multiple variables points them to the same memory location."
      },
      {
        heading: "StringBuilder vs StringBuffer",
        text: "Because Strings are immutable, concatenating them in loops creates thousands of dead objects. Use `StringBuilder` for mutable string manipulation (fast, non-thread-safe). Use `StringBuffer` if multithreaded synchronization is required.",
        code: `StringBuilder sb = new StringBuilder("Akshay");
sb.append(" Bankar"); // Modifies the existing object directly
System.out.println(sb.toString());`
      }
    ]
  },
  6: {
    title: "Object-Oriented Programming (OOP)",
    sections: [
      {
        heading: "The 4 Pillars of OOP",
        text: "1. Encapsulation: Hiding internal state using `private` variables and public getters/setters.\n2. Inheritance: Acquiring properties of a parent class using `extends`. Java supports only single inheritance for classes.\n3. Polymorphism: Performing a single action in different ways (Overloading and Overriding).\n4. Abstraction: Hiding implementation details and showing only functionality (Interfaces/Abstract classes)."
      },
      {
        heading: "Constructors & 'this' Keyword",
        text: "Constructors initialize objects (no return type, exact class name). The `this` keyword refers to the current object instance, resolving shadowing issues between instance variables and parameters."
      }
    ]
  },
  7: {
    title: "Interfaces & Abstract Classes",
    sections: [
      {
        heading: "Abstract Classes",
        text: "Declared with `abstract`. Cannot be instantiated. Can have both abstract methods (no body) and concrete methods. Used when classes share core functionality but differ in specific behaviors."
      },
      {
        heading: "Interfaces",
        text: "A contract enforcing what a class must do, not how. Declared with `interface`. All methods are inherently `public abstract` (pre-Java 8). A single class can `implements` multiple interfaces, bypassing Java's single-inheritance restriction. Java 8 introduced `default` methods in interfaces.",
        code: `interface Playable { void play(); }
class Guitar implements Playable {
    @Override
    public void play() { System.out.println("Strumming"); }
}`
      }
    ]
  },
  8: {
    title: "Collections Framework",
    sections: [
      {
        heading: "The Collection Hierarchy",
        text: "A unified architecture for storing and manipulating groups of objects. \n- List (Ordered, allows duplicates): `ArrayList` (fast reading), `LinkedList` (fast insertion/deletion).\n- Set (Unordered, no duplicates): `HashSet` (fastest), `TreeSet` (sorted).\n- Queue (FIFO): `PriorityQueue`."
      },
      {
        heading: "Maps",
        text: "Maps are NOT part of the Collection interface but belong to the framework. They store Key-Value pairs. `HashMap` allows one null key and provides O(1) lookups. `TreeMap` sorts by keys.",
        code: `Map<String, Integer> map = new HashMap<>();
map.put("Java", 8);
map.put("React", 10);
System.out.println(map.get("Java")); // Outputs 8`
      }
    ]
  },
  9: {
    title: "Exception Handling",
    sections: [
      {
        heading: "Checked vs Unchecked Exceptions",
        text: "Exceptions disrupt normal flow. \n- Checked: Verified at compile-time (e.g., `IOException`). Must be caught or declared via `throws`.\n- Unchecked: Occur at runtime (e.g., `NullPointerException`, `ArithmeticException`). Do not force compilation errors."
      },
      {
        heading: "try-catch-finally",
        text: "Code that might throw an error goes in `try`. The `catch` block handles it. The `finally` block executes regardless of an exception (used for closing resources).",
        code: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero.");
} finally {
    System.out.println("Execution complete.");
}`
      }
    ]
  },
  10: {
    title: "Generics",
    sections: [
      {
        heading: "Type Safety at Compile Time",
        text: "Generics `<T>` force type correctness at compile time, eliminating the need for casting and preventing `ClassCastException` at runtime. They apply to Classes, Interfaces, and Methods."
      },
      {
        heading: "Wildcards (?)",
        text: "Used when the exact type is unknown. \n- Unbounded: `<?>` (Any type)\n- Upper Bound: `<? extends Number>` (Number or its subclasses like Integer, Double).\n- Lower Bound: `<? super Integer>` (Integer or its superclasses like Number, Object).",
        code: `// Generic Class
class Box<T> {
    private T item;
    public void set(T item) { this.item = item; }
    public T get() { return item; }
}`
      }
    ]
  },
  11: {
    title: "Access Modifiers",
    sections: [
      {
        heading: "Visibility Rules",
        text: "Modifiers control access to classes, methods, and variables.\n- `public`: Accessible from anywhere.\n- `protected`: Accessible within the same package and subclasses in other packages.\n- `default` (No keyword): Accessible strictly within the same package.\n- `private`: Accessible strictly within the enclosing class."
      }
    ]
  },
  12: {
    title: "Static & Final",
    sections: [
      {
        heading: "The 'static' Keyword",
        text: "Indicates that a member belongs to the class itself, rather than instances of the class. Shared across all objects. Static methods cannot access non-static instance variables or `this`."
      },
      {
        heading: "The 'final' Keyword",
        text: "A restriction modifier.\n- Final Variable: Creates a constant (cannot be reassigned).\n- Final Method: Prevents method overriding by subclasses.\n- Final Class: Prevents inheritance entirely (e.g., the `String` class).",
        code: `class MathUtils {
    public static final double PI = 3.14159; // Constant
}`
      }
    ]
  },
  13: {
    title: "Java Memory Model",
    sections: [
      {
        heading: "Stack vs Heap",
        text: "The Stack handles method execution and primitive local variables. It operates LIFO and cleans itself automatically when methods finish. The Heap stores all Objects and JRE classes. Variables in the Stack hold references (pointers) to the Objects residing in the Heap."
      },
      {
        heading: "Garbage Collection (GC)",
        text: "A daemon thread that automatically reclaims Heap memory by deleting objects that no longer have valid references pointing to them. You can request it via `System.gc()`, but execution is never guaranteed."
      }
    ]
  },
  14: {
    title: "Multithreading",
    sections: [
      {
        heading: "Thread vs Runnable",
        text: "Threads run concurrently. You can create one by extending the `Thread` class or implementing the `Runnable` interface. Implementing `Runnable` is preferred as it keeps your class free to extend another class."
      },
      {
        heading: "Synchronization",
        text: "When multiple threads mutate shared data, race conditions occur. The `synchronized` keyword locks a method or block, ensuring only one thread can access the resource at a time.",
        code: `class Counter {
    private int count = 0;
    // Thread-safe method
    public synchronized void increment() { count++; }
}`
      }
    ]
  },
  15: {
    title: "Java 8 Features",
    sections: [
      {
        heading: "Lambdas and Functional Interfaces",
        text: "A Functional Interface has exactly one abstract method (annotated with `@FunctionalInterface`). Lambda expressions `(args) -> body` provide a clear and concise way to implement these interfaces inline, eliminating verbose anonymous inner classes."
      },
      {
        heading: "Stream API",
        text: "A functional approach to processing Collections. Streams do not mutate data; they form a pipeline consisting of intermediate operations (`filter`, `map`) and a terminal operation (`collect`, `forEach`).",
        code: `List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
int evenSum = nums.stream()
                  .filter(n -> n % 2 == 0)
                  .mapToInt(Integer::intValue)
                  .sum(); // Result: 6`
      }
    ]
  },
  16: {
    title: "File Handling",
    sections: [
      {
        heading: "I/O Streams",
        text: "Java handles data transmission via Streams. Byte Streams (`FileInputStream`, `FileOutputStream`) process raw 8-bit bytes. Character Streams (`FileReader`, `FileWriter`) process 16-bit Unicode characters."
      },
      {
        heading: "Serialization",
        text: "The process of converting an Object's state into a byte stream to be saved to a file or sent over a network. The class must implement the `Serializable` marker interface. Use the `transient` keyword to prevent a specific variable from being serialized."
      }
    ]
  },
  17: {
    title: "Comparable & Comparator",
    sections: [
      {
        heading: "Sorting Custom Objects",
        text: "By default, `Collections.sort()` doesn't know how to sort custom objects (like a User class).\n- `Comparable`: Implemented internally on the class itself via `compareTo()`. Defines the default, natural sorting order.\n- `Comparator`: Implemented externally via `compare()`. Allows creating multiple, separate sorting logic (e.g., sort by age, sort by name).",
        code: `// Comparator using Java 8 Lambdas
List<User> users = getusers();
users.sort((u1, u2) -> Integer.compare(u1.getAge(), u2.getAge()));`
      }
    ]
  },
  18: {
    title: "equals() & hashCode()",
    sections: [
      {
        heading: "The Crucial Contract",
        text: "Used strictly for objects. `==` checks if references point to the exact same memory location. `.equals()` must be overridden to logically compare the actual values inside the objects."
      },
      {
        heading: "HashMap Importance",
        text: "If you override `equals()`, you MUST override `hashCode()`. Collections like `HashMap` and `HashSet` use hashes to place objects into buckets. If two objects are logically equal, they must produce the exact same hash code, otherwise the Map will fail to locate them."
      }
    ]
  },
  19: {
    title: "Wrapper Classes & Autoboxing",
    sections: [
      {
        heading: "Bridging Primitives and Objects",
        text: "Collections (`ArrayList`, `HashMap`) cannot store primitives; they only store Objects. Wrapper classes (`Integer`, `Double`, `Boolean`) encapsulate primitive values."
      },
      {
        heading: "Autoboxing and Unboxing",
        text: "Autoboxing is the automatic conversion the compiler makes between primitives and their corresponding object wrappers (e.g., `int` to `Integer`). Unboxing is the reverse. This incurs a slight performance penalty in massive loops.",
        code: `List<Integer> list = new ArrayList<>();
list.add(10); // Autoboxing: 10 is converted to new Integer(10)
int num = list.get(0); // Unboxing: Integer is converted back to int`
      }
    ]
  },
  20: {
    title: "JVM, JRE & JDK",
    sections: [
      {
        heading: "The Java Ecosystem",
        text: "- JDK (Java Development Kit): The full toolkit for devs. Contains the JRE plus compilers (`javac`) and debuggers.\n- JRE (Java Runtime Environment): The environment needed to run Java programs. Contains the JVM and core libraries.\n- JVM (Java Virtual Machine): The engine that executes the code."
      },
      {
        heading: "Write Once, Run Anywhere",
        text: "The `javac` compiler translates `.java` source code into platform-independent `.class` bytecode. The JVM on the target machine then interprets and Just-In-Time (JIT) compiles this bytecode into native machine code specific to that Operating System."
      }
    ]
  }
};