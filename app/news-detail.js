import {
  Heading,
  Text,
  ScrollView,
  Image,
  VStack,
  Box,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView>
        <VStack>
          <Image
            source={{ uri: params.image }}
            alt={params.title}
            w="$full"
            h="$64"
            resizeMode="cover"
          />
          <Box p="$4">
            <Text fontSize="$sm" color="$coolGray500" mb="$2">
              {params.date}
            </Text>
            <Heading size="lg" mb="$3">
              {params.title}
            </Heading>
            <Text fontSize="$md" textAlign="justify">
              {params.content}
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </>
  );
};

export default NewsDetail;