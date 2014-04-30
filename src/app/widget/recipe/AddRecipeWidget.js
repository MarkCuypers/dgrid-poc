define(["dojo/_base/declare", "dojo/require", "dojo/_base/lang", "dojox/mvc/at",
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dojo/store/Memory", "dijit/form/ComboBox",
    "dojo/text!./addRecipeWidget.html",
    "app-viewmodel/Recipe",

    "xstyle/css!./addRecipeWidget.css", "dijit/form/TextBox", "dijit/form/Button"],
  function (declare, require, lang, at,
            _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
            Memory, ComboBox,
            template,
            Recipe) {

    var recipeCategories = new Memory({
      idProperty: "name",
      data: [
        {name: "Dessert"},
        {name: "Hoofdgerecht"},
        {name: "Voorgerecht"},
        {name: "Hapjes"}
      ]
    });

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

      baseClass: "addRecipeWidget",

      templateString: template,

      target: new Recipe(),

      recipeToSave: null,

      _categoryComboBox: null,

      postCreate: function() {
        this.inherited(arguments);
        var self = this;
        self._categoryComboBox.set("store", recipeCategories);
        self._categoryComboBox.set("onChange", function(value) {
          self.target.set("category", value);
        });
      },

      startup: function() {
        this.inherited(arguments);
        var self = this;
        self._categoryComboBox.startup();
      },

      _save: function() {
        this.set("recipeToSave", this._copyTarget());
        this._resetForm();
      },

      _copyTarget: function() {
        return new Recipe({name: this.target.get("name"), category: this.target.get("category")});
      },

      _resetForm: function() {
        this.target.set("name", "");
        this.target.set("category", "");
        this._categoryComboBox.set("value", null);
        this.recipeToSave = null;
      }

    });

  }
);
