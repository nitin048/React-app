import Page01 from "./components/Page01/page01";
import Page02 from "./components/Page02/page02";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1759593218431-6f1585bc14de?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
      color:'maroon'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underserved",
      color:'pink'
    },
    {
      img: "https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underbanked",
      color:'purple'
    },
     {
      img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Smarter",
      color:'blue'
    },
    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'TeamLead',
      color:'orange'

    }
  ];

  return (
    <div>
      <Page01 users={users} />
      <Page02 />
    </div>
  );
};

export default App;
