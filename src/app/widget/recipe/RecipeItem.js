define(["dojo/_base/declare", "dojo/_base/lang", "dojo/on", "dojo/dom-construct",
    "dojo/_base/fx",
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./recipeItem.html",

    "dijit/form/Button",
    "xstyle/css!./recipeItem.css"],
  function (declare, lang, on, domConstruct,
            fx,
            _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

      baseClass: "recipeItem",

      templateString: template,

      onDelete: null,

      recipe: null,

      postCreate: function () {
        this.inherited(arguments);
        var self = this;
      },

      startup: function() {
        this.inherited(arguments);
        var fadeArgs = {
          node: this.domNode
        };
        fx.fadeIn(fadeArgs).play();
      },

      _delete: function() {
        if (this.onDelete) {
          this.onDelete(this.recipe);
        }
      }

    });

  }
);
