export function Card({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="ui-rounded-lg ui-border ui-border-gray-200 ui-bg-white ui-p-4 ui-shadow-sm dark:ui-border-gray-800 dark:ui-bg-gray-950">
      {children} This is a Card
    </div>
  );
}
