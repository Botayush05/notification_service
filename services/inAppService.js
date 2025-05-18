const sendInApp = async (userId, content) => {
  if (Math.random() < 0.5) {
    throw new Error("In-App service failed");
  }
  console.log(`[IN-APP] Notification stored for User ${userId}: ${content}`);
};

module.exports = { sendInApp };
