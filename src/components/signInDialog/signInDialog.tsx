import * as React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

interface SignInDialogState {
  open: boolean;
  username: string;
  password: string;
}

interface SignInDialogProps {
  succesVerifyCode?: boolean;
  fetchUserSignIn: any;
}

export class SignInDialog extends React.Component<SignInDialogProps, SignInDialogState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      username: "",
      password: "",
    };

  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handlePost = () => {
    // this.setState({open: false});
    this.props.fetchUserSignIn(this.state.username, this.state.password);
  };

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


  render() {
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
        <FlatButton label="Sign In" onClick={this.handleOpen} />
        <Dialog
          title="Sign In"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            fullWidth={true}
            floatingLabelText="Enter your username"
            value={this.state.username}
            onChange={this.updateName.bind(this)}
          />;
          <TextField
            fullWidth={true}
            floatingLabelText="Enter your password"
            value={this.state.password}
            onChange={this.updatePassword.bind(this)}
            type="password"
          />;
        </Dialog>
      </div>
    );
  }
}

export default SignInDialog;