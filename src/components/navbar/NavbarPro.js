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

export default function NavbarPro({current, pageSetter}) {
    return (
        <SafeAreaView style={navbar_style.container}>
            <NavbarButton
                name="restaurant"
                text="Mon restaurant"
                selected={current == "restaurant"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="show-chart"
                text="Suivi"
                selected={current == "show-chart"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="school"
                text="Formations"
                selected={current == "school"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="person"
                text="Compte"
                selected={current == "person"}
                stateSetter={pageSetter}
            ></NavbarButton>
        </SafeAreaView>
    );
}