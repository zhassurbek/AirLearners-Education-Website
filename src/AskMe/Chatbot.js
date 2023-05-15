import {useState} from "react"
import "./ask-me.css"

const {Configuration, OpenAIApi} = require("openai");

const ChatbotApp = () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const [prompt, setPrompt] = useState("");
    const [apiResponse, setApiResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [chatHistory, setChatHistory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.5,
                max_tokens: 4000,
            });
            console.log("response", result.data.choices[0].text);
            const newChatHistory = `${chatHistory}\nUser: ${prompt}\nAI: ${result.data.choices[0].text}\n`;
            setChatHistory(newChatHistory);
            setApiResponse(result.data.choices[0].text);
        } catch (e) {
            //console.log(e);
            setApiResponse("Something went wrong. Please try again.");
        }
        setLoading(false);
    };


    return (
        // <Container>
        <section>
            <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "center",
                        alignItems: "center",
                        minHeight: '100vh',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#f5f5f5",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "100%",
                            maxWidth: "800px",
                            marginBottom: "20px",
                            boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h2 style={{margin: "0 0 10px 0", textAlign: 'center'}}>AskMe</h2>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                        <textarea
                            type="text"
                            value={prompt}
                            placeholder="Спросите у ИИ"
                            onChange={(e) => setPrompt(e.target.value)}
                            style={{
                                width: "100%",
                                minHeight: "50px",
                                padding: "10px",
                                margin: "10px 0",
                                borderRadius: "5px",
                                border: "none",
                                fontSize: "18px",
                            }}
                        ></textarea>
                            <button
                                disabled={loading || prompt.length === 0}
                                type="submit"
                                style={{
                                    backgroundColor: "rgba(71,255,255,0.76)",
                                    color: "black",
                                    padding: "10px 20px",
                                    margin: "10px 0",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                {loading ? "Генерируется..." : "Сгенерировать"}
                            </button>
                        </form>
                    </div>
                    {apiResponse && (
                        <div
                            style={{
                                backgroundColor: "#f5f5f5",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                                maxWidth: "800px",
                                width: "100%",
                                textAlign: 'center'
                            }}
                        >
                            <h2 style={{margin: "0 0 10px 0"}}>Ответ</h2>
                            <pre
                                style={{
                                    margin: "0",
                                    fontSize: "18px",
                                    overflowX: "auto",
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                            {apiResponse}
                        </pre>
                        </div>
                    )}
                </div>
            </>
        </section>
    );
};

export default ChatbotApp;

