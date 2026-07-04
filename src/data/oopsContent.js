// oopsContent.js
export const oopsContent = {
  "1": {
    title: "Classes and Objects",
    sections: [
      {
        heading: "Overview",
        text: "A class is a blueprint for creating objects. It defines properties (attributes) and behaviors (methods). An object is an instance of a class."
      },
      {
        heading: "Class Definition",
        text: "In Java, a class is defined with `class` keyword. It can have fields, constructors, and methods. Example: `public class Car { String model; void start() { ... } }`."
      },
      {
        heading: "Creating Objects",
        text: "Objects are instantiated with `new` keyword. `Car myCar = new Car();` The constructor initializes the object."
      },
      {
        heading: "Fields and Methods",
        text: "Fields store state; methods define behavior. Access via dot notation: `myCar.model = 'Tesla'; myCar.start();`."
      },
      {
        heading: "Key Points",
        bullets: [
          "A class encapsulates data and operations.",
          "Multiple objects can be created from one class.",
          "Objects have identity, state, and behavior.",
          "The `this` keyword refers to the current object."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between a class and an object?",
          "Explain object-oriented programming concepts.",
          "How do you create an object in your preferred language?",
          "What is the purpose of the `new` keyword?"
        ]
      }
    ]
  },
  "2": {
    title: "Encapsulation",
    sections: [
      {
        heading: "Overview",
        text: "Encapsulation bundles data and methods that operate on that data, hiding internal details and protecting data integrity."
      },
      {
        heading: "Access Control",
        text: "Private fields prevent direct access. Public getters/setters expose controlled access. This allows validation and logging."
      },
      {
        heading: "Benefits",
        text: "Reduces complexity, increases reusability, and protects data from unintended modification. Changes to internal implementation don't affect external code."
      },
      {
        heading: "Example",
        text: "Java: `private int balance; public int getBalance() { return balance; } public void setBalance(int b) { if (b >= 0) balance = b; }`"
      },
      {
        heading: "Key Points",
        bullets: [
          "Encapsulation is achieved via access modifiers.",
          "Getter/setter methods are standard for private fields.",
          "Immutable objects have no setters.",
          "Encapsulation is fundamental to OOP."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is encapsulation and why is it used?",
          "How do you achieve encapsulation in Java/C++?",
          "What is the difference between a public and private field?",
          "Why should fields be private?"
        ]
      }
    ]
  },
  "3": {
    title: "Inheritance",
    sections: [
      {
        heading: "Overview",
        text: "Inheritance allows a class (subclass) to acquire the properties and behavior of another class (superclass), promoting code reuse."
      },
      {
        heading: "Inheritance Syntax",
        text: "Java: `class Subclass extends Superclass`. C++: `class Subclass : public Superclass`. Python: `class Subclass(Superclass):`."
      },
      {
        heading: "Types of Inheritance",
        text: "Single (one parent), multiple (multiple parents - not in Java/C#), multilevel (grandparent), hierarchical (one parent, many children)."
      },
      {
        heading: "Method Overriding",
        text: "Subclasses can provide specific implementation of superclass methods. Use `@Override` annotation in Java."
      },
      {
        heading: "Constructor Chaining",
        text: "Subclass constructor must call superclass constructor (using `super()` in Java) to initialize inherited fields."
      },
      {
        heading: "Key Points",
        bullets: [
          "Inheritance creates an IS-A relationship.",
          "Use inheritance when subclasses are genuinely subtypes.",
          "Favor composition over inheritance when possible.",
          "Protected members are accessible in subclasses."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is inheritance and its benefits?",
          "Explain the different types of inheritance.",
          "What is method overriding?",
          "What is the difference between inheritance and composition?"
        ]
      }
    ]
  },
  "4": {
    title: "Polymorphism",
    sections: [
      {
        heading: "Overview",
        text: "Polymorphism enables objects of different types to be treated as objects of a common superclass, with the correct method being called based on runtime type."
      },
      {
        heading: "Compile-time Polymorphism (Overloading)",
        text: "Multiple methods with same name but different parameters. Resolved at compile time. Example: `add(int a, int b)` and `add(double a, double b)`."
      },
      {
        heading: "Runtime Polymorphism (Overriding)",
        text: "Subclass provides specific implementation. The actual method called is determined at runtime based on object type, not reference type."
      },
      {
        heading: "Polymorphism via Interfaces",
        text: "Objects of different classes implementing the same interface can be treated uniformly. Example: `List list = new ArrayList();`"
      },
      {
        heading: "Key Points",
        bullets: [
          "Polymorphism enables flexible and extensible code.",
          "Dynamic binding is used for overridden methods.",
          "Static (compile-time) vs dynamic (runtime) polymorphism.",
          "Use polymorphism with interfaces for decoupling."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is polymorphism?",
          "Explain overloading vs overriding.",
          "How does runtime polymorphism work?",
          "Provide an example of polymorphism using interfaces."
        ]
      }
    ]
  },
  "5": {
    title: "Abstraction",
    sections: [
      {
        heading: "Overview",
        text: "Abstraction hides implementation details and exposes only essential features. It reduces complexity and allows focusing on what an object does rather than how."
      },
      {
        heading: "Abstract Classes",
        text: "Abstract classes cannot be instantiated; they may contain abstract (unimplemented) methods. Subclasses must implement them. Example: `abstract class Animal { abstract void sound(); }`."
      },
      {
        heading: "Interfaces",
        text: "Interfaces define a contract of methods that implementing classes must provide. They allow multiple inheritance of type. Example: `interface Flyable { void fly(); }`."
      },
      {
        heading: "Differences: Abstract Class vs Interface",
        text: "Abstract classes can have state (fields) and concrete methods; interfaces (before Java 8) only abstract methods. Since Java 8, interfaces have default methods."
      },
      {
        heading: "Key Points",
        bullets: [
          "Abstraction is achieved via abstract classes and interfaces.",
          "It reduces duplication and improves maintainability.",
          "Interfaces are used to define capabilities.",
          "Abstract classes are for common base functionality."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is abstraction in OOP?",
          "Explain the difference between an abstract class and an interface.",
          "When would you use an abstract class vs an interface?",
          "What are default methods in interfaces?"
        ]
      }
    ]
  },
  "6": {
    title: "Constructors and Destructors",
    sections: [
      {
        heading: "Overview",
        text: "Constructors initialize objects when they are created. Destructors (finalizers) clean up resources when objects are destroyed. Their usage varies by language."
      },
      {
        heading: "Constructors",
        text: "Same name as class, no return type. Can be overloaded. Default constructor provided if none defined. Can have parameters for initialization."
      },
      {
        heading: "Constructor Chaining",
        text: "Calling one constructor from another using `this()` or `super()`. Ensures proper initialization."
      },
      {
        heading: "Destructors (Finalizers)",
        text: "In C++: destructors (~Class) are deterministic. In Java: finalize() is deprecated; use try-with-resources or AutoCloseable. In Python: __del__."
      },
      {
        heading: "Garbage Collection",
        text: "Languages like Java, C#, Python manage memory automatically. Garbage collector reclaims memory of unreferenced objects; finalizers are called before collection."
      },
      {
        heading: "Key Points",
        bullets: [
          "Constructors set initial state.",
          "In Java, using `this()` to call another constructor is constructor chaining.",
          "Destructors are not commonly needed in managed languages.",
          "Resource cleanup should be explicit (close streams, connections)."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a constructor and its purpose?",
          "Can constructors be overloaded?",
          "What is the difference between a constructor and a method?",
          "How do you handle cleanup in your language?"
        ]
      }
    ]
  },
  "7": {
    title: "Static Members",
    sections: [
      {
        heading: "Overview",
        text: "Static members belong to the class rather than instances. They are shared across all objects and can be accessed without creating an instance."
      },
      {
        heading: "Static Variables",
        text: "Also called class variables. They hold values that are common to all instances. Example: `static int count` to track number of objects."
      },
      {
        heading: "Static Methods",
        text: "Can be called without an instance. They can only access static members. Used for utility functions (e.g., Math.sqrt())."
      },
      {
        heading: "Static Blocks",
        text: "Static initialization blocks run when the class is loaded. Used for static variable initialization."
      },
      {
        heading: "Static Nested Classes",
        text: "In Java, static inner classes can be instantiated without an outer instance. Non-static inner classes have a reference to outer."
      },
      {
        heading: "Key Points",
        bullets: [
          "Static members are loaded once per class.",
          "Cannot access instance members from static context.",
          "Be cautious with static mutable state (thread-safety).",
          "Static imports allow static members to be used without class prefix."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a static variable?",
          "Why is main() static in Java?",
          "Can static methods be overridden?",
          "What is a static nested class?"
        ]
      }
    ]
  },
  "8": {
    title: "Access Modifiers",
    sections: [
      {
        heading: "Overview",
        text: "Access modifiers control the visibility of classes, methods, and fields. They enforce encapsulation and define API boundaries."
      },
      {
        heading: "public",
        text: "Accessible from anywhere. Used for interfaces and methods intended to be exposed."
      },
      {
        heading: "private",
        text: "Accessible only within the same class. Used to hide internal implementation."
      },
      {
        heading: "protected",
        text: "Accessible within the same package and by subclasses. Used for members meant for inheritance."
      },
      {
        heading: "default (package-private)",
        text: "No modifier; accessible only within the same package. Used when we want limited visibility."
      },
      {
        heading: "Language Variations",
        text: "C++ has public, private, protected (similar). Python uses naming conventions (single underscore for protected, double for private name mangling)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Modifiers enforce encapsulation.",
          "Choose the most restrictive that still allows required access.",
          "Java's default is package-private.",
          "Protected members are accessible to subclasses even outside package."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the access modifiers in Java?",
          "Explain the difference between private, protected, and default.",
          "Can a class be private?",
          "What is the purpose of the protected modifier?"
        ]
      }
    ]
  },
  "9": {
    title: "Method Overloading vs Overriding",
    sections: [
      {
        heading: "Overview",
        text: "Overloading and overriding are both ways to achieve polymorphism. Overloading is compile-time, overriding is runtime."
      },
      {
        heading: "Overloading",
        text: "Same method name, different parameter lists (number, type, order). Return type can differ. Used for convenience (e.g., println(int), println(String))."
      },
      {
        heading: "Overriding",
        text: "Subclass provides a specific implementation of a method defined in superclass. Same name, parameters, return type (covariant allowed)."
      },
      {
        heading: "Rules for Overriding",
        text: "Access level cannot be more restrictive (can be less). Cannot throw broader checked exceptions. Use @Override annotation to avoid mistakes."
      },
      {
        heading: "Key Points",
        bullets: [
          "Overloading is static (compile-time) binding; overriding is dynamic (runtime).",
          "Overloading cannot change the method signature (parameters must differ).",
          "Static methods cannot be overridden (they are hidden).",
          "Private methods cannot be overridden."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between overloading and overriding?",
          "Can you override a static method?",
          "What is covariant return type?",
          "Why use @Override annotation?"
        ]
      }
    ]
  },
  "10": {
    title: "Interfaces",
    sections: [
      {
        heading: "Overview",
        text: "An interface defines a contract that classes must adhere to. It specifies method signatures without implementation (except default/static methods in Java)."
      },
      {
        heading: "Declaration",
        text: "Java: `interface MyInterface { void doSomething(); }`. A class implements it with `implements`."
      },
      {
        heading: "Multiple Inheritance of Type",
        text: "A class can implement multiple interfaces, enabling a form of multiple inheritance without the diamond problem."
      },
      {
        heading: "Default and Static Methods (Java 8+)",
        text: "Default methods provide a default implementation in the interface, allowing evolution. Static methods are also allowed."
      },
      {
        heading: "Functional Interfaces",
        text: "Interfaces with a single abstract method (SAM) are functional interfaces and can be used with lambda expressions (e.g., Runnable)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Interfaces decouple specification from implementation.",
          "They are useful for callback patterns and strategy patterns.",
          "Fields in interfaces are implicitly public static final.",
          "Marker interfaces have no methods (e.g., Serializable)."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is an interface and why use it?",
          "What is the difference between an abstract class and an interface?",
          "What are default methods?",
          "What is a functional interface?"
        ]
      }
    ]
  },
  "11": {
    title: "Abstract Classes",
    sections: [
      {
        heading: "Overview",
        text: "An abstract class cannot be instantiated and is meant to be subclassed. It can contain abstract methods (no body) and concrete methods."
      },
      {
        heading: "Purpose",
        text: "Provide a common base with shared implementation, while enforcing subclasses to implement certain methods."
      },
      {
        heading: "Abstract Methods",
        text: "Methods without body, marked abstract. Subclasses must override them (unless subclass is also abstract)."
      },
      {
        heading: "Use Cases",
        text: "Template method pattern: define skeleton of algorithm with abstract steps. Also for code reuse among closely related classes."
      },
      {
        heading: "Key Points",
        bullets: [
          "Abstract classes can have state (fields), constructors.",
          "They can have private, protected, public members.",
          "If a class has at least one abstract method, it must be abstract.",
          "Abstract classes are a form of partial implementation."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is an abstract class?",
          "When would you use an abstract class over an interface?",
          "Can an abstract class have constructors?",
          "What is the template method pattern?"
        ]
      }
    ]
  },
  "12": {
    title: "Object Lifecycle",
    sections: [
      {
        heading: "Overview",
        text: "The object lifecycle includes creation, usage, and destruction. It involves constructors, memory management, and finalization."
      },
      {
        heading: "Creation",
        text: "Memory allocated, constructor called (or default initialization). In Java, `new` triggers this. In C++, object can be on stack or heap."
      },
      {
        heading: "Usage",
        text: "During its lifetime, methods are called, fields are modified. The object remains referenced."
      },
      {
        heading: "Garbage Collection (GC)",
        text: "Languages with automatic GC (Java, C#, Python) reclaim memory when objects are no longer reachable. GC is non-deterministic."
      },
      {
        heading: "Destruction",
        text: "In C++, destructors are called deterministically (stack unwinding, delete). In managed languages, finalizers are called before GC (not guaranteed)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Use try-with-resources in Java for explicit cleanup.",
          "Weak references allow objects to be GC'd.",
          "Object pools can reuse objects to reduce GC overhead.",
          "Leaks occur when references are accidentally retained."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the lifecycle of an object.",
          "What is garbage collection and how does it work?",
          "What is the difference between finalize, dispose, and close?",
          "How do you avoid memory leaks?"
        ]
      }
    ]
  },
  "13": {
    title: "Exception Handling",
    sections: [
      {
        heading: "Overview",
        text: "Exception handling provides a mechanism to handle runtime errors gracefully, separating error-handling code from normal logic."
      },
      {
        heading: "Try-Catch-Finally",
        text: "Try block contains code that may throw exceptions. Catch handles specific exceptions. Finally executes regardless (cleanup)."
      },
      {
        heading: "Checked vs. Unchecked Exceptions",
        text: "In Java, checked exceptions (IOException) must be handled or declared. Unchecked (RuntimeException) are optional."
      },
      {
        heading: "Throwing and Custom Exceptions",
        text: "Use `throw` to signal an exception. Custom exceptions extend Exception or RuntimeException, with constructors."
      },
      {
        heading: "Best Practices",
        text: "Don't catch generic Exception unless necessary; catch specific exceptions. Use logging. Don't ignore exceptions."
      },
      {
        heading: "Key Points",
        bullets: [
          "Finally block always executes (unless System.exit()).",
          "Try-with-resources (Java 7+) auto-closes resources.",
          "In C++, exception specifications are deprecated.",
          "In Python, try-except-else-finally."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the purpose of exception handling?",
          "Explain checked vs unchecked exceptions.",
          "What is the difference between finally and finalize?",
          "How do you create a custom exception?"
        ]
      }
    ]
  },
  "14": {
    title: "Generics",
    sections: [
      {
        heading: "Overview",
        text: "Generics enable type-safe data structures and algorithms by parameterizing types. They provide compile-time type checking and eliminate casting."
      },
      {
        heading: "Generic Classes and Interfaces",
        text: "Example: `class Box<T> { private T content; }`. T is a type parameter. Use with actual types: `Box<String> box = new Box<>();`"
      },
      {
        heading: "Generic Methods",
        text: "Methods can introduce their own type parameters. Example: `public static <T> T getMiddle(T... a) { ... }`"
      },
      {
        heading: "Bounded Type Parameters",
        text: "Restrict type parameters: `<T extends Number>` or `<T super Integer>` (super only for wildcards)."
      },
      {
        heading: "Wildcards",
        text: "`?` unknown type. Upper bounded (`? extends T`), lower bounded (`? super T`), unbounded (`?`). Used for flexibility."
      },
      {
        heading: "Key Points",
        bullets: [
          "Generics are implemented by type erasure in Java (compile-time).",
          "C++ templates are compile-time with separate code per type.",
          "Generics improve code safety and readability.",
          "Avoid raw types."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are generics and why are they used?",
          "Explain type erasure in Java.",
          "What is the difference between <? extends T> and <? super T>?",
          "Can you use primitive types with generics? (No, use wrappers)."
        ]
      }
    ]
  },
  "15": {
    title: "OOP Design Principles",
    sections: [
      {
        heading: "Overview",
        text: "Design principles guide the creation of maintainable, flexible, and scalable object-oriented software. Key principles include SOLID, DRY, and composition over inheritance."
      },
      {
        heading: "SOLID Principles",
        text: "Single Responsibility (one class, one reason to change). Open/Closed (open for extension, closed for modification). Liskov Substitution (subtypes substitutable). Interface Segregation (many specific interfaces). Dependency Inversion (depend on abstractions, not concretions)."
      },
      {
        heading: "DRY (Don't Repeat Yourself)",
        text: "Avoid duplication of code and logic. Extract common functionality into reusable components."
      },
      {
        heading: "Composition over Inheritance",
        text: "Favor using composition (has-a) over inheritance (is-a) to achieve flexibility and reduce tight coupling."
      },
      {
        heading: "Encapsulate What Varies",
        text: "Identify aspects that change and separate them from the rest, so they can be altered without affecting other code."
      },
      {
        heading: "Key Points",
        bullets: [
          "SOLID is widely used in professional software development.",
          "Liskov Substitution principle is critical for polymorphism.",
          "Dependency Injection is a common implementation of Dependency Inversion.",
          "Design patterns often embody these principles."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the SOLID principles?",
          "Explain the Open/Closed principle.",
          "What is Dependency Inversion?",
          "Why is composition preferred over inheritance?"
        ]
      }
    ]
  },
  "16": {
    title: "Design Patterns",
    sections: [
      {
        heading: "Overview",
        text: "Design patterns are reusable solutions to common software design problems. They are categorized into creational, structural, and behavioral patterns."
      },
      {
        heading: "Creational Patterns",
        text: "Singleton (ensure one instance), Factory (create objects without specifying concrete class), Abstract Factory, Builder, Prototype."
      },
      {
        heading: "Structural Patterns",
        text: "Adapter (wrap incompatible interfaces), Decorator (add behavior dynamically), Proxy (controlled access), Composite (tree structures)."
      },
      {
        heading: "Behavioral Patterns",
        text: "Observer (publish-subscribe), Strategy (family of algorithms), Command (encapsulate requests), State (state-dependent behavior)."
      },
      {
        heading: "Pattern Use",
        text: "Choose patterns based on problem context. Overuse can lead to unnecessary complexity. Know when to apply."
      },
      {
        heading: "Key Points",
        bullets: [
          "Design patterns are language-agnostic.",
          "Singleton is the most commonly used, but can be anti-pattern for testing.",
          "Dependency Injection is often used with factory patterns.",
          "MVC is an architectural pattern, not a design pattern."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a design pattern?",
          "Explain the Singleton pattern and its drawbacks.",
          "What is the Observer pattern and where is it used?",
          "Give examples of creational, structural, behavioral patterns."
        ]
      }
    ]
  },
  "17": {
    title: "Object Cloning",
    sections: [
      {
        heading: "Overview",
        text: "Object cloning creates a copy of an object. The copy may be shallow (shared references) or deep (independent copies)."
      },
      {
        heading: "Shallow Copy",
        text: "Copies primitive fields and references to objects. Changes to referenced objects affect both original and copy. In Java, `Object.clone()` does shallow copy."
      },
      {
        heading: "Deep Copy",
        text: "Recursively copies all referenced objects, creating independent copies. Often done via serialization or custom copy constructors."
      },
      {
        heading: "Cloning in Java",
        text: "Implement `Cloneable` marker interface and override `clone()` to make it public. Use `super.clone()` then deep copy fields."
      },
      {
        heading: "Copy Constructors and Factories",
        text: "Alternative to `clone()`: copy constructor (e.g., `new Student(student)`) or static factory method, which are more flexible."
      },
      {
        heading: "Key Points",
        bullets: [
          "Shallow copy is faster but may cause unintended sharing.",
          "Deep copy is safer but more expensive.",
          "In C++, copy constructors and assignment operators are used.",
          "In Python, `copy.copy()` (shallow) and `copy.deepcopy()`."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between shallow and deep copy?",
          "How does cloning work in Java?",
          "What is the Cloneable interface?",
          "When would you prefer a copy constructor over clone?"
        ]
      }
    ]
  }
};