import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="u-backgroundPrimary u-paddingVerticalMedium">
        <div className="Container">
          <form onSubmit={this.onFormSubmit} className="">
            <div className="FormGroup u-block">
              <label className="FormLabel u-block u-marginBottomTiny u-text300 u-textMedium u-textWhite">Video search</label>
              <input type="text" placeholder="Keyword..." className="FormInput u-block u-widthFull"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;