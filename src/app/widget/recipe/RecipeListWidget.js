define(["dojo/_base/declare", "dojo/_base/lang", "dojo/on", "dojo/dom-construct", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dojo/store/Observable", "dojo/store/Memory", "dgrid/OnDemandList", "put-selector/put",
    "./RecipeItem",
    "dojo/text!./recipeListWidget.html", "xstyle/css!./recipeListWidget.css"],
  function (declare, lang, on, domConstruct, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Observable, Memory, OnDemandList, put, RecipeItem, template) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

      baseClass: "recipeListWidget",

      templateString: template,

      _recipeListNode: null,

      recipes: new Observable(new Memory({idProperty: "name"})),

      postCreate: function () {
        this.inherited(arguments);
        var self = this;
        var grid = new OnDemandList({
          store: self.recipes,
          renderRow: lang.hitch(self, self.renderRecipe),
          removeRow: lang.hitch(self, self.removeRecipe)
        }, self._recipeListNode);
      },

      renderRecipe: function (/*Recipe*/ recipe) {
        var recipeItem = new RecipeItem({
          recipe: recipe,
          onDelete: lang.hitch(this, "_deleteRecipe", recipe)
        });
        recipeItem.startup();
        var node = recipeItem.domNode;
        node.RECIPE_OBJECT = recipeItem;
        return node;
      },

      removeRecipe: function(recipeNode) {
        var recipeItem = recipeNode.RECIPE_OBJECT;
        recipeItem.destroyRecursive();
        recipeItem = null;
      },

      setRecipes: function (/*Array*/ recipesArray) {
        var self = this;
        self.recipes.setData([]);
        recipesArray.forEach(function (recipe) {
          self.recipes.add(recipe);
        });
      },

      addRecipe: function (/*Recipe*/ recipe) {
        this.recipes.add(recipe);
      },

      _deleteRecipe: function (/*Recipe*/ recipe) {
        this.recipes.remove(recipe.get("name"));
      }

    });

  }
);
