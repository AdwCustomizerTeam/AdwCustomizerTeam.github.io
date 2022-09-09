import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/welcome.png').default,
    description: (
      <Translate id="homepage.features.1">
        Gradience offer a simple way to customize
        any colours of Adwaita.
      </Translate>
    ),
  },
  {
    title: 'Material Color',
    image: require('@site/static/img/monet.png').default,
    description: (
      <Translate id="homepage.features.2">
        With Gradience, you can generate your own preset from your background using Material You.
      </Translate>
    ),
  },
  {
    title: 'More than Adwaita',
    image: require('@site/static/img/plugins.png').default,
    description: (
      <Translate id="homepage.features.3">
        Extend Gradience with plugins and customize GDM, Firefox Gnome, GNOME Shell...
        You can also create your own plugin for customizing everything you want.
      </Translate>
    ),
  },
];

function Feature({Svg, title, image, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
