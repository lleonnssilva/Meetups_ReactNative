// import React, { Component } from "react";

// import { View, ScrollView, ActivityIndicator } from "react-native";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import {
//   Container,
//   LabelGeral,
//   Image,
//   LabeTitle,
//   LabelMembers,
//   LabelDesc,
//   LabelRealizacao,
//   LabelLocal,
//   ButtonSave,
//   TextButton,
//   ButtonInscrito
// } from "./styles";
// import { UrlFiles } from "~/config/baseURL";
// import { Creators as MeetupActions } from "~/store/ducks/meetup";
// import { colors } from "~/styles";

// class Meetup extends Component {
//   componentDidMount = async () => {
//     const id = await this.props.navigation.getParam("id");
//     const { meetupShowRequest } = this.props;
//     await meetupShowRequest({ id });
//   };

//   subscriptionIn = async () => {
//     try {
//       const { meetupSubscriptionRequest } = this.props;
//       meetupSubscriptionRequest({
//         id: this.props.meetup.meetup.id
//       });
//     } catch (_err) {
//       // this.setState({ error: 'Erro ao se increver' });
//     } finally {
//       // this.setState({ loading: false });
//     }
//   };

//   render() {
//     const { meetup, error, loading } = this.props;
//     console.tron.log(meetup);
//     return (
//       <Container>
//         {error && <LabelGeral>{error}</LabelGeral>}
//         {!meetup.meetup ? (
//           <ActivityIndicator color={colors.colorPrincipal} size="small" />
//         ) : (
//           <ScrollView>
//             <Image
//               resizeMode="stretch"
//               source={{ uri: `${UrlFiles()}/${meetup.meetup.image}` }}
//             />

//             <View>
//               <LabeTitle>{meetup.meetup.title}</LabeTitle>
//               <LabelMembers>
//                 {meetup.meetup.__meta__.subscriptions_count} membro(s)
//               </LabelMembers>
//               <LabelDesc>{meetup.meetup.description}</LabelDesc>
//               <LabelRealizacao>Realizado em:</LabelRealizacao>
//               <LabelLocal>{meetup.meetup.place}</LabelLocal>

//               {meetup.registered === true ? (
//                 <ButtonInscrito>
//                   <TextButton>Já inscrito</TextButton>
//                 </ButtonInscrito>
//               ) : (
//                 <ButtonSave onPress={this.subscriptionIn}>
//                   {loading ? (
//                     <ActivityIndicator size="small" color="black" />
//                   ) : (
//                     <TextButton>Inscreva-se</TextButton>
//                   )}
//                 </ButtonSave>
//               )}
//             </View>
//           </ScrollView>
//         )}
//       </Container>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   meetup: state.meetup,
//   error: state.meetup.error,
//   loading: state.meetup.loading
// });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(MeetupActions, dispatch);
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Meetup);
import React, { Component } from "react";

import { View, ScrollView, ActivityIndicator } from "react-native";

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
  LabelData
} from "./styles";
import { UrlFiles } from "~/config/baseURL";
import { Creators as MeetupActions } from "~/store/ducks/meetup";
import { colors } from "~/styles";

class Meetup extends Component {
  componentDidMount = async () => {
    // const id = await this.props.navigation.getParam("id");
    // const { meetupShowRequest } = this.props;
    // await meetupShowRequest({ id });
  };

  subscriptionIn = async () => {
    const { meetupSubscriptionRequest } = this.props;
    meetupSubscriptionRequest({
      id: this.props.meetup.meetup.id
    });
  };

  render() {
    const { meetup, error, loading } = this.props;
    console.tron.log(meetup);
    return (
      <Container>
        {error && <LabelGeral>{error}</LabelGeral>}
        {!meetup.meetup ? (
          <ActivityIndicator color={colors.colorPrincipal} size="small" />
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
              <LabelData>{meetup.meetup.event_date}</LabelData>

              {meetup.registered === true ? (
                <ButtonInscrito>
                  <TextButton>Já inscrito</TextButton>
                </ButtonInscrito>
              ) : (
                <ButtonSave onPress={this.subscriptionIn}>
                  {loading ? (
                    <ActivityIndicator size="small" color="black" />
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
