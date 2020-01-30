import { RawConfig } from '@graphql-codegen/visitor-plugin-common';
export interface JavaResolversPluginRawConfig extends RawConfig {
  /**
   * @name package
   * @type string
   * @description Customize the Java package name. The default package name will be generated according to the output file path.
   *
   * @example
   * ```yml
   * generates:
   *   src/main/java/my-org/my-app/Resolvers.java:
   *     plugins:
   *       - java-resolvers
   *     config:
   *       package: custom.package.name
   * ```
   */
  package?: string;
  /**
   * @name mappers
   * @type Object
   * @description Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.
   * The default value is the values set by `defaultMapper` configuration.
   * You can use a direct path to the package, or use `package#class` syntax to have it imported.
   *
   * @example
   * ```yml
   * generates:
   *   src/main/java/my-org/my-app/Resolvers.java:
   *     plugins:
   *       - java-resolvers
   *     config:
   *       mappers:
   *         User: com.app.models#UserObject
   * ```
   */
  mappers?: {
    [typeName: string]: string;
  };
  /**
   * @name defaultMapper
   * @type string
   * @default Object
   * @description Sets the default mapper value in case it's not specified by `mappers`.
   * You can use a direct path to the package, or use `package#class` syntax to have it imported.
   * The default mapper is Java's `Object`.
   *
   * @example
   * ```yml
   * generates:
   *   src/main/java/my-org/my-app/Resolvers.java:
   *     plugins:
   *       - java-resolvers
   *     config:
   *       defaultMapper: my.app.models.BaseEntity
   * ```
   */
  defaultMapper?: string;
  /**
   * @name className
   * @type string
   * @default Resolvers
   * @description Allow you to customize the parent class name.
   *
   * @example
   * ```yml
   * generates:
   *   src/main/java/my-org/my-app/Resolvers.java:
   *     plugins:
   *       - java-resolvers
   *     config:
   *       className: MyResolvers
   * ```
   */
  className?: string;
  /**
   * @name listType
   * @type string
   * @default Iterable
   * @description Allow you to customize the list type.
   *
   * @example
   * ```yml
   * generates:
   *   src/main/java/my-org/my-app/Resolvers.java:
   *     plugins:
   *       - java-resolvers
   *     config:
   *       listType: Map
   * ```
   */
  listType?: string;
}