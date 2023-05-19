
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"


async function fetchRepo() {
    const response = await fetch ('http://api.github.com/users/OlofssonJonas/repos');
    const repos = await response.json();
    return repos
}

const ReposPage = async () => {
    const repos = await fetchRepo();
  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul> 
    </div>
  );
};
       <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories 
      </Link>
export default ReposPage;