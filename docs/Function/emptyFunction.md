# emptyFunction

*Type:* Function
*Returns:* `undefined`
*Arguments:* Any
*Throws:* Never
*Polyfills:* None

This is a convenience for not defining empty functions in place - this way you have it as a module and it is initialized only once. It can help with GC, as well as it introduces empty function as a first class citizen to your codebase (which has a lot of benefits - you can avoid many conditionals by passing an empty function instead of checking whether you passed a function and then calling it.
