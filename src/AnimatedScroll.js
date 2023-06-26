import { SafeAreaView, Animated, Image, Easing, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
const { Value, timing } = Animated
class AnimatedScroll extends Component {

    constructor(props) {
        super(props)
        this._scroll_y = new Value(0)
    }
    render() {
        const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, 50)

        const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
            inputRange: [0, 50],
            outputRange: [50, 0],
            extrapolate: 'clamp'
        })
        const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
            inputRange: [0, 50],
            outputRange: [0, -50],
            extrapolate: 'clamp'
        })
        const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <SafeAreaView style={styles.safe_area_view}>
                <Animated.View
                    style={
                        [styles.header,
                        {
                            height: _header_height,
                            transform: [{ translateY: _header_translate_y }],
                            opacity: _header_opacity
                        }
                        ]}
                >
                    <Image source={require('./images/check-mark.png')}
                        style={{ width: 152, height: 30 }}
                    />
                    <View style={styles.fake_icon_box}>
                        <Text>ipsum</Text>
                    </View>
                </Animated.View>
                <Animated.ScrollView
                    style={[
                        styles.scroll_view,
                        {

                        }
                    ]}
                    bounces={false}
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    scrollToOverflowEnabled={true}
                    onScroll={Animated.event([
                        {
                            nativeEvent: { contentOffset: { y: this._scroll_y } }
                        }
                    ])}
                >
                    <View style={[styles.fake_post, { backgroundColor: '#222222' }]} />
                    <View style={[styles.fake_post, { backgroundColor: '#333333' }]} />
                    <View style={[styles.fake_post, { backgroundColor: '#444444' }]} />
                    <View style={[styles.fake_post, { backgroundColor: '#555555' }]} />
                    <View style={[styles.fake_post, { backgroundColor: '#666666' }]} />
                </Animated.ScrollView>
            </SafeAreaView>
        )
    }
}
export default AnimatedScroll

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    fake_icon_box: {
        width: 40,
        height: 40,
        borderRadisu: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#e4e6eb',
    },
    scroll_view: {
        flex: 1,
    },
    fake_post: {
        height: 250,
        marginTop: 16,
        borderRadius: 8,
        marginHorizontal: 16,

    }
})