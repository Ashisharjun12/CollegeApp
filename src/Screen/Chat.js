import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { GiftedChat } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [lastMessageSentTime, setLastMessageSentTime] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

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
          avatar: require('../Image/bot.png')
        },
      },
    ]);
  };

  const handleSend = async (newMessages = []) => {
    if (newMessages.length === 0) {
      return; // No new messages to send
    }

    // Calculate time since last message sent
    const currentTime = new Date();
    if (lastMessageSentTime) {
      const timeSinceLastMessage = currentTime - lastMessageSentTime;
      const minTimeBetweenMessages = 60 * 1000 / 40000; // 1 minute / TPM limit
      if (timeSinceLastMessage < minTimeBetweenMessages) {
        // Wait before sending the next message
        setTimeout(() => {
          handleSend(newMessages);
        }, minTimeBetweenMessages - timeSinceLastMessage);
        return;
      }
    }

    // Update last message sent time
    setLastMessageSentTime(currentTime);

    const userMessage = newMessages[0].text;
    const newMessage = {
      _id: Math.random().toString(36).substring(7),
      text: userMessage,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };

    setLoading(true);

    try {
      setIsBotTyping(true);

      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003", // Use GPT-3.5 turbo model here
          max_tokens: 150,
          prompt: userMessage,
          temperature: 0.7
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-proj-HKoUFMh2hCScg073YfPFT3BlbkFJphBg90h3iM8lMnRuOGLJ",
          },
        }
      );

      const botMessage = response.data.choices[0]?.text || 'No response text.';
      const botReply = {
        _id: Math.random().toString(36).substring(7),
        text: botMessage,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bot',
          avatar: require('../Image/bot.png')
        },
      };

      setMessages(previousMessages => GiftedChat.append(
        previousMessages.filter(message => message._id !== newMessage._id),
        [newMessage, botReply]
      ));

      setIsBotTyping(false);
      setRetryCount(0); // Reset retry count on successful response
    } catch (error) {
      console.error('Error sending message:', error);

      // Implement exponential backoff
      const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff formula
      setTimeout(() => {
        handleSend(newMessages);
        setRetryCount(prevRetryCount => prevRetryCount + 1); // Increment retry count
      }, delay);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: responsiveWidth(5), marginTop: responsiveHeight(2) }}>
        <Ionicons name="arrow-back-sharp" color={'black'} size={30} />
      </TouchableOpacity>
      <View style={{ width: "100%", height: responsiveHeight(0.3), backgroundColor: "#DDDDDD" }}></View>

      <GiftedChat
        messages={messages}
        onSend={handleSend}
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
    backgroundColor: '#F1FCFD'
  }
});
