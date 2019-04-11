import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";
import { colors, metrics, fonts } from "~/styles/index";
import {
  Image,
  Footer,
  Container,
  ContainerFooter,
  Title,
  Subscription,
  ContainerButtom,
  Button
} from "./styles";
import { UrlFiles } from "~/config/baseURL";

const MeetupItem = props => {
  const {
    meetup,
    subscriptions,
    navigation: { navigate }
  } = props;

  return (
    <Container>
      <Image source={{ uri: `${UrlFiles()}/${meetup.image}` }} />

      <Footer>
        <ContainerFooter>
          <Title numberOfLines={1}>{meetup.title}</Title>
          <Subscription>{subscriptions} membros(s)</Subscription>
        </ContainerFooter>

        <ContainerButtom>
          <Button
            onPress={() =>
              navigate("Meetup", {
                id: meetup.id,
                title: meetup.title || ""
              })
            }
          >
            <Icon tintColor="white" name="chevron-right" color="white" />
          </Button>
        </ContainerButtom>
      </Footer>
    </Container>
  );
};

export default withNavigation(MeetupItem);
