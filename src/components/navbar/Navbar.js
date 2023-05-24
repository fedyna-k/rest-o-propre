import { StyleSheet } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import NavbarButton from "./NavbarButton";

const navbar_style = StyleSheet.create({
    container: {
        position: "relative",
        bottom: 0,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff"
    }
})

export default function Navbar({current, pageSetter}) {
    return (
        <SafeAreaView style={navbar_style.container}>
            <NavbarButton
                name="restaurant"
                text="Restaurants"
                selected={current == "restaurant"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="star"
                text="Mes notes"
                selected={current == "star"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="favorite"
                text="Favoris"
                selected={current == "favorite"}
                stateSetter={pageSetter}
            ></NavbarButton>
        </SafeAreaView>
    );
}