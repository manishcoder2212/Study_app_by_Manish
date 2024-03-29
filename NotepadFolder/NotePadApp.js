import * as eva from "@eva-design/eva"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from "@ui-kitten/components"
import React from "react"
import { StyleSheet } from "react-native"
import AllNotes from "./AllNotes"
import CreateNote from "./CreateNote"
import Note from "./Note"

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
		<BottomNavigationTab title="Create" />
		<BottomNavigationTab title="All Notes" />
	</BottomNavigation>
)

const TabNavigator = () => (
	<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
		<Screen name="Create" component={CreateNote} />
		<Screen name="AllNotes" component={AllNotes} />
		<Screen name="Note" component={Note} />
	</Navigator>
)

export default function NotePadApp() {
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</ApplicationProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})
