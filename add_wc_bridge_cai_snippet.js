// Create the Web Client Bridge implementation
window.sapcai = window.sapcai || {};
window.sapcai.webclientBridge = window.sapcai.webclientBridge || {};

window.sapcai.webclientBridge = {

  getMemory: () => {
    console.log('getMemory called');
    return {
      memory: {
        someProp: 'someValue',
      },
      merge: false
    }
  },
  
  onMessage: (payload) => {
    console.log('onMessage called. Payload: ' + payload);
  }
  
}

// Create and add the script
var wc_script = document.createElement('script');

wc_script.setAttribute('id', 'cai-webclient-custom');
wc_script.setAttribute('src', 'https://cdn.development-sapcai.com/webclient/bootstrap.js');
wc_script.setAttribute('data-channel-id', 'a8f5cb1e-e23f-42aa-ae65-6cddfd82984c');
wc_script.setAttribute('data-token', '5d230e80d8fe77f0a7f43c1ada38fef1');
wc_script.setAttribute('data-expander-type', 'CAI');
wc_script.setAttribute('data-expander-preferences', 'JTdCJTIyZXhwYW5kZXJMb2dvJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZjZG4uY2FpLnRvb2xzLnNhcCUyRndlYmNoYXQlMkZ3ZWJjaGF0LWxvZ28uc3ZnJTIyJTJDJTIyZXhwYW5kZXJUaXRsZSUyMiUzQSUyMkNsaWNrJTIwb24lMjBtZSElMjIlMkMlMjJvbmJvYXJkaW5nTWVzc2FnZSUyMiUzQSUyMkNoYXQlMjB3aXRoJTIwbWUhJTIyJTJDJTIyb3BlbmluZ1R5cGUlMjIlM0ElMjJuZXZlciUyMiUyQyUyMnRoZW1lJTIyJTNBJTIyREVGQVVMVCUyMiU3RA==')


wc_script.onload = () => {
    //nothing
}

document.head.appendChild(wc_script);