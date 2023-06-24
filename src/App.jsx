import React, { useState, useEffect, useMemo, useCallback } from "react";
import { GlobalStyles, lightMode, darkMode } from "./themes";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Search from "./components/Search";
import Info from "./components/main/Info";

function App() {
  const [modeToggle, setModeToggle] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("TKart707");

  //Header memoization
  const Memoizedheader = useMemo(() => {
    return <Header modeToggle={modeToggle} setModeToggle={setModeToggle} />;
  }, [modeToggle]);

  // Fetch function
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      if (!response.ok) {
        throw new Error("No results");
      }
      let data = await response.json();
      setUserData(data);
      setError(null);
      setInput("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return <h1>Loading...</h1>;
  }


  return (
    <ThemeProvider theme={modeToggle ? darkMode : lightMode}>
      <GlobalStyles />
      <Container>
        {Memoizedheader}
        <Search
          input={input}
          setInput={setInput}
          fetchData={fetchData}
          error={error}
        />
        <Info userData={userData} modeToggle={modeToggle} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  padding: 3.1rem 2.4rem 7.9rem 2.4rem;

  @media (min-width: 768px) {
    max-width: 57.3rem;
    padding: 0;
    padding-top: 14rem;
  }

  @media (min-width: 1024px) {
    max-width: 73rem;
    margin: 0 auto;
  }
`;
