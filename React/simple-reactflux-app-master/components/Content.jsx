import React from 'react'
import Button from './Button.jsx';
import List from './List.jsx'
import AppActions from '../lib/AppActions';
import AppStore from '../lib/AppStore'


class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [], articlesApproved: [], message: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onAfterSubmit = this.onAfterSubmit.bind(this);
        this.onAfterRemove = this.onAfterRemove.bind(this);
    }

    onSubmit() {
       var newArticleInput = this.newArticle;
       AppActions.submitArticle(newArticleInput.value);
       newArticleInput.value = '';
    }
    
    onRemove(key) {
        AppActions.removeArticle(key)       
    }

    componentDidMount() {
        AppStore.addChangeListener('STORE_SUBMIT_ARTICLE', this.onAfterSubmit);
        AppStore.addChangeListener('STORE_REMOVE_ARTICLE', this.onAfterRemove);
    }

    onAfterRemove() {
        this.listArticles()
    }


    onAfterSubmit() {
         this.listArticles()
    }

    listArticles()
    {
        let usermessage = ''

        if (this.state.articles.length > 9) {
            usermessage = 'You have exceeded the number of articles you can submit,You cannot add more articles'
        }

        this.setState({
            articles: AppStore.getAll(),
            articlesApproved: AppStore.getApproved(),
            message: usermessage
        })
    }

    componentWillUnmount() {
        AppStore.removeChangeListener('STORE_SUBMIT_ARTICLE', this.onChange)
        AppStore.removeChangeListener('STORE_REMOVE_ARTICLE', this.onRemove)
    }

    render() {
        var simpleContent =
            <div>
                {this.props.text}
                <br />
                Enter text : 
                <input 
                    type="text" 
                    ref={(input) => this.newArticle = input} />
                <Button handleClick={this.onSubmit} text="SUBMIT" />
                <br />
                <List 
                    articles={this.state.articles} 
                    listHeader="Submitted Articles" 
                    handleRemove = {this.onRemove}
                />
                {this.state.message}
                <List 
                    articles={this.state.articlesApproved} 
                    listHeader="Approval Status" 
                    handleRemove = {this.onRemove}
                />
            </div>;

        return simpleContent;
    }

}

export default Content;