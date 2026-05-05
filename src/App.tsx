/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Mic, 
  Camera, 
  User, 
  Fingerprint,
  ShieldCheck, 
  Copy, 
  Check, 
  EyeOff, 
  Moon, 
  Sun,
  Database,
  Grid3X3,
  ListTree,
  ExternalLink,
  ChevronRight,
  Code as CodeIcon,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// --- Types ---
interface Note {
  id: string;
  title: string;
  content: string;
  language: string;
  type: 'code' | 'text';
  timestamp: number;
}

// --- Initial Data ---
const PRE_POPULATED_CODE = `[1. تشفير Vigenère Cipher (Tabula Recta)
cpp
// ============================================
// METHOD 1: VIGENÈRE CIPHER ENCRYPTION
// ============================================

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int i, j, k, n;
    vector<vector<char>> a(26, vector<char>(26));
    k = 0;
    n = 26;
    
    for (i = 0; i < n; i++) {
        k = i;
        for (j = 0; j < n; j++) {
            a[i][j] = 'A' + k;
            k++;
            if (k == 26)
                k = 0;
        }
    }
    
    cout << "Enter the message: ";
    string s;
    cin >> s;
    cout << "Enter the key: ";
    string key;
    cin >> key;
    
    k = 0;
    int mod = key.size();
    for (i = key.size(); i < s.size(); i++) {
        key += key[k % mod];
        k++;
    }
    
    string encrypt;
    for (i = 0; i < s.size(); i++) {
        encrypt += a[s[i] - 'A'][key[i] - 'A'];
    }
    
    cout << "Encrypted message: " << encrypt << endl;
    return 0;
}
2. فك تشفير Vigenère Cipher (Tabula Recta)
cpp
// ============================================
// METHOD 2: VIGENÈRE CIPHER DECRYPTION
// ============================================

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int i, j, k, n;
    vector<vector<char>> a(26, vector<char>(26));
    k = 0;
    n = 26;
    
    for (i = 0; i < n; i++) {
        k = i;
        for (j = 0; j < n; j++) {
            a[i][j] = 'A' + k;
            k++;
            if (k == 26)
                k = 0;
        }
    }
    
    cout << "Enter the encrypted message : ";
    string encrypt;
    cin >> encrypt;
    cout << "Enter the key : ";
    string key;
    cin >> key;
    
    k = 0;
    int mod = key.size();
    for (i = key.size(); i < encrypt.size(); i++) {
        key += key[k % mod];
        k++;
    }
    
    string decrypt = "";
    for (i = 0; i < encrypt.size(); i++) {
        int row = key[i] - 'A';
        for (j = 0; j < 26; j++) {
            if (a[row][j] == encrypt[i]) {
                decrypt += (char)('A' + j);
                break;
            }
        }
    }
    
    cout << "Decrypted message: " << decrypt << endl;
    return 0;
}
3. مولد المفتاح باستخدام LFSR مزدوج (2 LFSR)
cpp
// ============================================
// METHOD 3: KEY GENERATOR USING TWO LFSRs
// ============================================

#include <iostream>
#include <string>
using namespace std;

int main() {
    int a[100], b[100], i, j, key, l1, l2, f1, f2, c1, c2, step = 1;
    
    cout << "Enter the Length of LFSR1 : ";
    cin >> l1;
    cout << "Enter the Connection Stage of LFSR1 : ";
    cin >> c1;
    
    for (i = 1; i <= l1; i++) {
        cout << "Enter the Bits of LFSR1 " << i << " : ";
        cin >> a[i];
    }
    
    cout << "\nEnter the Length of LFSR2 : ";
    cin >> l2;
    cout << "Enter the Connection Stage of LFSR2 : ";
    cin >> c2;
    
    for (i = 1; i <= l2; i++) {
        cout << "Enter the Bits of LFSR2 " << i << " : ";
        cin >> b[i];
    }
    
    cout << "\nEnter the Number of Key Generator : ";
    cin >> key;
    cout << endl;
    
    for (i = 1; i <= key; i++) {
        f1 = a[c1] xor a[l1];
        for (int j = l1; j >= 2; j--) {
            a[j] = a[j - 1];
        }
        a[1] = f1;
        
        f2 = b[c2] xor b[l2];
        for (int j = l2; j >= 2; j--) {
            b[j] = b[j - 1];
        }
        b[1] = f2;
        
        int out = f1 and f2;
        
        cout << "Step " << step++ << " : ";
        for (int j = 1; j <= l1; j++) {
            cout << a[j] << " ";
        }
        cout << "  ";
        for (int j = 1; j <= l2; j++) {
            cout << b[j] << " ";
        }
        cout << "  Out: " << out;
        cout << "\n";
    }
    
    return 0;
}
4. مولد المفتاح باستخدام LFSR ثلاثي مع دالة الأغلبية (Majority Function)
cpp
// ============================================
// METHOD 4: KEY GENERATOR USING THREE LFSRs
// WITH MAJORITY FUNCTION (A5/1 LIKE)
// ============================================

#include <iostream>
using namespace std;

int main() {
    int a[50], b[50], r[50], i, j, key, l1, l2, l3, f1, f2, f3, c1, c2, c3, out, step = 1;
    
    cout << "Enter the Length of LFSR1 : ";
    cin >> l1;
    cout << "Enter the Connection Stage of LFSR1 : ";
    cin >> c1;
    for (i = 1; i <= l1; i++) {
        cout << "Enter the Bits of LFSR1 " << i << " : ";
        cin >> a[i];
    }
    
    cout << endl;
    cout << "Enter the Length of LFSR2 : ";
    cin >> l2;
    cout << "Enter the Connection Stage of LFSR2 : ";
    cin >> c2;
    for (i = 1; i <= l2; i++) {
        cout << "Enter the Bits of LFSR2 " << i << " : ";
        cin >> b[i];
    }
    
    cout << endl;
    cout << "Enter the Length of LFSR3 : ";
    cin >> l3;
    cout << "Enter the Connection Stage of LFSR3 : ";
    cin >> c3;
    for (i = 1; i <= l3; i++) {
        cout << "Enter the Bits of LFSR3 " << i << " : ";
        cin >> r[i];
    }
    
    cout << "\nEnter the Number of Key Generation : ";
    cin >> key;
    cout << endl;
    
    for (i = 1; i <= key; i++) {
        f1 = a[c1] xor a[l1];
        for (j = l1; j >= 2; j--) {
            a[j] = a[j - 1];
        }
        a[1] = f1;
        
        f2 = b[c2] xor b[l2];
        for (j = l2; j >= 2; j--) {
            b[j] = b[j - 1];
        }
        b[1] = f2;
        
        f3 = r[c3] xor r[l3];
        for (j = l3; j >= 2; j--) {
            r[j] = r[j - 1];
        }
        r[1] = f3;
        
        // Majority Function
        if (f1 + f2 + f3 >= 2)
            out = 1;
        else 
            out = 0;
        
        cout << "Step " << step++ << " : ";
        for (j = 1; j <= l1; j++) {
            cout << a[j] << " ";
        }
        cout << "  ";
        for (j = 1; j <= l2; j++) {
            cout << b[j] << " ";
        }
        cout << "  ";
        for (j = 1; j <= l3; j++) {
            cout << r[j] << " ";
        }
        cout << "  Out: " << out;
        cout << "\n";
    }
    
    return 0;
}







CREATE DATABASE Ahmed_Muthana;
GO

USE Ahmed_Muthana;
GO

CREATE TABLE Zainab (
    ID INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100),
    Age INT,
    Department NVARCHAR(100)
);
GO

INSERT INTO Zainab (FullName, Age, Department)
VALUES
('Zainab Ahmed', 21, 'Cyber Security'),
('Sara Ali', 22, 'Networking'),
('Noor Hassan', 20, 'Programming');
GO

CREATE LOGIN User1 WITH PASSWORD = 'P@ssw0rd123';
GO

CREATE USER User1 FOR LOGIN User1;
GO

GRANT SELECT ON dbo.Zainab TO User1;
GO

GRANT INSERT ON dbo.Zainab TO User1;
GO

REVOKE SELECT ON dbo.Zainab FROM User1;
GO

ALTER LOGIN User1 WITH PASSWORD = 'NewSecurePassword123';
GO

ALTER LOGIN User1 DISABLE;
GO

ALTER LOGIN User1 ENABLE;
GO

SELECT 
    name,
    is_disabled,
    is_policy_checked,
    is_expiration_checked
FROM sys.sql_logins
WHERE name = 'User1';
GO

SELECT SERVERPROPERTY('IsIntegratedSecurityOnly');
GO

DROP USER User1;
GO

DROP LOGIN User1;
GO]`;

const DATA_STRUCTURES_CODE = {
  stack: `class Stack:  
    def __init__(self):  
        self.stack = []  
 
    def is_empty(self):  
        return len(self.stack) == 0  
 
    def push(self, item):  
        self.stack.append(item)  
 
    def pop(self):  
        if self.is_empty():  
            return "Stack is empty!"  
        return self.stack.pop()  
 
    def peek(self):  
        if self.is_empty():  
            return "Stack is empty!"  
        return self.stack[-1]  
 
    def size(self):  
        return len(self.stack)  

    def display(self):  
        return self.stack  

stack = Stack()  
stack.push(10)  
stack.push(20)  
stack.push(30)  
print(f"Top element: {stack.peek()}")  # Should print 30  
print(f"Stack size: {stack.size()}")    # Should print 3  
print(f"Stack contents: {stack.display()}")  # Should print [10, 20, 30]  
print(f"Popped element: {stack.pop()}")  # Should print 30  
print(f"Stack after pop: {stack.display()}")  # Should print [10, 20]`,

  queue: `class Queue: 
    def __init__(self): 
        self.queue = [] 
         
    def enqueue(self, element): 
        self.queue.append(element) 
         
    def dequeue(self): 
        if self.isEmpty(): 
            return "Queue is empty" 
        return self.queue.pop(0) 
         
    def peek(self): 
        if self.isEmpty(): 
            return "Queue is empty" 
        return self.queue[0] 
         
    def isEmpty(self): 
        return len(self.queue) == 0 
         
    def size(self): 
        return len(self.queue) 

myQueue = Queue() 
myQueue.enqueue('A') 
myQueue.enqueue('B') 
myQueue.enqueue('C') 
print("Queue: ", myQueue.queue) # Should print ['A', 'B', 'C'] 
print("Dequeue: ", myQueue.dequeue()) # Should print A 
print("Peek: ", myQueue.peek()) # Should print B 
print("isEmpty: ", myQueue.isEmpty()) # Should print False 
print("Size: ", myQueue.size()) # Should print 2`,

  bst_inorder: `class Node: 
    def __init__(self, key): 
        self.left = None 
        self.right = None 
        self.val = key 
 
def insert(root, key): 
    if root is None: 
        return Node(key) 
    if root.val == key: 
        return root 
    if root.val < key: 
        root.right = insert(root.right, key) 
    else: 
        root.left = insert(root.left, key) 
    return root 
 
def inorder(root): 
    if root: 
        inorder(root.left) 
        print(root.val, end=" ") 
        inorder(root.right) 
 
# Creating the following BST 
#             50 
#            /     \\ 
#      30          70 
#     /  \\            /  \\ 
# 20   40     60   80 
r = Node(50) 
r = insert(r, 30) 
r = insert(r, 20) 
r = insert(r, 40) 
r = insert(r, 70) 
r = insert(r, 60) 
r = insert(r, 80) 
print("In-order traversal: ") 
inorder(r) 
#Output :   20     30     40     50     60     70     80`,

  bst_preorder: `class Node: 
    def __init__(self, key): 
        self.left = None 
        self.right = None 
        self.val = key 
 
def insert(root, key): 
    if root is None: 
        return Node(key) 
    if root.val == key: 
        return root 
    if root.val < key: 
        root.right = insert(root.right, key) 
    else: 
        root.left = insert(root.left, key) 
    return root 
 
def preorder(root): 
    if root: 
        print(root.val, end=" ")   
        preorder(root.left)        
        preorder(root.right)       

r = Node(50) 
r = insert(r, 30) 
r = insert(r, 20) 
r = insert(r, 40) 
r = insert(r, 70) 
r = insert(r, 60) 
r = insert(r, 80) 
print("Pre-order traversal: ") 
preorder(r) 
#Output:   50     30     20     40     70     60     80`,

  bst_postorder: `class Node: 
    def __init__(self, key): 
        self.left = None 
        self.right = None 
        self.val = key 
 
def insert(root, key): 
    if root is None: 
        return Node(key) 
    if root.val == key: 
        return root 
    if root.val < key: 
        root.right = insert(root.right, key) 
    else: 
        root.left = insert(root.left, key) 
    return root 
 
def postorder(root): 
    if root: 
        postorder(root.left)       
        postorder(root.right)      
        print(root.val, end=" ")   

r = Node(50) 
r = insert(r, 30) 
r = insert(r, 20) 
r = insert(r, 40) 
r = insert(r, 70) 
r = insert(r, 60) 
r = insert(r, 80) 
print("Post-order traversal: ") 
postorder(r) 
#Output:   20     40     30     60     80     70     50`
};

// --- Components ---

const CodeSnippet = ({ title, code, language }: { title: string; code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="text-sm font-medium text-gray-400 ml-4">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors group-hover:opacity-100 opacity-50"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
        </button>
      </div>
      <div className="text-[13px] font-mono leading-relaxed">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: '20px', background: 'transparent' }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default function App() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('algorithms');
  
  // Tab sensitivity
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isVaultOpen) {
        handleHide();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isVaultOpen]);

  const handleGDoubleClick = () => {
    setIsVaultOpen(true);
  };

  const handleHide = () => {
    setIsVaultOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-900 text-slate-200 font-sans transition-colors duration-300`}>
      
      {/* Browser Chrome Header */}
      <nav className="h-14 bg-slate-800 flex items-center px-4 border-b border-slate-700 shadow-xl shrink-0 z-50">
        <div className="flex space-x-2 mr-6 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 bg-slate-900 h-8 rounded-md flex items-center px-4 space-x-2 border border-slate-700 max-w-2xl overflow-hidden">
          <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
          <span className="text-slate-500 text-[10px] shrink-0">https://</span>
          <span className="text-slate-300 text-[10px] truncate">
            {isVaultOpen ? 'private-vault.academic.repo' : 'search.google.com'}
          </span>
        </div>
        <div className="flex space-x-4 ml-6 items-center shrink-0">
          {isVaultOpen && (
            <div className="hidden md:block text-[10px] font-semibold text-sky-400 uppercase tracking-widest px-2 py-1 bg-sky-500/10 rounded">
              Vault Mode
            </div>
          )}
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] border border-slate-600 font-bold">
            AM
          </div>
        </div>
      </nav>

      <AnimatePresence>
      </AnimatePresence>

      <div className="flex-1 flex overflow-hidden">
        {!isVaultOpen ? (
          /* --- Fake Search Page (Sleek Mode) --- */
          <div className="flex-1 flex flex-col items-center bg-[#202124]">
            <header className="w-full flex justify-end p-4 space-x-4 items-center text-gray-300">
              <button className="hover:underline text-sm">Gmail</button>
              <button className="hover:underline text-sm">Images</button>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </button>
            </header>

            <main className="flex-1 flex flex-col items-center pt-[15vh] px-4 w-full">
              <div className="mb-8 select-none flex items-baseline">
                <span 
                  onDoubleClick={handleGDoubleClick}
                  className="text-8xl font-bold tracking-tighter cursor-pointer active:scale-95 transition-transform"
                  style={{ color: '#4285F4' }}
                >g</span>
                <span className="text-8xl font-bold tracking-tighter" style={{ color: '#EA4335' }}>o</span>
                <span className="text-8xl font-bold tracking-tighter" style={{ color: '#FBBC05' }}>o</span>
                <span className="text-8xl font-bold tracking-tighter" style={{ color: '#4285F4' }}>g</span>
                <span className="text-8xl font-bold tracking-tighter" style={{ color: '#34A853' }}>l</span>
                <span className="text-8xl font-bold tracking-tighter" style={{ color: '#EA4335' }}>e</span>
              </div>

              <div className={`group w-full max-w-[584px] h-[44px] flex items-center px-4 rounded-full border border-gray-700 hover:bg-gray-800 focus-within:bg-gray-800 focus-within:shadow-[0_1px_6px_rgba(32,33,36,0.28)] transition-all`}>
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500 text-white"
                  placeholder=""
                />
                <div className="flex space-x-3 text-blue-400">
                  <Mic className="w-5 h-5 cursor-pointer hover:text-blue-300" />
                  <Camera className="w-5 h-5 cursor-pointer hover:text-blue-300" />
                </div>
              </div>

              <div className="flex space-x-3 mt-8">
                <button className="px-5 py-2 text-[13px] rounded bg-[#303134] hover:border-gray-600 border border-transparent text-[#e8eaed] transition-colors">
                  Google Search
                </button>
                <button className="px-5 py-2 text-[13px] rounded bg-[#303134] hover:border-gray-600 border border-transparent text-[#e8eaed] transition-colors">
                  I'm Feeling Lucky
                </button>
              </div>

              <div className="mt-8 text-[13px] flex space-x-2">
                <span className="text-[#999da2]">Google offered in:</span>
                <button className="text-blue-400 hover:underline">العربية</button>
              </div>
            </main>

            <footer className="w-full bg-[#171717] text-[13px] text-gray-400 border-t border-gray-700">
              <div className="px-8 py-3 border-b border-gray-700">Iraq</div>
              <div className="px-8 py-3 flex flex-wrap justify-between">
                <div className="flex space-x-6">
                  <span className="hover:underline cursor-pointer">About</span>
                  <span className="hover:underline cursor-pointer">Advertising</span>
                  <span className="hover:underline cursor-pointer">Business</span>
                  <span className="hover:underline cursor-pointer">How Search works</span>
                </div>
                <div className="flex space-x-6">
                  <span className="hover:underline cursor-pointer">Privacy</span>
                  <span className="hover:underline cursor-pointer">Terms</span>
                  <span className="hover:underline cursor-pointer">Settings</span>
                </div>
              </div>
            </footer>
          </div>
        ) : (
          /* --- Sleek Vault Page --- */
          <>
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col shrink-0">
              <div className="p-8 flex flex-col items-center">
                <div className="text-2xl font-bold tracking-tight select-none cursor-default mb-1">
                  <span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span>
                </div>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold text-center">Private Academic Vault</p>
              </div>
              
              <div className="flex-1 px-4 space-y-1">
                {[
                  { id: 'algorithms', label: 'Algorithms & Crypto', icon: CodeIcon },
                  { id: 'database', label: 'Database Schemes', icon: Database },
                  { id: 'data-structures', label: 'Data Structures', icon: ListTree },
                  { id: 'notes', label: 'Academic Notes', icon: User },
                  { id: 'links', label: 'Secure Access', icon: ExternalLink },
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full p-3 flex items-center rounded-lg text-sm font-medium transition-all ${
                      activeTab === item.id 
                        ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-lg shadow-sky-500/5' 
                        : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-300'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${activeTab === item.id ? 'opacity-100' : 'opacity-50'}`} />
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                <button 
                  onClick={handleHide}
                  className="w-full py-2.5 px-4 bg-slate-900 border border-slate-700 rounded-lg text-[10px] font-bold text-slate-400 hover:text-white hover:bg-slate-950 transition-all uppercase tracking-widest"
                >
                  Close Access
                </button>
              </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 flex flex-col bg-slate-900 overflow-hidden">
              <header className="p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <h2 className="text-lg font-semibold tracking-tight text-white">University Repository - {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-slate-800 px-3 py-1.5 rounded text-[10px] text-slate-400 border border-slate-700">Last sync: 2m ago</div>
                  <div className="bg-slate-800 px-3 py-1.5 rounded text-[10px] text-slate-400 border border-slate-700 font-mono select-all">Ahmed_Muthana</div>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1400px]"
                >
                  {activeTab === 'algorithms' && (
                    <>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="vigenere_encrypt.cpp"
                          language="cpp"
                          code={PRE_POPULATED_CODE.split('2. فك تشفير')[0].split('cpp\n')[1].trim()}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="vigenere_decrypt.cpp"
                          language="cpp"
                          code={PRE_POPULATED_CODE.split('2. فك تشفير')[1].split('3. مولد المفتاح')[0].split('cpp\n')[1].trim()}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="dual_lfsr.cpp"
                          language="cpp"
                          code={PRE_POPULATED_CODE.split('3. مولد المفتاح')[1].split('4. مولد المفتاح')[0].split('cpp\n')[1].trim()}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="triple_lfsr_majority.cpp"
                          language="cpp"
                          code={PRE_POPULATED_CODE.split('4. مولد المفتاح')[1].split('CREATE DATABASE')[0].split('cpp\n')[1].trim()}
                        />
                      </div>
                    </>
                  )}

                  {activeTab === 'database' && (
                    <div className="col-span-full space-y-4">
                      <CodeSnippet 
                        title="academic_setup.sql"
                        language="sql"
                        code={'CREATE DATABASE' + PRE_POPULATED_CODE.split('CREATE DATABASE')[1].split(']')[0]}
                      />
                    </div>
                  )}

                  {activeTab === 'data-structures' && (
                    <>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="stack_implementation.py"
                          language="python"
                          code={DATA_STRUCTURES_CODE.stack}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="queue_implementation.py"
                          language="python"
                          code={DATA_STRUCTURES_CODE.queue}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="bst_inorder.py"
                          language="python"
                          code={DATA_STRUCTURES_CODE.bst_inorder}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="bst_preorder.py"
                          language="python"
                          code={DATA_STRUCTURES_CODE.bst_preorder}
                        />
                      </div>
                      <div className="space-y-4">
                        <CodeSnippet 
                          title="bst_postorder.py"
                          language="python"
                          code={DATA_STRUCTURES_CODE.bst_postorder}
                        />
                      </div>
                    </>
                  )}

                  {activeTab === 'notes' && (
                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 group hover:border-slate-600 transition-all">
                        <h4 className="text-sky-400 font-bold mb-2">Subject: Advanced Cryptography</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Study focus on LFSR based stream ciphers and Vigenère polyalphabetic substitution. Ensure key complexity for Vigenère stays above minimal period threshold.</p>
                      </div>
                      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 group hover:border-slate-600 transition-all">
                        <h4 className="text-pink-400 font-bold mb-2">Subject: Database Management</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Understanding SQL permissions (GRANT, REVOKE) and LOGIN security. The Ahmed_Muthana database uses integrated security checks for User1 access control.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </main>
          </>
        )}
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-6 bg-slate-800 border-t border-slate-700 flex items-center px-4 justify-between text-[9px] text-slate-500 shrink-0 font-medium">
        <div className="flex space-x-4">
          <span className="flex items-center"><ShieldCheck className="w-2 h-2 mr-1 text-sky-500" /> SECURE SESSION: AES-256</span>
          <span className="opacity-50">TAB ISOLATION: ACTIVE</span>
        </div>
        <div className="flex space-x-4">
          <span className="text-sky-500">SENSITIVE MODE: ON</span>
          <span className="text-slate-600">ID: AIS-SEC-9021</span>
        </div>
      </footer>
    </div>
  );
}

