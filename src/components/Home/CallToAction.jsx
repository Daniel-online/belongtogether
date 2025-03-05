
import Action from "./../Buttons/Action"
import thumbHero from "/assets/Pages/yellow/thumb-call-to-action.jpg"
const CallToAction = () => {
    return (
        <div>
            <Action
                id={'callToAction'}
                title={'Seja um Membro'}
                data={[]}
                style={'h-screen grid grid-rows-6 grid-cols-4 '}
                buttonStyle={'bg-violet-600  rounded-full px-2 py-2 text-white font-bold items-center h-1/6 w-1/3'}
                bgImage={thumbHero}
            />
        </div>
    )
}

export default CallToAction
