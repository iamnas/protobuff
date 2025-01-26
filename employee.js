/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Employee = (function() {

    /**
     * Properties of an Employee.
     * @exports IEmployee
     * @interface IEmployee
     * @property {number|null} [id] Employee id
     * @property {string|null} [name] Employee name
     * @property {number|null} [salary] Employee salary
     */

    /**
     * Constructs a new Employee.
     * @exports Employee
     * @classdesc Represents an Employee.
     * @implements IEmployee
     * @constructor
     * @param {IEmployee=} [properties] Properties to set
     */
    function Employee(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Employee id.
     * @member {number} id
     * @memberof Employee
     * @instance
     */
    Employee.prototype.id = 0;

    /**
     * Employee name.
     * @member {string} name
     * @memberof Employee
     * @instance
     */
    Employee.prototype.name = "";

    /**
     * Employee salary.
     * @member {number} salary
     * @memberof Employee
     * @instance
     */
    Employee.prototype.salary = 0;

    /**
     * Creates a new Employee instance using the specified properties.
     * @function create
     * @memberof Employee
     * @static
     * @param {IEmployee=} [properties] Properties to set
     * @returns {Employee} Employee instance
     */
    Employee.create = function create(properties) {
        return new Employee(properties);
    };

    /**
     * Encodes the specified Employee message. Does not implicitly {@link Employee.verify|verify} messages.
     * @function encode
     * @memberof Employee
     * @static
     * @param {IEmployee} message Employee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Employee.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.salary != null && Object.hasOwnProperty.call(message, "salary"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.salary);
        return writer;
    };

    /**
     * Encodes the specified Employee message, length delimited. Does not implicitly {@link Employee.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Employee
     * @static
     * @param {IEmployee} message Employee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Employee.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Employee message from the specified reader or buffer.
     * @function decode
     * @memberof Employee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Employee} Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Employee.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Employee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.salary = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Employee message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Employee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Employee} Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Employee.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Employee message.
     * @function verify
     * @memberof Employee
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Employee.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.salary != null && message.hasOwnProperty("salary"))
            if (typeof message.salary !== "number")
                return "salary: number expected";
        return null;
    };

    /**
     * Creates an Employee message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Employee
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Employee} Employee
     */
    Employee.fromObject = function fromObject(object) {
        if (object instanceof $root.Employee)
            return object;
        var message = new $root.Employee();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.salary != null)
            message.salary = Number(object.salary);
        return message;
    };

    /**
     * Creates a plain object from an Employee message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Employee
     * @static
     * @param {Employee} message Employee
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Employee.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.salary = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.salary != null && message.hasOwnProperty("salary"))
            object.salary = options.json && !isFinite(message.salary) ? String(message.salary) : message.salary;
        return object;
    };

    /**
     * Converts this Employee to JSON.
     * @function toJSON
     * @memberof Employee
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Employee.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Employee
     * @function getTypeUrl
     * @memberof Employee
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Employee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Employee";
    };

    return Employee;
})();

$root.EmployeeList = (function() {

    /**
     * Properties of an EmployeeList.
     * @exports IEmployeeList
     * @interface IEmployeeList
     * @property {Array.<IEmployee>|null} [employees] EmployeeList employees
     */

    /**
     * Constructs a new EmployeeList.
     * @exports EmployeeList
     * @classdesc Represents an EmployeeList.
     * @implements IEmployeeList
     * @constructor
     * @param {IEmployeeList=} [properties] Properties to set
     */
    function EmployeeList(properties) {
        this.employees = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EmployeeList employees.
     * @member {Array.<IEmployee>} employees
     * @memberof EmployeeList
     * @instance
     */
    EmployeeList.prototype.employees = $util.emptyArray;

    /**
     * Creates a new EmployeeList instance using the specified properties.
     * @function create
     * @memberof EmployeeList
     * @static
     * @param {IEmployeeList=} [properties] Properties to set
     * @returns {EmployeeList} EmployeeList instance
     */
    EmployeeList.create = function create(properties) {
        return new EmployeeList(properties);
    };

    /**
     * Encodes the specified EmployeeList message. Does not implicitly {@link EmployeeList.verify|verify} messages.
     * @function encode
     * @memberof EmployeeList
     * @static
     * @param {IEmployeeList} message EmployeeList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmployeeList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.employees != null && message.employees.length)
            for (var i = 0; i < message.employees.length; ++i)
                $root.Employee.encode(message.employees[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EmployeeList message, length delimited. Does not implicitly {@link EmployeeList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmployeeList
     * @static
     * @param {IEmployeeList} message EmployeeList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmployeeList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmployeeList message from the specified reader or buffer.
     * @function decode
     * @memberof EmployeeList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EmployeeList} EmployeeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmployeeList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EmployeeList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.employees && message.employees.length))
                        message.employees = [];
                    message.employees.push($root.Employee.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EmployeeList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmployeeList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmployeeList} EmployeeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmployeeList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmployeeList message.
     * @function verify
     * @memberof EmployeeList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmployeeList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.employees != null && message.hasOwnProperty("employees")) {
            if (!Array.isArray(message.employees))
                return "employees: array expected";
            for (var i = 0; i < message.employees.length; ++i) {
                var error = $root.Employee.verify(message.employees[i]);
                if (error)
                    return "employees." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EmployeeList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EmployeeList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EmployeeList} EmployeeList
     */
    EmployeeList.fromObject = function fromObject(object) {
        if (object instanceof $root.EmployeeList)
            return object;
        var message = new $root.EmployeeList();
        if (object.employees) {
            if (!Array.isArray(object.employees))
                throw TypeError(".EmployeeList.employees: array expected");
            message.employees = [];
            for (var i = 0; i < object.employees.length; ++i) {
                if (typeof object.employees[i] !== "object")
                    throw TypeError(".EmployeeList.employees: object expected");
                message.employees[i] = $root.Employee.fromObject(object.employees[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EmployeeList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EmployeeList
     * @static
     * @param {EmployeeList} message EmployeeList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EmployeeList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.employees = [];
        if (message.employees && message.employees.length) {
            object.employees = [];
            for (var j = 0; j < message.employees.length; ++j)
                object.employees[j] = $root.Employee.toObject(message.employees[j], options);
        }
        return object;
    };

    /**
     * Converts this EmployeeList to JSON.
     * @function toJSON
     * @memberof EmployeeList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EmployeeList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EmployeeList
     * @function getTypeUrl
     * @memberof EmployeeList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EmployeeList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EmployeeList";
    };

    return EmployeeList;
})();

module.exports = $root;
