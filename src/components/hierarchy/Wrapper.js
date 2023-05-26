import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl, StyleSheet } from "react-native";

const wrapper_style = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: "#e6e6e6"
    },
    scroll: {
        width: "100%"
    }
});

export default function Wrapper({children, onRefresh}) {
    [refreshing, setRefreshing] = useState(false);

    function getResheshElement() {
        if (onRefresh != undefined) {
            return (<RefreshControl
                refreshing={refreshing}
                onRefresh={refreshFunction}>
            </RefreshControl>);
        }

        return undefined;
    }

    const refreshFunction = useCallback(async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    }, [])

    function createChild({item}) {
        return (item);
    }

    return (
        <SafeAreaView style={wrapper_style.main}>
            <FlatList
                style={wrapper_style.scroll}
                overScrollMode="never"
                refreshControl={getResheshElement()}
                showsVerticalScrollIndicator={false}
                renderItem={createChild}
                data={children}
            >
            </FlatList>
        </SafeAreaView>
    );
}