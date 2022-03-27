import React, {Component} from 'react'

class ExtraButton extends Component{
    handleBack = e=>{
        window.location = `/`
        
    }
    render(){
        return(
            <div className='flex justify-center space-x-10'>
                <svg className='absolute -translate-y-14 -translate-x-6 invisible' width="91" height="63" viewBox="0 0 91 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="91" height="46" rx="10" fill="#4EDFBC"/>
                    <path d="M47.6777 57.6995C46.5681 59.8959 43.4319 59.8959 42.3223 57.6995L35.0746 43.3527C34.0665 41.3573 35.5167 39 37.7523 39L52.2477 39C54.4833 39 55.9335 41.3573 54.9254 43.3527L47.6777 57.6995Z" fill="#4EDFBC"/>
                    <path d="M28.4844 20.26C28.0284 20.26 27.6164 20.34 27.2484 20.5C26.8804 20.652 26.5684 20.88 26.3124 21.184C26.0564 21.48 25.8604 21.844 25.7244 22.276C25.5884 22.7 25.5204 23.18 25.5204 23.716C25.5204 24.42 25.6284 25.032 25.8444 25.552C26.0684 26.072 26.3964 26.472 26.8284 26.752C27.2684 27.032 27.8164 27.172 28.4724 27.172C28.8484 27.172 29.2044 27.14 29.5404 27.076C29.8764 27.012 30.2044 26.932 30.5244 26.836V27.772C30.2044 27.892 29.8724 27.98 29.5284 28.036C29.1924 28.092 28.7884 28.12 28.3164 28.12C27.4444 28.12 26.7164 27.94 26.1324 27.58C25.5484 27.22 25.1084 26.708 24.8124 26.044C24.5244 25.38 24.3804 24.6 24.3804 23.704C24.3804 23.056 24.4684 22.464 24.6444 21.928C24.8284 21.392 25.0924 20.928 25.4364 20.536C25.7884 20.144 26.2204 19.844 26.7324 19.636C27.2444 19.42 27.8324 19.312 28.4964 19.312C28.9364 19.312 29.3604 19.356 29.7684 19.444C30.1764 19.532 30.5404 19.656 30.8604 19.816L30.4284 20.728C30.1644 20.608 29.8684 20.5 29.5404 20.404C29.2204 20.308 28.8684 20.26 28.4844 20.26ZM37.8425 24.772C37.8425 25.308 37.7705 25.784 37.6265 26.2C37.4905 26.608 37.2905 26.956 37.0265 27.244C36.7705 27.532 36.4545 27.752 36.0785 27.904C35.7105 28.048 35.2985 28.12 34.8425 28.12C34.4185 28.12 34.0265 28.048 33.6665 27.904C33.3065 27.752 32.9945 27.532 32.7305 27.244C32.4665 26.956 32.2585 26.608 32.1065 26.2C31.9625 25.784 31.8905 25.308 31.8905 24.772C31.8905 24.06 32.0105 23.46 32.2505 22.972C32.4905 22.476 32.8345 22.1 33.2825 21.844C33.7305 21.58 34.2625 21.448 34.8785 21.448C35.4625 21.448 35.9745 21.58 36.4145 21.844C36.8625 22.1 37.2105 22.476 37.4585 22.972C37.7145 23.46 37.8425 24.06 37.8425 24.772ZM32.9825 24.772C32.9825 25.276 33.0465 25.716 33.1745 26.092C33.3105 26.46 33.5185 26.744 33.7985 26.944C34.0785 27.144 34.4345 27.244 34.8665 27.244C35.2985 27.244 35.6545 27.144 35.9345 26.944C36.2145 26.744 36.4185 26.46 36.5465 26.092C36.6825 25.716 36.7505 25.276 36.7505 24.772C36.7505 24.26 36.6825 23.824 36.5465 23.464C36.4105 23.104 36.2025 22.828 35.9225 22.636C35.6505 22.436 35.2945 22.336 34.8545 22.336C34.1985 22.336 33.7225 22.552 33.4265 22.984C33.1305 23.416 32.9825 24.012 32.9825 24.772ZM42.5761 21.448C43.3681 21.448 44.0041 21.724 44.4841 22.276C44.9721 22.828 45.2161 23.66 45.2161 24.772C45.2161 25.5 45.1041 26.116 44.8801 26.62C44.6641 27.116 44.3561 27.492 43.9561 27.748C43.5641 27.996 43.1001 28.12 42.5641 28.12C42.2361 28.12 41.9441 28.076 41.6881 27.988C41.4321 27.9 41.2121 27.788 41.0281 27.652C40.8521 27.508 40.7001 27.352 40.5721 27.184H40.5001C40.5161 27.32 40.5321 27.492 40.5481 27.7C40.5641 27.908 40.5721 28.088 40.5721 28.24V30.88H39.5161V21.568H40.3801L40.5241 22.444H40.5721C40.7001 22.26 40.8521 22.092 41.0281 21.94C41.2121 21.788 41.4281 21.668 41.6761 21.58C41.9321 21.492 42.2321 21.448 42.5761 21.448ZM42.3841 22.336C41.9521 22.336 41.6041 22.42 41.3401 22.588C41.0761 22.748 40.8841 22.992 40.7641 23.32C40.6441 23.648 40.5801 24.064 40.5721 24.568V24.772C40.5721 25.3 40.6281 25.748 40.7401 26.116C40.8521 26.484 41.0401 26.764 41.3041 26.956C41.5761 27.148 41.9441 27.244 42.4081 27.244C42.8001 27.244 43.1201 27.136 43.3681 26.92C43.6241 26.704 43.8121 26.412 43.9321 26.044C44.0601 25.668 44.1241 25.24 44.1241 24.76C44.1241 24.024 43.9801 23.436 43.6921 22.996C43.4121 22.556 42.9761 22.336 42.3841 22.336ZM47.9549 21.568V28H46.8989V21.568H47.9549ZM47.4389 19.156C47.5989 19.156 47.7389 19.212 47.8589 19.324C47.9869 19.428 48.0509 19.596 48.0509 19.828C48.0509 20.052 47.9869 20.22 47.8589 20.332C47.7389 20.444 47.5989 20.5 47.4389 20.5C47.2629 20.5 47.1149 20.444 46.9949 20.332C46.8749 20.22 46.8149 20.052 46.8149 19.828C46.8149 19.596 46.8749 19.428 46.9949 19.324C47.1149 19.212 47.2629 19.156 47.4389 19.156ZM52.4767 21.448C53.0287 21.448 53.5007 21.568 53.8927 21.808C54.2927 22.048 54.5967 22.388 54.8047 22.828C55.0207 23.26 55.1287 23.768 55.1287 24.352V24.988H50.7247C50.7407 25.716 50.9247 26.272 51.2767 26.656C51.6367 27.032 52.1367 27.22 52.7767 27.22C53.1847 27.22 53.5447 27.184 53.8567 27.112C54.1767 27.032 54.5047 26.92 54.8407 26.776V27.7C54.5127 27.844 54.1887 27.948 53.8687 28.012C53.5487 28.084 53.1687 28.12 52.7287 28.12C52.1207 28.12 51.5807 27.996 51.1087 27.748C50.6447 27.5 50.2807 27.132 50.0167 26.644C49.7607 26.148 49.6327 25.544 49.6327 24.832C49.6327 24.128 49.7487 23.524 49.9807 23.02C50.2207 22.516 50.5527 22.128 50.9767 21.856C51.4087 21.584 51.9087 21.448 52.4767 21.448ZM52.4647 22.312C51.9607 22.312 51.5607 22.476 51.2647 22.804C50.9767 23.124 50.8047 23.572 50.7487 24.148H54.0247C54.0247 23.78 53.9687 23.46 53.8567 23.188C53.7447 22.916 53.5727 22.704 53.3407 22.552C53.1167 22.392 52.8247 22.312 52.4647 22.312ZM59.0461 28.12C58.2461 28.12 57.6061 27.844 57.1261 27.292C56.6461 26.732 56.4061 25.9 56.4061 24.796C56.4061 23.692 56.6461 22.86 57.1261 22.3C57.6141 21.732 58.2581 21.448 59.0581 21.448C59.3941 21.448 59.6861 21.492 59.9341 21.58C60.1821 21.66 60.3981 21.772 60.5821 21.916C60.7661 22.06 60.9221 22.22 61.0501 22.396H61.1221C61.1141 22.292 61.0981 22.14 61.0741 21.94C61.0581 21.732 61.0501 21.568 61.0501 21.448V18.88H62.1061V28H61.2541L61.0981 27.136H61.0501C60.9221 27.32 60.7661 27.488 60.5821 27.64C60.3981 27.784 60.1781 27.9 59.9221 27.988C59.6741 28.076 59.3821 28.12 59.0461 28.12ZM59.2141 27.244C59.8941 27.244 60.3701 27.06 60.6421 26.692C60.9221 26.316 61.0621 25.752 61.0621 25V24.808C61.0621 24.008 60.9301 23.396 60.6661 22.972C60.4021 22.54 59.9141 22.324 59.2021 22.324C58.6341 22.324 58.2061 22.552 57.9181 23.008C57.6381 23.456 57.4981 24.06 57.4981 24.82C57.4981 25.588 57.6381 26.184 57.9181 26.608C58.2061 27.032 58.6381 27.244 59.2141 27.244ZM65.0849 25.588H64.4009L64.1009 19.432H65.3849L65.0849 25.588ZM63.9929 27.352C63.9929 27.056 64.0649 26.848 64.2089 26.728C64.3529 26.608 64.5289 26.548 64.7369 26.548C64.9369 26.548 65.1089 26.608 65.2529 26.728C65.4049 26.848 65.4809 27.056 65.4809 27.352C65.4809 27.64 65.4049 27.848 65.2529 27.976C65.1089 28.104 64.9369 28.168 64.7369 28.168C64.5289 28.168 64.3529 28.104 64.2089 27.976C64.0649 27.848 63.9929 27.64 63.9929 27.352Z" fill="black"/>
                </svg>


                <button>
                    <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.75 26.08C27.9583 26.08 27.25 26.38 26.7083 26.85L19.2812 22.7C19.3333 22.47 19.375 22.24 19.375 22C19.375 21.76 19.3333 21.53 19.2812 21.3L26.625 17.19C27.1875 17.69 27.9271 18 28.75 18C30.4792 18 31.875 16.66 31.875 15C31.875 13.34 30.4792 12 28.75 12C27.0208 12 25.625 13.34 25.625 15C25.625 15.24 25.6667 15.47 25.7188 15.7L18.375 19.81C17.8125 19.31 17.0729 19 16.25 19C14.5208 19 13.125 20.34 13.125 22C13.125 23.66 14.5208 25 16.25 25C17.0729 25 17.8125 24.69 18.375 24.19L25.7917 28.35C25.7396 28.56 25.7083 28.78 25.7083 29C25.7083 30.61 27.0729 31.92 28.75 31.92C30.4271 31.92 31.7917 30.61 31.7917 29C31.7917 27.39 30.4271 26.08 28.75 26.08ZM28.75 14C29.3229 14 29.7917 14.45 29.7917 15C29.7917 15.55 29.3229 16 28.75 16C28.1771 16 27.7083 15.55 27.7083 15C27.7083 14.45 28.1771 14 28.75 14ZM16.25 23C15.6771 23 15.2083 22.55 15.2083 22C15.2083 21.45 15.6771 21 16.25 21C16.8229 21 17.2917 21.45 17.2917 22C17.2917 22.55 16.8229 23 16.25 23ZM28.75 30.02C28.1771 30.02 27.7083 29.57 27.7083 29.02C27.7083 28.47 28.1771 28.02 28.75 28.02C29.3229 28.02 29.7917 28.47 29.7917 29.02C29.7917 29.57 29.3229 30.02 28.75 30.02Z" fill="white"/>
                    </svg>
                </button>
                <button onClick={this.handleBack}>
                    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9308 26.2396L22.4583 27.7083L27.875 22.5L22.4583 17.2917L20.9308 18.7604L23.7258 21.4583H13.25V23.5417H23.7258L20.9308 26.2396ZM30.5833 13.125H15.4167C14.2142 13.125 13.25 14.0625 13.25 15.2083V19.375H15.4167V15.2083H30.5833V29.7917H15.4167V25.625H13.25V29.7917C13.25 30.9375 14.2142 31.875 15.4167 31.875H30.5833C31.775 31.875 32.75 30.9375 32.75 29.7917V15.2083C32.75 14.0625 31.775 13.125 30.5833 13.125Z" fill="white"/>
                    </svg>
                </button>
            </div>
        )
    }
}
export default ExtraButton