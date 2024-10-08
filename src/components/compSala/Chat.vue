<template>
  <div class="chat-container">
    <div class="messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'message',
          message.username === username ? 'sent' : 'received',
        ]"
      >
        <span class="message-content">{{ message.text }}</span>
        <span class="username">{{
          message.username === username ? "You" : message.username
        }}</span>
      </div>
    </div>

    <div class="input-area">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message"
        class="message-input"
      />
      <button @click="sendMessage" class="send-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="send-icon"
        >
          <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "User" + Math.floor(Math.random() * 1000),
      newMessage: "",
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        const message = {
          username: this.username,
          text: this.newMessage,
        };
        this.messages.push(message);
        this.newMessage = "";

        this.$nextTick(() => {
          const messagesContainer = this.$el.querySelector(".messages");
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
      }
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: var(--primary-color);
}

.messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--primary-color);
}

.message {
  max-width: 70%;
  padding: 10px;
  border-radius: 15px;
  display: inline-block;
  position: relative;
}

.message.sent {
  background-color: var(--secondary-color);
  align-self: flex-end;
}

.message.received {
  background-color: #fff;
  align-self: flex-start;
}

.message-content {
  font-size: 14px;
  word-wrap: break-word;
}

.username {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  text-align: right;
  display: block;
}

.input-area {
  display: flex;
  padding: 10px;
  background-color: var(--primary-color);
  border-top: 1px solid #ddd;
}

.message-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  font-size: 14px;
  background-color: #f0f0f0;
}

.send-button {
  background-color: var(--secondary-color);
  border: none;
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.send-button:hover {
  background-color: var(--primary-color);
  border: 2px solid white;
}

.send-icon {
  width: 20px;
  height: 20px;
  fill: white;
}
@media (min-width: 481px) and (max-width: 1024px) {
  .chat-container {
    width: 80%;
    height: 370px;
  }
}
@media (max-width: 480px) {
  .chat-container {
    width: 90%;
    height: 370px;
  }
}
</style>
