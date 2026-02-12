export async function fetchCalendarEvents(
  accessToken: string
) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setDate(end.getDate() + 7);

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events` +
      `?timeMin=${start.toISOString()}` +
      `&timeMax=${end.toISOString()}` +
      `&singleEvents=true` +
      `&orderBy=startTime`,
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
  return data.items ?? [];
}
