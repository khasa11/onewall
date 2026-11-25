import {
  BottomSheet,
  Button,
  type BottomSheetRef,
} from "heroui-native";
import { useRef, type JSX } from "react";
import { View } from "react-native";

export default function HomeScreen(): JSX.Element {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <View className="flex-1 bg-background justify-center px-6">
      <Button onPress={() => sheetRef.current?.present()}>Open</Button>
      
      <BottomSheet ref={sheetRef}>
        <BottomSheet.Content>
          <BottomSheet.Header className="mb-8 gap-2">
            <BottomSheet.Title>Keep yourself safe</BottomSheet.Title>
            <BottomSheet.Description>
              Update your software to the latest version.
            </BottomSheet.Description>
          </BottomSheet.Header>

          <BottomSheet.Footer>
            <Button onPress={() => sheetRef.current?.dismiss()}>Later</Button>
          </BottomSheet.Footer>
        </BottomSheet.Content>
      </BottomSheet>
    </View>
  );
}
