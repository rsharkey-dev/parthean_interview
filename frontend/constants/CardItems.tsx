import { useAssets } from 'expo-asset';

const CardItems = () => {
    const [assets, error] = useAssets([
        require('../assets/money.png'),
        require('../assets/lightbulb.png'),
        require('../assets/rocketship.png'),
        require('../assets/financecoach.png'),
    ]);

    if (!assets) {
        return [];
    }

    return [
        [
            {
                imageSource: assets[0].uri,
                headline: `Unlimited Accounts`,
                details: `Connect on all your accounts. (limit on free tier is 3)`,
            },
            {
                imageSource: assets[1].uri,
                headline: `Proactive Tips`,
                details: `Get proactive financial insights from Parthean AI`,
            },
            {
                imageSource: assets[2].uri,
                headline: `New AI Tools`,
                details: `You'll get early access to our most powerful AI tools`,
            },
        ],
        [
            {
                imageSource: assets[3].uri,
                headline: `Human Coaching`,
                details: `Unlimited calls and chats with your very personal finance coach`,
            },
            {
                imageSource: assets[2].uri,
                headline: `All Pro Features`,
                details: `Unlimited accounts, proactive financial tips from Parthean AI, and our new, most powerful AI tools`,
            },
        ],
    ];
};

export default CardItems;
