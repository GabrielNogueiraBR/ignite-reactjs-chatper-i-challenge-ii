interface HeaderProps {
  categoryTitle: string;
}

export function Header({ categoryTitle }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {categoryTitle}</span>
      </span>
    </header>
  );
}
