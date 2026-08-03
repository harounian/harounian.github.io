// Fixed, ultra-low-opacity noise overlay for a filmic, non-flat surface.
// Pure CSS/SVG, no canvas loop -- costs nothing at runtime.
export function Grain() {
  return <div className="grain" aria-hidden="true" />
}
