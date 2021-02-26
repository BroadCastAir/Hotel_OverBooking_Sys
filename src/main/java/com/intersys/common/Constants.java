package com.intersys.common;

/**
 * @BelongsProject: sunac-consumer
 * @Author: liushuangk
 * @CreateTime：2021-01-05 10:28
 * @Description: 常量
 **/
public class Constants {
    public static final String STRING_TYPE = "string";
    public static final String INT32_TYPE = "int32";
    public static final String INT8_TYPE = "int8";
    public static final String INT16_TYPE = "int16";
    public static final String INT64_TYPE = "int64";
    public static final String FLOAT32_TYPE = "float32";
    public static final String FLOAT64_TYPE = "float64";
    public static final String BOOLEAN_TYPE = "boolean";
    public static final String BYTES_TYPE = "bytes";
    public static final String ARRAY_TYPE = "array";
    public static final String STRUCT_TYPE = "struct";

    public static final String DEBEZIUM_DATE = "io.debezium.time.Date";
    public static final String DEBEZIUM_TIMESTAMP = "io.debezium.time.Timestamp";
    public static final String DEBEZIUM_DECIMAL = "org.apache.kafka.connect.data.Decimal";

    public static final String EPOCH_DATE = "1970-01-01";
    public static final String EPOCH_DATETIME = "1970-01-01 01:00:00";
    public static final String OP_FLAG_I="c";
    public static final String OP_FLAG_D="d";
    public static final String OP_FLAG_U="u";
}
