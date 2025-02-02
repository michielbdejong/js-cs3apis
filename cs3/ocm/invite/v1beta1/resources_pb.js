// source: cs3/ocm/invite/v1beta1/resources.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_identity_user_v1beta1_resources_pb);
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');
goog.object.extend(proto, cs3_types_v1beta1_types_pb);
goog.exportSymbol('proto.cs3.ocm.invite.v1beta1.InviteToken', null, global);
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
proto.cs3.ocm.invite.v1beta1.InviteToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.ocm.invite.v1beta1.InviteToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.ocm.invite.v1beta1.InviteToken.displayName = 'proto.cs3.ocm.invite.v1beta1.InviteToken';
}



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
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.ocm.invite.v1beta1.InviteToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.ocm.invite.v1beta1.InviteToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: (f = msg.getUserId()) && cs3_identity_user_v1beta1_resources_pb.UserId.toObject(includeInstance, f),
    expiration: (f = msg.getExpiration()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cs3.ocm.invite.v1beta1.InviteToken}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.ocm.invite.v1beta1.InviteToken;
  return proto.cs3.ocm.invite.v1beta1.InviteToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.ocm.invite.v1beta1.InviteToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.ocm.invite.v1beta1.InviteToken}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = new cs3_identity_user_v1beta1_resources_pb.UserId;
      reader.readMessage(value,cs3_identity_user_v1beta1_resources_pb.UserId.deserializeBinaryFromReader);
      msg.setUserId(value);
      break;
    case 3:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.ocm.invite.v1beta1.InviteToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.ocm.invite.v1beta1.InviteToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_identity_user_v1beta1_resources_pb.UserId.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cs3.identity.user.v1beta1.UserId user_id = 2;
 * @return {?proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.getUserId = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.UserId} */ (
    jspb.Message.getWrapperField(this, cs3_identity_user_v1beta1_resources_pb.UserId, 2));
};


/** @param {?proto.cs3.identity.user.v1beta1.UserId|undefined} value */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.setUserId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.clearUserId = function() {
  this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp expiration = 3;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.getExpiration = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 3));
};


/** @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.setExpiration = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.clearExpiration = function() {
  this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.cs3.ocm.invite.v1beta1.InviteToken.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.cs3.ocm.invite.v1beta1);
