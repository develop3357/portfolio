interface IExternalLinkProps {
  to: string;
  text: string;
}

function ExternalLink({ to, text }: IExternalLinkProps) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default ExternalLink;
