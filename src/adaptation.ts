import { CompletionContext, CompletionResult } from '@codemirror/autocomplete';
import { ChannelDictionary, CommandDictionary, FswCommand, ParameterDictionary } from '@nasa-jpl/aerie-ampcs';
import { ISequenceAdaptation } from './sharedTypes.js';

function identityTransform(contents: string): Promise<string> {
  return Promise.resolve(contents);
}

export const SampleAdaptation: ISequenceAdaptation = {
  inputFormat: {
    linter: undefined,
    name: 'languageName',
    toInputFormat: identityTransform,
  },
  outputFormat: [],
  autoComplete: function (
    _channelDictionary: ChannelDictionary | null,
    commandDictionary: CommandDictionary | null,
    _parameterDictionaries: ParameterDictionary[],
  ): (context: CompletionContext) => CompletionResult | null {
    return (context: CompletionContext) => {
      if (!commandDictionary) {
        return null;
      }
      return {
        from: context.pos,
        options: commandDictionary.fswCommands.map((fswCommand: FswCommand) => ({
          apply: fswCommand.stem + ' ',
          info: fswCommand.description,
          label: fswCommand.stem,
          section: 'Command',
          type: 'function',
        })),
      };
    };
  },
};
