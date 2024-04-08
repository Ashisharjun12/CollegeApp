
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator,TouchableOpacity,View } from 'react-native';
import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    handleInitialMessage();
  }, []);

  const handleInitialMessage = () => {
    setMessages([
      {
        _id: 1,
        text: 'Hey, Ask Me AnyThing ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bot',
          avatar:require('../Image/bot.png')
        },
      },
    ]);
  };

  const handleSend = async (newMessages = []) => {
    const userMessage = newMessages[0].text;
    const newMessage = {
      _id: Date.now(),
      text: userMessage,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, [newMessage]));

    setLoading(true);

    try {
      setIsBotTyping(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [{ role: "user", content: userMessage }],
          model: "gpt-3.5-turbo",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Api Key",
          },
        }
      );

      const botMessage = response.data.choices[0]?.message?.content || 'No response text.';
      const botReply = {
        _id: Date.now(),
        text: botMessage,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bot',
          avatar:require('../Image/bot.png')
        },
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [botReply]));

      setIsBotTyping(false);
    } catch (error) {
      if (error.response && error.response.status === 429) {
       
        const delay = Math.pow(2, retryCount) * 1000; 
        setTimeout(() => {
          setRetryCount(retryCount + 1);
          handleSend(newMessages); 
        }, delay);
      } else {
        console.error('Error sending message:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity  onPress={()=> navigation.goBack()}
    style={{marginLeft:responsiveWidth(5),marginTop:responsiveHeight(2)}}>
   <Ionicons name="arrow-back-sharp" color={'black'} size={30} />
   </TouchableOpacity>
   <View style={{width:"100%",height:responsiveHeight(0.3),backgroundColor:"#DDDDDD"}}></View>
        
      <GiftedChat
        messages={messages}
        onSend={newMessages => handleSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderLoading={() => <ActivityIndicator size="large" color="black" />}
        renderAvatarOnTop
        showUserAvatar
        isTyping={isBotTyping}
      />
    </SafeAreaView>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F1FCFD'
  }
});

