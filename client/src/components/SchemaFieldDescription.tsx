interface SchemaFieldDescriptionProps {
  id: string;
  description?: string;
}

export default function SchemaFieldDescription({
  id,
  description,
}: SchemaFieldDescriptionProps) {
  if (!description) {
    return null;
  }

  return (
    <p
      id={id}
      className="mt-1 text-sm text-muted-foreground whitespace-pre-wrap"
    >
      {description}
    </p>
  );
}
