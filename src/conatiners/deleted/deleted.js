/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class DeletedMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedMail: {} }
        this.getHeaderCotent = this.getHeaderCotent.bind(this);
        this.getContent = this.getContent.bind(this);
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    getContent(mail) {
        this.setState({ selectedMail: mail });
    }
    getHeaderCotent(mail) {
        return (
            <Grid container alignItems="center" style={{ fontSize: '16px' }} onClick={() => this.getContent(mail)}>
                <Grid item xs={12}>
                    <Grid container justify={'center'}>
                        {mail.unread ? <span style={{ color: 'blue' }}>{mail.subject}</span> : <span>{mail.subject}</span>}
                    </Grid>
                </Grid>
            </Grid>
        )

    }


    render() {
        const { EmailDetails } = this.props;
        console.log(EmailDetails, 'emailDetails');
        return (
            <Grid container >
                <Grid item xs={12} md={3}>
                    <div style={{ borderRight: '1px solid black', minHeight: '685px' }}>
                        {EmailDetails && EmailDetails.length > 0 && EmailDetails.map((mail) => {
                            return (
                                <Accordion style={{ width: '100 %' }} expanded={false}>
                                    <AccordionSummary
                                    >
                                        {this.getHeaderCotent(mail)}
                                    </AccordionSummary>
                                </Accordion>
                            )
                        })}
                        {EmailDetails && EmailDetails.length === 0 &&
                            <p style={{color:'grey'}}>
                                You dont have any deleted Mail
                             </p>
                        }

                    </div>
                </Grid>
                {Object.keys(this.state.selectedMail).length > 0 && <Grid item xs={12} md={9}>
                    <Grid container justify={'center'} >
                        <Grid item xs={11}>
                            <Card >
                                <CardContent>

                                    <Typography variant="h5" component="h2">
                                        {this.state.selectedMail.subject}
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" component="p">
                                        {this.state.selectedMail.content && this.state.selectedMail.content.length === 0 ? 'select an item to read' : this.state.selectedMail.content}
                                        <br />
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Grid>}
            </Grid>
        );
    }
}

const mapStateToProps = ({
    DeletedMailReducer
}) => ({
    EmailDetails: DeletedMailReducer.emailDetails
});
export default withRouter(connect(mapStateToProps, {})(DeletedMail));