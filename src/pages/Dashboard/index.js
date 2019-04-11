import React from "react";

import { ScrollView, FlatList, ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MeetupItem from "~/components/MeetupItem";
import { Creators } from "~/store/ducks/meetups";

import {
  ContainerDiv,
  ContainerItens,
  Separador,
  Title,
  Error
} from "./styles";
import { colors } from "~/styles";
class Index extends React.Component {
  async componentDidMount() {
    const {
      meetupsSignedsRequest,
      meetupsUnsignedsRequest,
      meetupsRecommendedsRequest,
      signedsPage,
      recommendedsPage,
      unsignedsPage
    } = this.props;
    meetupsSignedsRequest({ id: signedsPage });
    meetupsUnsignedsRequest({ id: unsignedsPage });
    meetupsRecommendedsRequest({ id: recommendedsPage });
  }

  renderSeparator = () => <Separador />;

  renderItem = ({ item }) => (
    <MeetupItem
      meetup={item}
      subscriptions={item.__meta__.subscriptions_count}
    />
  );
  loadMeetupsInscritos = () => {
    const { signedsPage, signedsLastPage, meetupsSignedsRequest } = this.props;
    if (signedsPage < signedsLastPage) {
      meetupsSignedsRequest({ id: signedsPage + 1 });
    }
  };

  loadMeetupsUnsigneds = () => {
    const {
      unsignedsPage,
      unsignedsLastPage,
      meetupsUnsignedsRequest
    } = this.props;
    if (unsignedsPage < unsignedsLastPage) {
      meetupsUnsignedsRequest({ id: unsignedsPage + 1 });
    }
  };

  loadMeetupsRecommendeds = () => {
    const {
      recommendedsPage,
      recommendedsLastPage,
      meetupsRecommendedsRequest
    } = this.props;
    if (recommendedsPage < recommendedsLastPage) {
      meetupsRecommendedsRequest({ id: recommendedsPage + 1 });
    }
  };
  render() {
    const {
      error,
      msgError,
      loading,
      recommendeds,
      signeds,
      unsigneds
    } = this.props;
    return (
      <ContainerDiv>
        {loading ? (
          <ActivityIndicator color={colors.colorPrincipal} size="small" />
        ) : null}
        {!!error && <Error>{msgError}</Error>}
        <ScrollView>
          <View>
            <ContainerItens>
              <Title>Inscrições</Title>
              <FlatList
                data={signeds}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderItem}
                onEndReached={this.loadMeetupsInscritos}
                onEndReachedThreshold={0.5}
                horizontal
              />
            </ContainerItens>
          </View>
          <View>
            <ContainerItens>
              <Title>Próximos</Title>
              <FlatList
                data={unsigneds}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderItem}
                onEndReached={this.loadMeetupsUnsigneds}
                onEndReachedThreshold={0.5}
                horizontal
              />
            </ContainerItens>
          </View>
          <View>
            <ContainerItens>
              <Title>Recomendados</Title>
              <FlatList
                data={recommendeds}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderItem}
                onEndReached={this.loadMeetupsRecommendeds}
                onEndReachedThreshold={0.5}
                horizontal
              />
            </ContainerItens>
          </View>
        </ScrollView>
      </ContainerDiv>
    );
  }
}
const mapStateToProps = state => ({
  signeds: state.meetups.signeds,
  signedsPage: state.meetups.signedsPage,
  signedsLastPage: state.meetups.signedsLastPage,

  unsigneds: state.meetups.unsigneds,
  unsignedsPage: state.meetups.unsignedsPage,
  unsignedsLastPage: state.meetups.unsignedsLastPage,

  recommendeds: state.meetups.recommendeds,
  recommendedsPage: state.meetups.recommendedsPage,
  recommendedsLastPage: state.meetups.recommendedsLastPage,

  msgError: state.meetups.msgError,
  error: state.meetups.error,
  loading: state.meetups.loading
});
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
