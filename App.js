import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  StatusBar,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
import warestockHTML from './warestockHTML';

export default function App() {
  const webViewRef = useRef(null);

  // Handle Android back button
  useEffect(() => {
    const onBack = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true; // prevent default (app exit)
      }
      return false;
    };
    const sub = BackHandler.addEventListener('hardwareBackPress', onBack);
    return () => sub.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0F172A"
        translucent={false}
      />
      <WebView
        ref={webViewRef}
        // Embed HTML directly — works 100% offline, localStorage persists
        source={{ html: warestockHTML, baseUrl: 'https://warestock.local' }}
        style={styles.webview}
        // JavaScript & storage
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // Media & camera
        mediaCapturePermissionGrantType="grant"
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        // File access
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        // Mixed content (needed for CDN scripts like QR lib)
        mixedContentMode="always"
        // Performance
        cacheEnabled={true}
        androidHardwareAccelerationDisabled={false}
        // Disable default zoom gestures (app handles its own)
        scalesPageToFit={false}
        // No scroll bounce
        bounces={false}
        overScrollMode="never"
        // Inject JS to make it feel more native
        injectedJavaScript={`
          // Disable text selection on long-press
          document.documentElement.style.webkitUserSelect = 'none';
          document.documentElement.style.userSelect = 'none';
          // Disable context menu
          document.addEventListener('contextmenu', e => e.preventDefault());
          // Remove tap highlight
          document.documentElement.style.webkitTapHighlightColor = 'transparent';
          true;
        `}
        onError={(e) => console.warn('WebView error:', e.nativeEvent)}
        onHttpError={(e) => console.warn('HTTP error:', e.nativeEvent)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  webview: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
});
