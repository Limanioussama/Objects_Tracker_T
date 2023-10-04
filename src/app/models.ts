export interface Objects_Tracker {
    id: string;
    name: string;
    audioCommands: {
      command1: {
        text: string; 
        action: string; 
      };
    };
    status: boolean;
    confirmation: boolean;
    date: Date;
  }
  