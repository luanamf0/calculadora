import './ZeroBotao.scss'

export function ZeroBotao({color, background, text, onClick}) {
  return (
    <button className='zeroBotao' style={{color: color, background: background}} onClick={onClick}>
      {text}
    </button>
  );
}