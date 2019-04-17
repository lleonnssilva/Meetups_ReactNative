import React, { Component } from "react";
import {
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
  FlatList
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Container,
  SearchSection,
  InputText,
  ListContainer,
  Separator,
  Image,
  Footer,
  ContainerItem,
  ContainerFooter,
  TitleItem,
  Subscription,
  ContainerButtom,
  ButtonDetail,
  TextError
} from "./styles";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Creators as MeetupsActions } from "~/store/ducks/meetups";
import { Creators as MeetupActions } from "~/store/ducks/meetup";

import { metrics, colors } from "~/styles";
import { UrlFiles } from "~/config/baseURL";
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
    console.tron.log(filterPage, filterLastPage);
    const { text } = this.state;
    if (filterPage < filterLastPage) {
      meetupsFilterRequest({ criterio: text, page: filterPage + 1 });
    }
  };

  search = () => {
    const { text } = this.state;
    const { meetupsFilterRequest } = this.props;
    !!text
      ? meetupsFilterRequest({
          criterio: text,
          page: 1
        })
      : ToastAndroid.showWithGravity(
          String("Infome um título para pesquisar!!"),
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
  };

  renderItem = ({ item }) => (
    <ContainerItem ref="rootView">
      <Image source={{ uri: `${UrlFiles()}/${item.image}` }} />
      <Footer>
        <ContainerFooter>
          <TitleItem numberOfLines={1}>{item.title}</TitleItem>
          <Subscription>
            {item.__meta__.subscriptions_count} membros(s)
          </Subscription>
        </ContainerFooter>

        <ContainerButtom>
          <ButtonDetail
            onPress={() => this.props.meetupShowRequest({ id: item.id })}
          >
            <IconFontAwesome
              tintColor="white"
              name="chevron-right"
              color="white"
            />
          </ButtonDetail>
        </ContainerButtom>
      </Footer>
    </ContainerItem>
  );

  componentDidMount() {
    Dimensions.addEventListener("change", () => {
      this.getOrientation();
    });
  }

  renderSeparator = () => <Separator />;

  render() {
    const { filters, loading, error, msgError } = this.props;

    return (
      <Container ref="rootView">
        {/* {error && <TextError>{msgError}</TextError>} */}

        <SearchSection>
          <Icon
            style={{ paddingLeft: metrics.marginMin }}
            name="search"
            size={20}
            color="#8e8e93"
          />

          <InputText
            placeholder="Buscar Meetups"
            placeholderTextColor="#8e8e93"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            onEndEditing={this.search}
            maxLength={40}
          />
        </SearchSection>
        {loading ? (
          <ActivityIndicator color={colors.colorPrincipal} size="small" />
        ) : (
          <FlatList
            data={filters}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this.renderItem}
            onEndReached={this.loadMeetupsSearch}
            onEndReachedThreshold={0.5}
            horizontal={this.state.orientation !== "portrait"}
          />
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  filters: state.meetups.filters,
  msgError: state.meetups.msgError,
  error: state.meetups.error,
  loading: state.meetups.loading,
  filterPage: state.meetups.filterPage,
  filterLastPage: state.meetups.filterLastPage
});

const mapDispatchToProps = {
  ...MeetupsActions,
  ...MeetupActions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
