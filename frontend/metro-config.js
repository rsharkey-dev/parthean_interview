const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

module.exports = {
    ...config,
    resolver: {
        ...config.resolver,
        blockList: [config.resolver.blockList, /(/amplify /.*) $ /],
        sourceExts: [...config.resolver.sourceExts, 'mjs'],
        transformer: {
            assetPlugins: ['expo-asset/tools/hashAssetFiles']
        }
    }
}