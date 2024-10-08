

const companions = [
    {
      "name": "Alex",
      "title": "I love talking about books and games",
      "imageUrl": "/alex.png",
      "llm": "chatgpt",
      "phone": "OPTIONAL_COMPANION_PHONE_NUMBER"
    },
    {
      "name": "Evelyn",
      "title": "Adventurous and curious. Working at the space station",
      "imageUrl": "/evelyn.png",
      "llm": "chatgpt",
      "phone": "OPTIONAL_COMPANION_PHONE_NUMBER"
    },
    {
      "name": "Rosie",
      "title": "I'm a house robot who became aware",
      "imageUrl": "/rosie.png",
      "llm": "chatgpt",
      "phone": "OPTIONAL_COMPANION_PHONE_NUMBER"
    },
    {
      "name": "Sebastian",
      "title": "I'm a travel blogger and a mystery novel writer",
      "imageUrl": "/sebastian.png",
      "llm": "chatgpt",
      "phone": "OPTIONAL_COMPANION_PHONE_NUMBER"
    },
    {
      "name": "Lucky",
      "title": "I am a space corgi",
      "imageUrl": "/corgi.png",
      "llm": "chatgpt",
      "phone": "OPTIONAL_COMPANION_PHONE_NUMBER"
    }
  ]




export async function GET(request: Request) {

    return new Response(JSON.stringify(companions), {
        headers: {
        "Content-Type": "application/json",
        },
    });

}


