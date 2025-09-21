import type { Schema, Struct } from '@strapi/strapi';

export interface HighlightTagsHighlightTag extends Struct.ComponentSchema {
  collectionName: 'components_highlight_tags_highlight_tags';
  info: {
    displayName: 'highlight_tag';
    icon: 'priceTag';
  };
  attributes: {
    position: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ServicesServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_services_service_cards';
  info: {
    displayName: 'ServiceCard';
    icon: 'handHeart';
  };
  attributes: {
    service_description: Schema.Attribute.JSON;
    service_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    service_title: Schema.Attribute.String;
  };
}

export interface StatsStat extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats';
  info: {
    displayName: 'stat';
    icon: 'seed';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'highlight-tags.highlight-tag': HighlightTagsHighlightTag;
      'services.service-card': ServicesServiceCard;
      'stats.stat': StatsStat;
    }
  }
}
