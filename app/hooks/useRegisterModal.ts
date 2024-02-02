import {create} from 'zustand';//zustand is npm package for state management but it does not require provider to be set which makes it very lightweight

interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void ;
    onClose :() => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen :false,
    onOpen :()=> set({isOpen:true}),
    onClose :() => set({isOpen:false}),
}));

export default useRegisterModal ;
