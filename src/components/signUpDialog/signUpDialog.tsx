import * as React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { PostVerificationCode } from "../../actions/request";
import { GetVerificationCode } from "../../actions/getCode";

interface SignUpDialogState {
  open: boolean;
  phone: string;
  code: string;
  username: string;
  password: string;
  repeatPassword: string;
  typeOfInput: string;
}

interface SignUpDialogProps {
  succesGetCode: boolean;
}

export class SignUpDialog extends React.Component<SignUpDialogProps, SignUpDialogState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      phone: "",
      code: "",
      username: "",
      password: "",
      repeatPassword: "",
      typeOfInput: "phone",
    };

  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handlePost = () => {
    if (this.state.typeOfInput === "phone") {
      GetVerificationCode(this.state.phone);
      // this.setState({typeOfInput: "code"}) : null;
      
    } else if (this.state.typeOfInput === "code") {
      PostVerificationCode(this.state.phone, this.state.code);
      this.setState({code: "", typeOfInput: "userName"});
    } else {

      this.setState({username: "", password: ""});
    }
  }

  updatePhone = (event: any) => {
    const value = event.target.value;
    this.setState({
      phone: value,
    });
  }

  updateCode = (event: any) => {
    const value = event.target.value;
    this.setState({
      code: value,
    });
  }

  updateName = (event: any) => {
    const value = event.target.value;
    this.setState({
      username: value,
    });
  }

  updatePassword = (event: any) => {
    const value = event.target.value;
    this.setState({
      password: value,
    });
  }

  updateRepeatPassword = (event: any) => {
    const value = event.target.value;
    this.setState({
      repeatPassword: value,
    });
  }

  render() {
    let inputCollection = null;

    switch (this.state.typeOfInput) {
      case "phone":
        inputCollection =
          <TextField
            fullWidth={true}
            floatingLabelText="Enter your phone"
            value={this.state.phone}
            onChange={this.updatePhone.bind(this)}
          />;
      break;
      case "code":
        inputCollection =
          <TextField
            fullWidth={true}
            floatingLabelText="Enter code from message"
            value={this.state.code}
            onChange={this.updateCode.bind(this)}
          />;
      break;
      case "userName":
        inputCollection =
          <div>
            <TextField
              fullWidth={true}
              floatingLabelText="Username"
              value={this.state.username}
              onChange={this.updateName.bind(this)}
            />
            <TextField
              fullWidth={true}
              type="password"
              hintText="Password Field"
              floatingLabelText="password"
              value={this.state.password}
              onChange={this.updatePassword.bind(this)}
            />
            <TextField
              fullWidth={true}
              type="password"
              hintText="Password Field"
              floatingLabelText="Please repeat password"
              value={this.state.repeatPassword}
              onChange={this.updateRepeatPassword.bind(this)}
            /></div>;
      break;
    }

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="-->"
        primary={true}
        onClick={this.handlePost}
      />
    ];

    const style = {
        "display": "inline-block"
    };

    return (
      <div style={style}>
        <FlatButton label="Sign Up" onClick={this.handleOpen} />
        <Dialog
          title="Sign Up"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        {inputCollection}
        </Dialog>
      </div>
    );
  }
}

export default SignUpDialog;