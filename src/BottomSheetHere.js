import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BottomSheet } from 'react-native-btr'

const BottomSheetHere = () => {
    const [visible, setVisible] = useState(false)

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    }
    return (
        <SafeAreaView>
            <View style={{height:'100%'}}>
                <Text>Bottom Sheet in React Native</Text>
                <Button onPress={toggleBottomNavigationView}
                    title="SHow Bottom Sheet" />
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <View style={styles.bottomNavigationView}>
                        <View style={{
                            height:400,backgroundColor:'#fff', flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderTopLeftRadius:20,
                            borderTopRightRadius:20,
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                padding: 20,
                                fontSize: 20,
                                color:'black'
                            }}>
                                Share Using
                            </Text>

                        </View>
                    </View>
                </BottomSheet>
            </View>
        </SafeAreaView>
    )
}

export default BottomSheetHere

const styles = StyleSheet.create({})