var searchIndex = {};
searchIndex["km"] = {"doc":"Windows Kernel Mode library.","items":[[0,"macros","km","Macros for Kernel-Mode drivers.",null,null],[0,"status","","NT Status codes.",null,null],[4,"Status","km::status","NT Status code.",null,null],[13,"success","","",0,null],[13,"unsuccessful","","",0,null],[5,"check","","Convert `Status` to `Result&lt;()&gt;`.",null,{"inputs":[{"name":"status"}],"output":{"name":"result"}}],[6,"NTSTATUS","","NT Status type.",null,null],[6,"Result","","A specialized `Result` type for NT operations.",null,null],[11,"clone","","",0,{"inputs":[{"name":"status"}],"output":{"name":"status"}}],[11,"is_ok","","Evaluates to `true` if the `Status` is a success type (`0..0x3FFFFFFF`)\nor an informational type (`0x40000000..0x7FFFFFFF`).",0,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"is_err","","Status is a warning or error type.",0,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"is_success","","Status is a success type.",0,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"is_information","","Status is a information type.",0,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"is_warning","","Status is a warning type.",0,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[11,"is_error","","Status is a error type.",0,{"inputs":[{"name":"status"}],"output":{"name":"bool"}}],[0,"basedef","km","Kernel-Mode Types.",null,null],[3,"LIST_ENTRY","km::basedef","Doubly linked list structure.",null,null],[12,"next","","",1,null],[12,"prev","","",1,null],[3,"KSPIN_LOCK","","Spin Lock.",null,null],[12,"lock","","",2,null],[3,"DISPATCHER_HEADER","","Common dispatcher object header.",null,null],[12,"Type","","",3,null],[12,"Absolute","","",3,null],[12,"Size","","",3,null],[12,"Inserted","","",3,null],[12,"SignalState","","",3,null],[12,"WaitListHead","","",3,null],[3,"IO_STATUS_BLOCK","","An I/O status block.",null,null],[12,"Status","","",4,null],[12,"Information","","",4,null],[4,"KPROCESSOR_MODE","","Processor modes.",null,null],[13,"KernelMode","","",5,null],[13,"UserMode","","",5,null],[5,"KeGetCurrentIrql","","",null,null],[5,"KeRaiseIrqlToDpcLevel","","",null,null],[5,"KfLowerIrql","","",null,null],[5,"KfRaiseIrql","","",null,null],[0,"IO_PRIORITY","","I/O Request priority.",null,null],[6,"KPRIORITY_BOOST","km::basedef::IO_PRIORITY","I/O Request priority type.",null,null],[17,"IO_NO_INCREMENT","","",null,null],[17,"IO_DISK_INCREMENT","","",null,null],[17,"EVENT_INCREMENT","","",null,null],[6,"VOID","km::basedef","",null,null],[6,"PVOID","","",null,null],[6,"PCVOID","","",null,null],[6,"PETHREAD","","",null,null],[6,"PIO_APC_ROUTINE","","",null,null],[6,"PIO_STATUS_BLOCK","","",null,null],[0,"crt","km","C runtime library.",null,null],[5,"memcmp","km::crt","",null,null],[5,"memcpy","","",null,null],[5,"strlen","","",null,null],[5,"strcmp","","",null,null],[5,"strcpy","","",null,null],[5,"strcat","","",null,null],[5,"strncpy","","",null,null],[5,"wcslen","","",null,null],[5,"wcscpy","","",null,null],[5,"wcsncpy","","",null,null],[0,"debug","km","Debugger support.",null,null],[4,"DPFLTR_LEVEL","km::debug","`DbgPrintEx` Message severity.",null,null],[13,"ERROR","","",6,null],[13,"WARNING","","",6,null],[13,"TRACE","","",6,null],[13,"INFO","","",6,null],[4,"DPFLTR_ID","","`DbgPrintEx` Component name.",null,null],[13,"SYSTEM","","",7,null],[13,"SMSS","","",7,null],[13,"SETUP","","",7,null],[13,"NTFS","","",7,null],[13,"IHVDRIVER","","",7,null],[13,"IHVVIDEO","","",7,null],[13,"IHVAUDIO","","",7,null],[13,"IHVNETWORK","","",7,null],[13,"IHVSTREAMING","","",7,null],[13,"IHVBUS","","",7,null],[13,"DEFAULT","","",7,null],[5,"DbgPrint","","`DbgPrint` routine sends a message to the kernel debugger.",null,null],[5,"DbgPrintEx","","The `DbgPrintEx` routine sends a string to the kernel debugger if certain conditions are met.",null,null],[5,"DbgBreakPoint","","Breaks into the kernel debugger.",null,null],[5,"DbgBreakPointWithStatus","","Breaks into the kernel debugger and sends the value of `Status` to the debugger.",null,null],[0,"device_object","km","Device Object.",null,null],[3,"DEVICE_OBJECT","km::device_object","The `DEVICE_OBJECT` structure is used by the operating system to represent a device object.",null,null],[12,"Type","","",8,null],[12,"Size","","",8,null],[12,"ReferenceCount","","",8,null],[12,"DriverObject","","",8,null],[12,"NextDevice","","",8,null],[12,"AttachedDevice","","",8,null],[12,"CurrentIrp","","",8,null],[12,"Timer","","",8,null],[12,"Flags","","",8,null],[12,"Characteristics","","",8,null],[12,"Vpb","","",8,null],[12,"DeviceExtension","","",8,null],[12,"DeviceType","","",8,null],[12,"StackSize","","",8,null],[12,"Queue","","",8,null],[12,"AlignmentRequirement","","",8,null],[12,"DeviceQueue","","",8,null],[12,"Dpc","","",8,null],[12,"ActiveThreadCount","","",8,null],[12,"SecurityDescriptor","","",8,null],[12,"DeviceLock","","",8,null],[12,"SectorSize","","",8,null],[12,"Spare1","","",8,null],[12,"DeviceObjectExtension","","",8,null],[12,"Reserved","","",8,null],[3,"DEVOBJ_EXTENSION","","Device object extension structure.",null,null],[4,"DEVICE_FLAGS","","Device object flags.",null,null],[13,"NONE","","",9,null],[13,"DO_VERIFY_VOLUME","","",9,null],[13,"DO_BUFFERED_IO","","",9,null],[13,"DO_EXCLUSIVE","","",9,null],[13,"DO_DIRECT_IO","","",9,null],[13,"DO_MAP_IO_BUFFER","","",9,null],[13,"DO_DEVICE_HAS_NAME","","",9,null],[13,"DO_DEVICE_INITIALIZING","","",9,null],[13,"DO_SYSTEM_BOOT_PARTITION","","",9,null],[13,"DO_LONG_TERM_REQUESTS","","",9,null],[13,"DO_NEVER_LAST_DEVICE","","",9,null],[13,"DO_SHUTDOWN_REGISTERED","","",9,null],[13,"DO_BUS_ENUMERATED_DEVICE","","",9,null],[13,"DO_POWER_PAGABLE","","",9,null],[13,"DO_POWER_INRUSH","","",9,null],[13,"DO_POWER_NOOP","","",9,null],[13,"DO_LOW_PRIORITY_FILESYSTEM","","",9,null],[13,"DO_XIP","","",9,null],[5,"IoCreateDevice","","",null,null],[5,"IoDeleteDevice","","",null,null],[5,"IoCreateSymbolicLink","","",null,null],[5,"IoDeleteSymbolicLink","","",null,null],[6,"PDEVICE_OBJECT","","",null,null],[6,"PDRIVER_CANCEL","","",null,null],[6,"PDRIVER_DISPATCH","","",null,null],[6,"PIO_COMPLETION_ROUTINE","","",null,null],[0,"dpc","km","Deferred Procedure Calls (DPC).",null,null],[3,"KDPC","km::dpc","Deferred Procedure Call object.",null,null],[3,"KDPC_DATA","","DPC data structure definition.",null,null],[5,"KeInitializeDpc","","",null,null],[5,"KeInsertQueueDpc","","",null,null],[5,"KeRemoveQueueDpc","","",null,null],[5,"KeFlushQueuedDpcs","","",null,null],[5,"KeGenericCallDpc","","",null,null],[6,"PDEFERRED_ROUTINE","","",null,null],[0,"driver_object","km","Driver Object.",null,null],[3,"DRIVER_OBJECT","km::driver_object","Represents the image of a loaded kernel-mode driver.",null,null],[12,"Type","","",10,null],[12,"Size","","",10,null],[12,"DeviceObject","","",10,null],[12,"Flags","","",10,null],[12,"DriverStart","","",10,null],[12,"DriverSize","","",10,null],[12,"DriverSection","","",10,null],[12,"DriverExtension","","",10,null],[12,"DriverName","","",10,null],[12,"HardwareDatabase","","",10,null],[12,"FastIoDispatch","","",10,null],[12,"DriverInit","","",10,null],[12,"DriverStartIo","","",10,null],[12,"DriverUnload","","The entry point for the driver&#39;s Unload routine, if any.",10,null],[12,"MajorFunction","","A dispatch table consisting of an array of entry points for the driver&#39;s `DispatchXxx` routines.",10,null],[6,"PDRIVER_INITIALIZE","","",null,null],[6,"PDRIVER_STARTIO","","",null,null],[6,"PDRIVER_UNLOAD","","",null,null],[0,"event","km","Event Objects.",null,null],[3,"KEVENT","km::event","Event object.",null,null],[4,"EVENT_TYPE","","Specifies the event type.",null,null],[13,"NotificationEvent","","Manual-reset event.",11,null],[13,"SynchronizationEvent","","Auto-clearing event.",11,null],[5,"KeInitializeEvent","","",null,null],[5,"KeSetEvent","","",null,null],[5,"KeReadStateEvent","","",null,null],[5,"KeResetEvent","","",null,null],[5,"KeClearEvent","","",null,null],[6,"PKEVENT","","",null,null],[0,"file_object","km","File Object.",null,null],[3,"FILE_OBJECT","km::file_object","The `FILE_OBJECT` structure is used by the system to represent a file object.",null,null],[6,"PFILE_OBJECT","","",null,null],[0,"irp","km","I/O request packets (IRP).",null,null],[3,"IRP","km::irp","The `IRP` structure is a partial opaque structure that represents an I/O request packet.",null,null],[12,"Type","","",12,null],[12,"Size","","",12,null],[12,"MdlAddress","","Pointer to an `MDL` describing a user buffer, if the driver is using direct I/O.",12,null],[12,"Flags","","Flags word - used to remember various flags.",12,null],[12,"SystemBuffer","","Pointer to a system-space buffer if the driver is using buffered I/O.",12,null],[12,"ThreadListEntry","","",12,null],[12,"IoStatus","","I/O status - final status of operation.",12,null],[12,"RequestorMode","","Indicates the execution mode of the original requester of the operation.",12,null],[12,"PendingReturned","","If set to `TRUE`, a driver has marked the IRP pending.",12,null],[12,"StackCount","","Stack state information.",12,null],[12,"CurrentLocation","","Stack state information.",12,null],[12,"Cancel","","If set to `TRUE`, the IRP either is or should be canceled.",12,null],[12,"CancelIrql","","Irql at which the cancel spinlock was acquired.",12,null],[12,"ApcEnvironment","","",12,null],[12,"AllocationFlags","","Allocation control flags.",12,null],[12,"UserIosb","","User parameters.",12,null],[12,"UserEvent","","",12,null],[12,"UserApcRoutine","","",12,null],[12,"UserApcContext","","",12,null],[12,"CancelRoutine","","Contains the entry point for a driver-supplied `Cancel` routine to be called if the IRP is canceled.",12,null],[12,"UserBuffer","","Contains the address of an output buffer for `IRP_MJ_DEVICE_CONTROL`.",12,null],[12,"Overlay","","Kernel structures.",12,null],[3,"_IRP_OVERLAY","","Kernel structures for IRP.",null,null],[12,"DriverContext","","",13,null],[12,"Thread","","",13,null],[12,"AuxiliaryBuffer","","",13,null],[12,"ListEntry","","",13,null],[12,"CurrentStackLocation","","Current stack location.",13,null],[12,"OriginalFileObject","","",13,null],[3,"IO_STACK_LOCATION","","I/O Stack Locations.",null,null],[12,"MajorFunction","","The IRP major function code indicating the type of I/O operation to be performed.",14,null],[12,"MinorFunction","","A subfunction code for `MajorFunction`.",14,null],[12,"Flags","","Request-type-specific values (see [DEVICE_FLAGS](../device_object/enum.DEVICE_FLAGS.html)).",14,null],[12,"Control","","",14,null],[12,"Parameters","","A union that depends on the major and minor IRP function code values\ncontained in `MajorFunction` and `MinorFunction`.",14,null],[12,"DeviceObject","","A pointer to the driver-created `DEVICE_OBJECT` structure\nrepresenting the target physical, logical, or virtual device for which this driver is to handle the IRP.",14,null],[12,"FileObject","","A pointer to a `FILE_OBJECT` structure that represents the file object, if any, that is associated with `DeviceObject` pointer.",14,null],[12,"CompletionRoutine","","The following routine is invoked depending on the flags in the above `Flags` field.",14,null],[12,"Context","","The following is used to store the address of the context parameter that should be passed to the `CompletionRoutine`.",14,null],[3,"_IO_STACK_LOCATION_READ","","Parameters for `IRP_MJ_READ`.",null,null],[12,"Length","","",15,null],[12,"Key","","",15,null],[12,"ByteOffset","","",15,null],[4,"IRP_MJ","","`IRP` Major Function Codes.",null,null],[13,"CREATE","","",16,null],[13,"CREATE_NAMED_PIPE","","",16,null],[13,"CLOSE","","",16,null],[13,"READ","","",16,null],[13,"WRITE","","",16,null],[13,"QUERY_INFORMATION","","",16,null],[13,"SET_INFORMATION","","",16,null],[13,"QUERY_EA","","",16,null],[13,"SET_EA","","",16,null],[13,"FLUSH_BUFFERS","","",16,null],[13,"QUERY_VOLUME_INFORMATION","","",16,null],[13,"SET_VOLUME_INFORMATION","","",16,null],[13,"DIRECTORY_CONTROL","","",16,null],[13,"FILE_SYSTEM_CONTROL","","",16,null],[13,"DEVICE_CONTROL","","",16,null],[13,"INTERNAL_DEVICE_CONTROL","","",16,null],[13,"SHUTDOWN","","",16,null],[13,"LOCK_CONTROL","","",16,null],[13,"CLEANUP","","",16,null],[13,"CREATE_MAILSLOT","","",16,null],[13,"QUERY_SECURITY","","",16,null],[13,"SET_SECURITY","","",16,null],[13,"POWER","","",16,null],[13,"SYSTEM_CONTROL","","",16,null],[13,"DEVICE_CHANGE","","",16,null],[13,"QUERY_QUOTA","","",16,null],[13,"SET_QUOTA","","",16,null],[13,"PNP","","",16,null],[13,"MAXIMUM_FUNCTION","","",16,null],[6,"PIRP","","",null,null],[6,"PIO_STACK_LOCATION","","",null,null],[11,"get_current_stack_location","","Returns a pointer to the caller&#39;s stack location in the given `IRP`.",12,{"inputs":[{"name":"irp"}],"output":{"name":"io_stack_location"}}],[11,"complete_request","","Indicates that the caller has completed all processing for a given I/O request\nand is returning the given IRP to the I/O manager.",12,{"inputs":[{"name":"irp"},{"name":"ntstatus"}],"output":{"name":"ntstatus"}}],[11,"ParametersRead","","Access parameters for `IRP_MJ_READ`.",14,{"inputs":[{"name":"io_stack_location"}],"output":{"name":"_io_stack_location_read"}}],[0,"irql","km","Interrupt Request Level (IRQL).",null,null],[6,"KIRQL","km::irql","IRQL type.",null,null],[17,"PASSIVE_LEVEL","","Passive release level, no interrupt vectors are masked.",null,null],[17,"LOW_LEVEL","","The lowest IRQL level, no interrupt vectors are masked.",null,null],[17,"APC_LEVEL","","APC interrupt level.",null,null],[17,"DISPATCH_LEVEL","","Dispatcher level",null,null],[17,"PROFILE_LEVEL","","Timer used for profiling.",null,null],[17,"CLOCK_LEVEL","","Interval clock level.",null,null],[17,"IPI_LEVEL","","Interprocessor interrupt level.",null,null],[17,"POWER_LEVEL","","Power failure level.",null,null],[17,"HIGH_LEVEL","","Highest interrupt level.",null,null],[17,"SYNCH_LEVEL","","Synchronization level.",null,null],[0,"object","km","Kernel Objects.",null,null],[3,"WAIT_CONTEXT_BLOCK","km::object","",null,null],[3,"KDEVICE_QUEUE_ENTRY","","",null,null],[3,"KDEVICE_QUEUE","","",null,null],[4,"IO_ALLOCATION_ACTION","","",null,null],[13,"KeepObject","","",17,null],[13,"DeallocateObject","","",17,null],[13,"DeallocateObjectKeepRegisters","","",17,null],[0,"pool","km","Kernel Mode pools.",null,null],[4,"POOL_TYPE","km::pool","Specifies the type of system memory to allocate.",null,null],[13,"NonPagedPool","","Nonpageable system memory, can be accessed from any IRQL.",18,null],[13,"PagedPool","","Pageable system memory, can only be allocated and accessed at IRQL &lt; DISPATCH_LEVEL.",18,null],[13,"NonPagedPoolMustSucceed","","",18,null],[13,"DontUseThisType","","",18,null],[13,"NonPagedPoolCacheAligned","","Nonpaged pool, aligned on processor cache boundaries.",18,null],[13,"PagedPoolCacheAligned","","Paged pool, aligned on processor cache boundaries.",18,null],[13,"NonPagedPoolCacheAlignedMustS","","",18,null],[13,"MaxPoolType","","",18,null],[13,"NonPagedPoolSession","","",18,null],[13,"PagedPoolSession","","",18,null],[13,"NonPagedPoolMustSucceedSession","","",18,null],[13,"DontUseThisTypeSession","","",18,null],[13,"NonPagedPoolCacheAlignedSession","","",18,null],[13,"PagedPoolCacheAlignedSession","","",18,null],[13,"NonPagedPoolCacheAlignedMustSSession","","",18,null],[5,"ExAllocatePoolWithTag","","Allocates pool memory of the specified type and tag.",null,null],[5,"ExFreePoolWithTag","","Deallocates a block of pool memory allocated with the specified tag.",null,null],[5,"ExAllocatePool","","Allocates pool memory of the specified type.",null,null],[5,"ExFreePool","","Deallocates a block of pool memory.",null,null],[0,"rtl","km","NT runtime routines.",null,null],[5,"RtlRandom","km::rtl","Returns a random number that was generated from a given `seed` value in the range `[0..MAXLONG-1]`.",null,null],[5,"RtlRandomEx","","Returns a random number that was generated from a given `seed` value in the range `[0..MAXLONG-1]`.",null,null],[5,"RtlUniform","","A simple uniform random number generator, based on D.H. Lehmer&#39;s 1948 alrogithm.",null,null],[0,"shared","km","Data shared between kernel and user mode.",null,null],[3,"KSYSTEM_TIME","km::shared","Dystem time structure",null,null],[3,"KUSER_SHARED_DATA","","The data shared between kernel and user mode.",null,null],[12,"TickCountLowDeprecated","","",19,null],[12,"TickCountMultiplier","","",19,null],[12,"InterruptTime","","Current 64-bit interrupt time in 100ns units.",19,null],[12,"SystemTime","","Current 64-bit system time in 100ns units.",19,null],[12,"TimeZoneBias","","Current 64-bit time zone bias.",19,null],[12,"ImageNumberLow","","",19,null],[12,"ImageNumberHigh","","",19,null],[12,"NtSystemRoot","","",19,null],[12,"MaxStackTraceDepth","","",19,null],[12,"CryptoExponent","","",19,null],[12,"TimeZoneId","","",19,null],[12,"LargePageMinimum","","",19,null],[12,"Reserved2","","",19,null],[12,"NtProductType","","",19,null],[12,"ProductTypeIsValid","","",19,null],[12,"NtMajorVersion","","",19,null],[12,"NtMinorVersion","","",19,null],[12,"ProcessorFeatures","","",19,null],[12,"Reserved1","","",19,null],[12,"Reserved3","","",19,null],[12,"TimeSlip","","",19,null],[12,"AlternativeArchitecture","","",19,null],[12,"SystemExpirationDate","","",19,null],[12,"SuiteMask","","",19,null],[12,"KdDebuggerEnabled","","True if a kernel debugger is connected/enabled.",19,null],[12,"NXSupportPolicy","","",19,null],[12,"ActiveConsoleId","","",19,null],[12,"DismountCount","","",19,null],[12,"ComPlusPackage","","",19,null],[12,"LastSystemRITEventTickCount","","",19,null],[12,"NumberOfPhysicalPages","","",19,null],[12,"SafeBootMode","","True if the system was booted in safe boot mode.",19,null],[12,"TraceLogging","","",19,null],[12,"TestRetInstruction","","",19,null],[12,"SystemCall","","",19,null],[12,"SystemCallReturn","","",19,null],[12,"SystemCallPad","","",19,null],[12,"TickCount","","The 64-bit tick count.",19,null],[12,"Cookie","","Cookie for encoding pointers system wide.",19,null],[4,"NT_PRODUCT_TYPE","","",null,null],[13,"NtProductWinNt","","",20,null],[13,"NtProductLanManNt","","",20,null],[13,"NtProductServer","","",20,null],[4,"ALTERNATIVE_ARCHITECTURE_TYPE","","",null,null],[13,"StandardDesign","","",21,null],[13,"NEC98x86","","",21,null],[13,"EndAlternatives","","",21,null],[6,"SYSTEMTIME","","System time is a count of 100-nanosecond intervals since January 1, 1601.",null,null],[11,"clone","","",22,{"inputs":[{"name":"ksystem_time"}],"output":{"name":"ksystem_time"}}],[11,"get","","Get reference to the mapped shared data.",19,{"inputs":[],"output":{"name":"kuser_shared_data"}}],[11,"from","","",23,{"inputs":[{"name":"ksystem_time"}],"output":{"name":"self"}}],[0,"string","km","Kernel mode string types.",null,null],[3,"UNICODE_STRING","km::string","A counted Unicode string.",null,null],[12,"Length","","The length in **bytes** of the string stored in `Buffer`.",24,null],[12,"MaximumLength","","The length in **bytes** of `Buffer`.",24,null],[12,"Buffer","","Pointer to a buffer used to contain a string of wide characters.",24,null],[3,"ANSI_STRING","","A counted string used for ANSI strings.",null,null],[12,"Length","","The length in *bytes* of the string stored in `Buffer`.",25,null],[12,"MaximumLength","","The length in bytes of `Buffer`.",25,null],[12,"Buffer","","Pointer to a buffer used to contain a string of characters.",25,null],[5,"RtlIntegerToUnicodeString","","",null,null],[5,"RtlInt64ToUnicodeString","","",null,null],[5,"RtlUnicodeStringToInteger","","",null,null],[5,"RtlUnicodeStringToAnsiString","","",null,null],[5,"RtlUnicodeStringToAnsiSize","","",null,null],[5,"RtlAnsiStringToUnicodeString","","",null,null],[5,"RtlAnsiStringToUnicodeSize","","",null,null],[5,"RtlCompareUnicodeString","","",null,null],[5,"RtlCompareString","","",null,null],[5,"RtlEqualUnicodeString","","",null,null],[5,"RtlEqualString","","",null,null],[5,"RtlFreeAnsiString","","",null,null],[5,"RtlFreeUnicodeString","","",null,null],[6,"AnsiString","","",null,null],[6,"UnicodeString","","",null,null],[6,"CONST_UNICODE_STRING","","",null,null],[6,"CONST_ANSI_STRING","","",null,null],[8,"NativeString","","NT native string types.",null,null],[10,"size","","Size of string in bytes.",26,{"inputs":[{"name":"nativestring"}],"output":{"name":"u16"}}],[10,"max_size","","Size of buffer in bytes.",26,{"inputs":[{"name":"nativestring"}],"output":{"name":"u16"}}],[11,"is_empty","","Check is the string is empty.",26,{"inputs":[{"name":"nativestring"}],"output":{"name":"bool"}}],[11,"size","","",24,{"inputs":[{"name":"unicode_string"}],"output":{"name":"u16"}}],[11,"max_size","","",24,{"inputs":[{"name":"unicode_string"}],"output":{"name":"u16"}}],[11,"default","","",24,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",25,null],[0,"time","km","NT Time routines.",null,null],[5,"QuerySystemTime","km::time","Obtains the current system time.",null,{"inputs":[],"output":{"name":"systemtime"}}],[5,"QueryTickCount","","A count of the interval timer interrupts that have occurred since the system was booted.",null,{"inputs":[],"output":{"name":"i64"}}],[5,"ExSystemTimeToLocalTime","","Converts a GMT system time value to the local system time for the current time zone.",null,null],[14,"KdPrint!","km","Macro to send a message to the kernel debugger.",null,null],[14,"KdPrint_u!","","Macro to send a message to the kernel debugger for unsafe blocks.",null,null],[14,"check_unsafe!","","",null,null]],"paths":[[4,"Status"],[3,"LIST_ENTRY"],[3,"KSPIN_LOCK"],[3,"DISPATCHER_HEADER"],[3,"IO_STATUS_BLOCK"],[4,"KPROCESSOR_MODE"],[4,"DPFLTR_LEVEL"],[4,"DPFLTR_ID"],[3,"DEVICE_OBJECT"],[4,"DEVICE_FLAGS"],[3,"DRIVER_OBJECT"],[4,"EVENT_TYPE"],[3,"IRP"],[3,"_IRP_OVERLAY"],[3,"IO_STACK_LOCATION"],[3,"_IO_STACK_LOCATION_READ"],[4,"IRP_MJ"],[4,"IO_ALLOCATION_ACTION"],[4,"POOL_TYPE"],[3,"KUSER_SHARED_DATA"],[4,"NT_PRODUCT_TYPE"],[4,"ALTERNATIVE_ARCHITECTURE_TYPE"],[3,"KSYSTEM_TIME"],[6,"SYSTEMTIME"],[3,"UNICODE_STRING"],[3,"ANSI_STRING"],[8,"NativeString"]]};
initSearch(searchIndex);
