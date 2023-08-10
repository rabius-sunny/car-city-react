export default function SectionHeader({
  title,
  header,
  className
}: {
  title: string
  header: string
  className?: string
}) {
  return (
    <div className={`text-center ${className}`}>
      <h4 className='uppercase text-red'>{title}</h4>
      <h1 className='fs-9 uppercase'>{header}</h1>
    </div>
  )
}
