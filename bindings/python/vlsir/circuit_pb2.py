# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: circuit.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import utils_pb2 as utils__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rcircuit.proto\x12\rvlsir.circuit\x1a\x0butils.proto\"\x83\x01\n\x07Package\x12\x0e\n\x06\x64omain\x18\x01 \x01(\t\x12&\n\x07modules\x18\x02 \x03(\x0b\x32\x15.vlsir.circuit.Module\x12\x32\n\x0b\x65xt_modules\x18\x03 \x03(\x0b\x32\x1d.vlsir.circuit.ExternalModule\x12\x0c\n\x04\x64\x65sc\x18\n \x01(\t\"\x81\x01\n\x04Port\x12\x0e\n\x06signal\x18\x01 \x01(\t\x12\x30\n\tdirection\x18\x02 \x01(\x0e\x32\x1d.vlsir.circuit.Port.Direction\"7\n\tDirection\x12\t\n\x05INPUT\x10\x00\x12\n\n\x06OUTPUT\x10\x01\x12\t\n\x05INOUT\x10\x02\x12\x08\n\x04NONE\x10\x03\"%\n\x06Signal\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05width\x18\x02 \x01(\x03\"1\n\x05Slice\x12\x0e\n\x06signal\x18\x01 \x01(\t\x12\x0b\n\x03top\x18\x02 \x01(\x03\x12\x0b\n\x03\x62ot\x18\x03 \x01(\x03\"8\n\x06\x43oncat\x12.\n\x05parts\x18\x01 \x03(\x0b\x32\x1f.vlsir.circuit.ConnectionTarget\"z\n\x10\x43onnectionTarget\x12\r\n\x03sig\x18\x01 \x01(\tH\x00\x12%\n\x05slice\x18\x02 \x01(\x0b\x32\x14.vlsir.circuit.SliceH\x00\x12\'\n\x06\x63oncat\x18\x03 \x01(\x0b\x32\x15.vlsir.circuit.ConcatH\x00\x42\x07\n\x05stype\"O\n\nConnection\x12\x10\n\x08portname\x18\x01 \x01(\t\x12/\n\x06target\x18\x02 \x01(\x0b\x32\x1f.vlsir.circuit.ConnectionTarget\"\x98\x01\n\x08Instance\x12\x0c\n\x04name\x18\x01 \x01(\t\x12&\n\x06module\x18\x02 \x01(\x0b\x32\x16.vlsir.utils.Reference\x12&\n\nparameters\x18\x03 \x03(\x0b\x32\x12.vlsir.utils.Param\x12.\n\x0b\x63onnections\x18\x04 \x03(\x0b\x32\x19.vlsir.circuit.Connection\"\xb6\x01\n\x06Module\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\"\n\x05ports\x18\x02 \x03(\x0b\x32\x13.vlsir.circuit.Port\x12&\n\x07signals\x18\x03 \x03(\x0b\x32\x15.vlsir.circuit.Signal\x12*\n\tinstances\x18\x04 \x03(\x0b\x32\x17.vlsir.circuit.Instance\x12&\n\nparameters\x18\x05 \x03(\x0b\x32\x12.vlsir.utils.Param\"\x94\x01\n\x0e\x45xternalModule\x12(\n\x04name\x18\x01 \x01(\x0b\x32\x1a.vlsir.utils.QualifiedName\x12\x0c\n\x04\x64\x65sc\x18\x02 \x01(\t\x12\"\n\x05ports\x18\x03 \x03(\x0b\x32\x13.vlsir.circuit.Port\x12&\n\nparameters\x18\x05 \x03(\x0b\x32\x12.vlsir.utils.Param\"=\n\tInterface\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\"\n\x05ports\x18\n \x03(\x0b\x32\x13.vlsir.circuit.Portb\x06proto3')



_PACKAGE = DESCRIPTOR.message_types_by_name['Package']
_PORT = DESCRIPTOR.message_types_by_name['Port']
_SIGNAL = DESCRIPTOR.message_types_by_name['Signal']
_SLICE = DESCRIPTOR.message_types_by_name['Slice']
_CONCAT = DESCRIPTOR.message_types_by_name['Concat']
_CONNECTIONTARGET = DESCRIPTOR.message_types_by_name['ConnectionTarget']
_CONNECTION = DESCRIPTOR.message_types_by_name['Connection']
_INSTANCE = DESCRIPTOR.message_types_by_name['Instance']
_MODULE = DESCRIPTOR.message_types_by_name['Module']
_EXTERNALMODULE = DESCRIPTOR.message_types_by_name['ExternalModule']
_INTERFACE = DESCRIPTOR.message_types_by_name['Interface']
_PORT_DIRECTION = _PORT.enum_types_by_name['Direction']
Package = _reflection.GeneratedProtocolMessageType('Package', (_message.Message,), {
  'DESCRIPTOR' : _PACKAGE,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Package)
  })
_sym_db.RegisterMessage(Package)

Port = _reflection.GeneratedProtocolMessageType('Port', (_message.Message,), {
  'DESCRIPTOR' : _PORT,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Port)
  })
_sym_db.RegisterMessage(Port)

Signal = _reflection.GeneratedProtocolMessageType('Signal', (_message.Message,), {
  'DESCRIPTOR' : _SIGNAL,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Signal)
  })
_sym_db.RegisterMessage(Signal)

Slice = _reflection.GeneratedProtocolMessageType('Slice', (_message.Message,), {
  'DESCRIPTOR' : _SLICE,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Slice)
  })
_sym_db.RegisterMessage(Slice)

Concat = _reflection.GeneratedProtocolMessageType('Concat', (_message.Message,), {
  'DESCRIPTOR' : _CONCAT,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Concat)
  })
_sym_db.RegisterMessage(Concat)

ConnectionTarget = _reflection.GeneratedProtocolMessageType('ConnectionTarget', (_message.Message,), {
  'DESCRIPTOR' : _CONNECTIONTARGET,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.ConnectionTarget)
  })
_sym_db.RegisterMessage(ConnectionTarget)

Connection = _reflection.GeneratedProtocolMessageType('Connection', (_message.Message,), {
  'DESCRIPTOR' : _CONNECTION,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Connection)
  })
_sym_db.RegisterMessage(Connection)

Instance = _reflection.GeneratedProtocolMessageType('Instance', (_message.Message,), {
  'DESCRIPTOR' : _INSTANCE,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Instance)
  })
_sym_db.RegisterMessage(Instance)

Module = _reflection.GeneratedProtocolMessageType('Module', (_message.Message,), {
  'DESCRIPTOR' : _MODULE,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Module)
  })
_sym_db.RegisterMessage(Module)

ExternalModule = _reflection.GeneratedProtocolMessageType('ExternalModule', (_message.Message,), {
  'DESCRIPTOR' : _EXTERNALMODULE,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.ExternalModule)
  })
_sym_db.RegisterMessage(ExternalModule)

Interface = _reflection.GeneratedProtocolMessageType('Interface', (_message.Message,), {
  'DESCRIPTOR' : _INTERFACE,
  '__module__' : 'circuit_pb2'
  # @@protoc_insertion_point(class_scope:vlsir.circuit.Interface)
  })
_sym_db.RegisterMessage(Interface)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _PACKAGE._serialized_start=46
  _PACKAGE._serialized_end=177
  _PORT._serialized_start=180
  _PORT._serialized_end=309
  _PORT_DIRECTION._serialized_start=254
  _PORT_DIRECTION._serialized_end=309
  _SIGNAL._serialized_start=311
  _SIGNAL._serialized_end=348
  _SLICE._serialized_start=350
  _SLICE._serialized_end=399
  _CONCAT._serialized_start=401
  _CONCAT._serialized_end=457
  _CONNECTIONTARGET._serialized_start=459
  _CONNECTIONTARGET._serialized_end=581
  _CONNECTION._serialized_start=583
  _CONNECTION._serialized_end=662
  _INSTANCE._serialized_start=665
  _INSTANCE._serialized_end=817
  _MODULE._serialized_start=820
  _MODULE._serialized_end=1002
  _EXTERNALMODULE._serialized_start=1005
  _EXTERNALMODULE._serialized_end=1153
  _INTERFACE._serialized_start=1155
  _INTERFACE._serialized_end=1216
# @@protoc_insertion_point(module_scope)
