import React, { Component } from "react";
import { Dimensions, ToastAndroid, ActivityIndicator } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  LabelGeral,
  Container,
  SearchSection,
  InputText,
  ListContainer,
  Separator
} from "./styles";
import MeetupItem from "~/components/MeetupItem";
import { Creators as CreatorsMeetups } from "~/store/ducks/meetups";
import Icon from "react-native-vector-icons/MaterialIcons";
import { metrics, colors } from "~/styles";
class Search extends Component {
  state = {
    text: "",
    orientation: ""
  };

  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get("window").width < Dimensions.get("window").height) {
        this.setState({ orientation: "portrait" });
      } else {
        this.setState({ orientation: "landscape" });
      }
    }
  };
  loadMeetupsSearch = () => {
    const { filterPage, filterLastPage, meetupsFilterRequest } = this.props;
    const { text } = this.state;
    if (filterPage < filterLastPage) {
      meetupsFilterRequest({ criterio: text, page: filterPage + 1 });
    }
  };

  search = async () => {
    try {
      const { text } = this.state;
      const { meetupsFilterRequest } = this.props;
      await meetupsFilterRequest({
        criterio: text,
        page: 1
      });
    } catch (_err) {
      ToastAndroid.showWithGravity(
        String(_err),
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } finally {
      // this.setState({ loading: false, refreshing: false })
    }
  };

  renderItem = ({ item }) => (
    <MeetupItem
      meetup={item}
      subscriptions={item.__meta__.subscriptions_count}
    />
  );

  componentDidMount() {
    this.loadMeetupsSearch();
    this.getOrientation();
    Dimensions.addEventListener("change", () => {
      this.getOrientation();
    });
  }

  renderSeparator = () => <Separator />;

  render() {
    const { meetups, loading, error, msgError } = this.props;
    return (
      <Container ref="rootView">
        {!!error && <Error>{msgError}</Error>}
        <SearchSection>
          {loading ? (
            <ActivityIndicator color={colors.colorPrincipal} size="small" />
          ) : (
            <Icon
              style={{ paddingLeft: metrics.marginMin }}
              name="search"
              size={20}
              color="#8e8e93"
            />
          )}

          <InputText
            placeholder="Buscar Meetups"
            placeholderTextColor="#8e8e93"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            onEndEditing={this.search}
            maxLength={40}
          />
        </SearchSection>

        <ListContainer
          data={meetups}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
          onEndReached={this.loadMeetupsSearch}
          onEndReachedThreshold={0.5}
          horizontal={this.state.orientation !== "portrait"}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  meetups: state.meetups.filters,
  msgError: state.meetups.msgError,
  error: state.meetups.error,
  loading: state.meetups.loading,
  filterPage: state.meetups.filterPage,
  filterLastPage: state.meetups.filterLastPage
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CreatorsMeetups, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
