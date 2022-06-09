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
    </MainContainer>
  );
};

export default Landing;
