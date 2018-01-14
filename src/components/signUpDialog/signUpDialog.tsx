import * as React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";


interface SignUpDialogState {
  open: boolean;
  phone: string;
  code: string;
  username: string;
  password: string;
  repeatPassword: string;
}

interface SignUpDialogProps {
  succesVerifyCode: boolean;
  fetchGetCode: any;
  type_of_input: string;
  fetchvVerifyCode: any;
  fetchUserSignUp: any;
  error: string;
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
    };

  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handlePost = () => {
    if (this.props.type_of_input === "phone") {
      this.props.fetchGetCode(this.state.phone);
    } else if (this.props.type_of_input === "code") {
      this.props.fetchvVerifyCode(this.state.phone, this.state.code);
    } else {
      this.props.fetchUserSignUp(this.state.username, this.state.password)
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

    console.log(this.props);

    switch (this.props.type_of_input) {
      case "phone":
        inputCollection =
          <TextField
            fullWidth={true}
            floatingLabelText="Enter your phone"
            value={this.state.phone}
            onChange={this.updatePhone.bind(this)}
            type="number"
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