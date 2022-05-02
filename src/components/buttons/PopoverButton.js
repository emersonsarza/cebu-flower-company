import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const PopoverButton = ({ name, options }) => {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button className='group text-white font-bold rounded-md inline-flex items-center text-base focus:outline-none'>
            <span style={{ textShadow: '1px 1px #000000' }}>{name}</span>
            <ChevronDownIcon className='ml-2 h-5 w-5' aria-hidden='true' />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 '>
              <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  {options?.[0].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          {item.name}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                {options?.[1] && (
                  <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                    {options[1].map((item) => (
                      <div key={item.name} className='flow-root'>
                        <a
                          href={item.href}
                          className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                        >
                          <item.icon
                            className='flex-shrink-0 h-6 w-6 text-gray-400'
                            aria-hidden='true'
                          />
                          <span className='ml-3'>{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverButton;
