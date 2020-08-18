import React from 'react';
import './styles.css';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import Button from '../../components/Button';
import { Formik, Field, Form } from 'formik';
import api from '../../services/api';
import schema from './schema';

const Question = (props) => {
    const onSubmit = async (values, {resetForm})=>{
        await api.post('ask', values);
        resetForm({
            values: ""
        })
    }
    return (
        <div className="container" id="container-question">
            <h5 className="text-white">Envie sua dúvida <RiQuestionAnswerLine /></h5>
            <div className="card" id="card-question-single">
                <div className="card-body" id="card-question-body">
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={{
                            title: '',
                            description: '',                        
                        }}
                        validationSchema={schema}
                        render={({ values, errors }) => (
                            <Form>
                                <div className="form-group">
                                    <label className="text-white">Título</label>
                                    <Field type="text" className="form-control" name="title" value={values.title} />
                                    {errors.title && (
                                        <span>{errors.title}</span>
                                    )}
                                </div>
                                <div className="form-group ">
                                    <label className="text-white">Descrição</label>
                                    <Field className="form-control" name="description" value={values.description} />
                                    {errors.description && (
                                        <span>{errors.description}</span>
                                    )}
                                </div>
                                <div className="form-group ">
                                    <Button type="submit" name="Enviar" displayIconView="d-none" displayIconQuestion="d-none" className="btn-question" />                                    
                                </div>
                            </Form>
                        )}
                    />

                </div>
            </div>
        </div>
    )
}

export default Question;