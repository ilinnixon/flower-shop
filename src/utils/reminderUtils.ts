export function daysUntil(date: string): number {
  const today = new Date();
  const target = new Date(date);

  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diff =
    (target.getTime() - today.getTime()) /
    (1000 * 60 * 60 * 24);

  return Math.ceil(diff);
}

export function needsReminder(
  date: string,
  reminderDays = 3
): boolean {
  const remaining = daysUntil(date);
  return remaining <= reminderDays && remaining >= 0;
}
