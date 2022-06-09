import { useToast, Text, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import CustomToast from "../../components/atoms/CustomToast/CustomToast";
import MainContainer from "../../components/atoms/MainContainer";
import Name from "../../components/molecules/Name/Name";

const Landing = () => {
  const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      toast({
        position: "top-left",
        render: () => (
          <CustomToast
            title="This website is under development"
            desc="Return to see how this progress!"
          />
        ),
      });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer
      mainSX={{
        bgColor: "purple.400",
        bg: "url('largerTiger.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        bgPosition: { base: "initial", md: "right top" },
        bgAttachment: "fixed",
      }}
      innerSX={{}}
    >
      <Name />
      <Text
        position="absolute"
        bottom={4}
        right={4}
        fontFamily="encode"
        letterSpacing="0.03em"
        fontSize="0.750rem"
      >
        art by{" "}
        <Link href="https://www.instagram.com/lais.draws/" target="_blank">
          @lais.draws
        </Link>
      </Text>
    </MainContainer>
  );
};

export default Landing;
