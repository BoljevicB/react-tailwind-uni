import Ceo from '../../imgs/ceo.jpg'
import Designer from '../../imgs/designer.jpg'
import Manager from '../../imgs/sales_manager.jpg'
import Costumer from '../../imgs/deliv.jpg'



function About() {
  return (
    <section>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full"
      >
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Our company</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
      </div>
    </div>
  </div>

  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Mission"
          src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Our mission</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
      </div>
    </div>
  </div>

  <div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <div>
			<img className="object-cover w-full aspect-square" src={Ceo} alt='Ceo' />
            <p className='text-center font-bold '>Peter Peter - CEO</p>
            </div>
            <div>
			<img className="object-cover w-full aspect-square" src={Designer} alt='Designer' />
            <p className='text-center font-bold '>Christian Andersen - Designe</p>
            </div>
            <div>
			<img className="object-cover w-full  aspect-square" src={Manager} alt='Manager' />
            <p className='text-center font-bold '>Xji Han Sol - Sales Manager</p>
            </div>
            <div>
			<img className="object-cover w-full aspect-square" src={Costumer} alt='Costumer relation manager' />
            <p className='text-center font-bold '>Ekaterina Sidorova - Costumer Service</p>
            </div>
		</div>
	</div>

 


        
    </section>
      
  );
}

export default About;