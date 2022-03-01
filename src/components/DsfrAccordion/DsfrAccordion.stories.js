import DsfrAccordion from './DsfrAccordion.vue'

export default {
  component: DsfrAccordion,
  title: 'Composants/Accordéon - DsfrAccordion',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Intitulé de l’accordéon',
    },
    expanded: {
      control: 'boolean',
      description: 'Spécifie si l’accordéon est déplié (`true`) ou non (`false`, défaut)',
    },
  },
}

export const Accordeon = (args) => ({
  components: {
    DsfrAccordion,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrAccordion
      :title="title"
      :expanded="expanded"
    >
      Contenu de l’accordéon
    </DsfrAccordion>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Accordeon.args = {
  dark: false,
  title: 'Un titre d’accordéon',
  expanded: false,
}

export const AccordeonDansUnAccordeon = (args) => ({
  components: {
    DsfrAccordion,
  },

  data () {
    return {
      ...args,
      titleSub: 'Intitulé du sous-accordéon',
    }
  },

  template: `
    <DsfrAccordion
      :title="title"
      :expanded="expanded"
    >
      <DsfrAccordion
        :title="titleSub"
        :expanded="false"
      >
        Contenu de l’accordéon
      </DsfrAccordion>
    </DsfrAccordion>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

})
AccordeonDansUnAccordeon.args = {
  dark: false,
  title: 'Un titre d’accordéon',
  expanded: false,
}
