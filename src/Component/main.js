// Main.js
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Container, Select, Heading, Flex } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Center, Box } from '@chakra-ui/react'


const Main = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/emdo2841/repos', {
          headers: {
            Authorization: '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'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
          setLoading(false);
        } else {
          setError('Failed to fetch repositories');
          console.error('Failed to fetch repositories:', response.statusText);
        }
      } catch (error) {
        setError('Error fetching repositories');
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  const filteredRepositories = repositories.filter(repo => {
    // Filter by search query
    const matchSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by language
    const matchLanguage = languageFilter === '' || repo.language === languageFilter;

    return matchSearch && matchLanguage;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Center>
      <Heading mt='15px'>My Github Repository</Heading>
      </Center>
      <Box>
        <Center>
        <Flex justify="center" align="center" spacing="4rem"> 
        <Input w="10rem" bg={'white'} mt='10px' className='input'
          type="text"
          placeholder="Search repositories"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        
      
          <Select bg={'white'} w="10rem" mt='10px'  className='select-option'
            value={languageFilter}
            onChange={e => setLanguageFilter(e.target.value)}
          >
            <option value="">All Languages</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C">C</option>
            <option value="CSS">CSS</option>
            <option value="Shell">Shell</option>
            <option value="HTML">HTML</option>
            {/* Add more options for other languages */}
          
          
          </Select>
          </Flex>
        </Center>
      
      </Box>
      <Center>
        <Container>
      <ul className='unlist'>
        {filteredRepositories.map(repo => (
          <li key={repo.id}>
            <Link to={`/repository/${repo.id}`} className='custom-link'>{repo.name}</Link>
          </li>
        ))}
      </ul>
      </Container>
      </Center>
    
    </div>
  );
};

export default Main;
