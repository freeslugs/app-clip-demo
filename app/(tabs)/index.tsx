import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSWR from "swr";
import { ThemedText } from "../../components/ThemedText";
import { ThemedView } from "../../components/ThemedView";

type TravelLocation = {
	id: number;
	name: string;
	description: string;
	rating: number;
	image_url: string;
};

const fetcher = (url: string) =>
	fetch(url, {
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
		},
	}).then((res) => res.json());

export default function HomeScreen() {
	const { top, bottom } = useSafeAreaInsets();
	const { data, error, isLoading } = useSWR(
		"https://cdfvxxcscwbuproxmigr.supabase.co/functions/v1/demo-travel-location-list",
		fetcher,
	);

	useEffect(() => {
		console.log(data);
	}, [data]);

	useEffect(() => {
		console.log(error);
	}, [error]);

	useEffect(() => {
		console.log(isLoading);
	}, [isLoading]);

	return (
		<>
			<ThemedView style={[styles.titleContainer, { paddingTop: top }]}>
				<ThemedText type="title">Welcome to the Travel App!</ThemedText>
			</ThemedView>
			<ScrollView
				style={{
					paddingBottom: bottom,
					paddingHorizontal: 16,
				}}
				contentContainerStyle={{ gap: 8 }}
			>
				{!isLoading &&
					data &&
					data.map((location: TravelLocation) => (
						<ThemedView key={location.id} style={styles.itemContainer}>
							<Image
								source={{ uri: location.image_url }}
								style={styles.itemImage}
							/>
							<View style={styles.itemBodyContainer}>
								<ThemedText type="defaultSemiBold">{location.name}</ThemedText>
								<ThemedText>{location.description}</ThemedText>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Ionicons name="star" size={16} color="orange" />
									<ThemedText>{location.rating}</ThemedText>
								</View>
							</View>
						</ThemedView>
					))}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		gap: 8,
	},
	itemContainer: {
		gap: 8,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	reactLogo: {
		height: 200,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	itemImage: {
		height: 100,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	itemBodyContainer: {
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
});
