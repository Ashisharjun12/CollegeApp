import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'react-native-axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textinput, setTextinput] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
        },
      },
    ]);
  }, []);

  const handleSend = async () => {
    if (textinput.trim() === '') {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [{ role: 'user', content: textinput }],
          model: 'gpt-3.5-turbo',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
          },
        }
      );

      const generatedText = response.data.choices[0]?.message?.content || 'No response text.';
      setTextinput('');
      setMessages(previousMessages => GiftedChat.append(previousMessages, [{
        _id: Math.random().toString(36).substring(7),
        text: generatedText,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
        },
      }]));
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Retry after waiting for some time
        setTimeout(() => {
          handleSend(); // Retry the request
        }, 5000); // Wait for 5 seconds before retrying
      } else {
        console.error('Error sending message:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
        }}
        placeholder='Type your message...'
        text={textinput}
        onInputTextChanged={setTextinput}
        alwaysShowSend={true}
        renderLoading={() => <ActivityIndicator size="large" color="black" />}
      />
    </View>
  );
};

export default Chat;
