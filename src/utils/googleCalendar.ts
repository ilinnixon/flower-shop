export async function fetchUpcomingEvents(
  accessToken: string
) {
  const now = new Date().toISOString();

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now}&maxResults=10&singleEvents=true&orderBy=startTime`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch calendar events");
  }

  const data = await res.json();
  return data.items;
}
