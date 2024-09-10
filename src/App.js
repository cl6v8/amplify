import { Authenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import React from "react";
import "@aws-amplify/ui-react/styles.css"; // Import the styles for the Authenticator

const App = () => {
  const handleOAuthLogin = async () => {
    try {
      await Auth.federatedSignIn(); // This will redirect to the Hosted UI
    } catch (error) {
      console.error("Error during OAuth sign in", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to Amplify Authentication</h1>

        {/* Authenticator component for traditional login (username/password) */}
        <Authenticator>
          {({ signOut, user }) => (
            <div>
              <h2>Hello, {user.username}</h2>

              {/* Federated Sign-Out Button (Visible after traditional login) */}
              <button
                onClick={signOut}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </Authenticator>

        {/* SAML SSO Sign-In Button */}
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleOAuthLogin}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign In with SAML SSO
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
