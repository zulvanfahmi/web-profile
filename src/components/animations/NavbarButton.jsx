import styled from 'styled-components';

export default function NavbarButton({text}) {
  return (
    <StyledWrapper>
      <button className='text-lg'>{text}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 10px 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #fff;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #615fff;
    box-shadow: 0px 3px 6px rgb(116, 212, 255, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  button:active {
    transform: translateY(-1px);
  }`;

