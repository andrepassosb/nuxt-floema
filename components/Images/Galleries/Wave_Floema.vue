<template>
  <div class="collections__gallery">
    <div class="collections_gallery_wrapper">
      <template data-each="collection, index in collections">
        <template data-each="product in collection.data.products"
          ><a
            class="collections_gallery_link"
            data-index="index"
            href="Link(product.products_product)"
          >
            <figure class="collections_gallerymedia" data-index="index">
              <img
                class="collectionsgallerymedia_image"
                alt="product.products_product.data.image.alt"
                data-src="product.products_product.data.image.url"
                data-model-src="product.products_product.data.model.url"
              /></figure></a
        ></template>
      </template>
    </div>
  </div>
</template>