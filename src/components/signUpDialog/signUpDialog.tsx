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
  errorState: {
    phone: string;
    code: string;
    password: string;
    repeatPassword: string;
    username: string;
  };
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
      errorState: {
        phone: "",
        code: "",
        password: "",
        repeatPassword:  "",
        username:  ""
      }
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
      this.validatePhone() ? this.props.fetchGetCode(this.state.phone) : console.log("error");
    } else if (this.props.type_of_input === "code") {
      this.props.fetchvVerifyCode(this.state.phone, this.state.code);
    } else {
      this.props.fetchUserSignUp(this.state.username, this.state.password)
      this.setState({username: "", password: ""});
    }
  }

  updateState = (event: any) => {
    const {name, value} = event.target;

    this.setState(() => ({
      [name]: value
    }));

  }

  validatePhone = () => {
    let errorState = {...this.state.errorState};
    if (this.state.phone.length < 4 || this.state.phone.length > 15) {
      errorState.phone = "Please input correct value";
      this.setState({
        errorState
      });
      return false;
    }
    errorState.phone = "";
      this.setState({
        errorState
      });
    return true;
  }


  render() {
    let inputCollection = null;

    let { type_of_input, error } = this.props;
    let { phone, errorState, code, username, password, repeatPassword } = this.state;

    switch (type_of_input) {
      case "phone":
        inputCollection =
          <TextField
            fullWidth={true}
            floatingLabelText="Enter your phone"
            value={phone}
            onChange={this.updateState.bind(this)}
            // onChange={this.updateState.bind(this)}
            type="number"
            name="phone"
            errorText={error || errorState.phone}
          />;
      break;
      case "code":
        inputCollection =
          <TextField
            fullWidth={true}
            floatingLabelText="Enter code from message"
            value={code}
            onChange={this.updateState.bind(this)}
            errorText={error || errorState.code}
            name="code"
          />;
      break;
      case "userName":
        inputCollection =
          <div>
            <TextField
              fullWidth={true}
              floatingLabelText="Username"
              value={username}
              onChange={this.updateState.bind(this)}
              errorText={error || errorState.username}
            />
            <TextField
              fullWidth={true}
              type="password"
              hintText="Password Field"
              floatingLabelText="password"
              value={password}
              onChange={this.updateState.bind(this)}
              errorText={error || errorState.password}
            />
            <TextField
              fullWidth={true}
              type="password"
              hintText="Password Field"
              floatingLabelText="Please repeat password"
              value={repeatPassword}
              onChange={this.updateState.bind(this)}
              errorText={error || errorState.repeatPassword}
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