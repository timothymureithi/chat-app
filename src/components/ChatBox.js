import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const q = query(
          collection(db, "messages"),
          orderBy("createdAt"),
          limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
          let messages = [];
          QuerySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          setMessages(messages);
        });
        return () => unsubscribe;
      }, []);
   
    return (
      <main className="chat-box">
       
      </main>
    );
  };
  export default ChatBox;