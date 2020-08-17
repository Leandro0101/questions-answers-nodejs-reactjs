import * as Yup from 'yup';

export default Yup.object().shape({
    title: Yup.string().required("Prencha este campo").min(7, "Título muito curto").max(50, "Título muito longo"),
    description: Yup.string().required("Prencha este campo").min(10, "Descrição muito curta").max(300, "Descrição muito longa"),
});