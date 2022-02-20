import axios from 'axios';
import { NotFoundException } from '../errors/NotFoundException';
import { IProfileInfo } from '../interfaces/IProfileInfo';
import { IRepositoryInfo } from '../interfaces/IRepositoryInfo';

interface IResponse {
  profileInfo: IProfileInfo,
  repositoryInfo: IRepositoryInfo[]
}

class GetProfileInfoUseCase {
  async execute(nickname: string): Promise<IResponse | string> {
    try {
      const requestProfile = await axios({
        method: 'get',
        url: `https://api.github.com/users/${nickname}`
      });
  
      const requestRepository = await axios({
        method: 'get',
        url: `https://api.github.com/users/${nickname}/repos`
      });

      const profileInfo: IProfileInfo = {
        name: requestProfile.data.name
      }
  
      const repositoryInfo: IRepositoryInfo[] = [];
  
      requestRepository.data.forEach((data: any) => {
        repositoryInfo.push({
          name: data.name,
          description: data.description,
          html_url: data.html_url
        })
      });
  
      const response: IResponse = {
        profileInfo,
        repositoryInfo
      }

      return response;
    } catch (err) {
      throw new NotFoundException;
    }

  }
}

export { GetProfileInfoUseCase }