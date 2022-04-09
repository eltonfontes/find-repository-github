import {useEffect, useState} from 'react'

import {
    Box,
    ContainerInput,
    Avatar,
    Input,
    IconSearch,
    Ul,
    Li,
    ContainerDescription,
    Favorito,
    DesFavorito,
    Button,
    A
} from './styles';

export default () => {

    const [repositories, setRepositories] = useState([]);
    const [user, setUser] = useState('');

   async function LocalizaRepositorio(){
        const response = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await response.json();

        setRepositories(data);
    }

    function handleKeyUp(e){
       if(e.key.toLowerCase() === 'enter'){
        LocalizaRepositorio();
       }

    }

    useEffect(() => {
        const filtered = repositories.filter(repo => repo.favorite);

        document.title = `Você tem ${filtered.length} favoritos`;
    }, [repositories]);

    function handleFavorite(id){
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? {...repo, favorite : !repo.favorite} : repo;
        });

        setRepositories(newRepositories);
    }

    return (
        <Box>
            <ContainerInput>
                {repositories.length > 0 && <Avatar src={repositories[0].owner.avatar_url} />}
                <Input placeholder='Enter the username' value={user} onChange={e => setUser(e.target.value)} onKeyUp={handleKeyUp} />
                <IconSearch onClick={LocalizaRepositorio} />
            </ContainerInput>
            <Ul>
                {repositories.map((repo, index) => (
                    <Li key={repo.id}>
                        {index + 1} - 
                        <ContainerDescription>
                            {repo.name} <br />
                            <A href={repo.svn_url} target="_blank">{repo.url}</A>
                        </ContainerDescription>
                            
                        <Button onClick={() => handleFavorite(repo.id)}>
                            {repo.favorite && <Favorito />}
                            {!repo.favorite && <DesFavorito />}
                        </Button>
                    </Li>
                )
                    )
                }
            </Ul>
        </Box>
    )
}