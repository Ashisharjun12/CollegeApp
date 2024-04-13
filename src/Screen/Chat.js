
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
        text: 'Hey, How can I help You ?',
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
      _id: Math.random().toString(36).substring(7),
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
            "Authorization": "Bearer Api key",
          },
        }
      );

      const botMessage = response.data.choices[0]?.message?.content || 'No response text.';
      const botReply = {
        _id: Math.random().toString(36).substring(7),
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
        renderLoading={() => <ActivityIndicator size={43} color="black" />}
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