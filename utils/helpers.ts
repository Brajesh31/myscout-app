type SubmitEvent = {
  [key: string]: {
    value: any;
    [key: string]: any;
  };
};

export function getPayloadBySubmitEvent(event: SubmitEvent): Record<string, any> {
  const payload: Record<string, any> = {};

  for (const key in event) {
    if (event[key] && 'value' in event[key]) {
      payload[key] = event[key].value;
    }
  }

  return payload;
}
