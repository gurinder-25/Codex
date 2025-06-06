import axios from 'axios';

export interface ExecutionResult {
  run: {
    stdout: string;
    stderr: string;
    code: number;
    signal: string | null;
  };
}

export interface Language {
  language: string;
  version: string;
  aliases: string[];
}

export const executeCode = async (
  language: string,
  code: string,
  input: string = ''
): Promise<ExecutionResult> => {
  try {
    const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language: language,
      version: '*',
      files: [
        {
          content: code,
        },
      ],
      stdin: input,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to execute code');
  }
};

// a small, hard-coded set of languages
export interface Language {
  language: string
  version: string
  aliases: string[]
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { language: 'javascript', version: '18.15.0', aliases: ['js', 'node'] },
  { language: 'python',    version: '3.10.0',  aliases: ['py']     },
  { language: 'cpp',       version: '10.2.0',  aliases: ['c++']    },
  { language: 'java',      version: '15.0.2',  aliases: []        },
  { language: 'c',         version: '10.2.0',  aliases: []        },
]
