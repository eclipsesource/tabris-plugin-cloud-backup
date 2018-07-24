# Tabris.js Cloud Backup Plugin

`tabris-plugin-cloud-backup` configures the backup of [`localStorage`](http://docs.tabris.com/latest/api/localStorage.html#localstorage) to the device platform's backup cloud.

## Integrating the plugin

The Tabris.js website provides detailed information on how to [integrate custom plugins](https://tabrisjs.com/documentation/latest/build#adding-plugins) in your Tabris.js app.

### Add the plugin to your project

The plugin should be added as an entry in the apps `config.xml` file:

```xml
<plugin name="tabris-plugin-cloud-backup" spec="1.0.0">
  <variable name="ENABLE_CLOUD_BACKUP" value="false" />
</plugin>
```

To fetch the latest development version use the GitHub url:

```xml
<plugin name="tabris-plugin-cloud-backup" spec="https://github.com/eclipsesource/tabris-plugin-cloud-backup.git">
  <variable name="ENABLE_CLOUD_BACKUP" value="false" />
</plugin>
```

## Documentation

Set the plugin variable `ENABLE_CLOUD_BACKUP` to `true` to enable cloud backup or to `false` to disable it.

## Compatibility

Compatible with [Tabris.js](https://www.npmjs.com/package/tabris) 2.5.x.

## Copyright

Published under the terms of the [BSD 3-Clause License](LICENSE).
