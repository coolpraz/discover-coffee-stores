const getDomain = () => (
    new URL(
        process.env.NODE_ENV === 'production'
        ? 'https://discover-coffee-stores-latest.vercel.app'
        : 'http://localhost:3000'
    )
)

export default getDomain
