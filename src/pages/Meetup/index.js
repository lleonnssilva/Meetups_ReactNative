import React, { Component } from "react";

import { View, ScrollView } from "react-native";
import Moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Container,
  LabelGeral,
  Image,
  LabeTitle,
  LabelMembers,
  LabelDesc,
  LabelRealizacao,
  LabelLocal,
  ButtonSave,
  TextButton,
  ButtonInscrito,
  LabelData,
  TextError,
  ActivityIndicator
} from "./styles";
import { UrlFiles } from "~/config/baseURL";
import { Creators as MeetupActions } from "~/store/ducks/meetup";
import { colors } from "~/styles";

class Meetup extends Component {
  render() {
    const {
      meetup,
      error,
      loading,
      TextError,
      msgError,
      meetupSubscriptionRequest
    } = this.props;
    console.tron.log(this.props);
    return (
      <Container>
        {!meetup.meetup || error ? (
          <TextError>{msgError}</TextError>
        ) : (
          <ScrollView>
            <Image
              resizeMode="stretch"
              source={{ uri: `${UrlFiles()}/${meetup.meetup.image}` }}
            />

            <View>
              <LabeTitle>{meetup.meetup.title}</LabeTitle>
              <LabelMembers>
                {meetup.meetup.__meta__.subscriptions_count} membro(s)
              </LabelMembers>
              <LabelDesc>{meetup.meetup.description}</LabelDesc>

              <LabelRealizacao>Realizado em:</LabelRealizacao>
              <LabelLocal>{meetup.meetup.place}</LabelLocal>
              <LabelRealizacao>Realizado em:</LabelRealizacao>
              <LabelData>
                {Moment(meetup.meetup.event_date).format("DD-MM-YYYY")}
              </LabelData>

              {meetup.registered === true ? (
                <ButtonInscrito>
                  <TextButton>Já inscrito</TextButton>
                </ButtonInscrito>
              ) : (
                <ButtonSave
                  onPress={() => {
                    meetupSubscriptionRequest({
                      id: this.props.meetup.meetup.id
                    });
                  }}
                >
                  {loading ? (
                    <ActivityIndicator />
                  ) : (
                    <TextButton>Inscreva-se</TextButton>
                  )}
                </ButtonSave>
              )}
            </View>
          </ScrollView>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  meetup: state.meetup,
  error: state.meetup.error,
  loading: state.meetup.loading
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(MeetupActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetup);
