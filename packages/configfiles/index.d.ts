export declare type Data = {
  [configType: string]: {
    [name: string]: string;
  };
};

export declare const data: Data;

export declare function main(): Promise<void>;
