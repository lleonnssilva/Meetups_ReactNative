import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MeetupsActions } from "~/store/ducks/meetups";
import { Creators as MeetupActions } from "~/store/ducks/meetup";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  ContainerItens,
  Separador,
  Title,
  Error,
  Image,
  Footer,
  ContainerItem,
  ContainerFooter,
  TitleItem,
  Subscription,
  ContainerButtom,
  ButtonDetail
} from "./styles";
import { colors } from "~/styles";
import { UrlFiles } from "~/config/baseURL";

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
    <ContainerItem>
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
            <Icon tintColor="white" name="chevron-right" color="white" />
          </ButtonDetail>
        </ContainerButtom>
      </Footer>
    </ContainerItem>
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
      unsigneds,
      meetupsSignedsRequest,
      meetupsUnsignedsRequest,
      meetupsRecommendedsRequest
    } = this.props;

    return (
      <Container>
        {loading ? (
          <ActivityIndicator color={colors.colorPrincipal} size="small" />
        ) : null}
        {!!error && <Error>{msgError}</Error>}
        <ScrollView>
          <View>
            <ContainerItens>
              <TouchableOpacity
                onPress={() => {
                  meetupsSignedsRequest({ id: 1 });
                }}
              >
                <Title>Inscrições</Title>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  meetupsUnsignedsRequest({ id: 1 });
                }}
              >
                <Title>Próximos</Title>
              </TouchableOpacity>

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
              <TouchableOpacity
                onPress={() => {
                  meetupsRecommendedsRequest({ id: 1 });
                }}
              >
                <Title>Recomendados</Title>
              </TouchableOpacity>

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
      </Container>
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

const mapDispatchToProps = {
  ...MeetupsActions,
  ...MeetupActions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
