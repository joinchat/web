import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Popover, {PopoverAnimationVertical} from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from"material-ui/MenuItem";


interface SignPopOverState {
    open: boolean;
    anchorEl?: any;
}

interface SignPopOverProps {
    open?: any;
    anchorEl?: any;
}

export class SettingsPopOver extends React.Component<SignPopOverProps, SignPopOverState> {

  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event: any) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleClick}
          label="Info"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default SettingsPopOver;