import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Dialog from "react-native-dialog";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  Button,
  Platform,
} from "react-native";

export default function App() {
  const [text, setText] = useState(false);
  const [form, setForm] = useState(false);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  const handlerTextPressed = () => {
    Alert.alert("Text Pressed", "Are you sure?", [
      { text: "Yes", onPress: () => setText(true) },
      { text: "No", onPress: () => setText(false) },
    ]);
  };
  const buttonPressed = () => {
    setForm(true);
  };
  const setValueUser = (e) => {
    console.log(e.target);
    setInput(e.target.value);
  };
  const setUserName = () => {
    setUser(input);
    console.log(user);
    setInput("");
    setForm(false);
  };
  const closeDialog = () => {
    setForm(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pressText} onPress={handlerTextPressed}>
        Press me
      </Text>
      <Button
        backgroundColor="white"
        color="#f194ff"
        title="Set name"
        onPress={buttonPressed}
      />
      {text ? (
        <Text style={[styles.pressedText, styles.pressText]}>
          Text pressed!!!
        </Text>
      ) : null}
      <Dialog.Container visible={form}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Input value={input} onTextInput={setValueUser} />
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Confirm" onPress={setUserName} />
        <Dialog.Button label="Cancel" onPress={closeDialog} />
      </Dialog.Container>
      {user ? <Text>Hello {user}</Text> : null}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    // paddingTop: "15%",
    height: "100%",
  },
  pressText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  pressedText: {
    marginTop: 20,
  },
  setName: {
    width: "50%",
    margin: "0 auto",
    marginTop: 20,
    backgroundColor: "white",
  },
});
