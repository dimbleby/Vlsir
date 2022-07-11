// source: spice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.vlsir.spice.TranInput');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.vlsir.spice.Control');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.spice.TranInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.spice.TranInput.repeatedFields_, null);
};
goog.inherits(proto.vlsir.spice.TranInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.spice.TranInput.displayName = 'proto.vlsir.spice.TranInput';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.spice.TranInput.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.spice.TranInput.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.spice.TranInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.spice.TranInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.TranInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysisName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tstop: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    tstep: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    icMap: (f = msg.getIcMap()) ? f.toObject(includeInstance, undefined) : [],
    ctrlsList: jspb.Message.toObjectList(msg.getCtrlsList(),
    proto.vlsir.spice.Control.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.spice.TranInput}
 */
proto.vlsir.spice.TranInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.spice.TranInput;
  return proto.vlsir.spice.TranInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.spice.TranInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.spice.TranInput}
 */
proto.vlsir.spice.TranInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTstop(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTstep(value);
      break;
    case 4:
      var value = msg.getIcMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    case 5:
      var value = new proto.vlsir.spice.Control;
      reader.readMessage(value,proto.vlsir.spice.Control.deserializeBinaryFromReader);
      msg.addCtrls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.spice.TranInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.spice.TranInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.spice.TranInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.TranInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysisName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTstop();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTstep();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getIcMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getCtrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vlsir.spice.Control.serializeBinaryToWriter
    );
  }
};


/**
 * optional string analysis_name = 1;
 * @return {string}
 */
proto.vlsir.spice.TranInput.prototype.getAnalysisName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.spice.TranInput} returns this
 */
proto.vlsir.spice.TranInput.prototype.setAnalysisName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double tstop = 2;
 * @return {number}
 */
proto.vlsir.spice.TranInput.prototype.getTstop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vlsir.spice.TranInput} returns this
 */
proto.vlsir.spice.TranInput.prototype.setTstop = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double tstep = 3;
 * @return {number}
 */
proto.vlsir.spice.TranInput.prototype.getTstep = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vlsir.spice.TranInput} returns this
 */
proto.vlsir.spice.TranInput.prototype.setTstep = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * map<string, double> ic = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.vlsir.spice.TranInput.prototype.getIcMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.vlsir.spice.TranInput} returns this
 */
proto.vlsir.spice.TranInput.prototype.clearIcMap = function() {
  this.getIcMap().clear();
  return this;};


/**
 * repeated Control ctrls = 5;
 * @return {!Array<!proto.vlsir.spice.Control>}
 */
proto.vlsir.spice.TranInput.prototype.getCtrlsList = function() {
  return /** @type{!Array<!proto.vlsir.spice.Control>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.spice.Control, 5));
};


/**
 * @param {!Array<!proto.vlsir.spice.Control>} value
 * @return {!proto.vlsir.spice.TranInput} returns this
*/
proto.vlsir.spice.TranInput.prototype.setCtrlsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vlsir.spice.Control=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.spice.Control}
 */
proto.vlsir.spice.TranInput.prototype.addCtrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vlsir.spice.Control, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.spice.TranInput} returns this
 */
proto.vlsir.spice.TranInput.prototype.clearCtrlsList = function() {
  return this.setCtrlsList([]);
};


